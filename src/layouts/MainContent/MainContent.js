
import Box from "@mui/material/Box"

import TableComponent from '../../components/TableComponent/TableComponent'

const MainContent = () => {
    return (

<Box
component="main"
sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
>
<TableComponent />
</Box>
)
    }

export default MainContent