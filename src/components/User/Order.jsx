import React, { useEffect } from 'react';
import SearchBar from "../Nav/nav";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer"
import { useDispatch, useSelector } from "react-redux";
import { shoppinghistory } from "../../redux/actions";
import styles from "./order.module.css";


function Order() {
    const [activeButton, setActiveButton] = React.useState('Pedido');
    const dispatch = useDispatch();
    const userData = localStorage.getItem('email')
    const history = useSelector((state) => state.history);
    useEffect(() => {
        const currentPath = window.location.pathname.split('/').pop();
        if (currentPath === 'user') {
            setActiveButton('Perfil');
        } else if (currentPath === 'orders') {
            setActiveButton('Pedidos');
        } else {
            setActiveButton('Pedido');
        }
    }, []);

    useEffect(() => {
        if (userData) {
            dispatch(shoppinghistory(userData));
          }
      }, [dispatch]);

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
    }
    const subtitleButton = {
        textAlign: "left"
    }

    const linkColor = {
        color: "white",
        textDecoration: "none",
    }
    const cardHeight = {
        height: "50%",
        width: "75%",
    }

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
    }
    const firstCard = {
        width: "300px"
    }
    const lastCard = {
        width: "75%"
    }
    const linkColor2 = {
        color: "black",
        textDecoration: "none",
        fontSize: "14px",

    }



    return (
        <div style={background}>
            <SearchBar/>
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-5 g-5" style={cardContainerStyle}>
                <div className="col">
                <div class='container-fluid' >
                <Link to="/" style={linkColor2}>
                    Hogar &gt; &nbsp;
                </Link>
                <Link to="/user" style={linkColor2}>
                    Mi cuenta &gt; &nbsp;
                </Link>
                <Link to="/user/orders" style={linkColor2}>
                    Pedidos
                </Link>
            </div>
                    <div className="card h-100 bg-secondary" style={firstCard}>
                        <div className="card-body">
                            <h5 className="card-title" style={titleButton} >Mi cuenta:</h5>
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
                                <Link to="/user/help" style={linkColor}>
                                    Centro de ayuda
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
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Todo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={linkColor}>Sin pagar(0)</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={linkColor}>Procesando(0)</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={linkColor}>Enviado</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={linkColor}>Completado</a>
                                </li>
                            </ul>
                            <nav class="navbar bg-body-tertiary " style={{ width: '680px' }}>
                                <div class="container-fluid">
                                    <div class="d-flex align-items-center">
                                        <h5>Pedidos:</h5>
                                        <input class="form-control" type="search" style={{ width: '500px' }} placeholder="N° de pedido, nombre del producto" aria-label="Search" />
                                        <button class="btn btn-success" type="submit">Buscar</button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>


                    <div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <h2>Compras realizadas por el usuario:</h2>
                            {
                                history? (
                                <>
                                {
                                        history.map((el)=>el.detailOrders.map((e)=>(
                                            <div key={`${el.id}-${e.productId}`} className={styles.divCompra}>
                                                <div>
                                                    <h3 >{`Item: ${e.product.name}`}</h3>
                                                    <h4 >{`Precio:$ ${e.purchaseprice}`}</h4>
                                                    <h4 >{`Status: ${el.status}`}</h4>
                                                    <h4> {`Fecha de compra: ${el.orderDate}`}</h4>
                                                </div>
                                                <div className={styles.divImg}>
                                                    <img src={e.product.img} style={{ width: "200px" }}/>
                                                </div>
                                            </div>
                        )))
                    }
                </>
                ): (
                    <h3> Todavia nos realizaste compras </h3>
                )
            }
                        </div>
                    </div>


                </div>



                {/* <div className="row row-cols-1 row-cols-md-1 g-5">
                    <div className="col">
                    </div>
                </div>
                <div className=" " style={products}>
                    <div className="col">
                        <div className="card h-100 bg-secondary" >
                            <div className="card-body">
                                <h5 className="card-title">Detalles del pedido</h5>
                                <p className="card-text text-center mb-0">Email@gmail.com</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">TukiMarket 🐸</small>
                            </div>
                        </div>
                    </div>
                </div> */}



            </div>
            
        </div>
    );
}

export default Order;
