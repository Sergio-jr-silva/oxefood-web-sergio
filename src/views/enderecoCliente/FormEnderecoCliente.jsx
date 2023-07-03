import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';


export default function FormEnderecoCliente () {

    const { state } = useLocation();

    const [idEndereco, setIdEndereco] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [complemento, setComplemento] = useState();

    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get("http://localhost:8082/api/enderecocliente/" + state.id)
            .then((response) => {
                
                setIdEndereco(response.data.id)
                setRua(response.data.rua)
                setNumero(response.data.numero);
                setBairro(response.data.bairro);
                setCep(response.data.cep);
                setCidade(response.data.cidade);
                setEstado(response.data.estado);
                setComplemento(response.data.complemento);
            })
        }
        
    }, [state])

    function salvar() {

		let enderecoRequeste = {

			rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            estado: estado,
            complemento: complemento

		}

        if (idEndereco != null) { //Alteração:

            axios.put("http://localhost:8082/api/enderecocliente/" + idEndereco, enderecoRequeste)
		    .then((response) => { console.log('Endereço de cliente alterado com sucesso.') })
		    .catch((error) => { console.log('Erro ao alterar um endereço de cliente.') })

        } else { //Cadastro:
        
            axios.post("http://localhost:8082/api/enderecocliente", enderecoRequeste)
		    .then((response) => { console.log('Endereço de cliente cadastrado com sucesso.') })
		    .catch((error) => { console.log('Erro ao incluir a endereço de cliente.') })

        }
	}

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    { idEndereco === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Enderço de Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { idEndereco !== undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Endereço de Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Input
                                required
                                fluid
                                label='Rua'
                                maxLength="200"
                                value={rua || ' '}
                                onChange={e => setRua(e.target.value)}
                            />

                            <Form.Input
                                required
                                fluid
                                label='Número'
                                maxLength="200"
                                value={numero || ' '}
                                onChange={e => setNumero(e.target.value)}
                            />

                            <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="200"
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                />


                            <Form.Input
                                    fluid
                                    label='CEP'
                                    maxLength="200"
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                />

                            <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="200"
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                />

                            <Form.Input
                                    fluid
                                    label='Estado'
                                    maxLength="200"
                                    value={estado}
                                    onChange={e => setEstado(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    maxLength="200"
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}
                                />
                        </Form>

                        <div style={{marginTop: '4%'}}>

                            <Button
                                label='Voltar'
                                circular
                                color='orange'
                                icon='reply'
                                as={Link} 
                                to='/list-endereco-cliente'
                            />

                            <Button
                                label='Salvar'
                                circular
                                color='blue'
                                icon='save'
                                floated='right'
                                onClick={() => salvar()}
                            />

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}