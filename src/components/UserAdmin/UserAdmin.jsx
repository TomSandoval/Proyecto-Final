import React from "react";
import DashboardLeft from "../DasboardLeft/DashboardLeft";
import SearchBar from "../Nav/nav";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./UserAdmin.module.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listUsers } from "../../redux/actions";

export default function UserAdmin() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const usersAdmin = useSelector((state) => state.usersAdmin);
  // const [rows1, setRows1] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, []);

  const handleRowSelection = (selection) => {
    setSelectedRows(selection.selectionModel);
  };

  const handleDeleteRows = () => {
    const remainingRows = rows1.filter((row) => row.col4 === true);

    setRows1(remainingRows);
    setSelectedRows([]);
  };

  let rows1 = [];
  usersAdmin.map((user, index) => {
    rows1.push({
      id: index,
      col1: user.name,
      col2: user.email,
      col3: user.roll,
      col4: user.deleteLogic,
    });
  });

  const filteredRows = rows1.filter((row) =>
    row.col1.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns1 = [
    { field: "col1", headerName: "Nombre", width: 150 },
    { field: "col2", headerName: "Email", width: 150 },
    { field: "col3", headerName: "roll", width: 150 },
    { field: "col4", headerName: "deleteLogic", width: 150 },
  ];

  return (
    <div className={styles.allUserAdmin}>
      <SearchBar />
      <DashboardLeft />
      <div className={styles.users}>
        <h1>Usuarios</h1>
        <TextField
          fullWidth
          label="Buscar"
          id="fullWidth"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <DataGrid
          experimentalFeatures={{ columnGrouping: true }}
          checkboxSelection
          onSelectionModelChange={handleRowSelection}
          selectionModel={selectedRows}
          disableRowSelectionOnClick
          rows={filteredRows}
          columns={columns1}
        />
        <Button onClick={handleDeleteRows} variant="outlined" color="secondary">
          Desactivar Administrador
        </Button>
      </div>
    </div>
  );
}
