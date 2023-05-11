import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import Validation from "./validacion.js";
import { useDispatch } from 'react-redux';
import { postForm } from '../../redux/actions.js';
import styles from './form.module.css'

function verificarObjeto(objeto) {
    for (let clave in objeto) {
      if (objeto[clave]!=='') {
        console.log(objeto);
        return false;
      }
    }
    return true;
  }

export default function FormRegister(){
    const dispatch = useDispatch();
    const [errors, setErrors] =useState({
        email:'*',
        name:'*',
        lastName:'*',
        nickname:'*',
        birthDate:'*',
        password:'*',
        passwordRepit:'*',
    });
    const [input , setInput]=useState({
        email:'',
        name:'',
        lastName:'',
        nickname:'',
        birthDate:'',
        password:'',
        passwordRepit:'',
    });

    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
        Validation({...input ,[e.target.name]:e.target.value,},setErrors, errors,e);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        const verificar=verificarObjeto(errors)
        if (verificar) {
            dispatch(postForm(input));
            alert('Usuario Creado Con Exito')
            setInput({
                email:'*',
                name:'*',
                lastName:'*',
                nickname:'*',
                birthDate:'',
                password:'*',
                passwordRepit:'*',
            });
            setErrors({
                email:'*',
                name:'*',
                lastName:'*',
                nickname:'*',
                birthDate:'*',
                password:'*',
                passwordRepit:'*',
            })
        }else{
            alert('Completa correctamente los campos')

        }
    };

    return(
        <div className={styles.div}>
            <form onSubmit={(e)=>handleSubmit(e)}  className={styles.divForm}>
                <div className={styles.divAlreadyRegister}>
                    <input 
                    type="text" 
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className={styles.inputMail}
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
                    className={styles.input}
                    />
                    {<span>{errors.name}</span>}
                    <input 
                    type="text" 
                    value={input.lastName}
                    onChange={handleChange}
                    name="lastName"
                    placeholder="Last Name"
                    className={styles.input}
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
                    className={styles.input}
                    />
                    {<span>{errors.nickname}</span>}
                    <input 
                    type="date" 
                    value={input.birthDate}
                    onChange={handleChange}
                    name="birthDate"
                    placeholder="dd/mm/aaaa"
                    className={styles.input}
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
                    className={styles.inputPassword}
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
                    className={styles.inputPassword}
                    />
                    {<span>{errors.passwordRepit}</span>}
                </div>
                <div className={styles.divAlreadyRegister}>
                    <h5> Are you already registered ?</h5>
                    <button className={styles.buttonAlreadyRegister}><Link to='/formLogin' className={styles.link}> Login </Link></button>
                </div>
                <div className={styles.divAlreadyRegister}>
                <button 
                type='submit' className={styles.buttonCreate}>Create User</button>
                </div>
            <div className={styles.divAlreadyRegister}>
                <button className={styles.buttonHome}><Link to='/' className={styles.link}>Continuar como Invitado</Link></button>
            </div>
            </form>
        </div>
    )
}







