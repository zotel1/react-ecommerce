import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import "./main.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/item' element={<ItemDetailContainer itemId={2}></ItemDetailContainer>}></Route>
            <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
