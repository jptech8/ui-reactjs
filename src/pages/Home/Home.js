import React from "react";
import {  Box, Typography } from "@mui/material";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

const Home = () => (
  <div>
    <Header />
    {/* Your main content goes here */}
    <Box sx={{ marginTop: "3em" }}>
      <Typography variant="body1">This is the main content area of your homepage.</Typography>
    </Box>
    <Footer />
  </div>
);

export default Home;