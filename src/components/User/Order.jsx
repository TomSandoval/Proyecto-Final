import React, { useEffect } from 'react';
import SearchBar from "../Nav/nav";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { shoppinghistory } from "../../redux/actions";
import styles from "./order.module.css";
import { sendReviews } from '../../redux/actions';
import { Toaster, toast } from 'sonner'
import { useNavigate } from "react-router-dom";


function Order() {
    const [activeButton, setActiveButton] = React.useState('Pedido');
    const dispatch = useDispatch();
    const userData = localStorage.getItem('email');
    const history = useSelector((state) => state.history);
    const location = useLocation();
    const [reviews , setReviews] =  React.useState(false);
    const [review , setReview] =  React.useState({
        id:'',
        idProduc:'',
        email:userData,
        rating:null,
        descripcion:'',
    });
    useEffect(() => {
        const currentPath = location.pathname.split('/').pop();
        if (currentPath === 'user') {
            setActiveButton('Perfil');
        } else if (currentPath === 'orders') {
            setActiveButton('Pedidos');
        } else {
            setActiveButton('Pedido');
        }
    }, [location.pathname]);

    useEffect(() => {
        if (userData) {
            dispatch(shoppinghistory(userData));
        }
    }, [dispatch, userData]);

    const background = {
        background: 'linear-gradient(243.18deg, #FF8300 0%, #FFD688 100%)',
        minHeight: '100vh',
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
        height: "50%",
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

    const onReviews = (eId,id) => {
        setReviews(true)
        setReview({
            ...review,
            id:id,
            idProduc:eId,
        })
    }
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/Detail/${id}`);
      }

    const handleChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value,
        })
      };
      
      const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(sendReviews(review))
        setReview({
            id:'',
            idProduc:'',
            email:userData,
            rating:null,
            descripcion:'',
        })
        toast.success(`Se envio la reseña correctamente , gracias`),{
        }
        setReviews(false)
      };

      const closeReviews =() =>{
        setReview({
            id:'',
            idProduc:'',
            email:userData,
            rating:null,
            descripcion:'',
        })
        setReviews(false)
      }
      
      
      return (
        <div style={background} >
          {reviews ? (
            <div className={`${styles.overlay}`}>
                <button className={styles.closebButton} onClick={()=>closeReviews()}>❌</button>
              <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                  <label htmlFor="descripcion" >Deja una Reseña: </label>
                </div>
                <div>
                <textarea
                    name="descripcion"
                    onChange={handleChange}
                    className={styles.descriptionInput}
                ></textarea>
                </div>
                <div className={styles.rating}>
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                    onChange={handleChange}
                  />
                  <label htmlFor="star5"></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                  />
                  <label htmlFor="star4"></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="star3"></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="star2"></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="star1"></label>
                </div>
                <div>
                  <button type="submit" className={styles.submitButton}>Enviar reseña</button>
                </div>
              </form>
            </div>):<></>}
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
                        <Link to="/user/orders" style={linkColor2}>
                            Pedidos
                        </Link>
                    </div>
                    <div className="card h-100 bg-secondary" style={firstCard}>
                        <div className="card-body">
                            <h5 className="card-title" style={titleButton}>Mi cuenta:</h5>
                            <Link to="/user" style={linkColor}>
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Perfil' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    Perfil
                                </button>
                            </Link>
                            <Link to="/user/orders" style={linkColor}>
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Pedidos' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    Pedidos
                                </button>
                            </Link>
                            <Link to="/user/payment" style={linkColor}>
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Pagos' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    Pagos
                                </button>
                            </Link>
                            <Link to="/user/adress" style={linkColor}>
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Dirección de envío' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    Dirección de envío
                                </button>
                            </Link>
                            <Link to="/contact" style={linkColor}>
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Centro de ayuda' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    Centro de ayuda
                                </button>
                            </Link>
                            <Link to="/ProductSale" style={linkColor}>
                                <button
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${activeButton === 'Mis publicaciones' ? 'active' : ''}`}
                                    style={perfilButtonStyle}
                                    id="perfil-btn"
                                >
                                    Mis publicaciones
                                </button>
                            </Link>
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
                                    <a className="nav-link active" aria-current="page" href="#">Todo</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={linkColor}>Procesando(0)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={linkColor}>Enviado</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={linkColor}>Completado</a>
                                </li>
                            </ul>
                            <nav className="navbar bg-body-tertiary" style={{ width: '680px' }}>
                                <div className="container-fluid">
                                    <div className="d-flex align-items-center">
                                        <h5>Pedidos:</h5>
                                        <input className="form-control" type="search" style={{ width: '500px' }} placeholder="N° de pedido, nombre del producto" aria-label="Search" />
                                        <button className="btn btn-success" type="submit">Buscar</button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="card h-100 bg-secondary">
                        <div className="card-body">
                            <h2>Compras realizadas por el usuario:</h2>
                            {history ? (
                                <>
                                    {history.map((el) => el.detailOrders.map((e) => (
                                        <div key={`${el.id}-${e.productId}`} className={styles.divCompra} >
                                            <div onClick={()=>handleNavigate(e.product.id)}>
                                                <h3>{`Item: ${e.product.name}`}</h3>
                                                <h4>{`Precio: $${e.purchaseprice}`}</h4>
                                                <h4>{`Status: ${el.status}`}</h4>
                                                <h4>{`Fecha de compra: ${el.orderDate}`}</h4>
                                            </div>
                                            <div className={styles.divImg}>
                                            <button onClick={()=>onReviews(e.product.id,el.id)} className={styles.reviewsButton}>Reviews</button>
                                            <img src={e.product.img} style={{ width: "200px" }} alt="Product" />
                                            </div>
                                        </div>
                                    )))
                                    }
                                </>
                            ) : (
                                <h3>Todavía no has realizado compras.</h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;