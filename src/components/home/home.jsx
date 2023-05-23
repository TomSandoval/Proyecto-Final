import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from "../Nav/nav";
import ProductsHome from "../ProductsHome/ProductsHome";
import Carrousel from "../Carrousel/Carrousel";
import "../home/Home.css";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkExpiration, cleanProducts } from "../../redux/actions";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
      useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const token = decodeURIComponent(urlParams.get("token"));
        const email = decodeURIComponent(urlParams.get("email"));
        const username = decodeURIComponent(urlParams.get("username"));
        const tokenExpiration = decodeURIComponent(urlParams.get("tokenExpiration"));
        const roll = decodeURIComponent(urlParams.get("roll"));
    

        // Guardar los datos en el localStorage
        if(token !== "null" || token !== undefined){
        localStorage.setItem("token", token);
        }
        if(email){
        localStorage.setItem("email", email);
        }
        if(username){
        localStorage.setItem("username", username);
        }
        if(tokenExpiration){
        localStorage.setItem("tokenExpiration", tokenExpiration);
        }
        if(roll){
        localStorage.setItem("roll", roll);
        }
        navigate("/")

    const tokenUser = window.localStorage.getItem('token');
    if(tokenUser){
      dispatch(checkExpiration())
    }
    dispatch(cleanProducts());
  }, []);

  return (
    <>
      <SearchBar view={true} />
      <Carrousel />
      <FilterButtons />
      <ProductsHome />
      <Footer />
    </>
  );
}
