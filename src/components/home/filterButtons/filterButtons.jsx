import { Link } from "react-router-dom";
import { category } from "../../../data";
import "./filterButtons.css";

export default function FilterButtons(){

    
    return (
        <div className="filter-buttons-container">
            <h3>Categories</h3>
            <div className="button-container">
            {
                category.map((c,index) => <Link to={`/categories/${c.name}`} key={index} className="button-filter"><img className="filter-image" src={c.image}/><p key={index} className="filter-title">{c.name}</p></Link>)
            }
            </div>
        </div>
    )
}