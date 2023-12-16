
import Box from "@mui/material/Box"

import TableComponent from '../../components/TableComponent/TableComponent'
import AddButton from '../../components/AddButton/AddButton'

const MainContent = () => {
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

export default MainContent