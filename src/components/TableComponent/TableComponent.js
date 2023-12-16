import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function ExportDefaultToolbar() {

  const rows = [
    {
      id:1,
          dealerName: 'Exide',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 8, 12),
          updatedDateTime:  new Date(2020, 10, 12),
        },
        {  id:2,
          dealerName: 'Exide',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 8, 12),
          updatedDateTime:  new Date(2020, 10, 12),
        }, {  id:3,
          dealerName: 'Amaron',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 8, 12),
          updatedDateTime:  new Date(2020, 10, 12),
        }, {  id:4,
          dealerName: 'Exide',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 8, 12),
          updatedDateTime:  new Date(2020, 10, 12),
        }, {  id:5,
          dealerName: 'Duracel',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 8, 12),
          updatedDateTime:  new Date(2020, 10, 12),
        }, {  id:6,
          dealerName: 'Exide',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 8, 12),
          updatedDateTime:  new Date(2020, 10, 12),
        },  { id:7,
          dealerName: 'Exide',
          batteryType: 'Deisel',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 11, 12),
          updatedDateTime:  new Date(2020, 11, 12),
        }, {  id:8,
          dealerName: 'Exide',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 9, 12),
          updatedDateTime:  new Date(2020, 9, 12),
        }, {  id:9,
          dealerName: 'Duracel',
          batteryType: 'Electric',
          batterySerielNumber: 234532,
          status: 'In Progress',
          createdDateTime:  new Date(2020, 3, 12),
          updatedDateTime:  new Date(2020, 10, 12),
        }, {  id:11,
          dealerName: 'EveryReady',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Open',
          createdDateTime:  new Date(2020, 1, 12),
          updatedDateTime:  new Date(2020, 4, 12),
        }, 
        {  
          id:10,
          dealerName: 'Exide',
          batteryType: 'Electric',
          batterySerielNumber: 12345,
          status: 'Delivered',
          createdDateTime:  new Date(2020, 8, 12),
          updatedDateTime:  new Date(2020, 8, 12),
        },
  ];
  const handleEdit = (id) =>{

console.log(id)
  }
  const handleDelete = (id) =>{

    console.log(id)
      }
  const columns = [
    { 
      field: 'dealerName', 
    headerName: 'Dealer Name',
    width: 200 },
    {
      field: 'batteryType',
      headerName: 'Battery Type',
      width: 150,
    },
    {
      field: 'batterySerielNumber',
      headerName: 'Battery Seriel Number',
      type: 'singleSelect',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'singleSelect',
      valueOptions: ['Open', 'Delivered', 'In Progress'],
      width: 150,
    },
    {
      field: 'createdDateTime',
      headerName: 'Created Date',
      type: 'date',
      width: 150,
    },
    {
      field: 'updatedDateTime',
      headerName: 'Updated Date',
      type: 'date',
      width: 150,
    },
    {
      field: 'updatedDateTest',
      headerName: 'Updated Test',
      type: 'date',
      width: 150,
    },
    {
      field: 'updatedDateTest',
      headerName: 'Created Test',
      type: 'date',
      width: 150,
    },
    {
      type: 'actions',
      headerName: 'Actions',
      width: 300,
      getActions: (params) => [
        <Button key="edit" variant="outlined" onClick={() => handleEdit(params.row.id)}>
         <EditIcon/> Edit
        </Button>,
        <Button key="delete" variant="outlined" color="error" onClick={() => handleDelete(params.row.id)}>
       <DeleteIcon /> Delete
      </Button>,
      ],
    },
  ];
  

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid 
     rows={rows}
     columns={columns}
     slots={{ toolbar: GridToolbar }} />
    </div>
  );
}
