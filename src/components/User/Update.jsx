import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SearchBar from "../Nav/nav";
import {getVentas, putStatus} from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./order.module.css";
import { LogarithmicScale } from 'chart.js';
import { Toaster, toast } from 'sonner'


function UpdateProduct() {
    const dispatch = useDispatch();
    const userData = localStorage.getItem('email');
    const ventas = useSelector((state) => state.ventas);
    const completo=ventas?.filter((order) => order.status === 'ENTREGADO')
    const enviado=ventas?.filter((order) => order.status === "ENVIADO")
    const pendiente=ventas?.filter((order) => order.status === "PENDIENTE")
    const [activeButton, setActiveButton] = useState('Pedido');
    const [status , setStatus] =  React.useState({
        status:'TODO',
    });
    const [update , setUpdate] =  React.useState(false);

    const [updateStatus , setUpdateStatus] =  React.useState({
        id:'',
        status:'',
        statusActual:''
    });
    useEffect(() => {
        if (userData) {
            dispatch(getVentas(userData));
        }
    }, [dispatch, ventas]);
    const handleStatus = (e)=>{
        setStatus({
            status: e.target.name,
        })
      }

    useEffect(() => {
        const currentPath = window.location.pathname.split('/').pop();
        if (currentPath === 'user') {
            setActiveButton('Perfil');
        } else if (currentPath === 'payment') {
            setActiveButton('Pagos');
        } else {
            setActiveButton('Pedido');
        }
    }, []);



    //! Estilos
    const background = {
        background: 'linear-gradient(243.18deg, #FF8300 0%, #FFD688 100%)',
        height: '150vh',
        width: '100vw'
    };
    const perfilButtonStyle = {
        width: '100%',
        textAlign: 'left',
        padding: '0',
        margin: '0',
        borderRadius: '0'
    };
    const titleButton = {
        textAlign: "left",
        fontSize: "24px"
    };
    const subtitleButton = {
        textAlign: "left"
    };
    const linkColor = {
        color: "white",
        textDecoration: "none",
    };
    const cardHeight = {
        height: "100%",
        width: "75%",
    };
    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '150px',
        marginBottom: '30px',
    };
    const products = {
        paddingTop: "-1vw",
        width: "75%"
    };
    const firstCard = {
        width: "300px"
    };
    const lastCard = {
        width: "75%"
    };
    const linkColor2 = {
        color: "black",
        textDecoration: "none",
        fontSize: "14px",
    };
    const links = {
        marginTop: "-25px",
    };
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/Detail/${id}`);
      }
    
      const onReviews = (id,status) => {
        setUpdate(true)
        setUpdateStatus({
            ...updateStatus,
            id:id,
            statusActual:status,
        })
    }

    const closeUpdate =() =>{
        setUpdateStatus({
            id:'',
            status:'',
            statusActual:''
        })
        setUpdate(false)
      }

      const handleUpdate = (e)=>{
        setUpdateStatus({
            ...updateStatus,
            status: e.target.name,
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(putStatus(updateStatus))
        toast.success(`Se cambio el estado a ${updateStatus.status} , gracias`),{
        }
        setUpdateStatus({
            id:'',
            status:'',
            statusActual:''
        })
        setUpdate(false)
      };



    return (
        <div style={background}>
                {update ? (
            <div className={`${styles.overlay}`}>
                <button type='button' className={styles.closebButton} onClick={()=>closeUpdate()}>❌</button>
              <form onSubmit={(e)=>handleSubmit(e)} className={`${styles.divForm}`}>
                <div>
                  <label htmlFor="descripcion" >Selecciona en el estado del producto: </label>
                </div>
                <div>
                  <button type="button" 
                  className={styles.submitButton} 
                  disabled={updateStatus.statusActual === 'PENDIENTE' || updateStatus.statusActual === 'ENVIADO' || updateStatus.statusActual === 'ENTREGADO'}
                  >En Preparacion 🛠️</button>
                </div>
                <div>
                  <button type="button" 
                  name='ENVIADO'
                  className={styles.submitButton}
                  onClick={(e)=>handleUpdate(e)}
                  disabled={updateStatus.statusActual === 'ENVIADO' || updateStatus.statusActual === 'ENTREGADO'}
                  >Enviado 🚚</button>
                </div>
                <div>
                  <button type="button" 
                  name='ENTREGADO'
                  className={styles.submitButton}
                  onClick={(e)=>handleUpdate(e)}
                  disabled={updateStatus.statusActual === 'ENTREGADO'}>Completado ✅</button>
                </div>
                <div>
                  <button type="submit" className={styles.submitButton}>Cambiar estado</button>
                </div>
              </form>
            </div>):<></>}
            <SearchBar/>
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-5 g-5" style={cardContainerStyle}>
                <div className="col">
                <div className='container-fluid' style={links}>
                        <Link to="/" style={linkColor2}>
                            Hogar &gt; &nbsp;
                        </Link>
                        <Link to="/user" style={linkColor2}>
                            Mi cuenta &gt; &nbsp;
                        </Link>
                        <Link to="/user/payment" style={linkColor2}>
                            Pagos
                        </Link>
                    </div>
                    <div className="card h-100 bg-secondary" style={firstCard}>
                        <div className="card-body">
                            <h5 className="card-title" style={titleButton}>Mi cuenta:</h5>
                            <button
                                type="button"
                                className={`btn btn-secondary btn-lg ${activeButton === 'Perfil' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                {activeButton === 'Perfil'}
                                <Link to="/user" style={linkColor}>
                                    Perfil
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary btn-lg ${activeButton === 'Pedidos' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/user/orders" style={linkColor}>
                                    Pedidos
                                </Link>
                            </button>
                            <Link to="/user/update" style={linkColor}>
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Vendidos' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    Vendidos
                                </button>
                            </Link>
                            <button
                                type="button"
                                className={`btn btn-secondary btn-lg ${activeButton === 'Pagos' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/user/payment" style={linkColor}>
                                    Pagos
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary btn-lg ${activeButton === 'Dirección de envío' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/user/adress" style={linkColor}>
                                    Dirección de envío
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary btn-lg ${activeButton === 'Centro de ayuda' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/contact" style={linkColor}>
                                    Centro de ayuda
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary btn-lg ${activeButton === 'Dirección de envío' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/ProductSale" style={linkColor}>
                                    Mis publicaciones
                                </Link>
                            </button>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">TukiMarket 🐸</small>
                        </div>
                    </div>
                </div>
                <div className="col" style={cardHeight}>
                    <div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item">
                                    {status.status==='TODO'?<a className="nav-link active" style={linkColor} aria-current="page" href="#" name='TODO' onClick={(e)=>handleStatus(e)}>Todo</a>:
                                    <a className="nav-link " style={linkColor} aria-current="page" href="#" name='TODO' onClick={(e)=>handleStatus(e)}>Todo</a>}
                                </li>

                                <li className="nav-item">
                                    {status.status==='PENDIENTE'?<a className="nav-link active" href="#" style={linkColor} name='PENDIENTE' onClick={(e)=>handleStatus(e)}>Procesando(0)</a>:
                                    <a className="nav-link " href="#" style={linkColor} name='PENDIENTE' onClick={(e)=>handleStatus(e)}>Procesando(0)</a>}
                                    
                                </li>
                                <li className="nav-item">
                                    {status.status==='ENVIADO'?
                                    <a className="nav-link active" href="#" style={linkColor} name='ENVIADO' onClick={(e)=>handleStatus(e)}>Enviado</a>:
                                    <a className="nav-link" href="#" style={linkColor} name='ENVIADO' onClick={(e)=>handleStatus(e)}>Enviado</a>
                                    }
                                </li>
                                <li className="nav-item">
                                    {status.status==='ENTREGADO'?
                                    <a className="nav-link active" href="#" style={linkColor} name='ENTREGADO' onClick={(e)=>handleStatus(e)}>Completado</a>:
                                    <a className="nav-link" href="#" style={linkColor} name='ENTREGADO' onClick={(e)=>handleStatus(e)}>Completado</a>
                                    }
                                </li>
                            </ul>

                        </div>
                    </div>
                    {status.status==="TODO"?<div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <h2>Ventas realizadas por el usuario:</h2>
                            {ventas ? (
                                <>
                                    {ventas.map((el) => el.detailOrders.map((e) => (
                                        <div key={`${el.id}-${e.productId}`} className={styles.divCompra} >
                                            <div onClick={()=>handleNavigate(e.product.id)}>
                                                <h3>{`Item: ${e.product.name}`}</h3>
                                                <h4>{`Precio: $${e.purchaseprice}`}</h4>
                                                <h4>{`Status ACtual: ${el.status}`}</h4>
                                                <h4>{`Fecha de compra: ${el.orderDate}`}</h4>
                                            </div>
                                            <div className={styles.divImg}>
                                            <button onClick={()=>onReviews(el.id , el.status)} className={styles.reviewsButton}>Cambiar Estado</button>
                                            <img src={e.product.img} style={{ width: "200px" }} alt="Product" />
                                            </div>
                                        </div>
                                    )))
                                    }
                                </>
                            ) : (
                                <h3>Todavía no has realizado venta.</h3>
                            )}
                        </div>
                    </div>:''}
                    {status.status==="PENDIENTE"?<div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <h2>Ventas en preparacion:</h2>
                            {ventas ? (
                                <>
                                    {pendiente.map((el) => el.detailOrders.map((e) => (
                                        <div key={`${el.id}-${e.productId}`} className={styles.divCompra} >
                                            <div onClick={()=>handleNavigate(e.product.id)}>
                                                <h3>{`Item: ${e.product.name}`}</h3>
                                                <h4>{`Precio: $${e.purchaseprice}`}</h4>
                                                <h4>{`Status ACtual: ${el.status}`}</h4>
                                                <h4>{`Fecha de compra: ${el.orderDate}`}</h4>
                                            </div>
                                            <div className={styles.divImg}>
                                            <button onClick={()=>onReviews(el.id , el.status)} className={styles.reviewsButton}>Cambiar Estado</button>
                                            <img src={e.product.img} style={{ width: "200px" }} alt="Product" />
                                            </div>
                                        </div>
                                    )))
                                    }
                                </>
                            ) : (
                                <h3>No tienes ventas en preparacion.</h3>
                            )}
                        </div>
                    </div>:''}
                
                    {status.status==="ENVIADO"?<div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <h2>Ventas enviadas:</h2>
                            {ventas ? (
                                <>
                                    {enviado.map((el) => el.detailOrders.map((e) => (
                                        <div key={`${el.id}-${e.productId}`} className={styles.divCompra} >
                                            <div onClick={()=>handleNavigate(e.product.id)}>
                                                <h3>{`Item: ${e.product.name}`}</h3>
                                                <h4>{`Precio: $${e.purchaseprice}`}</h4>
                                                <h4>{`Status ACtual: ${el.status}`}</h4>
                                                <h4>{`Fecha de compra: ${el.orderDate}`}</h4>
                                            </div>
                                            <div className={styles.divImg}>
                                            <button onClick={()=>onReviews(el.id , el.status)} className={styles.reviewsButton}>Cambiar Estado</button>
                                            <img src={e.product.img} style={{ width: "200px" }} alt="Product" />
                                            </div>
                                        </div>
                                    )))
                                    }
                                </>
                            ) : (
                                <h3>No tienes venta en envio.</h3>
                            )}
                        </div>
                    </div>:''}
                    {status.status==="ENTREGADO"?<div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <h2>Ventas Completadas:</h2>
                            {ventas ? (
                                <>
                                    {completo.map((el) => el.detailOrders.map((e) => (
                                        <div key={`${el.id}-${e.productId}`} className={styles.divCompra} >
                                            <div onClick={()=>handleNavigate(e.product.id)}>
                                                <h3>{`Item: ${e.product.name}`}</h3>
                                                <h4>{`Precio: $${e.purchaseprice}`}</h4>
                                                <h4>{`Status ACtual: ${el.status}`}</h4>
                                                <h4>{`Fecha de compra: ${el.orderDate}`}</h4>
                                            </div>
                                            <div className={styles.divImg}>
                                            <button onClick={()=>onReviews(el.id , el.status)} className={styles.reviewsButton}>Cambiar Estado</button>
                                            <img src={e.product.img} style={{ width: "200px" }} alt="Product" />
                                            </div>
                                        </div>
                                    )))
                                    }
                                </>
                            ) : (
                                <h3>No ninguna venta completada.</h3>
                            )}
                        </div>
                    </div>:''}
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;