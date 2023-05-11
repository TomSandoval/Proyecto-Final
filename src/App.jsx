
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home';
import CategoriesProduct from './components/CategoriesProduct/CategoriesProduct';
import Categories from './components/Categories/Categories';
import Detail from "./components/Detail/Detail";
import "./App.css";


function App() {
  return (
        <>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carroBuy' />
        <Route path='/formRegister' />      
        <Route path='/categories/:name' element={<CategoriesProduct/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
        </>
  )

}
export default App;
