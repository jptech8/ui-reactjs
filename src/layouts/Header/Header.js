import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
const Header = () => {

  const title = "Admin"

  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h1">
          {title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header