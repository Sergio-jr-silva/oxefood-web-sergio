import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListEntregador extends React.Component{

   state = {

       listaEntregador: []
      
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get("http://localhost:8082/api/entregador")
    .then((response) => {
       
        this.setState({
            listaEntregador: response.data
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

                    <h2> Entregadores </h2>

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
                            <Link to={'/form-entregador'}>Novo</Link>
                        </Button>
                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled style={{marginLeft:'-20%'}}>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Nome</Table.HeaderCell>
                                  <Table.HeaderCell>CPF</Table.HeaderCell>
                                  <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                  <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                  <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                  <Table.HeaderCell>RG</Table.HeaderCell>
                                  <Table.HeaderCell>Entregas Feitas</Table.HeaderCell>
                                  <Table.HeaderCell>Valor Frete</Table.HeaderCell>
                                  <Table.HeaderCell>Rua</Table.HeaderCell>
                                  <Table.HeaderCell>Numero</Table.HeaderCell>
                                  <Table.HeaderCell>Bairro</Table.HeaderCell>
                                  <Table.HeaderCell>Cidade</Table.HeaderCell>
                                  <Table.HeaderCell>Cep</Table.HeaderCell>
                                  <Table.HeaderCell>UF</Table.HeaderCell>
                                  <Table.HeaderCell>Endereço Complemento</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2} style={{paddingRight:'40px', paddingLeft:'40px'}}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaEntregador.map(entregador => (

                                  <Table.Row>
                                      <Table.Cell>{entregador.nome}</Table.Cell>
                                      <Table.Cell>{entregador.cpf}</Table.Cell>
                                      <Table.Cell>{this.formatarData(entregador.dataNascimento)}</Table.Cell>
                                      <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                      <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                      <Table.Cell>{entregador.rg}</Table.Cell>
                                      <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                                      <Table.Cell>{entregador.valorFrete}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoRua}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoNumero}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoBairro}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoCidade}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoCep}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoUf}</Table.Cell>
                                      <Table.Cell>{entregador.enderecoComplemento}</Table.Cell>
                                      <Table.Cell textAlign='center'>
                                         
                                          <Button
                                              inverted
                                              circular
                                              icon='edit'
                                              color='blue'
                                              itle='Clique aqui para editar os dados deste Entregador' /> &nbsp;

<Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este Entregador' />

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

export default ListEntregador;

