import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProductByCategory } from "../../redux/actions";
import { useEffect } from "react";
import "../ProductSale/ProductSale.css";

export default function ProductSale() {
  const categories = useSelector((state) => state.categories);
  // const Deporte = useSelector((state) => state?.products?.Deporte);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProductByCategory("Deporte"));
  }, []);

  let rows = [];
  products.rows?.map((product, index) => {
    rows.push({ id: index, Deporte: product.name });
  });

  let columns = [{ field: "quantity", headerName: "Quantity", width: 150 }];
  categories.map((cate, index) => {
    columns.push({ field: `${cate.name}`, headerName: cate.name, width: 150 });
  });

  const rows1 = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns1 = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
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
        <DataGrid rows={rows} columns={columns} />
      </div>
      <h3>Inactivos</h3>
      <div className="Product-inactive">
        <DataGrid rows={rows1} columns={columns1} />
      </div>
      <div></div>
    </div>
  );
}
