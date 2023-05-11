import React from "react";
import ProductsByCategory from "./productCategory";
import { useSelector } from "react-redux";


// esto es para probar que me haga el slice de 3:
// const categories = ["category1", "category2", "category3", "de aqui en adelante van todas las categorias que quiera"];

//los productos del estado:
const Product3Categories = () => {
    const products = useSelector((state) => state.products)
}

//Lista de categorías únicas, Set deja guardar valores únicos:
const categories = [...new Set(products.map((product)=>product.category))]

const ProductFilter3 = () => {
    return (
        <div>
            {categories.slice(0, 3).map((categoryName) =>
            (<ProductsByCategory key={categoryName} categoryName={categoryName}/>
            )
            )}
        </div>
    );
};

export default ProductFilter3;