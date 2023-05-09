import './App.css'
import { Route, Routes} from "react-router-dom";
import Home from './components/home/home'

import "./App.css";
import Prueba from "./components/Prueba-J/Prueba";

function App() {
  return (
        <>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/carroBuy' />
        <Route path='/formRegister' />
        </Routes>
        </>
  )
    <>
      <Prueba />
    </>
  );
}
export default App;
