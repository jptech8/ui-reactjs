import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import {useLocation}  from 'react-router-dom';

const Header = () => {
  const drawerWidth = 240;
  const location = useLocation();
  const currentPath = location.pathname;

  let title;
  switch (currentPath) {
    case '/':
      title = 'Home';
      break;
    case '/reports':
      title = 'Reports';
      break;
      case '/sales':
      title = 'Sales Trend';
      break;
    // Add more cases for other routes
    default:
      title = 'Home';
  }
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
