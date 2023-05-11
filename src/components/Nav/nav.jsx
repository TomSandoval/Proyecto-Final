import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoCarro from "../../assets/cart-alt-regular-24.png";
import logoUser from "../../assets/user-regular-24.png";
import logoSearch from "../../assets/search-alt-regular-24.png";
import { useDispatch } from "react-redux";
import styles from "./searchBar.module.css";
import { getProductByName } from "../../redux/actions";

export default function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch()

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleSubmit() {
    dispatch(getProductByName(name))
    setName("")
  }

  return (
    <div className={styles.divSearchBar}>
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
          <Link to="/formRegister">
            <img src={logoUser} className={styles.img2} />
          </Link>
        </button>
      </div>
    </div>
  );
}
