import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Segment } from 'semantic-ui-react';
import './App.css';
import MenuSistema from './MenuSistema';
import Rotas from './Rotas';

function App() {

 return (

   <div className="App">

     <MenuSistema />
     <ToastContainer />

     <Rotas />

     <div style={{marginTop: '6%'}}>
       <Segment vertical color='grey' size='tiny' textAlign='center'>
         &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
       </Segment>
     </div>

   </div>
  
 );
}

export default App;

