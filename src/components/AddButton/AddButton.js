import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
const AddButton = () => {
  const [open, setOpen] = useState(false); // state variable for modal visibility

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newData, setNewData] = useState({}); // Copy selected item data

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewData({ ...newData, [name]: value }); // Update specific property based on field change
  };
  const onEditHandle = () => {
    // Make API call with updatedData ...
    console.log("Edit Submit");
    
    console.log(newData);
    handleClose(); // Close dialog after API call
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "9px" }}>
      <Stack spacing={2}>
        <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
          Add
        </Button>
      </Stack>
   
      <Dialog  open={open} onClose={handleClose} fullWidth  >
        
        <DialogTitle>
          Add New Customer
          <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
        </DialogTitle>
        <DialogContent >
          {/* Add your form fields here */}
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' }}} noValidate autoComplete="off">
  <Grid container spacing={3} >
    <Grid item xs={6}>
    <TextField
        key={newData.id} 
        id="dealerName"
        label="Dealer Name"
        name="dealerName" 
        value={newData.dealerName} 
        onChange={handleChange}
      />
      <TextField
        key={newData.id} 
        id="batteryType"
        label="Battery Type"
        name="batteryType" 
        value={newData.batteryType} 
        onChange={handleChange}
      />
     
    </Grid>
    <Grid item xs={6} >
     
    <TextField
        key={newData.id} 
        id="batterySerielNumber"
        label="Battery Seriel Number"
        name="batterySerielNumber" 
        value={newData.batterySerielNumber} 
        onChange={handleChange}
      />
       <TextField
        key={newData.id} 
        id="status"
        label="Status"
        name="status" 
        value={newData.status} 
        onChange={handleChange}
      />
    </Grid>
  </Grid>
</Box>
<Button variant="contained"  onClick={() => onEditHandle()}>
          Submit
        </Button>
        </DialogContent>
      </Dialog>
     
    </Box>
  );
};

export default AddButton;
