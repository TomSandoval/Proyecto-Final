import { useDispatch, useSelector } from "react-redux";
import "./ProductsHome.css";
import { useEffect, useState } from "react";
import { axiosProductsByCategory } from "../../redux/actions";
import Card from "../Products/Card";

export default function ProductsHome() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  const prodNames = Object.keys(products);

  const productsOne = products[prodNames[0]];
  const productsTwo = products[prodNames[1]];
  const productsThree = products[prodNames[2]];

  useEffect(() => {
    // Hacer un dispatch por cada categoría
    categories.slice(0, 3).forEach((category) => {
      dispatch(axiosProductsByCategory(category.name));
    });
  }, [dispatch, categories]);
  return (
    <div className="container">
        <div className="text-container">
          <h1>{prodNames[0]}</h1>
        </div>
        <div className="section-all">
          {productsOne?.slice(0,3).map((p, index) => (
            <Card
              key={index}
              name={p.name}
              price={p.price}
              img={p.img[0]}
              id={p.id}
            ></Card>
          ))}
        </div>


      <div className="hr"></div>
      <div className="text-container">
        <h1>{prodNames[1]}</h1>
      </div>
      <div className="section-all">
        {productsTwo?.slice(0,3).map((p, index) => (
          <Card
            key={index}
            name={p.name}
            price={p.price}
            img={p.img[0]}
            id={p.id}
          ></Card>
        ))}
      </div>
      <div className="hr"></div>
      <div className="text-container">
        <h1>{prodNames[2]}</h1>
      </div>
      <div className="section-all">
        {productsThree?.slice(0,3).map((p, index) => (
          <Card
            key={index}
            name={p.name}
            price={p.price}
            img={p.img[0]}
            id={p.id}
          ></Card>
        ))}
      </div>
    </div>
  );
}
