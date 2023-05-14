import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from "../Nav/nav";
import ProductsHome from "../ProductsHome/ProductsHome";
import Publicidad from "../Publicidad/Publicidad";
import "../home/Home.css";
import Footer from "../Footer/Footer";

export default function Home() {
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
