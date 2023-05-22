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
