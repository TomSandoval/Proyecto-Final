import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Products = () => {

    const [products, setProducts] = useState([]);

    //! AQUI AGREGO MAS CATEGORIAS
    useEffect(() => {
        axios.get("http://localhost:5173/product")
            .then(response => {
                const clothingProducts = response.data.filter(product => product.category === "clothing");
                const electronicsProducts = response.data.filter(product => product.category === "electronics");
                const homeProducts = response.data.filter(product => product.category === "home");
                setProducts({ clothing: clothingProducts, electronics: electronicsProducts, home: homeProducts });
            })
            .catch(error => console.log(error));
    }, []);


    //! CONDICIONES POR SI EXISTE O NO VALOR POR CATEGORÍA
    //? Si existe al menos un producto en la categoría lo asigno a Card con el identificador keym y paso las propiedades con el ...product o si no da null
    const clothing = products.clothing ? products.clothing.map(product => <Card key={product.id} {...product} />) : null;
    const electronics = products.electronics ? products.electronics.map(product => <Card key={product.id} {...product} />) : null;
    const home = products.home ? products.home.map(product => <Card key={product.id} {...product} />) : null;

    return (
        <div>
            <h1 className="display-6 d-flex">Clothes</h1>
            <div>{clothing}</div>
            <h1 className="display-6 d-flex">Electric</h1>
            <div>{electronics}</div>
            <h1 className="display-6 d-flex">Home</h1>
            <div>{home}</div>
        </div>
    );
};







