import React from "react";
import { clothing, electronics, home } from "../../data";
import Card from "./Card";
import './products.css'


const Products = () => {
    const clothes = clothing.map((product) => (
        <Card key={product.id} {...product} />
    ));
    const electric = electronics.map((product) => (
        <Card key={product.id} {...product} />
    ));
    const home = home.map((product) => <Card key={product.id} {...product} />);

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
            <div className="card-container-all">{home}</div>
            </div>
            <div className="hr"></div>
        </div>
    );
};

export default Products;
