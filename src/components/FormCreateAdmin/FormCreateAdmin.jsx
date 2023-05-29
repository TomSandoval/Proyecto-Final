import React, { useState } from "react";
import SearchBar from "../Nav/nav";
import DashboardLeft from "../DasboardLeft/DashboardLeft";
import style from "./FormCreateAdmin.module.css";
import Validation from "./Validation";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "../../redux/actions";
import Swal from "sweetalert2";

export default function FormCreateAdmin() {
  const dispatch = useDispatch();
  // const allAdmins = useSelector((state) => state.allAdmins);

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    nickname: "",
    email: "",
    birthDate: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    nickname: "",
    email: "",
    birthDate: "",
    address: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    setErrors(Validation({ ...form, [property]: value }, errors));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !errors?.name &&
      !errors?.lastname &&
      !errors?.nickname &&
      !errors?.email &&
      !errors?.birthDate &&
      !errors?.address &&
      !errors?.password
    ) {
      dispatch(createAdmin(form));
      alert("Admin Creado Exitosamente");
    } else {
      Swal.fire({
        title: "Introduzca los datos Correctamente",
        icon: "error",
      });
    }
  };

  return (
    <div className={style.Allform}>
      <SearchBar />
      <DashboardLeft />
      <form onSubmit={handleSubmit} className={style.FormAdmin}>
        <h1>Crear Administrador</h1>
        <div className={style.formContainer}>
          <div className={style.NameLast}>
            <div>
              <p htmlFor="">Nombre</p>
              <input
                className={style.right}
                type="text"
                name="name"
                onChange={handleChange}
              ></input>
              <span>{errors.name}</span>
            </div>
            <div>
              <p htmlFor="">Apellido</p>
              <input type="text" name="lastname" onChange={handleChange} />
              <span>{errors.lastname}</span>
            </div>
          </div>
          <div className={style.emailNick}>
            <div>
              <p htmlFor="">Email</p>
              <input
                className={style.right}
                type="text"
                name="email"
                onChange={handleChange}
              />
              <span>{errors.email}</span>
            </div>
            <div>
              <p htmlFor="">Nickname</p>
              <input type="text" name="nickname" onChange={handleChange} />
              <span>{errors.nickname}</span>
            </div>
          </div>
          <div className={style.adreessDate}>
            <div>
              <p htmlFor="">Direccion</p>
              <input
                className={style.right}
                type="text"
                name="address"
                onChange={handleChange}
              />
              <span>{errors.address}</span>
            </div>
            <div>
              <p htmlFor="">fecha de nacimiento</p>
              <input type="date" name="birthDate" onChange={handleChange} />
              <span>{errors.birthDate}</span>
            </div>
          </div>
          <div>
            <p htmlFor="">Contraseña</p>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <p>{errors.password}</p>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
}
