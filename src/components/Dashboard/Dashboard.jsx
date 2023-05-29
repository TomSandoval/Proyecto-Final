import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PieChart from "./PieChart";
import "../Dashboard/Dashboard.css";
import SearchBar from "../Nav/nav";
import { useNavigate } from "react-router-dom";
import DashboardLeft from "../DasboardLeft/DashboardLeft";
import PieChartSeller from "./Seller";
import PieChartNEW from "./PieChartNEW (2)";

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="Dashboard">
      <SearchBar />
      <DashboardLeft />
      <div className="allChart">
        <h1>Gráficos</h1>
        <div className="alltarjetitas">
          <div className="tarjetitas"></div>
          <div className="tarjetitas"></div>
          <div className="tarjetitas"></div>
          <div className="tarjetitas"></div>
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
