import React, { useEffect } from 'react';
import SearchBar from "../Nav/nav";
import { Link, Navigate, useNavigate } from "react-router-dom";


function Payment() {
    const [activeButton, setActiveButton] = React.useState('Pedido');

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
    const background = {
        background: 'linear-gradient(243.18deg, #FF8300 0%, #FFD688 100%)',
        height: '108vh',
        width: '100vw'
    };
    const linkColor = {
        color: "white",
        textDecoration: "none",
    }
    const linkColor2 = {
        color: "black",
        textDecoration: "none",
        fontSize: "14px"
    }
    // const activeIndicatorStyle = {
    //     position: 'absolute',
    //     right: '372px', // Ajusta la posición del rectángulo con respecto al botón
    //     top: "72px",
    //     height: '8.5%',
    //     width: '5px',
    //     backgroundColor: 'orange'
    // && <span style={activeIndicatorStyle}></span> esto va al lado de {activeButton === 'Perfil'}
    // };


    return (
        <div style={background}>
            <Link to="/" style={linkColor2}>
                Hogar &gt; &nbsp;
            </Link>
            <Link to="/user" style={linkColor2}>
                Mi cuenta &gt; &nbsp;
            </Link>
            <Link to="/user/payment" style={linkColor2}>
                Pagos
            </Link>
            <div className="row row-cols-1 row-cols-md-3 g-5" style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '150px' }}>

                <div className="col">
                    <div className="card h-100 bg-secondary">
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


                <div className="col">
                    <div className="card h-100 bg-secondary">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <circle cx="50%" cy="50%" r="80" fill="#868e96" />
                            <text x="50%" y="50%" text-anchor="middle" fill="#dee2e6" dy=".3em">Image cap</text>
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">Nombre</h5>
                            <p className="card-text text-center mb-0">Email@gmail.com</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">TukiMarket 🐸</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Nombe:</h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">Diego Rivera Spröhnle</p>
                                </div>
                            </div>
                            <div class="border-top border-dark" />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Email:</h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">Email@gmail.com</p>
                                </div>
                            </div>
                            <div class="border-top border-dark" />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Celular:</h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">+56 9 8752 0519</p>
                                </div>
                            </div>
                            <div class="border-top border-dark" />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Dirección:</h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">Calle 123, Ciudad, País</p>
                                </div>
                            </div>
                            <div class="border-top border-dark" />
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">TukiMarket 🐸</small>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Payment;
