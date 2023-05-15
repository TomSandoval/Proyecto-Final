import "./CardList.css";
import cart from '../../assets/cartShop.png';
import { Link } from "react-router-dom";

export default function CardList(props) {
  return (
      <div className="container-cardList">
        <Link className="link" to={`/detail/${props.id}`} target="_blank">
      <div className="image-container-card">
        <img className="image" src={props.img} alt={props.description} />
      </div>
        </Link>
      <div className="about-container">
        <div className="title-container">
          <h2 className="title">{props.title}</h2>
        </div>
        <div className="category-container">
          <h5 className="category-text">{props.category}</h5>
        </div>
        <div className="description-container">
          <p>{props.description}</p>
        </div>
        <div className="bottom-container ">
          <p className="stock">Precio: {props.price}</p>
          <button type="button" className="button-buy button-list">
            <img src={cart} alt="buy" />
          </button>
        </div>
      </div>
          <div className="rating-container">
            <p className="rating">Rating:</p> <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
          </div>
    </div>
  );
}
