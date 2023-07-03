import axios from "axios";
import React, {useState, useEffect}from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, FormGroup, Icon } from 'semantic-ui-react';

export default function FormProduto() {


	
	const { state } = useLocation();
	const [idProduto, setIdProduto] = useState();
	const [codigo, setCodigo] = useState();
	const [titulo, setTitulo] = useState();
	const [descricao, setDescricao] = useState();
	const [valorUnitario, setValorUnitario] = useState();
	const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
	const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
	const [listaCategoria, setListaCategoria] = useState([]);
	const [idCategoria, setIdCategoria] = useState();
 


	useEffect(() => {
		if (state != null && state.id != null) {
			axios.get("http://localhost:8082/api/produto/" + state.id)
				 .then((response) => {
						   setIdProduto(response.data.id)
						   setCodigo(response.data.codigo)
						   setTitulo(response.data.titulo)
						   setDescricao(response.data.descricao)
						   setValorUnitario(response.data.valorUnitario)
						   setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
						   setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
						   setIdCategoria(response.data.categoria.id)
			})
		}

		axios.get("http://localhost:8082/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ 
			text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

}, [state])


	
function salvar () {

	let produtoRequest = {

		idCategoria: idCategoria,
		codigo: codigo,
		titulo: titulo,
		descricao: descricao,
		valorUnitario: valorUnitario,
		tempoEntregaMinimo: tempoEntregaMinimo,
		tempoEntregaMaximo: tempoEntregaMaximo,
	}

	if (idProduto != null) { //Alteração:
		axios.put("http://localhost:8082/api/produto/" + idProduto, produtoRequest)
		.then((response) => { console.log('Produto alterado com sucesso.') })
		.catch((error) => { console.log('Erro ao alter um produto.') })
	} else { //Cadastro:
		axios.post("http://localhost:8082/api/produto/", produtoRequest)
		.then((response) => { console.log('Produto cadastrado com sucesso.') })
		.catch((error) => { console.log('Erro ao incluir o produto.') })
	}

}

	
 
        return(
            <div>

                <div style={{marginTop: '3%'}}>
						<Container textAlign='justified' >

					{ idProduto === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{ idProduto != undefined &&
						<h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

					<Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Título'
										maxLength="100"
                                        placeholder="Informe o título do produto"
										value={titulo}
										onChange={e =>setTitulo(e.target.value)}
									/>
									<Form.Select
									required
									fluid
									tabIndex='3'
									placeholder='Selecione'
									label='Categoria'
									options={listaCategoria}
									value={idCategoria}
									onChange={(e,{value}) => {
										setIdCategoria(value)
									}}
								/>


									<Form.Input
                                        required
										fluid
										label='Código do produto'>
										<InputMask 
										mask="9999-9999"
										value={codigo}
										onChange={e => setCodigo(e.target.value)}/> 
									</Form.Input>

								</Form.Group>
								
                                <FormGroup>
										<Form.TextArea width="16" 
										label='Descrição' 
										placeholder='informe a descrição do produto' 
										value={descricao}
										onChange={e => setDescricao(e.target.value)}/>

                                </FormGroup>
								<Form.Group>
                            
                                    
									<Form.Input
                                        required
										fluid
										label='Valor unitário'

                                        width={6}>
										<InputMask 
										mask="99.99"
										value={valorUnitario}
										onChange={e => setValorUnitario(e.target.value)} /> 

                                        

									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        width={6}

                                    >
                                        <InputMask 
                                            mask="99" 
                                            maskChar={null}
                                            placeholder="Ex: 30"
											value={tempoEntregaMinimo}
											onChange={e => setTempoEntregaMinimo( e.target.value)}
                                        /> 

    
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99" 
                                            maskChar={null}
                                            placeholder="Ex: 40"
											value={tempoEntregaMaximo}
										onChange={e => this.setTempoEntregaMaximo(e.target.value)}

                                        /> 

                                        

                                    </Form.Input>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										
										>
										<Icon name='reply' />
										<Link to='/list-produto'>Voltar</Link>
										
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={() => salvar ()}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}


