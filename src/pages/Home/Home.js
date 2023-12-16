import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../../layouts/Header/Header";
import Menu from "../../layouts/Menu/Menu";
import MainContent from "../../layouts/MainContent/MainContent";

import Footer from "../../layouts/Footer/Footer";

 function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </Box>
  );
}

export default Home