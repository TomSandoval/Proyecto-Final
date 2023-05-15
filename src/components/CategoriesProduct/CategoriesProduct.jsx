import { useParams } from "react-router-dom";
import "./CategoriesProduct.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../Nav/nav";
import { getProductByCategory, filterByCategory } from "../../redux/actions";
import CardList from "../Products/CardList";
import Footer from "../Footer/Footer";

export default function CategoriesProduct() {
  const products = useSelector((state) => state.products);

  const [priceFilters,setPriceFilters] = useState({
    min: 0,
    max: 0
  })

  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByCategory(name));
  }, []);


  const handleChange = (e) => {
    setPriceFilters({
      ...priceFilters,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = () => {
    let min = priceFilters.min;
    let max = priceFilters.max;
    max === 0 || max === "" ? max = 999999999 : max = priceFilters.max
    min === "" ? min = 0 : min = priceFilters.min
    dispatch(filterByCategory(name,min,max))
  }


  return (
    <>
      <SearchBar view={true} />
      <main className="main-category">
        <div className="filters-container">
          <h4>Filtros</h4>
          <div className="price-container">
            <label className="label">Precio:</label>
            <div className="input-container">
            <input name="min" onChange={handleChange} className="inputs" type="number" placeholder="mínimo"/>
            <input name="max" onChange={handleChange} className="inputs" type="number" placeholder="máximo"/>
            <button onClick={handleSubmit} className="button-price"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button>
            </div>
          </div>
          <div className="alphabetic-container">
            <label>Orden Alfabetico:</label>
            <div>
              <button className="buttons-filter">ASC</button>
              <button className="buttons-filter">DESC</button>
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
                category={p.Categories[0].name}
                stock={p.stock}
                price={p.price}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
