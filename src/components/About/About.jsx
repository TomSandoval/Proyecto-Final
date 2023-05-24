import "../About/About.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProductByCategory } from "../../redux/actions";
import { useEffect } from "react";

export default function About() {
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

  return (
    <div className="container-about">
      <div className="container-h1">
        <h1>Sobre Nosotros</h1>
      </div>
      <Link to="/">
        <button className="btn btn-outline-success">Hogar</button>
      </Link>
      <div className="About">
        {/* <p> */}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          animi accusantium voluptate deserunt repudiandae? Rem officia
          doloribus labore suscipit dolorum ea, eos excepturi ipsa consequatur
          perferendis laudantium voluptatum, obcaecati sit. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Asperiores animi accusantium
          voluptate deserunt repudiandae? Rem officia doloribus labore suscipit
          dolorum ea, eos excepturi ipsa consequatur perferendis laudantium
          voluptatum, obcaecati sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores animi accusantium voluptate deserunt
          repudiandae? Rem officia doloribus labore suscipit dolorum ea, eos
          excepturi ipsa consequatur perferendis laudantium voluptatum,
          obcaecati sit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores animi accusantium voluptate deserunt repudiandae? Rem
          officia doloribus labore suscipit dolorum ea, eos excepturi ipsa
          consequatur perferendis laudantium voluptatum, obcaecati sit.
        </p> */}
        <DataGrid rows={rows} columns={columns} />
      </div>
      <div></div>
    </div>
  );
}
