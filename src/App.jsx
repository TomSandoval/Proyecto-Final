import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home';
import FormRegister from './components/form/form';
import "./App.css";
import FormUserLogin from './components/formUserLogin/formUserLogin';

function App() {
  return (
        <>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carroBuy' />
        <Route path='/formRegister' element={<FormRegister/>}/>      
        <Route path='/categories:name'/>
        <Route path='/formLogin' element={<FormUserLogin/>}/>

        </Routes>
        </>
  )
}
export default App;
