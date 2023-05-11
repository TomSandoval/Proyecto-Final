import { useParams } from "react-router-dom";
import SearchBar from "../Nav/nav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, cleanDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "../Detail/Detail.css";
import image from "../../assets/envelope-regular-24.png";

const Detail = () => {
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(cleanDetail());
    dispatch(getDetail(id));
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <Link to="/">
        <button className="btn btn-outline-danger">Back</button>
      </Link>
      <div>
        {productDetail?.name ? (
          <div className="detail-container">
            <div className="feactures-container">
              <div className="name-container">
                <h1>{productDetail.name}</h1>
              </div>
              <div className="container">
                {/* <h2>
                  <span>Category: </span>
                  {productDetail.category}
                </h2> */}
                <h2>
                  <span>Stock: </span>
                  {productDetail.stock}
                </h2>
                <h2>
                  <span>Description: </span>
                  {productDetail.description}
                </h2>
              </div>
              <h1 className="price">${productDetail.price}</h1>
            </div>
            <img src={productDetail.img[0]} alt="" className="detail-image" />
            <div className="hr-container"></div>
            <button className="button-container-new">AGREGAR</button>
          </div>
        ) : (
          <Loading />
        )}
        <div className="nav-inverse">
          <div className="contact">
            <h1>Contact</h1>
          </div>
          <div className="email-container">
            <img src={image} alt="" />
            <span>TukiMarket@gmail.com</span>
          </div>
          <div className="links-container">
            <h1>Links Directs</h1>
          </div>
          <div className="enlaces-container">
            <span>Home</span>
            <span>About</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
