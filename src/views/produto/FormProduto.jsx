import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

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
									/>

									<Form.Input
                                        required
										fluid
										label='Código do Produto' placeholder="Informe o código do produto">
										 
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

									<Form.TextArea
										fluid
										label='Descrição'
                                        width={16}
                                        placeholder="Informe a descrição do produto">
									</Form.TextArea>
                                    </Form.Group>

                                    <Form.Group>  
                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        width={7}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        placeholder="30"
                                        width={5}
                                    >
                                    </Form.Input>

                                    <Form.Input 
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        placeholder='40'
                                        width={5}
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