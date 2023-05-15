import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from './form.module.css'
import logo from '../../assets/Recurso 1.png'
import { Link } from "react-router-dom";

function verificarObjeto(objeto) {
  for (let clave in objeto) {
    if (objeto[clave] !== "") {
      return false;
    }
  }
  return true;
}

export default function FormRegister() {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    email: "*",
    name: "*",
    lastName: "*",
    nickname: "*",
    birthDate: "*",
    password: "*",
    passwordRepit: "*",
    street: "*",
    number: "*",
  });
  const [input, setInput] = useState({
    email: "",
    name: "",
    lastName: "",
    nickname: "",
    birthDate: "",
    password: "",
    passwordRepit: "",
    street: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "street" || e.target.name === "number") {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
        address: `${input.street} ${input.number}`,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
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
      dispatch(postForm(input));
      alert("Usuario Creado Con Exito");
      setInput({
        email: "",
        name: "",
        lastName: "",
        nickname: "",
        birthDate: "",
        password: "",
        passwordRepit: "",
        street: "",
        number: "",
        address: "",
      });
      setErrors({
        email: "*",
        name: "*",
        lastName: "*",
        nickname: "*",
        birthDate: "*",
        password: "*",
        passwordRepit: "*",
        street: "*",
        number: "*",
      });
    } else {
      alert("Completa correctamente los campos");
    }
  };

  return (
    <div className={styles.allForm}>
      <img src={logo} alt="" className={styles.tukimark} />
      <div className={styles.div}>
        <div className={styles.divH1}>
          <h1>Register</h1>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={styles.divForm}
          action="/create"
          method="POST"
        >
          <div className={styles.divAlreadyRegister}>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Email address"
              className={styles.inputLarge}
            />
            {<span>{errors.email}</span>}
          </div>
          <div className={styles.divAlreadyRegister}>
            <input
              type="text"
              value={input.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
              className={styles.inputsmall}
            />
            {<span>{errors.name}</span>}
            <input
              type="text"
              value={input.lastName}
              onChange={handleChange}
              name="lastName"
              placeholder="Last Name"
              className={styles.inputsmall}
            />
            {<span>{errors.lastName}</span>}
          </div>
          <div className={styles.divAlreadyRegister}>
            <input
              type="text"
              value={input.nickname}
              onChange={handleChange}
              name="nickname"
              placeholder="Nick Name"
              className={styles.inputsmall}
            />
            {<span>{errors.nickname}</span>}
            <input
              type="date"
              value={input.birthDate}
              onChange={handleChange}
              name="birthDate"
              placeholder="dd/mm/aaaa"
              className={styles.inputsmall}
            />
            {<span>{errors.birthDate}</span>}
          </div>
          <div className={styles.divAlreadyRegister}>
            <input
              type="password"
              value={input.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              className={styles.inputLarge}
            />
            {<span>{errors.password}</span>}
          </div>
          <div className={styles.divAlreadyRegister}>
            <input
              type="password"
              value={input.passwordRepit}
              onChange={handleChange}
              name="passwordRepit"
              placeholder="Repeat Password"
              className={styles.inputLarge}
            />
            {<span>{errors.passwordRepit}</span>}
          </div>
          <div className={styles.divAlreadyRegister}>
            <input
              type="text"
              value={input.street}
              onChange={handleChange}
              name="street"
              placeholder="Street"
              className={styles.inputsmall}
            />
            {<span>{errors.street}</span>}
            <input
              type="text"
              value={input.number}
              onChange={handleChange}
              name="number"
              placeholder="Number"
              className={styles.inputsmall}
            />
            {<span>{errors.number}</span>}
          </div>
          <div className={styles.divAlreadyRegister}>
            <h6> Are you already registered ?</h6>
            <button className={styles.buttonAlreadyRegister}>
              <Link to="/formLogin" className={styles.link}>
                Login
              </Link>
            </button>
          </div>
          <div className={styles.divAlreadyRegister}>
            <button type="submit" className={styles.buttonCreate}>
              Create User
            </button>
          </div>
          <div className={styles.divAlreadyRegister}>
            <button className={styles.buttonHome}>
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
