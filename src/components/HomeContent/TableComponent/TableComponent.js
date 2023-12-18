import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import EditComponent from "../EditButton/EditButton";
import DeleteComponent from "../DeleteButton/DeleteButton";

const TableComponent = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const [selectedAction, setSelectedAction] = useState(null);

  const handleCloseDialog = () => setOpenDialog(false);

  const handleEdit = (data) => {
    setSelectedRow(data);
    setSelectedAction("edit");
    setOpenDialog(true);
  };

  const handleDelete = (data) => {
    setSelectedRow(data);
    setSelectedAction("delete");
    setOpenDialog(true);
  };
  const rows = [
    {
      id: 1,
      dealerName: "Exide",
      batteryType: "Two Wheeler",
      batterySerielNumber: 12345,
      status: "Ok Return",
      createdDateTime: new Date(2020, 8, 12),
      updatedDateTime: new Date(2020, 10, 12),
    },
    {
      id: 2,
      dealerName: "Exide",
      batteryType: "Four Wheeler",
      batterySerielNumber: 12345,
      status: "Ok Return",
      createdDateTime: new Date(2020, 8, 12),
      updatedDateTime: new Date(2020, 10, 12),
    },
    {
      id: 3,
      dealerName: "Amaron",
      batteryType: "Two Wheeler",
      batterySerielNumber: 12345,
      status: "Ok Return",
      createdDateTime: new Date(2020, 8, 12),
      updatedDateTime: new Date(2020, 10, 12),
    },
    {
      id: 4,
      dealerName: "Exide",
      batteryType: "Electric",
      batterySerielNumber: 12345,
      status: "Replacement battery",
      createdDateTime: new Date(2020, 8, 12),
      updatedDateTime: new Date(2020, 10, 12),
    },
    {
      id: 5,
      dealerName: "Duracel",
      batteryType: "Four Wheeler",
      batterySerielNumber: 12345,
      status: "Replacement battery",
      createdDateTime: new Date(2020, 8, 12),
      updatedDateTime: new Date(2020, 10, 12),
    },
    {
      id: 6,
      dealerName: "Exide",
      batteryType: "Four Wheeler",
      batterySerielNumber: 12345,
      status: "Replacement battery",
      createdDateTime: new Date(2020, 8, 12),
      updatedDateTime: new Date(2020, 10, 12),
    },
    {
      id: 7,
      dealerName: "Exide",
      batteryType: "Four Wheeler",
      batterySerielNumber: 12345,
      status: "In Work",
      createdDateTime: new Date(2020, 11, 12),
      updatedDateTime: new Date(2020, 11, 12),
    },
    {
      id: 8,
      dealerName: "Exide",
      batteryType: "Four Wheeler",
      batterySerielNumber: 12345,
      status: "Delivered",
      createdDateTime: new Date(2020, 9, 12),
      updatedDateTime: new Date(2020, 9, 12),
    },
    {
      id: 9,
      dealerName: "Duracel",
      batteryType: "Two Wheeler",
      batterySerielNumber: 234532,
      status: "In Work",
      createdDateTime: new Date(2020, 3, 12),
      updatedDateTime: new Date(2020, 10, 12),
    },
    {
      id: 11,
      dealerName: "EveryReady",
      batteryType: "Two Wheeler",
      batterySerielNumber: 12345,
      status: "Open",
      createdDateTime: new Date(2020, 1, 12),
      updatedDateTime: new Date(2020, 4, 12),
    },
    {
      id: 10,
      dealerName: "Exide",
      batteryType: "Two Wheeler",
      batterySerielNumber: 12345,
      status: "Open",
      createdDateTime: new Date(2020, 8, 12),
      updatedDateTime: new Date(2020, 8, 12),
    },
  ];

  const columns = [
    { field: "id", 
    headerName: "ID",
     width: 100 
    },
    {
      field: "dealerName",
      headerName: "Dealer Name",
      width: 200,
    },
    {
      field: "batteryType",
      headerName: "Battery Type",
      width: 150,
    },
    {
      field: "batterySerielNumber",
      headerName: "Battery Seriel Number",
      type: "singleSelect",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      type: "singleSelect",
      valueOptions: ["Open", "Delivered", "In Progress"],
      width: 200,
    },
    {
      field: "createdDateTime",
      headerName: "Created Date",
      type: "date",
      width: 150,
    },
    {
      field: "updatedDateTime",
      headerName: "Updated Date",
      type: "date",
      width: 150,
    },
    {
      type: "actions",
      headerName: "Actions",
      width: 300,
      getActions: (params) => [
        <Button
          key="edit"
          variant="outlined"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon /> Edit
        </Button>,
        <Button
          key="delete"
          variant="outlined"
          color="error"
          onClick={() => handleDelete(params.row)}
        >
          <DeleteIcon /> Delete
        </Button>,
      ],
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
          checkboxSelection
        key={rows.id}
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
      />
      {openDialog && (
        <>
          {selectedAction === "edit" && (
            <EditComponent data={selectedRow} onClose={handleCloseDialog} />
          )}
          {selectedAction === "delete" && (
            <DeleteComponent data={selectedRow} onClose={handleCloseDialog} />
          )}
        </>
      )}
    </div>
  );
};
export default TableComponent;
