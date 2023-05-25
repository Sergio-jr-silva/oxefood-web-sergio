import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal } from 'semantic-ui-react';

class ListProduto extends React.Component{

   state = {

       listaProduto: []
      
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get("http://localhost:8082/api/produto")
    .then((response) => {
       
        this.setState({
            listaProduto: response.data
        })
    })

};


render(){
    return(
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Produtos </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>
                    <Link to={'/form-produto'}>
                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='orange'
                            floated='right'
                        >
                            <Icon name='clipboard outline' />
                          Novo
                        </Button>
                        <br/><br/><br/>
                      </Link>
                      <Table color='orange' sortable celled>
                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Titulo</Table.HeaderCell>
                                  <Table.HeaderCell>Codigo</Table.HeaderCell>
                                  <Table.HeaderCell>Descrição</Table.HeaderCell>
                                  <Table.HeaderCell>Valor Unitario</Table.HeaderCell>
                                  <Table.HeaderCell>Tempo de Entrega (Minimo)</Table.HeaderCell>
                                  <Table.HeaderCell>Tempo de Entrega (Máximo)</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaProduto.map(Produto => (

                                  <Table.Row>
                                      <Table.Cell>{Produto.titulo}</Table.Cell>
                                      <Table.Cell>{Produto.codigo}</Table.Cell>
                                      <Table.Cell>{Produto.descricao}</Table.Cell>
                                      <Table.Cell>{Produto.valorUnitario}</Table.Cell>
                                      <Table.Cell>{Produto.tempoEntregaMinimo}</Table.Cell>
                                      <Table.Cell>{Produto.tempoEntregaMaximo}</Table.Cell>
                                      <Table.Cell textAlign='center'>
                                         
                                          <Button
                                              inverted
                                              circular
                                              icon='edit'
                                              color='blue'
                                              itle='Clique aqui para editar os dados deste Produto' /> &nbsp;

<Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este Produto' />

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

export default ListProduto;

