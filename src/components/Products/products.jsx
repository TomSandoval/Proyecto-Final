import React from "react";
import { clothing, electronics, home } from "../../data";
import Card from "./Card";


//! REVISAR LAS CARTAS PARA QUE QUEDEN UNA AL LADO DE OTRA!!!
//! AGREGAR A FAVORITOS

const Products = () => {
    const clothes = clothing.map((product) => (
        <Card key={product.id} {...product} />
    ));
    const electric = electronics.map((product) => (
        <Card key={product.id} {...product} />
    ));
    const homee = home.map((product) => <Card key={product.id} {...product} />);

    return (
        <div>

            <h1 class="display-6 d-flex">Clothes</h1>
            <div>{clothes}</div>
            <h1 class="display-6 d-flex">Electric</h1>
            <div>{electric}</div>
            <h1 class="display-6 d-flex">Home</h1>
            <div>{homee}</div>
        </div>
    );
};

export default Products;
