import './App.css'
import { Route, Routes} from "react-router-dom";
import Home from './components/home/home'

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
}

export default App
