import React from "react";
import cart from "../../assets/cartShop.png";

const Card = ({ title, price, image, category }) => {
  return (
    <div class="row row-cols-3">
      <div class="col">
        <div class="card h-100">
          <img src={image} class="card-img-top " alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">${price} </p>
            <button type="button" class="btn btn-primary ">
              <img src={cart} alt="" />
            </button>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">TukiMarket</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//agregar el onClick={
