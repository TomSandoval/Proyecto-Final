import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import FormRegister from "./components/form/form";
import CategoriesProduct from "./components/CategoriesProduct/CategoriesProduct";
import Categories from "./components/Categories/Categories";
import Detail from "./components/Detail/Detail";
import FormUserLogin from "./components/formUserLogin/formUserLogin";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carroBuy" />
        <Route path="/formRegister" element={<FormRegister />} />
        <Route path="/formLogin" element={<FormUserLogin />} />
        <Route path="/categories/:name" element={<CategoriesProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
