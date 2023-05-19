import { useSelector, useDispatch } from "react-redux";
import React, { useEffect , useState } from "react";
import { deleteProduct, aumentarCantidad, total, disminuirCantidad, envioDetalle } from "../../redux/actions";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import paypal from '../../assets/paypal.png';


   //! NO PROBAR CON SUS DATOS REALES PORQUE PODRIA GENERARLES UN COBRO REAL!!!!!!

    //! VER EL MANEJO DE MONEDA https://www.currencyconverterapi.com O https://www.exchangerate-api.com => APIS PARA CONVERSION DE MONEDAS

    //? EMAIL ID PARA PRUEBA DE PAGO: sb-asjrj25998351@personal.example.com
    //? CONTRASEÑA DE PRUEBA PARA EL PAGO: @Z8qpk_]
    

export default function CarBuy() {
    const carrito = useSelector((state) => state.carrito);
    const totalDeCompra = useSelector((state) => state.totalDeCompra)
    const [showPayPal, setShowPayPal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(total(carrito.reduce((acc, el) => acc + (parseFloat(el.price) * parseFloat(el.cantidad)), 0)));
    }, [dispatch, totalDeCompra, carrito]);

    const aumentar = (e,p) => {
        e.preventDefault();
        if(p.cantidad === p.stock){
            alert(`No hay mas stock de ${p.name}`)
        }else{
            dispatch(aumentarCantidad(p.id))
        }
    }
    const disminuir = (e, p) => {
        e.preventDefault();
        if (p.cantidad > 1) {
            dispatch(disminuirCantidad(p.id))
        } else {
            dispatch(deleteProduct(p.id))
        }
    }
    const currency = 'USD';

    const eliminarProducto = (e, id) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const detalles={
        fecha:`${currentDay}-${currentMonth}-${currentYear}`,
        comprador:'feli.zarratea99@gmail.com',
        total:totalDeCompra,
        metodoDePago:'Paypal',
        productos:carrito,
    }
    
    return carrito.length > 0 ? (
        <div>
            <div >
            {carrito?.map((p, index) => (
                <div key={index} >
                    <div>
                        <button onClick={(e) => eliminarProducto(e, p.id)}>❌</button>
                    </div>

                        <img src={p.img} alt="" style={{ width: '200px', height: 'auto' }}/>
                    <div>
                        <button onClick={(e)=>disminuir(e,p)}>-</button>
                        <h3>{`Cantidad: ${p.cantidad}`}</h3>
                        <button onClick={(e)=>aumentar(e,p)}>+</button>

                    </div>

                    <h3>Total por Producto: ${parseFloat(p.price) * parseFloat(p.cantidad)}</h3>

                </div>

            ))}
            <h1>{`Total : ${totalDeCompra}`}</h1>

            </div>
            <div className='paypal'>
            <h1>Prueba pago PayPal</h1>
            {/*<img
                height="300"
                src={paypal}
                alt='logo_paypal'
            />
            <p>
                <span className='price'>{`$ ${totalDeCompra}`}</span>
            </p>*/}
            
            <PayPalScriptProvider options={{ "client-id": "AYnGi5Q7vB4KoDDomMYaUBRv6T0h05oPsHOIBx6AE-JSP7JwyP6On7Ldvvk_DmNzar_QbSAMmf2IKuTJ" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: totalDeCompra.toString(), //! NO TOCAR ESTAS LINEAS O SE CRASHEA EL COMPONENTE
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            // mensaje que muestra la compra aprobada
                            alert(
                                `Pago realizado por ${details.payer.name.given_name} de $${totalDeCompra}`
                            )
                            detalles.detallesDeCompra=details,
                            dispatch(envioDetalle(detalles));
                        });
                    }}
                />
            </PayPalScriptProvider>
            </div>
        </div>
    ) : (
        <div>
            <h1>Carrito Vacio 😢</h1>
        </div>
    )
}