import './App.css'
import Products from './components/Products/products'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Products/>} />
    </Routes>
    </>
  )
}

export default App
