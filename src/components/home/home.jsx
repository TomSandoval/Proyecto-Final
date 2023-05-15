import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from "../Nav/nav";
import ProductsHome from "../ProductsHome/ProductsHome";
import Publicidad from "../Publicidad/Publicidad";
import "../home/Home.css";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanProducts } from "../../redux/actions";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(cleanProducts())
  },[])

  return (
    <>
      <SearchBar view={true} />
      <Publicidad />
      <FilterButtons />
      <ProductsHome />
      <Footer />
    </>
  );
}
