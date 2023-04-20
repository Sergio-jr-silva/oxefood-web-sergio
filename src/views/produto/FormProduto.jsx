import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";

class FormProduto extends React.Component{
	state = {

		codigo: null,
		titulo: null,
		descricao: null,
		valorUnitario: null,
		tempoEntregaMinimo: null,
		tempoEntregaMaximo: null
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Título'
										maxLength="100" placeholder="Informe o título do produto"
										value={this.state.titulo}
										onChange={e => this.setState({titulo: e.target.value})}
									/>

									<Form.Input
                                        required
										fluid
										label='Código do Produto' placeholder="Informe o código do produto">
										 value={this.state.codigo}
										onChange={e => this.setState({codigo: e.target.value})}
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

									<Form.TextArea
										fluid
										label='Descrição'
                                        width={16}
                                        placeholder="Informe a descrição do produto">
											value={this.state.descricao}
										onChange={e => this.setState({descricao: e.target.value})}
									</Form.TextArea>
                                    </Form.Group>

                                    <Form.Group>  
                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        width={7}
										value={this.state.valorUnitario}
										onChange={e => this.setState({valorUnitario: e.target.value})}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        placeholder="30"
                                        width={5}
										value={this.state.tempoEntregaMinimo}
										onChange={e => this.setState({tempoEntregaMinimo: e.target.value})}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        placeholder='40'
                                        width={5}
										value={this.state.tempoEntregaMaximo}
										onChange={e => this.setState({tempoEntregaMaximo: e.target.value})}
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
										Listar
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

export default FormProduto;