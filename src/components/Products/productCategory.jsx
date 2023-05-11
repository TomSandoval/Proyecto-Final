import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { axiosProductsByCategory } from "../../redux/actions";

//! ARREGLO DE PRODUCTOS POR CATEGORIA DE LA STORE
const ProductsByCategory = ({ categoryName }) => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    //! OBTENGO LOS PRODUCTOS POR CATEGORIA CORRESPONDIENTE A "CATEGORYNAME"
    useEffect(() => {
        dispatch(axiosProductsByCategory(categoryName));
    }, [categoryName, dispatch]);

    const filteredProducts = products
        .filter((product) => product.category === categoryName)
        .slice(0, 3);

    return (
        <div className="container">
            <h2>{categoryName}</h2>
            <div className="row row-cols-3">
                {products.map((product) => (
                    //! CON EL KEY ACTUALIZO SOBRE EL PRODUCTO POR ID
                    <div key={product.id} className="col">
                        <Card
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsByCategory;
