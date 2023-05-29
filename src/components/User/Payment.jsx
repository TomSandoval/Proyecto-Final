import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SearchBar from "../Nav/nav";


function Payment() {
    const [activeButton, setActiveButton] = useState('Pedido');
    const [isInputVisible, setIsInputVisible] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const roll = localStorage.getItem('roll');


    useEffect(() => {
        // Cargar datos de tarjetas guardados en el localStorage al inicio
        const storedCardData = localStorage.getItem('cardData');
        if (storedCardData) {
            setCardData(JSON.parse(storedCardData));
        }

        const currentPath = window.location.pathname.split('/').pop();
        if (currentPath === 'user') {
            setActiveButton('Perfil');
        } else if (currentPath === 'payment') {
            setActiveButton('Pagos');
        } else {
            setActiveButton('Mis compras');
        }
    }, []);

    useEffect(() => {
        // Guardar los datos de las tarjetas en el localStorage cuando cambien
        localStorage.setItem('cardData', JSON.stringify(cardData));
    }, [cardData]);

    const handleInsertButtonClick = (index) => {
        const updatedVisibility = [...isInputVisible];
        updatedVisibility[index] = true;
        setIsInputVisible(updatedVisibility);
        setShowSaveButton(true);
    };

    const handleSaveButtonClick = (index) => {
        const updatedCardData = [...cardData];
        const inputs = document.querySelectorAll('.form-control');
        const cardInfo = {
            titular: inputs[index * 5].value,
            numero: inputs[index * 5 + 1].value,
            mes: inputs[index * 5 + 2].value,
            año: inputs[index * 5 + 3].value,
            cvv: inputs[index * 5 + 4].value,
        };
        updatedCardData[index] = cardInfo;
        setCardData(updatedCardData);
        setShowSaveButton(false);
    };
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



    return (
        <div style={background}>
            <SearchBar />
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
                            {roll === 'SELLER' && (
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Mis publicaciones' ? 'active' : ''}`}
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
                            <small className="text-body-secondary">TukiMarket 🐸</small>
                        </div>
                    </div>
                </div>
                <div className="col" style={cardHeight}>
                    <div className="card h-100 bg-secondary">
                        <h5 className="card-title" style={titleButton}>&nbsp; &nbsp; Pagos: </h5>
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card bg-warning">
                                        <div className="card-body text-center">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary mt-2" onClick={() => handleInsertButtonClick(0)}>+ Añadir tarjeta</button>
                                            </div>
                                            {isInputVisible[0] && (
                                                <>
                                                    <input type="text" className="form-control" placeholder="Nombre del titular" />
                                                    <input type="text" className="form-control" placeholder="Número de la tarjeta" />
                                                    <input type="text" className="form-control" placeholder="Mes" />
                                                    <input type="text" className="form-control" placeholder="Año" />
                                                    <input type="text" className="form-control" placeholder="CVV" />
                                                    {showSaveButton && (
                                                        <button className="btn btn-primary mt-2" onClick={() => handleSaveButtonClick(0)}>Guardar tarjeta</button>
                                                    )}
                                                </>
                                            )}
                                            {/* Info tarjeta guardada */}
                                            {cardData[0] && (
                                                <>
                                                    <p>Titular: {cardData[0].titular}</p>
                                                    <p>Número: {cardData[0].numero}</p>
                                                    <p>Mes: {cardData[0].mes}</p>
                                                    <p>Año: {cardData[0].año}</p>
                                                    <p>CVV: {cardData[0].cvv}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card bg-warning">
                                        <div className="card-body text-center">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary mt-2" onClick={() => handleInsertButtonClick(1)}>
                                                    + Añadir tarjeta
                                                </button>
                                            </div>
                                            {isInputVisible[1] && (
                                                <>
                                                    <input type="text" className="form-control" placeholder="Nombre del titular" />
                                                    <input type="text" className="form-control" placeholder="Número de la tarjeta" />
                                                    <input type="text" className="form-control" placeholder="Mes" />
                                                    <input type="text" className="form-control" placeholder="Año" />
                                                    <input type="text" className="form-control" placeholder="CVV" />
                                                    {showSaveButton && (
                                                        <button className="btn btn-primary mt-2" onClick={() => handleSaveButtonClick(1)}>
                                                            Guardar tarjeta
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                            {/* Info tarjeta guardada */}
                                            {cardData[1] && (
                                                <>
                                                    <p>Titular: {cardData[1].titular}</p>
                                                    <p>Número: {cardData[1].numero}</p>
                                                    <p>Mes: {cardData[1].mes}</p>
                                                    <p>Año: {cardData[1].año}</p>
                                                    <p>CVV: {cardData[1].cvv}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card bg-warning">
                                        <div className="card-body text-center">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary mt-2" onClick={() => handleInsertButtonClick(2)}>+ Añadir tarjeta</button>
                                            </div>
                                            {isInputVisible[2] && (
                                                <>

                                                    <input type="text" className="form-control" placeholder="Nombre del titular" />
                                                    <input type="text" className="form-control" placeholder="Número de la tarjeta" />
                                                    <input type="text" className="form-control" placeholder="Mes" />
                                                    <input type="text" className="form-control" placeholder="Año" />
                                                    <input type="text" className="form-control" placeholder="CVV" />
                                                    {showSaveButton && (
                                                        <button className="btn btn-primary mt-2" onClick={() => handleSaveButtonClick(2)}>Guardar tarjeta</button>
                                                    )}
                                                </>
                                            )}
                                            {/* Info tarjeta guardada */}
                                            {cardData[2] && (
                                                <>
                                                    <p>Titular: {cardData[2].titular}</p>
                                                    <p>Número: {cardData[2].numero}</p>
                                                    <p>Mes: {cardData[2].mes}</p>
                                                    <p>Año: {cardData[2].año}</p>
                                                    <p>CVV: {cardData[2].cvv}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card bg-warning">
                                        <div className="card-body text-center">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary mt-2" onClick={() => handleInsertButtonClick(3)}>+ Añadir tarjeta</button>
                                            </div>
                                            {isInputVisible[3] && (
                                                <>
                                                    <input type="text" className="form-control" placeholder="Nombre del titular" />
                                                    <input type="text" className="form-control" placeholder="Número de la tarjeta" />
                                                    <input type="text" className="form-control" placeholder="Mes" />
                                                    <input type="text" className="form-control" placeholder="Año" />
                                                    <input type="text" className="form-control" placeholder="CVV" />
                                                    {showSaveButton && (
                                                        <button className="btn btn-primary mt-2" onClick={() => handleSaveButtonClick(3)}>Guardar tarjeta</button>
                                                    )}
                                                </>
                                            )}
                                            {/* Info tarjeta guardada */}
                                            {cardData[3] && (
                                                <>
                                                    <p>Titular: {cardData[3].titular}</p>
                                                    <p>Número: {cardData[3].numero}</p>
                                                    <p>Mes: {cardData[3].mes}</p>
                                                    <p>Año: {cardData[3].año}</p>
                                                    <p>CVV: {cardData[3].cvv}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
