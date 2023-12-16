import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';

const AddButton = () => {

  return (
    <Box sx={
        { display: "flex", 
        justifyContent: "flex-end",
        margin :"9px"
         }}>
    <Stack spacing={2}>
      <Button variant="contained" endIcon={<AddCircleIcon />}>
        Add
      </Button>
    </Stack>
  </Box>
  );
};

export default AddButton;
