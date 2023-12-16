import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
const Header = () => {
  const drawerWidth = 240;
const title = "Customer Details"
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
