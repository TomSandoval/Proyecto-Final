import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./form.module.css";
import logo from "../../assets/Recurso 1.png";
import { Link } from "react-router-dom";
import Validation from "./validacion";
import { postForm } from "../../redux/actions";
import UserCreateError from "./UserCreateError/UserCreateError";
import UserCreateSuccesFull from "./UserCreateSuccesfull/UserCreateSuccesfull";

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
  const userCreateError = useSelector((state) => state.userCreateError);
  const userCreateSuccesfull = useSelector(
    (state) => state.userCreateSuccesfull
  );


  useEffect(()=>{
    if(userCreateSuccesfull) {
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
      })
    }
  },[])

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    lastName: "",
    nickname: "",
    birthDate: "",
    password: "",
    passwordRepit: "",
    street: "",
    number: "",
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
    }
  };

  return (
    <div className={styles.allForm}>
      <img src={logo} alt="" className={styles.tukimark} />
      {userCreateSuccesfull !== null ? (
        <UserCreateSuccesFull />
      ) : (
        <div className={styles.div}>
          {userCreateError  ? (
            <UserCreateError/>
          ) : (
            <form
              onSubmit={(e) => handleSubmit(e)}
              className={styles.divForm}
              action="/create"
              method="POST"
            >
              <div className={styles.divH1}>
                <h1>Registrarse</h1>
              </div>

              <div className={styles.allInputs}>
                <div className={styles.divAlreadyRegister}>
                  <div className={styles.inputEmail}>
                    <input
                      type="text"
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                      placeholder="Correo Electronico"
                      className={styles.inputLarge}
                    />
                    {<span className={styles.errors}>{errors.email}</span>}
                  </div>
                </div>
                <div className={styles.divAlreadyRegister}>
                  <div className={styles.inputNames}>
                    <div>
                      <input
                        type="text"
                        value={input.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="Nombre"
                        className={styles.inputsmall}
                      />
                      {<span className={styles.errors}>{errors.name}</span>}
                    </div>
                    <div>
                      <input
                        type="text"
                        value={input.lastName}
                        onChange={handleChange}
                        name="lastName"
                        placeholder="Apellido"
                        className={styles.inputsmall}
                      />
                      {<span className={styles.errors}>{errors.lastName}</span>}
                    </div>
                  </div>
                </div>
                <div className={styles.divAlreadyRegister}>
                  <div className={styles.secondGroup}>
                    <div className={styles.inputNickname}>
                      <input
                        type="text"
                        value={input.nickname}
                        onChange={handleChange}
                        name="nickname"
                        placeholder="Nombre de Usuario"
                        className={styles.inputsmall}
                      />
                      {<span className={styles.errors}>{errors.nickname}</span>}
                    </div>
                    <div>
                      <input
                        type="date"
                        value={input.birthDate}
                        onChange={handleChange}
                        name="birthDate"
                        className={styles.inputsmall}
                      />
                      {
                        <span className={styles.errors}>
                          {errors.birthDate}
                        </span>
                      }
                    </div>
                  </div>
                </div>
                <div className={styles.divAlreadyRegister}>
                  <div className={styles.inputPassword}>
                    <input
                      type="password"
                      value={input.password}
                      onChange={handleChange}
                      name="password"
                      placeholder="Contraseña"
                      className={styles.inputLarge}
                    />
                    {<span className={styles.errors}>{errors.password}</span>}
                  </div>
                </div>
                <div className={styles.divAlreadyRegister}>
                  <div className={styles.inputPassword}>
                    <input
                      type="password"
                      value={input.passwordRepit}
                      onChange={handleChange}
                      name="passwordRepit"
                      placeholder="Validar Contraseña"
                      className={styles.inputLarge}
                    />
                    {
                      <span className={styles.errors}>
                        {errors.passwordRepit}
                      </span>
                    }
                  </div>
                </div>
                <div className={styles.divAlreadyRegister}>
                  <div className={styles.addressInputs}>
                    <div className={styles.streetInput}>
                      <input
                        type="text"
                        value={input.street}
                        onChange={handleChange}
                        name="street"
                        placeholder="Calle"
                        className={styles.inputsmall}
                      />
                      {<span className={styles.errors}>{errors.street}</span>}
                    </div>
                    <div className={styles.streetInput}>
                      <input
                        type="text"
                        value={input.number}
                        onChange={handleChange}
                        name="number"
                        placeholder="Numero"
                        className={styles.inputsmall}
                      />
                      {<span className={styles.errors}>{errors.number}</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.divAlreadyRegister}>
                <h6>Ya tienes una cuenta ?</h6>
                <button className={styles.buttonAlreadyRegister}>
                  <Link to="/formLogin" className={styles.link}>
                    Iniciar Sesión
                  </Link>
                </button>
              </div>
              <div className={styles.divAlreadyRegister}>
                <button type="submit" className={styles.buttonCreate}>
                  Crear Usuario
                </button>
              </div>
              <div className={styles.divAlreadyRegister}>
                <button className={styles.buttonHome}>
                  <Link to="/" className={styles.link1}>
                    Continuar como Invitado
                  </Link>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
