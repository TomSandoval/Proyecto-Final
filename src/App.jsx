import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import FormRegister from "./components/form/form";
import CategoriesProduct from "./components/CategoriesProduct/CategoriesProduct";
import Categories from "./components/Categories/Categories";
import Detail from "./components/Detail/Detail";
import FormUserLogin from "./components/formUserLogin/formUserLogin";
import About from "./components/About/About";
import "./App.css";
//Para el bot
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./components/Bot/Config";
import ActionProvider from "./components/Bot/ActionProvider";
import MessageParser from "./components/Bot/MessageParser";

function App() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  }



  return (
    <>
      <button className='tuki_chat' onClick={toggleVisibility}>🐸</button>
      {visible && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText='Escribeme un Tuki mensaje!!'
        />
      )}
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
