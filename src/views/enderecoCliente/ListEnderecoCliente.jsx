import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';


export default function ListEnderecoCliente () {

    const [lista, setLista] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {

        carregarLista();
        
    }, [])

    function carregarLista () {

        axios.get("http://localhost:8082/api/enderecocliente")
        .then((response) => {
            setLista(response.data)
        })

    }

    function confirmaRemover(id) {

        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete("http://localhost:8082/api/enderecocliente/" + idRemover)
        .then((response) => {
    
            setOpenModal(false)
            console.log('Endereço de cliente removida com sucesso.')
    
            axios.get("http://localhost:8082/api/enderecocliente")
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            setOpenModal(false)
            console.log('Erro ao remover um endereço de cliente.')
        })
    };

    return(
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Enderço de cliente</h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link} 
                            to='/form-endereco-cliente'
                           
                        />

                        <br/><br/><br/>
                    
                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                <Table.HeaderCell>Rua</Table.HeaderCell>
                                <Table.HeaderCell>Número</Table.HeaderCell>
                                <Table.HeaderCell>Bairro</Table.HeaderCell>
                                <Table.HeaderCell>CEP</Table.HeaderCell>
                                <Table.HeaderCell>Cidade</Table.HeaderCell>
                                <Table.HeaderCell>Estado</Table.HeaderCell>
                                <Table.HeaderCell>Complemento</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                        
                            <Table.Body>

                                { lista !== undefined && lista.map(ed => (

                                    <Table.Row key={ed.id}>
                                        <Table.Cell>{ed.rua}</Table.Cell>
                                        <Table.Cell>{ed.numero}</Table.Cell>
                                        <Table.Cell>{ed.bairro}</Table.Cell>
                                        <Table.Cell>{ed.cep}</Table.Cell>
                                        <Table.Cell>{ed.cidade}</Table.Cell>
                                        <Table.Cell>{ed.estado}</Table.Cell>
                                        <Table.Cell>{ed.complemento}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste endereço de cliente'
                                                icon> 
                                                    <Link to="/form-endereco-cliente" state={{id: ed.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                            </Button> &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este endereço de cliente'
                                                icon
                                                onClick={e => confirmaRemover(ed.id)}> 
                                                    <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal
                    basic
                    onClose={() => setOpenModal(false)}
                    onOpen={() => setOpenModal(true)}
                    open={openModal}
                >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                    <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                    <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

        </div>
    )
}