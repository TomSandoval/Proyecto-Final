import React from "react";
import cart from "../../assets/cartShop.png";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ title, price, image, id, category }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`Detail/${id}`);
  };

  return (
    <div class="container-card" onClick={handleNavigate}>
      <img src={image} class="card-img-top card-image" alt="..." />
      <div class="container-info">
        <h5 class="card-title">{title}</h5>
        <hr></hr>
        <div className="buy-info">
          <p class="card-price">${price} </p>
          <button type="button" class="button-buy">
            <img src={cart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

//agregar el onClick={
