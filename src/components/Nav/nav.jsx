import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logoCarro from "../../assets/cart-alt-regular-24.png";
import logoUser from "../../assets/user-regular-24.png";
import logoSearch from "../../assets/search-alt-regular-24.png";
import logo from "../../assets/Recurso 1.png";
import { getProductByName, darkMode } from "../../redux/actions";
import { useDispatch , useSelector} from "react-redux";
import styles from "./searchBar.module.css";

export default function SearchBar({ view }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const carrito=useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const darkModes = useSelector((state) => state?.darkModes);

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getName(name));
  }

  function handleSubmit() {
    dispatch(getProductByName(name));
    setName("");
    navigate(`/Search/${name}`);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  function handleChangeOn() {
    dispatch(darkMode(true));
  }

  function handleChangeOff() {
    dispatch(darkMode(false));
  }

  return (
    <div
      className={!darkModes ? styles.divSearchBar_dark : styles.divSearchBar}
    >
      <div className={styles.logoContainer}>
        <Link className={styles.logo} to="/">
          <img className={styles.logoImg} src={logo} alt="TukiMarket" />
        </Link>
      </div>
      <div>
        {darkModes ? (
          <div className="button-container">
            <button onClick={handleChangeOff}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(0, 0, 0, 1)" }}
              >
                <path d="M8 9c-1.628 0-3 1.372-3 3s1.372 3 3 3 3-1.372 3-3-1.372-3-3-3z"></path>
                <path d="M16 6H8c-3.3 0-5.989 2.689-6 6v.016A6.01 6.01 0 0 0 8 18h8a6.01 6.01 0 0 0 6-5.994V12c-.009-3.309-2.699-6-6-6zm0 10H8a4.006 4.006 0 0 1-4-3.99C4.004 9.799 5.798 8 8 8h8c2.202 0 3.996 1.799 4 4.006A4.007 4.007 0 0 1 16 16zm4-3.984.443-.004.557.004h-1z"></path>
              </svg>
            </button>
          </div>
        ) : (
          <div className="button-container">
            <button onClick={handleChangeOn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(0, 0, 0, 1)" }}
              >
                <path d="M16 6H8c-3.296 0-5.982 2.682-6 5.986v.042A6.01 6.01 0 0 0 8 18h8c3.309 0 6-2.691 6-6s-2.691-6-6-6zm0 9c-1.627 0-3-1.373-3-3s1.373-3 3-3 3 1.373 3 3-1.373 3-3 3z"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
      {view ? (
        <div className={styles.divInput}>
          <input
            type="search"
            value={name}
            placeholder="¿Que vas a llevar hoy?"
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            className={styles.input}
          />

          <button onClick={handleSubmit} className={styles.buttonSerch}>
            <img src={logoSearch} className={styles.img} />
          </button>
        </div>
      ) : null}

      <div className={styles.divUser}>
        <div>
          <button className={styles.buttonLogin}>
            <Link to="/formLogin" className={styles.link}>
              Iniciar Sesión
            </Link>
            <span className={styles.span1}>|</span>
            <Link to="/formRegister" className={styles.link}>
              Registrarse
            </Link>
            <span className={styles.span1}>|</span>
            <Link to="/formCreateProduct" className={styles.link}>
              Crear
            </Link>
          </button>
        </div>
        <button className={styles.button}>
          <Link to="/carroBuy">
            <img src={logoCarro} className={styles.img2} />
          </Link>
            <span>{carrito.length}</span>
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
