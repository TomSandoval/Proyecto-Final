import { useSelector, useDispatch } from "react-redux";
import React, { useEffect , useState } from "react";
import { deleteProduct, aumentarCantidad, total, disminuirCantidad, checkExpiration, envioDetalle, deleteAllCart } from "../../redux/actions";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import paypal2 from '../../assets/paypal2.png';
import Footer from "../Footer/Footer";
import "./carBuyst.css";
import { Link } from "react-router-dom";
import { Toaster, toast } from 'sonner'

    //! NO PROBAR CON SUS DATOS REALES PORQUE PODRIA GENERARLES UN COBRO REAL!!!!!!

    //! VER EL MANEJO DE MONEDA, Y COMO AGREGAR EN AMOUNT EL MONTO AUTOMATICAMENTE 
    //! https://www.currencyconverterapi.com O https://www.exchangerate-api.com => APIS PARA CONVERSION DE MONEDAS

    //? EMAIL ID PARA PRUEBA DE PAGO: sb-asjrj25998351@personal.example.com
    //? CONTRASEÑA DE PRUEBA PARA EL PAGO: @Z8qpk_]
    


export default function CarBuy() {
    const carrito = useSelector((state) => state.carrito);
    const totalDeCompra = useSelector((state) => state.totalDeCompra)
    const [showPayPal, setShowPayPal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(total(carrito.reduce((acc, el) => acc + ((parseFloat(el.price) * parseFloat(el.cantidad))), 0)));
    }, [dispatch, totalDeCompra, carrito]);
    const aumentar = (e, p) => {
        e.preventDefault();
        if (p.cantidad === p.stock) {
            alert(`No hay mas stock de ${p.name}`)
        } else {
            dispatch(aumentarCantidad(p.id))
        }
    }
    const disminuir = (e, p) => {
        e.preventDefault();
        if (p.cantidad > 1) {
            dispatch(disminuirCantidad(p.id))
        } else {
            toast.error(`${p.name} fue eliminado de tu carrito`)
            dispatch(deleteProduct(p.id))
        }
    }
    const borrarCompra = (e) => {
        e.preventDefault();
        localStorage.removeItem('carrito')
        dispatch(deleteAllCart());
    }

    const currency = 'USD';

    const eliminarProducto = (e,p) => {
        e.preventDefault();
        dispatch(deleteProduct(p.id));
        toast.error(`${p.name} fue eliminado de tu carrito`)
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

    const reloadPage = () => {
        window.location.reload();
    };

    

    return carrito.length > 0 ? (
        <div>
            <div className="search">
            </div>
            <div className="cartContainer container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <h6 className="mb-0 text-muted">{`${carrito.length} items`}</h6>
                                            </div>
                                            <hr className="my-4" />
                                            {carrito?.map((p, index) => (
                                                <div className="row mb-4 d-flex justify-content-between align-items-center" key={index}>
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src={p.img} className="img-fluid rounded-3" alt={p.name} />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <h6 className="text-muted">{p.name}</h6>
                                                        <h6 className="text-black mb-0">Total por Producto: ${parseFloat(p.price) * parseFloat(p.cantidad)}</h6>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-link px-2" onClick={(e) => disminuir(e, p)}>-</button>
                                                        <span>{p.cantidad}</span>
                                                        <button className="btn btn-link px-2" onClick={(e) => aumentar(e, p)}>+</button>
                                                    </div>
                                                    <div className="col-md-4 col-lg-3 col-xl-2">
                                                        <h6 className="text-muted">Total: ${parseFloat(p.price) * parseFloat(p.cantidad)} </h6>
                                                        <button className="btn btn-link text-danger text-decoration-none" onClick={(e) => eliminarProducto(e, p)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h6 className="text-black mb-0">Total</h6>
                                                <h6 className="text-black mb-0">{`$${totalDeCompra}`}</h6>
                                            </div>
                                            <button className="btn btn-danger btn-block btn-lg" onClick={borrarCompra}>Delete all</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="p-5">
                                            <h1 className="fw-bold mb-0 text-black">Checkout</h1>
                                            <hr className="my-5" />
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="text-black mb-0">Total productos:</h4>
                                                <h4 className="text-black mb-0">{`${carrito.length} items`}</h4>
                                            </div>
                                            


                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h3 className="text-black mb-0">Total</h3>
                                                <h3 className="text-black mb-0">{`$${totalDeCompra}`}</h3>
                                            </div>
                                           {/* <div className="text-center my-3" style={{ marginTop: '50px' }}>
                                                <button className="btn btn-primary btn-lg" ><Link to={'/buy'} style={{ textDecoration: 'none', color: '#efe9e9' }}> Comprar 🚚 </Link></button>
                                            </div>*/}

                                            /*
                                            <div className="mt-3">
                                                <img src={paypal2} alt="PayPal" className="img-fluid" />
                                            </div>
                                            <div className="text-center my-3">
                                                <button className="btn btn-primary btn-lg" onClick={() => reloadPage()}>PayPal</button>
                                            </div>
                                            <div className="text-center my-3">
                                                <button className="btn btn-primary btn-lg" onClick={() => setShowPayPal(true)}>Proceed to Checkout</button>
                                            </div>

                                            {showPayPal && (
                                                <PayPalScriptProvider options={{ "client-id": "AYnGi5Q7vB4KoDDomMYaUBRv6T0h05oPsHOIBx6AE-JSP7JwyP6On7Ldvvk_DmNzar_QbSAMmf2IKuTJ" }}>
                                                    <PayPalButtons
                                                        style={{ layout: "horizontal" }}
                                                        createOrder={(data, actions) => {
                                                            return actions.order.create({
                                                                purchase_units: [
                                                                    {
                                                                        amount: {
                                                                            currency_code: currency,
                                                                            value: totalDeCompra,
                                                                        },
                                                                    },
                                                                ],
                                                            });
                                                        }}
                                                        onApprove={(data, actions) => {
                                                            return actions.order.capture().then((details) => {
                                                                console.log(details);
                                                                detalles.detallesDeCompra=details,
                                                                dispatch(envioDetalle(detalles));
                                                                window.alert("Pago completado ¡Gracias por tu compra!");
                                                            });
                                                        }}
                                                    />
                                                </PayPalScriptProvider>
                                                    )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) : (
        <div>
            <h1>No hay productos en el carrito</h1>
        </div>
    );
}
