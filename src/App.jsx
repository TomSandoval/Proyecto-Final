import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import "./App.css";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carroBuy" />
        <Route path="/formRegister" />
        <Route path="/categories:name" />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
export default App;
