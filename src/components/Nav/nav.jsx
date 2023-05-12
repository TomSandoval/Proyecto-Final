import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoCarro from "../../assets/cart-alt-regular-24.png";
import logoUser from "../../assets/user-regular-24.png";
import logoSearch from "../../assets/search-alt-regular-24.png";
import logo from '../../assets/Recurso 1.png'
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/actions";
import styles from "./searchBar.module.css";



export default function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch()
  function handleInput(e) {
    setName(e.target.value);
  }
  
  function handleSubmit(e){
    console.log('hola');
    e.preventDefault();
    dispatch(getName(name))
};

  function handleSubmit() {
    dispatch(getProductByName(name))
    setName("")
  }


  return (
    <div className={styles.divSearchBar}>
      <div className={styles.logoContainer}>
        <Link className={styles.logo} to='/'><img className={styles.logoImg} src={logo} alt="TukiMarket" /></Link>
      </div>
      <div className={styles.divInput}>
        <input
          type="search"
          value={name}
          onChange={(e) => handleInput(e)}
          className={styles.input}
        />

        <button onClick={handleSubmit} className={styles.buttonSerch}>


          <img src={logoSearch} className={styles.img} />
        </button>
      </div>
      <div className={styles.divUser}>
        <button className={styles.buttonLogin}>
          <Link to="/formRegister" className={styles.link}>
            Login/Register
          </Link>
        </button>
        <button className={styles.button}>
          <Link to="/carroBuy">
            <img src={logoCarro} className={styles.img2} />
          </Link>
        </button>
        <button className={styles.button}>
          <Link to="/formLogin">
            <img src={logoUser} className={styles.img2} />
          </Link>
        </button>
      </div>
    </div>
  );
}
