import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

export default function FormComprador () {

	const { state } = useLocation();

	
	const [idComprador, setIdComprador] = useState();
	const [nome, setNome] = useState();
	const [comissao, setComissao] = useState();
	const [enderecoComercial, setEnderecoComercial] = useState();
	const [enderecoResidencial, setEnderecoResidencial] = useState();
	const [trabalhoHomeOffice, setTrabalhoHomeOffice] = useState();
	const [qtdComprasMediasMes, setQtdComprasMediasMes] = useState();
	const [contratadoEm, setContratadoEm] = useState();

	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get(ENDERECO_API + "api/comprador/" + state.id)
			.then((response) => {
				setIdComprador(response.data.id)
				setNome(response.data.nome)
				setComissao(response.data.comissao)
				setEnderecoComercial(response.data.enderecoComercial)
				setEnderecoResidencial(response.data.enderecoResidencial)
				setTrabalhoHomeOffice(response.data.trabalhoHomeOffice)
				setQtdComprasMediasMes(response.data.qtdComprasMediasMes)
				setContratadoEm(response.data.contratadoEm)
			})
		}
		
	}, [state])

	function salvar() {

		let compradorRequest = {

			nome: nome,
			comissao: comissao,
			enderecoComercial: enderecoComercial,
			enderecoResidencial: enderecoResidencial,
			trabalhoHomeOffice: trabalhoHomeOffice,
			qtdComprasMediasMes: qtdComprasMediasMes,
			contratadoEm: contratadoEm
		}

		if (idComprador != null) { //Alteração:

			axios.put(ENDERECO_API + "api/comprador/" + idComprador, compradorRequest)
			.then((response) => { console.log('comprador alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar um comprador.') })

		} else { //Cadastro:
			
			axios.post(ENDERECO_API + "api/comprador", compradorRequest)
			.then((response) => { console.log('comprador cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o comprador.') })
		}
	 }

    
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Comprador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome'
										maxLength="100"
                                        width={7}
										value={nome}
										onChange={e => setNome(e.target.value)}
									/>

                                    <Form.Input
										fluid
										label='Valor de Comissão'
                                        width={4}
										value={comissao}
										onChange={e => setComissao(e.target.value)}
									/>

                                    <Form.Input
										fluid
										label='QTD Compras em Média no Mês'
                                        width={4}
										value={qtdComprasMediasMes}
										onChange={e => setQtdComprasMediasMes(e.target.value)}
									/>

                                    <Form.Input
                                      	fluid
										  label='Contratado em'
										  width={6}
									  >
										  <InputMask 
											  mask="99/99/9999" 
											  maskChar={null}
											  placeholder="Ex: 20/03/1985"
											  value={contratadoEm}
											  onChange={e => setContratadoEm(e.target.value)}
										  /> 
                                    </Form.Input>

								</Form.Group>

                                <Form.Input
                                    fluid
                                    label='Endereço Residencial'
                                    value={enderecoResidencial}
                                    onChange={e => setEnderecoResidencial(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Endereço Comercial'
                                    value={enderecoComercial}
                                    onChange={e => setEnderecoComercial(e.target.value)}
                                />

                                <Form.Group inline>

                                    <label>Trabalha em Home Office? </label>

                                    <Form.Radio
                                        label='Sim'
                                        checked={trabalhoHomeOffice}
                                        onChange={e => setTrabalhoHomeOffice({
                                            trabalhoHomeOffice: true
                                        })}
                                    />

                                    <Form.Radio
                                        label='Não'
                                        checked={!trabalhoHomeOffice}
                                        onChange={e => setTrabalhoHomeOffice({
                                            trabalhoHomeOffice: false
                                        })}
                                    />

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
										<Link to={'/list-comprador'}>Voltar</Link>
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


