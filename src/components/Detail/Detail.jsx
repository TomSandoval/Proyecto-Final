import { useParams } from "react-router-dom";
import SearchBar from "../Nav/nav";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail, cleanDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "../Detail/Detail.css";

export default function Detail() {
  const productDetail = useSelector((state) => state.productDetail);
  const [selectImage, setSelectImage] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(cleanDetail());
    dispatch(getDetail(id));
  }, [dispatch]);

  if (!productDetail.name) {
    return <p>Cargando informacion</p>;
  }

  return (
    <div className="allContainer">
      <SearchBar view={false} />
      <Link to="/">
        <button className="btn btn-outline-danger button-back">Volver</button>
      </Link>
      {productDetail?.name ? (
        <div className="detail-container">
          <div className="feactures-container">
            <div className="name-container">
              <h1>{productDetail.name}</h1>
            </div>
            <div className="description-text">
              <h2>Descripción:</h2>
              <p>{productDetail.description}</p>
            </div>
            <div className="info-block">
              <h2>Disponibles: {productDetail.stock}</h2>
              <div>
                <h3 className="price">${productDetail.price}</h3>
                <button className="button-container-new">
                  AGREGAR{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(0, 0, 0, 1)" }}
                  >
                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                    <circle cx="17.5" cy="19.5" r="1.5"></circle>
                    <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
                    <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="navigate-img">
              {productDetail?.img.length > 1
                ? productDetail?.img?.map((img, index) => (
                    <img
                      onClick={() => setSelectImage(index)}
                      key={index}
                      src={img}
                      alt={productDetail.name}
                    ></img>
                  ))
                : null}
            </div>
            {productDetail.img && (
              <img
                src={productDetail?.img[selectImage]}
                alt=""
                className="detail-image"
              />
            )}
            <div className="hr-container"></div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </div>
  );
}
