import React from "react";
import { clothing, electronics, home } from "../../data";
import Card from "./Card";
import './products.css'


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
        <div className="main">

            <div>
            <h1>Clothes</h1>
            <div className="card-container-all">{clothes}</div>
            </div>
            <div className="hr"></div>
            <div>
            <h1>Electric</h1>
            <div className="card-container-all">{electric}</div>
            </div>
            <div className="hr"></div>
            <div>
            <h1>Home</h1>
            <div className="card-container-all">{homee}</div>
            </div>
            <div className="hr"></div>
        </div>
    );
};

export default Products;
