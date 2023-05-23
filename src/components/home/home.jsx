import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from "../Nav/nav";
import ProductsHome from "../ProductsHome/ProductsHome";
import Carrousel from "../Carrousel/Carrousel";
import "../home/Home.css";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkExpiration, cleanProducts } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

      useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const token = decodeURIComponent(urlParams.get("token"));
        const email = decodeURIComponent(urlParams.get("email"));
        const username = decodeURIComponent(urlParams.get("username"));
        const tokenExpiration = decodeURIComponent(urlParams.get("tokenExpiration"));
        const roll = decodeURIComponent(urlParams.get("roll"));
    

        // Guardar los datos en el localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        localStorage.setItem("tokenExpiration", tokenExpiration);
        localStorage.setItem("roll", roll);

        navigate("/")

    },[])

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token){
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
