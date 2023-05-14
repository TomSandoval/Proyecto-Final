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

  const productsOne = products[prodNames[0]]?.rows;
  const productsTwo = products[prodNames[1]]?.rows;
  const productsThree = products[prodNames[2]]?.rows;

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
        <div className="button-container">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </button>
        </div>
        {productsOne?.slice(0, 3).map((p, index) => (
          <Card
            key={index}
            name={p.name}
            price={p.price}
            img={p.img[0]}
            id={p.id}
          ></Card>
        ))}
        <div className="button-container">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="hr"></div>
      <div className="text-container">
        <h1>{prodNames[1]}</h1>
      </div>
      <div className="section-all">
        <div className="button-container">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </button>
        </div>
        {productsTwo?.slice(0, 3).map((p, index) => (
          <Card
            key={index}
            name={p.name}
            price={p.price}
            img={p.img[0]}
            id={p.id}
          ></Card>
        ))}
        <div className="button-container">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="hr"></div>
      <div className="text-container">
        <h1>{prodNames[2]}</h1>
      </div>
      <div className="section-all">
        <div className="button-container">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </button>
        </div>
        {productsThree?.slice(0, 3).map((p, index) => (
          <Card
            key={index}
            name={p.name}
            price={p.price}
            img={p.img[0]}
            id={p.id}
          ></Card>
        ))}
        <div className="button-container">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
