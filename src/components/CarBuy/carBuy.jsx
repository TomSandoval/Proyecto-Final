import { useSelector ,useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Card from "../Products/Card";
import { deleteProduct , aumentarCantidad, total , disminuirCantidad} from "../../redux/actions";

export default function CarBuy() {
    const carrito=useSelector((state) => state.carrito);
    const totalDeCompra=useSelector((state) => state.totalDeCompra)
    console.log(totalDeCompra);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(total(carrito.reduce((acc,el) => acc + (parseFloat(el.price) * parseFloat(el.cantidad)) , 0)));
      }, [dispatch, totalDeCompra , carrito]);

    const aumentar=(e,id)=>{
        e.preventDefault();
        dispatch(aumentarCantidad(id))
    }
    const disminuir=(e,p)=>{
        e.preventDefault();
        if(p.cantidad>1 ){
            dispatch(disminuirCantidad(p.id))
        }else{
            dispatch(deleteProduct(p.id))
        }
    }

    const eliminarProducto = (e,id) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }
    return carrito.length> 0 ?(
        <div>
            <h1>{totalDeCompra}</h1>
            {carrito?.map((p, index) => (
                <div key={index}>
                    <button onClick={(e)=>eliminarProducto(e,p.id)}>❌</button>
                    <div>
                        <h3>Cantidad :</h3>
                        <button onClick={(e)=>disminuir(e,p)}>-</button>
                        <h3>{`Cantidad: ${p.cantidad}`}</h3>
                        <button onClick={(e)=>aumentar(e,p.id)}>+</button>
                    </div>
                    <Card
                      key={index}
                      name={p.name}
                      price={p.price}
                      img={p.img}
                      id={p.id}
                    ></Card>
                    <h3>Total por Producto: ${parseFloat(p.price) * parseFloat(p.cantidad)}</h3>
                    
                </div>
          ))}
            <h1>{`Total :$ ${totalDeCompra}`}</h1>

        </div>
    ):(
        <div>
            <h1>Carrito Vacio 😢</h1>
        </div>
    )
}