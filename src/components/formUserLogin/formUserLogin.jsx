import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Validation from "./validation";
import { postLogin } from "../../redux/actions";
import styles from "./formLogin.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Recurso 1.png";
import logoTukiDark from "../../assets/tuki-market-darks.jpg";

function verificarObjeto(objeto) {
  for (let clave in objeto) {
    if (objeto[clave] !== "") {
      console.log(objeto);
      return false;
    }
  }
  return true;
}

export default function FormUserLogin() {
  const dispatch = useDispatch();
  const darkModes = useSelector((state) => state.darkModes);

  const [input, setInput] = useState({
    nickname: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    nickname: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    Validation(
      { ...input, [e.target.name]: e.target.value },
      setErrors,
      errors,
      e
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const verificar = verificarObjeto(errors);
    dispatch(postLogin(input));
  };

  return (
    <div className={darkModes ? styles.containerDark : styles.container}>
      <Link to={"/"}>
        <img
          src={darkModes ? logoTukiDark : logo}
          alt="logo"
          style={{ width: "340px" }}
          className={darkModes ? styles.logoDark : styles.logo}
        />
      </Link>
      <div className={darkModes ? styles.divDark : styles.div}>
        <h1 className={styles.register}>Ingreso</h1>
        <form
          action="/login"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
          className={styles.divForm}
        >
          <div className={styles.divAlreadyRegister}>
            <div className={styles.userNameInput}>
              <input
                type="text"
                name="nickname"
                value={input.nickname}
                onChange={handleChange}
                placeholder="Nombre"
                className={styles.inputMail}
              />
              {<span className={styles.errors}>{errors.nickName}</span>}
            </div>
          </div>

          <div className={styles.divAlreadyRegister}>
            <div className={styles.userNameInput}>
              <input
                type="password"
                value={input.password}
                onChange={handleChange}
                name="password"
                placeholder="Contraseña"
                className={styles.inputPassword}
              />
              {<span className={styles.errors}>{errors.password}</span>}
            </div>
          </div>
          <div className={styles.divAlreadyRegister}>
            <button className={styles.buttonHome}>Ingresar</button>
          </div>
          <div className={styles.divAlreadyRegister}>
            <Link to={"/formRegister"} className={styles.noRegister}>
              No tengo Cuenta
            </Link>
          </div>
          <div className={styles.divAlreadyRegister}>
            <button className={styles.buttonGuest}>
              <Link to="/" className={styles.link}>
                Continuar como Invitado
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
