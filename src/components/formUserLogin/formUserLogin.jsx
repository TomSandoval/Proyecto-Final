import { useDispatch } from "react-redux";
import React, { useState , useEffect } from 'react';
import Validation from "./validation";
import { postLogin } from '../../redux/actions.js';
import styles from './form.module.css'

import { Link} from "react-router-dom";

function verificarObjeto(objeto) {
    for (let clave in objeto) {
      if (objeto[clave]!=='') {
        console.log(objeto);
        return false;
      }
    }
    return true;
  }

export default function FormUserLogin(){
    const dispatch = useDispatch();

    const [input , setInput]=useState({
        nickName:'',
        password:'',
    });
    const [errors, setErrors] =useState({
        nickName:'*',
        password:'*',
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
            dispatch(postLogin(input));
            setInput({
                nickName:'',
                password:'',
            });
            setErrors({
                nickName:'*',
                password:'*',
            })

        }else{
            alert('Completa correctamente los campos')

        }
    };

    return(
        <div className={styles.div}>
            <form action='/login' method='POST'onSubmit={(e)=>handleSubmit(e)} className={styles.divForm}>
            <div className={styles.divAlreadyRegister}>
                <input 
                type="text" 
                name="nickName"
                value={input.nickName}
                onChange={handleChange}
                placeholder="Nick Name"
                className={styles.inputMail}
                />
                {<span>{errors.nickName}</span>}                
            </div>
            <div className={styles.divAlreadyRegister}>
                <input 
                type="password" 
                value={input.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                className={styles.inputMail}
                />
                {<span>{errors.password}</span>}
            </div>
            <div className={styles.divAlreadyRegister}>
                <button className={styles.buttonHome}>Login</button>
            </div>
            <div className={styles.divAlreadyRegister}>
                <Link to={'/formRegister'} >No tengo Cuenta</Link>
            </div>
            <div className={styles.divAlreadyRegister}>
                <button className={styles.buttonHome}><Link to='/' className={styles.link}>Continuar como Invitado</Link></button>
            </div>
            </form>
        </div>
    )
}