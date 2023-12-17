import React from "react";

import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import CloseIcon from "@mui/icons-material/Close";

import Typography from "@mui/material/Typography";

const DeleteButton = ({ data, onClose }) => {
  const onDelete = (data) => {
    // Make API call with updated data ...
    console.log("delete Submit");
    console.log(data);
    onClose(); // Close dialog after API call
  };

  return (
    <Dialog open fullWidth>
      <DialogTitle>
        Delete Confirmation
        <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete "{data.dealerName}"? This action cannot be
          undone.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDelete(data)}
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteButton;
