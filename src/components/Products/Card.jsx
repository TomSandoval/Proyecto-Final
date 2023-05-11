import React from "react";
import cart from "../../assets/cartShop.png";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card (props){
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`Detail/${props.id}`);
  }


  return (
    <div className="container-card" >
      <img src={props.img} onClick={handleNavigate} className="card-img-top card-image" alt={props.name} />
      <div className="container-info">
        <h5 className="card-title">{props.name}</h5>
        <hr></hr>
        <div className="buy-info">
          <p className="card-price">${props.price} </p>
          <button type="button" className="button-buy">
            <img src={cart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};


//agregar el onClick={
