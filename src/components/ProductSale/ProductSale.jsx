import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getProductByCategory,
  getProductActive,
} from "../../redux/actions";
import "../ProductSale/ProductSale.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormUpdateProduct from "../FormUpdateProduct/FormUpdateProduct";

export default function ProductSale() {
  const categories = useSelector((state) => state.categories);
  // const Deporte = useSelector((state) => state?.products?.Deporte);
  const products = useSelector((state) => state.products);
  const productActive = useSelector((state) => state.productActive);
  const dispatch = useDispatch();
  const username = "ifrontroth@gmail.com";
  // const username = localStorage.getItem("email");
  const name = productActive && productActive.length > 0 && productActive[0];
  const prodName = Object.keys(name);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProductByCategory("Deporte"));
    dispatch(getProductActive(username));
  }, []);

  let rows = [];
  products.rows?.map((product, index) => {
    rows.push({ id: index, Deporte: product.name });
  });

  let columns = [{ field: "quantity", headerName: "Quantity", width: 150 }];
  categories.map((cate, index) => {
    columns.push({ field: `${cate.name}`, headerName: cate.name, width: 150 });
  });

  // const rows1 = [
  //   { id: 1, col1: "Hello", col1: "World" },
  //   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  //   { id: 3, col1: "MUI", col3: "is Amazing" },
  // ];

  let rows1 = [];

  productActive.map((prop, index) => {
    rows1.push({
      id: index,
      /*[index]*/ 0: prop.id,
      1: prop.name,
      2: prop.stock,
      3: prop.description,
      4: prop.price,
      5: prop.status,
    });
  });

  // let columns1 = [];

  // prodName.map((prop, index) => {
  //   columns1.push({ field: `${index}`, headerName: prop, with: 150 });
  // });

  const columns1 = [
    { field: "0", headerName: "id", width: 150 },
    { field: "1", headerName: "name", width: 150 },
    { field: "2", headerName: "stock", width: 150 },
    { field: "3", headerName: "description", width: 150 },
    { field: "4", headerName: "price", width: 150 },
    { field: "5", headerName: "status", width: 150 },
  ];

  return (
    <div className="container-Sale">
      <div className="container-h3">
        <h3>Activos</h3>
      </div>
      <Link to="/">
        <button className="btn btn-outline-success">Hogar</button>
      </Link>
      <div className="Product-active">
        <DataGrid rows={rows1} columns={columns1} />
      </div>
      <h3>Inactivos</h3>
      <div className="Product-inactive">
        <DataGrid rows={rows} columns={columns} />
      </div>
      <FormUpdateProduct />
    </div>
  );
}
