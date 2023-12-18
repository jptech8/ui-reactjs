import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import HomeContent from "../../components/HomeContent";
import ReportContent from "../../components/ReportContent";

const MainContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const renderContent = () => {
    switch (currentPath) {
      case "/home":
        return <HomeContent />;
      case "/reports":
        return <ReportContent />;
      case "/sales":
        return <HomeContent />;
      // Add more cases for other routes as needed
      default:
        return <HomeContent />; // Fallback to HomeContent if no matching route
    }
  };
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      {renderContent()}
    </Box>
  );
};

export default MainContent;
