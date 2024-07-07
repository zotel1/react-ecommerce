import React, { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import "./main.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto';
import { CardContext } from './context/CardContext';

function App() {

    const [carrito, setCarrito] = useState();


  return (
    <div>
        <CardContext.Provider value={{carrito, setCarrito}}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/productos/' element={<ItemListContainer />}></Route>
            <Route path='/productos/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/carrito' element={<Contacto />}></Route>  
        </Routes>
        </BrowserRouter>
          </CardContext.Provider>
    </div>
  );
}

export default App;
