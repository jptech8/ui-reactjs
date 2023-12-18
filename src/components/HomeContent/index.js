import React from "react";
import Box from "@mui/material/Box"
import TableComponent from '../../components/HomeContent/TableComponent/TableComponent'
import AddButton from '../../components/HomeContent/AddButton/AddButton'
const HomeContent = () =>{

    return (

        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
        <AddButton />
        <TableComponent />
        </Box>
        )
}

export default HomeContent;