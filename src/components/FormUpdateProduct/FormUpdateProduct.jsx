import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getCategories } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./Validation";
import { postCreate } from "../../redux/actions";
import { FormGroup, Input } from "reactstrap";
import axios from "axios";

function verificarObjeto(objeto) {
  for (let clave in objeto) {
    if (objeto[clave] !== "") {
      console.log(objeto);
      return false;
    }
  }
  return true;
}

export default function FormUpdateProduct() {
  const allCategories = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    isOnSale: false,
    salePrice: "0",
    email: "",
    status: "",
    categories: "",
    img: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    email: "",
    status: "",
    categories: "",
    salePrice: "",
    img: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "isOnSale") {
      if (input.isOnSale === false) {
        setInput({
          ...input,
          isOnSale: true,
        });
      } else {
        setInput({
          ...input,
          isOnSale: false,
        });
      }
    } else {
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificar = verificarObjeto(errors);
    if (verificar) {
      dispatch(postCreate(input));
      setInput({
        name: "",
        description: "",
        price: "",
        stock: "",
        isOnSale: false,
        salePrice: "0",
        email: "",
        status: "",
        categories: "",
        img: [],
      });
      setErrors({
        name: "",
        description: "",
        price: "",
        stock: "",
        email: "",
        status: "",
        categories: "",
        salePrice: "",
        img: "",
      });
      alert("producto creado con exito");
      navigate("/");
    } else {
      alert("Completa correctamente los campos");
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
    setInput({
      ...input,
      img: [...input.img, file.secure_url],
    });
    setLoading(false);
    Validation(
      { ...input, img: [...input.img, file.secure_url] },
      setErrors,
      errors,
      e
    );
  };

  return (
    <form action="/create" method="POST" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Nombre del producto"
        />
        {<span>{errors.name}</span>}
      </div>

      <div>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Descripción"
        />
        {<span>{errors.description}</span>}
      </div>

      <div>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        {<span>{errors.email}</span>}
      </div>

      <div>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          placeholder="Precio"
        />
        {<span>{errors.price}</span>}
      </div>

      <div>
        <input
          type="text"
          name="stock"
          onChange={handleChange}
          placeholder="Stock"
        />
        {<span>{errors.stock}</span>}
      </div>

      <label for="myCheckbox" htmlFor="isOnSale">
        ¿Está en oferta?
      </label>
      <input
        id="myCheckbox"
        type="checkbox"
        name="isOnSale"
        onChange={handleChange}
      />

      <input
        type="text"
        name="salePrice"
        placeholder="Precio Oferta"
        onChange={handleChange}
        style={{ display: input.isOnSale ? "block" : "none" }}
      />
      {
        <span style={{ display: input.isOnSale ? "block" : "none" }}>
          {input.isOnSale === "none"
            ? setErrors({ ...errors, salePrice: "" })
            : errors.salePrice}
        </span>
      }
      <label htmlFor="">Estado del producto:</label>
      <select defaultValue="Estado" name="status" id="" onChange={handleChange}>
        <option value="Estado">Seleccionar Estado</option>
        <option value="USADO">Usado</option>
        <option value="NUEVO">Nuevo</option>
      </select>
      {<span>{errors.status}</span>}

      <label htmlFor="">Categorías: </label>
      <select
        defaultValue="Categorias"
        name="categories"
        id=""
        onChange={handleChange}
      >
        <option value="Categorias">Seleccionar Categorias</option>
        {allCategories?.map((e, index) => (
          <option key={index} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      {<span>{errors.categories}</span>}

      <FormGroup>
        <Input
          type="file"
          name="img"
          placeholder="Sube foto aqui"
          onChange={uploadImage}
        />
        {loading ? (
          <label htmlFor="">Loading Image</label>
        ) : (
          input.img.map((i, index) => (
            <img key={index} src={i} style={{ width: "300px" }} />
          ))
        )}
        {<span>{errors.img}</span>}
      </FormGroup>

      <h6 htmlFor="">Desea activar o desactivar el producto</h6>

      <label htmlFor="">Activo</label>
      <input type="checkbox" />
      <label htmlFor="">Inactivo</label>
      <input type="checkbox" />

      <button>Crea tu producto</button>
      <button>
        <Link to="/">Home</Link>
      </button>
    </form>
  );
}
