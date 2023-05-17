import "./CardList.css";
import cart from '../../assets/cartShop.png';
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CardList(props) {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
      <div className="container-cardList" data-aos={props.dataAos}>
        <Link className="link" to={`/detail/${props.id}`}>
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
          <p className="stock">${props.price}</p>
          <button type="button" className="button-buy button-list">
            <img src={cart} alt="buy" />
          </button>
        </div>
      </div>
    </div>
  );
}
