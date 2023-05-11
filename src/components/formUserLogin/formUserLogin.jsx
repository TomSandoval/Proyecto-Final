import { useDispatch } from "react-redux";
import React, { useState , useEffect } from 'react';

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
        email:'',
        password:'',
    });
    const [errors, setErrors] =useState({
        email:'*',
        password:'*',
    });

    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
        //Validation({...input ,[e.target.name]:e.target.value,},setErrors, errors,e);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const verificar=verificarObjeto(errors)
        if (verificar) {
            dispatch(postForm(input));
            setInput({
                email:'*',
                password:'*',
            });
            setErrors({
                email:'*',
                password:'*',
            })

        }else{
            alert('Completa correctamente los campos')

        }
    };

    return(
        <div>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <input 
                type="text" 
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Email address"
                />
            </div>
            <div>
                <input 
                type="password" 
                value={input.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                />
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>
                <Link to={'/formRegister'}>No tengo Cuenta</Link>
            </div>
            </form>
        </div>
    )
}