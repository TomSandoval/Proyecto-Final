import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from "../Nav/nav";
import ProductsHome from "../ProductsHome/ProductsHome";
import Publicidad from "../Publicidad/Publicidad";

export default function Home() {
  return (
    <>
      <SearchBar />
      <Publicidad />
      <FilterButtons />
      <ProductsHome />
    </>
  );
}
