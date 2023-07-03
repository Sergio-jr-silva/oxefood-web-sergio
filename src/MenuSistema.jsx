import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

class MenuSistema extends React.Component{

   state = {
       activeItem: 'home'
   }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   render(){
       return(
           <>
               <Menu inverted>
                  
                   <Menu.Item
                       name='home'
                       active={this.state.activeItem === 'home'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/'



                   />
                 <Menu.Menu className='navbar__item--pc'>
                        <Dropdown item text='Cliente'>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    name='endereco'
                                    active={this.state.activeItem === 'endereco'}
                                    onClick={this.handleItemClick}
                                    text='Endereço de cliente' 
                                    as={Link} 
                                    to='/list-endereco-cliente'
                                />
                                <Dropdown.Item
                                    name='cliente'
                                    active={this.state.activeItem === 'cliente'}
                                    onClick={this.handleItemClick}
                                    text='Cliente' 
                                    as={Link} 
                                    to='/list-cliente'
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>




                    <Menu.Menu className='navbar__item--pc'>
                        <Dropdown item text='Produto'>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    name='categoria'
                                    active={this.state.activeItem === 'categoria'}
                                    onClick={this.handleItemClick}
                                    text='Categoria de Produto' 
                                    as={Link} 
                                    to='/list-categoria-produto'
                                />
                                <Dropdown.Item
                                    name='produto'
                                    active={this.state.activeItem === 'produto'}
                                    onClick={this.handleItemClick}
                                    text='Produto' 
                                    as={Link} 
                                    to='/list-produto'
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>




                   <Menu.Item
                       name='entregador'
                       active={this.state.activeItem === 'entregador'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/list-entregador'
                   />

    
               </Menu>
           </>
       )
   }
}
export default MenuSistema;
