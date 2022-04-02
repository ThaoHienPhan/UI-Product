import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';

import {Home} from './components/Home';
import {AddProduct} from './components/AddProduct';
import {EditProduct} from './components/EditProduct';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
      <Router>
      <Routes>
       
       <Route exact path='/' element={<Home/>} />
       <Route path='/add' element={<AddProduct/>}/> 
       <Route path='/edit/:id' element={<EditProduct/>}/> 

       </Routes>
      </Router>
    </div>
  );
}

export default App;
