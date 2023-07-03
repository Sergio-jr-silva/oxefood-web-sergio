import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import ListProduto from './views/produto/ListProduto';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import FormCategoriaProduto from './views/CategoriaProduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/CategoriaProduto/ListCategoriaProduto';
import ListEnderecoCliente from './views/enderecoCliente/ListEnderecoCliente';
import FormEnderecoCliente from './views/enderecoCliente/FormEnderecoCliente'
function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />

                <Route path="form-endereco-cliente" element={ <FormEnderecoCliente/> } />
                <Route path="list-endereco-cliente" element={ <ListEnderecoCliente/> } />

                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                
                <Route path="form-categoria-produto" element={ <FormCategoriaProduto/> } />
                <Route path="list-categoria-produto" element={ <ListCategoriaProduto/> } />

                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />

               
            </Routes>
        </>
    )
}

export default Rotas
