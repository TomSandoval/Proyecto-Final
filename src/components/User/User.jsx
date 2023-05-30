import React, { useEffect } from 'react';
import SearchBar from "../Nav/nav";
import Footer from "../Footer/Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";


function User() {
    const [activeButton, setActiveButton] = React.useState('Perfil');

    useEffect(() => {
        const currentPath = window.location.pathname.split('/').pop();
        if (currentPath === 'user') {
            setActiveButton('Perfil');
        } else {
        }
    }, []);


    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const roll = localStorage.getItem('roll');
    const image = localStorage.getItem('image'); //! REVISAR

    const perfilButtonStyle = {
        width: '100%',
        textAlign: 'left',
        padding: '0',
        margin: '0',
        borderRadius: '0',
        position: 'relative'
    };
    const titleButton = {
        textAlign: "left",
        fontSize: "24px"
    };
    const subtitleButton = {
        textAlign: "left"
    };
    const background = {
        background: '#DAE3E7',
        height: '100vh',
        width: '100vw'
    };
    const linkColor = {
        color: "black",
        textDecoration: "none",
    };
    const linkColorHome = {
        color: "black",
        textDecoration: "none",
        fontSize: "13px",
        opacity: "0.7"
    };
    const linkColorAccount = {
        color: "black",
        textDecoration: "none",
        fontSize: "13px",
        opacity: "0.7"
    };
    const linkColorProfile = {
        color: "black",
        textDecoration: "none",
        fontSize: "16px",
    };

    const activeIndicatorStyle = {
        position: 'absolute',
        right: '372px', 
        left: '-6px', 
        top: '-4%',
        height: '108%',
        width: '5px',
        backgroundColor: 'orange'
    };
    const links = {
        marginTop: "-25px",
    };
    const card = {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.4) 0px 12px 24px -4px',
        borderRadius: '8px',
        border: '0.1px solid rgb(241, 241, 249)'
    };
    
    
    return (
        <div style={background}>
            <SearchBar />
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-5 px-3" style={{ paddingTop: '150px' }}>
                <div className="col">
                <div className='container-fluid' style={links}>
                        <Link to="/" style={linkColorHome}>
                            Hogar &gt; &nbsp;
                        </Link>
                        <Link to="/user" style={linkColorAccount}>
                            Mi cuenta &gt; &nbsp;
                        </Link>
                        <Link to="/user" style={linkColorProfile}>
                            Perfil
                        </Link>
                    </div>
                    <div className="card h-100 bg-light bg-gradient" style={card}>
                        <div className="card-body">
                            <h5 className="card-title" style={titleButton}>Mi cuenta:</h5>
                            <button
                                type="button"
                                className={`btn btn-light btn-lg ${activeButton === 'Perfil' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <span style={activeIndicatorStyle}></span>
                                <Link to="/user" style={linkColor}>
                                    Perfil
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-light btn-lg ${activeButton === 'Pedidos' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >   
                                <Link to="/user/orders" style={linkColor}>
                                    Pedidos
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-light btn-lg ${activeButton === 'Pagos' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/user/payment" style={linkColor}>
                                    Pagos
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-light btn-lg ${activeButton === 'Dirección de envío' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/user/address" style={linkColor}>
                                    Dirección de envío
                                </Link>
                            </button>
                            <button
                                type="button"
                                className={`btn btn-light btn-lg ${activeButton === 'Centro de ayuda' ? 'active' : ''}`}
                                style={perfilButtonStyle}
                                id="perfil-btn"
                            >
                                <Link to="/contact" style={linkColor}>
                                    Centro de ayuda
                                </Link>
                            </button>
                            {roll === 'SELLER' && (
                                <button
                                    type="button"
                                    className={`btn btn-light btn-lg ${activeButton === 'Mis publicaciones' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    <Link to="/ProductSale" style={linkColor}>
                                        Mis publicaciones
                                    </Link>
                                </button>
                            )}
                        </div>
                        <div className="card-footer">
                            <small className="text-body-light">TukiMarket 🐸</small>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light bg-gradient" style={card}>
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <circle cx="50%" cy="50%" r="80" fill="#868e96" />
                            <text x="50%" y="50%" textAnchor="middle" fill="#dee2e6" dy=".3em">{image} </text>
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">{username}</h5>
                            <p className="card-text text-center mb-0">{email}</p>
                            <p className="card-text text-center mb-0">Tipo de usuario: {roll}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-light">TukiMarket 🐸</small>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-light bg-gradient" style={card}>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Nombre:</h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">{username}</p>
                                </div>
                            </div>
                            <div className="border-top border-dark" />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Email: </h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">{email}</p>
                                </div>
                            </div>
                            <div className="border-top border-dark" />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Celular:</h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">+56 9 8752 0519</p>
                                </div>
                            </div>
                            <div className="border-top border-dark" />
                            <div className="row align-items-center">
                                <div className="col">
                                    <h5 className="card-title" style={subtitleButton}>Dirección:</h5>
                                </div>
                                <div className="col">
                                    <p className="card-text text-center">Calle 123, Ciudad, País</p>
                                </div>
                            </div>
                            <div className="border-top border-dark" />
                        </div>
                        <div className="card-footer">
                            <small className="text-body-light">TukiMarket 🐸</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
