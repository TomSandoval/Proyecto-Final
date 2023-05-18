import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import FormRegister from "./components/form/form";
import CategoriesProduct from "./components/CategoriesProduct/CategoriesProduct";
import Categories from "./components/Categories/Categories";
import Detail from "./components/Detail/Detail";
import FormUserLogin from "./components/formUserLogin/formUserLogin";
import FormCreateProducs from "./components/formCreateProduct/formCreateProduct";
import Paypal from "./components/PayPal/Paypal";
import About from "./components/About/About";
import "./App.css";
import CarBuy from "./components/CarBuy/carBuy";
//Para el bot
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./components/Bot/Config";
import ActionProvider from "./components/Bot/ActionProvider";
import MessageParser from "./components/Bot/MessageParser";
import bubble from "../src/assets/bubblechat.png";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import { useSelector } from "react-redux";

function App() {
  const [visible, setVisible] = useState(false);
  const darkModes = useSelector((state) => state.darkModes);
  const toggleVisibility = () => {
    setVisible(!visible);
    const bubbleChat = document.querySelector(".bubble_chat");
    if (visible) {
      bubbleChat.style.display = "block";
    } else {
      bubbleChat.style.display = "none";
    }
  };
  return (
    <>
      <img src={bubble} alt="bubblechat" className="bubble_chat" />
      <span className={darkModes ? "chat_with_dark" : "chat_with"}>
        Chatea <br />
        Conmigo!!
      </span>
      <button className="tuki_chat" onClick={toggleVisibility}>
        🐸
      </button>

      {visible && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="Escribeme un Tuki mensaje!!"
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formRegister" element={<FormRegister />} />
        <Route path="/formLogin" element={<FormUserLogin />} />
        <Route path="/categories/:name" element={<CategoriesProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Search/:name" element={<SearchProduct />} />
        <Route path="/formCreateProduct" element={<FormCreateProducs />} />
        <Route path="/about" element={<About />} />
        <Route path="/paypal" element={<Paypal />} />
        <Route path="/carroBuy" element={<CarBuy />} />
      </Routes>
    </>
  );
}
export default App;
