import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { getCategories } from "../../redux/actions";
import styles from './form.module.css'
import { Link, useNavigate } from "react-router-dom";
import Validation from "./validacion";
import { postCreate } from "../../redux/actions";
import { FormGroup, Input } from "reactstrap";
import axios from "axios";
import logo from "../../assets/Recurso 1.png"

function verificarObjeto(objeto) {
    for (let clave in objeto) {
        if (objeto[clave] !== '') {
            console.log(objeto);
            return false;
        }
    }
    return true;
}
  
export default function FormCreateProducs() {
    const allCategories = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);


    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        isOnSale: false,
        salePrice: '',
        email: '',
        status: '',
        categories: '',
        img: [],
    });

    const [errors, setErrors] = useState({
        name: '*',
        description: '*',
        price: '*',
        stock: '*',
        email: '*',
        status: '*',
        categories: '*',
        salePrice: '',
        img: '*',

    });

    const handleChange = (e) => {
        if (e.target.name === 'isOnSale') {
            if (input.isOnSale === false) {
                setInput({
                    ...input,
                    isOnSale: true
                })
            } else {
                setInput({
                    ...input,
                    isOnSale: false,
                })
            }
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })
            Validation({ ...input, [e.target.name]: e.target.value, }, setErrors, errors, e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const verificar = verificarObjeto(errors)
        if (verificar) {
            dispatch(postCreate(input));
            setInput({
                name: '',
                description: '',
                price: '',
                stock: '',
                isOnSale: false,
                salePrice: '',
                email: '',
                status: '',
                categories: '',
                img: [],
            });
            setErrors({
                name: '*',
                description: '*',
                price: '*',
                stock: '*',
                email: '*',
                status: '*',
                categories: '*',
                salePrice: '',
                img: '*',
            })
            alert('producto creado con exito')
            navigate('/')

        } else {
            alert('Completa correctamente los campos')

        }
    };

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'tukimarquet');
        setLoading(true);
        const res = await axios.post('https://api.cloudinary.com/v1_1/diyccpins/image/upload', data)
        const file = await res.data;
        setInput({
            ...input,
            img: [...input.img, file.secure_url]
        });
        setLoading(false)
        Validation({ ...input, img: [...input.img, file.secure_url], }, setErrors, errors, e);
    }

    return (
        <div className={styles.container}>

        <Link to={'/'} ><img src={logo} alt="logo" className={styles.logo} /></Link>
        <div className={styles.div}>
            <form action='/create' method='POST' className={styles.divForm} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.divAlreadyRegister}>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Nombre del producto"
                        className={styles.inputMail}
                    />
                    {<span>{errors.name}</span>}
                    <span className={styles.register}>Ingresa tu producto</span>
                </div>
                <div className={styles.divAlreadyRegister}>
                    <input
                        type="text"
                        name="description"
                        onChange={handleChange}
                        placeholder="Descripción"
                        className={styles.inputMail}
                    />
                    {<span>{errors.description}</span>}
                </div>
                <div className={styles.divAlreadyRegister}>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        className={styles.inputMail}
                    />
                    {<span>{errors.email}</span>}
                </div>
                <div className={styles.divAlreadyRegister}>
                    <input
                        type="text"
                        name="price"
                        onChange={handleChange}
                        placeholder="Precio"
                        className={styles.inputMail}
                    />
                    {<span>{errors.price}</span>}
                </div>
                <div className={styles.divAlreadyRegister}>
                    <input
                        type="text"
                        name="stock"
                        onChange={handleChange}
                        placeholder="Stock"
                        className={styles.inputMail}
                    />
                    {<span>{errors.stock}</span>}
                </div>
                <div className={styles.divAlreadyRegister}>
                    <label className={styles.options} htmlFor="isOnSale">¿Está en oferta?</label>
                    <input
                        type="checkbox"
                        name="isOnSale"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.divAlreadyRegister}>
                    <input
                        type="text"
                        name="salePrice"
                        placeholder="Precio Oferta"
                        onChange={handleChange}
                        className={styles.inputMail}
                        style={{ display: input.isOnSale ? "block" : "none" }}
                    />
                    {<span style={{ display: input.isOnSale ? "block" : "none" }}>
                        {input.isOnSale === "none" ? setErrors({ ...errors, salePrice: '' }) : errors.salePrice}
                    </span>}
                </div>
                <div className={styles.divAlreadyRegister} key='status-product'>
                    <label className={styles.options} htmlFor="">Estado del producto: </label>
                    <select name="status" id="" onChange={handleChange}>
                        <option key='' value="*">       </option>
                        <option key='nuevo' value="USADO">Usado</option>
                        <option key='usado' value="NUEVO">Nuevo</option>
                    </select>
                {<span>{errors.status}</span>}
            </div>
            <div className={styles.divAlreadyRegister}>
                <select name="category" id="" onChange={handleChange}>
                    <option value='*'>      </option>
                    {allCategories?.map(e => (
                        <option key={e} value={e.name}>{e.name}</option>
                    ))}
                 </select>
                 {<span>{errors.category}</span>}
            </div>
            <div className={styles.divAlreadyRegister}>

                <div className={styles.divAlreadyRegister}>
                <label className={styles.options} htmlFor="">Categorías: </label>
                    <select name="categories" id="" onChange={handleChange}>
                        <option value='*'>      </option>
                        {allCategories?.map(e => (
                            <option key={e} value={e.name}>{e.name}</option>
                        ))}
                    </select>
                    {<span>{errors.categories}</span>}
                </div>
                <div className={styles.divAlreadyRegister}>

                    <FormGroup>
                        <Input
                            type="file"
                            name="img"
                            placeholder="Sube foto aqui"
                            onChange={uploadImage}
                        />
                        {loading ? <label htmlFor="">Loading Image</label> : (input.img.map((i, index) => (
                            <img key={index} src={i} style={{ width: '300px' }} />
                        )))}
                        {<span>{errors.img}</span>}
                    </FormGroup>

                </div>
                <div className={styles.divAlreadyRegister}>
                    <button className={styles.buttonHome}>Crea tu producto</button>
                </div>
                <div className={styles.divAlreadyRegister}>
                    <button className={styles.buttonHome}><Link to='/' className={styles.link}>Home</Link></button>
                </div>
            </form>
        </div>
        </div>
    )
}