import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PieChart from "./PieChart";
import "../Dashboard/Dashboard.css";
import SearchBar from "../Nav/nav";
import { useNavigate } from "react-router-dom";
import DashboardLeft from "../DasboardLeft/DashboardLeft";
import PieChartSeller from "./Seller";
import PieChartNEW from "./PieChartNEW (2)";
import axios from "axios";
import carrito from "../../assets/Multimedia.jpg";
import { useEffect, useState } from "react";
import logo from "../../assets/Recurso 1.png";
import LoadingDashboard from "../Loading/LoadingDashboard";

function Dashboard() {
  const navigate = useNavigate();
  const [tarjeta, setTarjeta] = useState();

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    const axiosData = async () => {
      const response = await axios.get(
        "http://localhost:3001/admin/percentage"
      );
      const response2 = await axios.get(
        "http://localhost:3001/admin/deliveredProducts"
      );
      const response3 = await axios.get("http://localhost:3001/admin/sales");
      const data3 = response3.data;
      const data2 = response2.data;
      const data = response.data;
      setTarjeta({
        porcentGoogle: data,
        deliveredProduct: data2,
        productSales: data3,
      });
    };
    axiosData();
  }, []);

  console.log(tarjeta);

  return (
    <div className="Dashboard">
      <SearchBar />
      <DashboardLeft />
      <div className="allChart">
        <h1>Bienvenido al DashBoard</h1>
        <div className="alltarjetitas">
          <div className="tarjetitas-google">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
              alt=""
            />
            <h5>{`${tarjeta?.porcentGoogle?.result?.googlePercentage?.toFixed(
              2
            )}%`}</h5>
            <p>Visitas de Google</p>
          </div>
          <div className="tarjetitas-delivered">
            <img src={carrito} style={{ width: "68.3%" }} alt="" />
            <h5>{`${tarjeta?.porcentGoogle?.result?.directPercentage?.toFixed(
              2
            )}%`}</h5>
            <p>Visitas de Google</p>
          </div>
          <div className="tarjetitas-sold">
            <img
              src="https://img.freepik.com/vector-gratis/sellos-vendido_1017-5621.jpg?w=740&t=st=1685375450~exp=1685376050~hmac=8c80ba089fe94e16b7aa05f0510fb6a6e44eb5642f299c801f33c8d13bef9b6d"
              alt=""
            />
            <h5>{tarjeta?.deliveredProduct?.result}</h5>
            <p>Delivered</p>
          </div>
          <div className="tarjetitas-sales">
            <img
              src="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_ME/275540041329-210909-mla-mlm-mlb-mlc-mco-mlu-crea-tus-ofertas-con-varios-productos-a-la-vez-icono.png"
              alt=""
            />
            <h5>{tarjeta?.productSales}</h5>
            <p>Productos en Oferta</p>
          </div>
        </div>
        <div className="chartColumn">
          <div className="chart-line">
            <p>Facturacion Por Vendedor</p>
            <PieChartSeller />
          </div>
          <div className="chart-barra">
            <p>Totales de ventas por mes</p>
            <BarsChart />
          </div>
        </div>
        <div className="Chart-torta">
          <p>Cantidad de Productos Registrado por Categorías</p>
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
