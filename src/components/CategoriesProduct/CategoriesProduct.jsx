import { useParams } from "react-router-dom";
import "./CategoriesProduct.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function CategoriesProduct(){

    const {name} = useParams();
    const dispatch = useDispatch()

    return (
        <div>
            {name}
        </div>
    )
}