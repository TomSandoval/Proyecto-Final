import ProductFilter3 from "../Products/product3Categories3Products"
import FilterButtons from "./filterButtons/filterButtons";
import SearchBar from '../Nav/nav';


export default function Home(){

    return (
        <>
        <SearchBar/>
        <FilterButtons/>            
        <ProductFilter3/>
        </>
    )
}

