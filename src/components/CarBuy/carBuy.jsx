import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Card from "../Products/Card";
import { deleteProduct, aumentarCantidad, total, disminuirCantidad } from "../../redux/actions";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import paypal from '../../assets/paypal.png'


   //! NO PROBAR CON SUS DATOS REALES PORQUE PODRIA GENERARLES UN COBRO REAL!!!!!!

    //! VER EL MANEJO DE MONEDA https://www.currencyconverterapi.com O https://www.exchangerate-api.com => APIS PARA CONVERSION DE MONEDAS

    //? EMAIL ID PARA PRUEBA DE PAGO: sb-asjrj25998351@personal.example.com
    //? CONTRASEÑA DE PRUEBA PARA EL PAGO: @Z8qpk_]
    

export default function CarBuy() {
    const carrito = useSelector((state) => state.carrito);
    const totalDeCompra = useSelector((state) => state.totalDeCompra)
    console.log(totalDeCompra);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(total(carrito.reduce((acc, el) => acc + (parseFloat(el.price) * parseFloat(el.cantidad)), 0)));
    }, [dispatch, totalDeCompra, carrito]);

    const aumentar = (e, id) => {
        e.preventDefault();
        dispatch(aumentarCantidad(id))
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
    const amount = totalDeCompra.toString();;
    const eliminarProducto = (e, id) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }
    return carrito.length > 0 ? (
        <div>
            {carrito?.map((p, index) => (
                <div key={index}>
                    <button onClick={(e) => eliminarProducto(e, p.id)}>❌</button>
                    <h3>Cantidad: <button onClick={(e) => disminuir(e, p)}>-</button>{p.cantidad}<button onClick={(e) => aumentar(e, p.id)}>+</button></h3>
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
            <h1>${totalDeCompra}</h1>
            <div className='paypal'>
            <h1>Prueba pago PayPal</h1>
            <img
                height="300"
                src={paypal}
                alt='logo_paypal'
            />
            <p>
                <span className='price'>${amount}</span>
            </p>
            <PayPalScriptProvider options={{ "client-id": "AYnGi5Q7vB4KoDDomMYaUBRv6T0h05oPsHOIBx6AE-JSP7JwyP6On7Ldvvk_DmNzar_QbSAMmf2IKuTJ" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount, //! NO TOCAR ESTAS LINEAS O SE CRASHEA EL COMPONENTE
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