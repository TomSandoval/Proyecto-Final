import React, { useState } from "react";
import SearchBar from "../Nav/nav";
import DashboardLeft from "../DasboardLeft/DashboardLeft";
import style from "./FormCreateAdmin.module.css";
import Validation from "./Validation";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "../../redux/actions";
import Swal from "sweetalert2";
import axios from "axios";
import { FormGroup, Input } from "reactstrap";

export default function FormCreateAdmin() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // const allAdmins = useSelector((state) => state.allAdmins);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    nickname: "",
    email: "",
    birthDate: "",
    address: "",
    password: "",
    picture: "",
    passwordRepit: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    nickname: "",
    email: "",
    birthDate: "",
    address: "",
    password: "",
    passwordRepit: "",
    picture: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    setErrors(
      Validation({ ...form, [property]: value }, errors, setErrors, event)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !errors?.name &&
      !errors?.lastName &&
      !errors?.nickname &&
      !errors?.email &&
      !errors?.birthDate &&
      !errors?.address &&
      !errors?.password &&
      !errors?.passwordRepit
    ) {
      dispatch(createAdmin(form));
      Swal.fire("Creado!", "Has creado un Administrador con Exito.", "success");
    } else {
      Swal.fire({
        title: "Introduzca los datos Correctamente",
        icon: "error",
      });
    }
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "tukimarquet");
    setLoading(true);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/diyccpins/image/upload",
      data
    );
    const file = await res.data;
    setForm({
      ...form,
      picture: file.secure_url,
    });
    setLoading(false);
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
              <span>{errors?.name}</span>
            </div>
            <div>
              <p htmlFor="">Apellido</p>
              <input type="text" name="lastName" onChange={handleChange} />
              <span>{errors?.lastName}</span>
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
              <span>{errors?.email}</span>
            </div>
            <div>
              <p htmlFor="">Nickname</p>
              <input type="text" name="nickname" onChange={handleChange} />
              <span>{errors?.nickname}</span>
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
              <span>{errors?.address}</span>
            </div>
            <div>
              <p htmlFor="">fecha de nacimiento</p>
              <input type="date" name="birthDate" onChange={handleChange} />
              <span>{errors?.birthDate}</span>
            </div>
          </div>
          <div>
            <p>Picture</p>
            <div>
              <FormGroup>
                <Input
                  type="file"
                  name="picture"
                  placeholder="Sube de perfil"
                  style={{ width: "100%" }}
                  accept="image/jpeg, image/jpg, image/webp, image/bmp, image/tiff, image/svg+xml"
                  onChange={uploadImage}
                />
                {loading ? (
                  <label htmlFor="">Loading Image</label>
                ) : (
                  <img
                    src={form.picture}
                    style={{
                      width: "200px",
                      marginTop: "12px",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </FormGroup>
            </div>
          </div>
          <div className={style.adreessDate}>
            <div>
              <p htmlFor="">Contraseña</p>
              <input
                className={style.right}
                type="password"
                name="password"
                onChange={handleChange}
              />
              <p>{errors?.password}</p>
            </div>
            <div>
              <p htmlFor="">Validar Contraseña</p>
              <input
                type="password"
                name="passwordRepit"
                onChange={handleChange}
              />
              <p>{errors?.passwordRepit}</p>
            </div>
          </div>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
}
