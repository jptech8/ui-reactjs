import React,{useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
const EditButton = ({data, onClose }) => {
  const [updatedData, setUpdatedData] = useState(data ); // Copy selected item data

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({ ...updatedData, [name]: value }); // Update specific property based on field change
  };
  const onEditHandle = () => {
    // Make API call with updatedData ...
    console.log("Edit Submit");
    
    console.log(updatedData);
    onClose(); // Close dialog after API call
  };

  return (
    <Dialog open fullWidth>
      <DialogTitle>
        Edit Existing Customer
        <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
      </DialogTitle>
      <DialogContent>
        {/* Add your form fields here */}
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
            <TextField
        key={data.id} 
        id="dealerName"
        label="Dealer   Name"
        name="dealerName" 
        value={updatedData.dealerName} 
        onChange={handleChange}
      />
            </Grid >
            <Grid item xs={6} >
            <TextField
        key={data.id} 
        id="batteryType"
        label="Battery Type"
        name="batteryType" 
        value={updatedData.batteryType} 
        onChange={handleChange}
      />
            </Grid>
            <Grid item xs={6}>
            <TextField
        key={data.id} 
        id="batterySerielNumber"
        label="BatterySerielNumber"
        name="batterySerielNumber" 
        value={updatedData.batterySerielNumber} 
        onChange={handleChange}
      />
            </Grid>
            <Grid item xs={6}>
            <TextField
        key={data.id} 
        id="status"
        label="Status"
        name="status" 
        value={updatedData.status} 
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
  );
};

export default EditButton;
