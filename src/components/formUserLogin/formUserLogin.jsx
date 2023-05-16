import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Validation from "./validation";
import { postLogin } from "../../redux/actions.js";
import styles from "./form.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Recurso 1.png";
import Footer from "../Footer/Footer";

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

  const [input, setInput] = useState({
    nickName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    nickName: "",
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
    if (verificar) {
      dispatch(postLogin(input));
      setInput({
        nickName: "",
        password: "",
      });
      setErrors({
        nickName: "*",
        password: "*",
      });
    } else {
      alert("Completa correctamente los campos");
    }
  };

  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.div}>
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
                name="nickName"
                value={input.nickName}
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

            <span className={styles.register}>Ingreso</span>
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
