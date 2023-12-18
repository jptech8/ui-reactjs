import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const EditButton = ({ data, onClose }) => {
  const [updatedData, setUpdatedData] = useState(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const onEditHandle = () => {
    console.log("Edit Submit");
    console.log(updatedData);
    onClose();
  };

  return (
    <Dialog open fullWidth>
      <DialogTitle>
        Edit Existing Customer
        <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                key={updatedData.id}
                id="dealerName"
                label="Dealer   Name"
                name="dealerName"
                value={updatedData.dealerName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                key={updatedData.id}
                id="batteryType"
                label="Battery Type"
                name="batteryType"
                value={updatedData.batteryType}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                key={updatedData.id}
                id="batterySerielNumberNew"
                label="New Battery Seriel Number"
                name="batterySerielNumberNew"
                value={updatedData.batterySerielNumberNew}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth   sx={{ margin: "8px" }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                 
                  id="status"
                  label="status"
                  name="status"
                  value={updatedData.status}
                  onChange={handleChange}
                >  
                <MenuItem value="Active">Open</MenuItem>
                  <MenuItem value="OkReturn">Ok Return</MenuItem>
                  <MenuItem value="Replacement">Replacement</MenuItem>
                  <MenuItem value="OnWork">On Work</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" onClick={() => onEditHandle()}>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditButton;
