import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function FormRegister() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);
    const history = useSelector((state) => state.history);


    useEffect(() => {
        dispatch(shoppinghistory(userData.email));
      }, [dispatch]);



    return (
        <div>
            {
                history? (
                <>
                    car
                </>
                ): (
                    <h3> Todavia nos realizaste compras </h3>
                )
            }
        </div>
    )





}