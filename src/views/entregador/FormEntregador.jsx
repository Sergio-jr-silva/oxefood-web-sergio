import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
class FormEntregador extends React.Component{

	state = {

		nome: null, //
		cpf: null, //
		dataNascimento: null, //
		foneCelular: null, //
		foneFixo: null, //
		rg:null, //
		qtdEntregasRealizadas:null, //
		valorFrete:null, //
		enderecoRua:null, //
		enderecoNumero:null, //
		enderecoBairro:null, //
		enderecoCidade:null, //
		enderecoCep:null, //
		enderecoUf:null, //
		enderecoComplemento:null //
		
	}


	salvar = () => {

		let EntregadorRequest = {

			nome: this.state.nome,
			cpf: this.state.cpf,
			dataNascimento: this.state.dataNascimento,
			foneCelular: this.state.foneCelular,
			foneFixo: this.state.foneFixo,
			rg: this.state.rg,
			qtdEntregasRealizadas: this.state.qtdEntregasRealizadas,
			valorFrete: this.state.valorFrete,
			enderecoRua: this.state.enderecoRua,
			enderecoNumero: this.state.enderecoNumero,
			enderecoBairro: this.state.enderecoBairro,
			enderecoCidade: this.state.enderecoCidade,
			enderecoCep: this.state.enderecoCep,
			enderecoUf: this.state.enderecoUf,
			enderecoComplemento: this.state.enderecoComplemento

		}

	
	
		
		axios.post("http://localhost:8082/api/entregador", EntregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o produto.')
		}) 
	}


    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified'>

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome'
										maxLength="100"
										value={this.state.nome}
										onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
										fluid
										label='CPF'>
										<InputMask 
										mask="999.999.999-99"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})}
										/> 
									</Form.Input>

									<Form.Input
										fluid
										label='Rg'
										value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})}
									>	 
									</Form.Input>
								</Form.Group>
								
								<Form.Group>

									<Form.Input
										fluid
										label='Fone Celular'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneCelular}
										onChange={e => this.setState({foneCelular: e.target.value})}
										/> 
									</Form.Input>

									<Form.Input
										fluid
										label='Fone Fixo'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={this.state.foneFixo}
										onChange={e => this.setState({foneFixo: e.target.value})}
										/> 
									</Form.Input>

									<Form.Input
                                        fluid
                                        label='Data Nascimento'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
											value={this.state.dataNascimento}
											onChange={e => this.setState({dataNascimento: e.target.value})}

                                        /> 
                                    </Form.Input>

								</Form.Group>

								<Form.Group>

									<Form.Input
										fluid
										label='Quantidade de Entregas Realizadas'
										placeholder="Ex: 6"
                                        width={6}
										value={this.state.qtdEntregasRealizadas}
										onChange={e => this.setState({qtdEntregasRealizadas: e.target.value})}
									>
									</Form.Input>

									<Form.Input
										fluid
										label='Valor Do Frete'
                                        width={6}
										placeholder="Ex: R$30,00"
										value={this.state.valorFrete}
										onChange={e => this.setState({valorFrete: e.target.value})}
									> 
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Rua'
                                        width={6}
                                        placeholder="Ex: Rua Aparecida de Assis"
										value={this.state.enderecoRua}
										onChange={e => this.setState({enderecoRua: e.target.value})}
                                       > 
                                    </Form.Input>

								</Form.Group>


								<Form.Group>

									<Form.Input
										fluid
										label='Bairro'
                                        width={6}
										value={this.state.enderecoBairro}
										onChange={e => this.setState({enderecoBairro: e.target.value})}
									> 
									</Form.Input>

									<Form.Input
										fluid
										label='Número da Residência'
                                        width={6}
										placeholder="Ex: 19"
										value={this.state.enderecoNumero}
										onChange={e => this.setState({enderecoNumero: e.target.value})}
									>
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Cidade'
										placeholder="Ex: Recife"
                                        width={6}
										value={this.state.enderecoCidade}
										onChange={e => this.setState({enderecoCidade: e.target.value})}
                                    >
                                    </Form.Input>

								</Form.Group>


								<Form.Group>

									<Form.Input
										fluid
										label='Cep'
                                        width={6}
										value={this.state.enderecoCep}
										onChange={e => this.setState({enderecoCep: e.target.value})}
									> 
									</Form.Input>

									<Form.Input
										fluid
										label='Estado'
                                        width={6}
										placeholder="Pernambuco"
										value={this.state.enderecoUf}
										onChange={e => this.setState({enderecoUf: e.target.value})}
									>
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Endereço completo'
										placeholder="Rua aparecida de Assis  nº19, Recife-PE"
                                        width={6}
										value={this.state.enderecoComplemento}
										onChange={e => this.setState({enderecoComplemento: e.target.value})}
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
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
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
}

export default FormEntregador;