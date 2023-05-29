import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

export default function PieChartNEW() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/admin/piechart"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  for (let i = 1; i < data.length; i++) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    data[i].push(`rgb(${red}, ${green}, ${blue})`);
  }
  const options = {
    title: "Cantidad de Productos Registrados por Categoria",
    is3D: true,

    bar: { groupWidth: "100%" },
  };

  return (
    <div>
      {data.length > 0 ? (
        <Chart chartType="PieChart" data={data} options={options} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
