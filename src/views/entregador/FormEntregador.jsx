import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';
import InputMask from 'react-input-mask';
export default function FormEntregador (){
	const { state } = useLocation();

	const [idEntregador, setIdEntregador] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [rg, setRg] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();
	const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
	const [valorFrete, setValorFrete] = useState();
	const [enderecoRua, setEnderecoRua] = useState();
	const [enderecoNumero, setEnderecoNumero] = useState();
	const [enderecoBairro, setEnderecoBairro] = useState();
	const [enderecoCidade, setEnderecoCidade] = useState();
	const [enderecoCep, setEnderecoCep] = useState();
	const [enderecoUf, setEnderecoUf] = useState();
	const [enderecoComplemento, setEnderecoComplemento] = useState();

	function formatarData(dataParam) {

		if (dataParam == null || dataParam == '') {
			return ''
		}
		
		let dia = dataParam.substr(8,2);
		let mes = dataParam.substr(5,2);
		let ano = dataParam.substr(0,4);
		let dataFormatada = dia + '/' + mes + '/' + ano;

		return dataFormatada
	}

	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get(ENDERECO_API + "api/entregador/" + state.id)
			.then((response) => {
				setIdEntregador(response.data.id)
				setNome(response.data.nome)
				setCpf(response.data.cpf)
				setRg(response.data.rg)
				setDataNascimento(formatarData(response.data.dataNascimento))
				setFoneCelular(response.data.foneCelular)
				setFoneFixo(response.data.foneFixo)
				setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
				setValorFrete(response.data.valorFrete)
				setEnderecoRua(response.data.enderecoRua)
				setEnderecoNumero(response.data.enderecoNumero)
				setEnderecoBairro(response.data.enderecoBairro)
				setEnderecoCidade(response.data.enderecoCidade)
				setEnderecoCep(response.data.enderecoCep)
				setEnderecoUf(response.data.enderecoUf)
				setEnderecoComplemento(response.data.enderecoComplemento)
			})
		}
		
	}, [state])

	function salvar ()  {

		let EntregadorRequest = {

			nome: nome,
			cpf: cpf,
			rg: rg,
			dataNascimento: dataNascimento,
			foneCelular: foneCelular,
			foneFixo: foneFixo,
			qtdEntregasRealizadas: qtdEntregasRealizadas,
			valorFrete: valorFrete,
			enderecoRua: enderecoRua,
			enderecoNumero: enderecoNumero,
			enderecoBairro: enderecoBairro,
			enderecoCidade: enderecoCidade,
			enderecoCep: enderecoCep,
			enderecoUf: enderecoUf, 
			enderecoComplemento: enderecoComplemento
		}

	
		
		
		axios.post("http://localhost:8082/api/entregador", EntregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o entregador.')
		}) 
	}

        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome'
										maxLength="100" placeholder="Informe o nome do entregador"
										value={nome}
										onChange={e => setNome( e.target.value)}
									/>

									<Form.Input
                                        required
										fluid
										label='Cpf' placeholder="Informe o Cpf do entregador"
										 value={cpf}
										onChange={e => setCpf( e.target.value)}
									>
									</Form.Input>



									<Form.Input
										fluid
										label='RG'
                                        placeholder="Informe o Rg do entregador"
										value={rg}
										onChange={e => setRg( e.target.value)}
									>
									</Form.Input>

								</Form.Group>

                                    <Form.Group>  
									<Form.Input
									fluid
									label='Data Nascimento'
									width={6}
								>
									<InputMask 
										mask="99/99/9999" 
										maskChar={null}
										placeholder="Ex: 20/03/1985"
										value={dataNascimento}
										onChange={e => setDataNascimento(e.target.value)}
									/> 
								</Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Fone Celular'
                                        placeholder="30"
                                        width={5}
										value={foneCelular}
										onChange={e => setFoneCelular(e.target.value)}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Fone Fixo'
                                        placeholder='40'
                                        width={5}
										value={foneFixo}
										onChange={e => setFoneFixo(e.target.value)}
                                    >

                                    </Form.Input>

								</Form.Group>

								<Form.Group>
								<Form.Input 
                                        fluid
                                        label='Quantidade de Entregas'
                                        placeholder="30"
                                        width={5}
										value={qtdEntregasRealizadas}
										onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Valor Do frete'
                                        placeholder='40'
                                        width={5}
										value={valorFrete}
										onChange={e => setValorFrete(e.target.value)}
                                    >
										</Form.Input>
								</Form.Group>

								<Form.Group>
								<Form.Input 
                                        fluid
                                        label='Rua'
                                        placeholder="30"
                                        width={16}
										value={enderecoRua}
										onChange={e => setEnderecoRua(e.target.value)}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Número'
                                        placeholder='40'
                                        width={5}
										value={enderecoNumero}
										onChange={e => setEnderecoNumero(e.target.value)}
                                    >
										</Form.Input>
								</Form.Group>

								<Form.Group>
								<Form.Input 
                                        fluid
                                        label='Bairro'
                                        placeholder="30"
                                        width={5}
										value={enderecoBairro}
										onChange={e => setEnderecoBairro(e.target.value)}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Cidade'
                                        placeholder='Digite a Cidade'
                                        width={5}
										value={enderecoCidade}
										onChange={e => setEnderecoCidade(e.target.value)}
                                    >
										</Form.Input>

										<Form.Input 
                                        fluid
                                        label='Cep'
                                        placeholder='Digite o Cep'
                                        width={5}
										value={enderecoCep	}
										onChange={e => setEnderecoCidade(e.target.value)}
                                    >
										</Form.Input>
								</Form.Group>

								<Form.Group>
									
								<Form.Input 
                                        fluid
                                        label='Digite o Estado'
                                        placeholder="ex: pernambuco"
                                        width={5}
										value={enderecoUf}
										onChange={e => setEnderecoUf(e.target.value)}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
										label='Complemento do Endereço'
                                        placeholder='Complemento'
                                        width={5}
										value={enderecoComplemento}
										onChange={e => setEnderecoComplemento(e.target.value)}
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
									<Link to={'/list-entregador'}>Voltar</Link>
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

