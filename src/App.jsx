import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home';
import "./App.css";

function App() {
  return (
        <>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carroBuy' />
        <Route path='/formRegister' />      
        <Route path='/categories:name'/>
        </Routes>
        </>
  )
}
export default App;
