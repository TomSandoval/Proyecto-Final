import { useParams } from "react-router-dom";
import "./SearchProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  changePagesName,
  getProductByName,
  filterByName,
  sortAlphabeticProducts,
  checkExpiration,
} from "../../redux/actions";
import SearchBar from "../Nav/nav";
import CardList from "../Products/CardList";
import Footer from "../Footer/Footer";
import Paginate from "../Paginate/Paginate";

export default function SearchProduct() {
  const { name } = useParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkExpiration())
    dispatch(getProductByName(name));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilters, setPriceFilters] = useState({
    min: 0,
    max: 0,
  });
  const [filters, setFilters] = useState("");

  const changePage = (value) => {
    setCurrentPage(value);
    if (currentPage == value) return null;
    dispatch(changePagesName(name, value));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(getProductByName(name));
  }, []);

  const handleChange = (e) => {
    setPriceFilters({
      ...priceFilters,
      [e.target.name]: e.target.value,
    });
  };


    useEffect(()=>{
        dispatch(getProductByName(name))
    },[])

    

      const handleSubmit = () => {
        let min = priceFilters.min;
        let max = priceFilters.max;
        max === 0 || max === "" ? max = 999999999 : max = priceFilters.max
        min === "" ? min = 0 : min = priceFilters.min
        dispatch(filterByName(name,min,max))
        setFilters("Precio")
      }


  const cleanFilter = () => {
    setFilters("");
    dispatch(getProductByName(name));
  };

  const handleSort = (e) => {
    const value = e.target.value;
    dispatch(sortAlphabeticProducts(name, value));
  };

  return (
    <>
      <SearchBar view={true} />
      <main className="main-category">
        <div className="filters-container">
          <h4>Filtros</h4>
          {filters && (
            <h5 className="filters-applied">
              {filters}
              <button onClick={cleanFilter} className="button-filters-applied">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(0, 0, 0, 1)" }}
                >
                  <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
              </button>
            </h5>
          )}
          <div className="price-container">
            <label className="label">Precio:</label>
            <div className="input-container">
              <input
                name="min"
                onChange={handleChange}
                className="inputs"
                type="number"
                placeholder="mínimo"
              />
              <input
                name="max"
                onChange={handleChange}
                className="inputs"
                type="number"
                placeholder="máximo"
              />
              <button onClick={handleSubmit} className="button-price">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(0, 0, 0, 1)" }}
                >
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="alphabetic-container">
            <label>Orden Alfabetico:</label>
            <div>
              <button
                value="asc"
                onClick={handleSort}
                className="buttons-filter"
              >
                ASC
              </button>
              <button
                value="desc"
                onClick={handleSort}
                className="buttons-filter"
              >
                DESC
              </button>
            </div>
          </div>
        </div>
        <div className="all-container">
          <div className="list-container">
            {products?.rows?.map((p, index) => (
              <CardList
                key={index}
                id={p.id}
                title={p.name}
                img={p.img}
                description={p.description}
                category={p?.Categories[0]?.name}
                stock={p.stock}
                price={p.price}
                dataAos={index % 2 == 0 ? "fade-left" : "fade-right"}
              />
            ))}
          </div>
          <Paginate
            totalProducts={products.count}
            currentPage={currentPage}
            changePage={changePage}
            productsPerPage={6}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
