import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from '../Nav/nav';
import ProductsHome from "../ProductsHome/ProductsHome";


export default function Home(){

    return (
        <>
        <SearchBar/>
        <FilterButtons/>            
        <ProductsHome/>
        </>
    )
}

