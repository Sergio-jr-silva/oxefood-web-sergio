import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

class ListComprador extends React.Component{

    state = {

       listaCompradores: []
      
    }

    componentDidMount = () => {
      
        this.carregarLista();
      
    }

    carregarLista = () => {

        axios.get(ENDERECO_API + "api/comprador")
        .then((response) => {
          
            this.setState({
                listaCompradores: response.data
            })
        })

    };

    formatarData = (dataParam) => {

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    };

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> Comprador </h2>

                        <Divider />

                        <div style={{marginTop: '4%'}}>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                floated='right'
                            >
                                <Icon name='clipboard outline' />
                                <Link to={'/form-comprador'}>Novo</Link>
                            </Button>

                            <br/><br/><br/>
                      
                            <Table color='orange' sortable celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Nome</Table.HeaderCell>
                                        <Table.HeaderCell>Valor de Comissão</Table.HeaderCell>
                                        <Table.HeaderCell>Contratado Em</Table.HeaderCell>
                                        <Table.HeaderCell>QTD Compras no Mês</Table.HeaderCell>
                                        <Table.HeaderCell>Endereço Residencial</Table.HeaderCell>
                                        <Table.HeaderCell>Trabalha em Home Office?</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                          
                                <Table.Body>

                                    { this.state.listaCompradores.map(c => (

                                        <Table.Row>
                                            <Table.Cell>{c.nome}</Table.Cell>
                                            <Table.Cell>{c.comissao}</Table.Cell>
                                            <Table.Cell>{this.formatarData(c.contratadoEm)}</Table.Cell>
                                            <Table.Cell>{c.qtdComprasMediasMes}</Table.Cell>
                                            <Table.Cell>{c.enderecoResidencial}</Table.Cell>
                                            <Table.Cell>
                                                {c.trabahoHomeOffice === true &&
                                                    <span> Sim </span>
                                                }
                                                {c.trabahoHomeOffice === false &&
                                                    <span> Não </span>
                                                }
                                            </Table.Cell>
                                            <Table.Cell textAlign='center'>
                                              
                                                <Button
                                                   inverted
                                                   circular
                                                   icon='edit'
                                                   color='blue'
                                                   itle='Clique aqui para editar os dados deste cliente' /> &nbsp;
                                                   
                                                <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este cliente' />

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
           </div>
       )
   }
}

export default ListComprador;