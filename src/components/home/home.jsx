import Products from "../Products/products"
import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from '../Nav/nav';


export default function Home(){

    return (
        <>
        <SearchBar/>
        <FilterButtons/>            
        <Products/>
        </>
    )
}

