import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoCarro from "../../assets/cart-alt-regular-24.png";
import logoUser from "../../assets/user-regular-24.png";
import logoSearch from "../../assets/search-alt-regular-24.png";
import { useDispatch } from "react-redux";
import styles from "./searchBar.module.css";
import imagen from "../../assets/cart-regular-36.png";

import { getProductByName } from "../../redux/actions";

export default function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  function handleInput(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    console.log("hola");
    e.preventDefault();
    dispatch(getName(name));
  }

  function handleSubmit() {
    dispatch(getProductByName(name));
    setName("");
  }

  return (
    <div className={styles.divSearchBar}>
      <div className={styles.containerTuki}>
        <img src={imagen} alt="" />
        <span className={styles.tukimarket}>TukiMarket</span>
      </div>
      <div className={styles.containerInput}>
        <div className={styles.divInput}>
          <input
            type="search"
            placeholder="¿Que vas a llevar hoy?"
            value={name}
            onChange={(e) => handleInput(e)}
            className={styles.input}
          />

          <button onClick={handleSubmit} className={styles.buttonSerch}>
            <img src={logoSearch} className={styles.img} />
          </button>
        </div>
      </div>
      <div className={styles.divUser}>
        <div>
          <button className={styles.buttonLogin}>
            <Link to="/formLogin" className={styles.link}>
              <span>Login</span>
            </Link>
            <span className={styles.span1}>/</span>
            <Link to="/formRegister" className={styles.link}>
              <span>Register</span>
            </Link>
          </button>
        </div>
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
