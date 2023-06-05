import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

export default function FormCliente (){
	const { state } = useLocation();

	const [idProduto, setIdProduto] = useState();
	const [descricao, setDescricao] = useState();
	const [codigo, setCodigo] = useState();
	const [titulo, setTitulo] = useState();
	const [valorUnitario, setValorUnitario] = useState();
	const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
	const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();


	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get(ENDERECO_API + "api/produto/" + state.id)
			.then((response) => {
				setIdProduto(response.data.id)
				setDescricao(response.data.descricao)
				setCodigo(response.data.codigo)
				setTitulo(response.data.titulo)
				setValorUnitario(response.data.valorUnitario)
				setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
				setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
			})
		}
		
	}, [state])

	function salvar ()  {

		let ProdutoRequest = {

			codigo: codigo,
			titulo: titulo,
			descricao: descricao,
			valorUnitario: valorUnitario,
			tempoEntregaMinimo: tempoEntregaMinimo,
			tempoEntregaMaximo: tempoEntregaMaximo
		}

	
	
		
		axios.post("http://localhost:8082/api/produto", ProdutoRequest)
		.then((response) => {
			console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o produto.')
		}) 
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
										maxLength="100" placeholder="Informe o título do produto"
										value={titulo}
										onChange={e => setTitulo( e.target.value)}
									/>

									<Form.Input
                                        required
										fluid
										label='Código do Produto' placeholder="Informe o código do produto"
										 value={codigo}
										onChange={e => setCodigo( e.target.value)}
									>
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

									<Form.TextArea
										fluid
										label='Descrição'
                                        width={16}
                                        placeholder="Informe a descrição do produto"
										value={descricao}
										onChange={e => setDescricao( e.target.value)}
									>
									</Form.TextArea>
                                    </Form.Group>

                                    <Form.Group>  
                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        width={7}
										value={valorUnitario}
										onChange={e => setValorUnitario(e.target.value)}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        placeholder="30"
                                        width={5}
										value={tempoEntregaMinimo}
										onChange={e => setTempoEntregaMinimo(e.target.value)}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        placeholder='40'
                                        width={5}
										value={tempoEntregaMaximo}
										onChange={e => setTempoEntregaMaximo(e.target.value)}
                                    >

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
									<Link to={'/list-produto'}>Voltar</Link>
								</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={() => salvar()}
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

