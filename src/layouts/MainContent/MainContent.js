
import Box from "@mui/material/Box"

import HomeContent from '../../components/HomeContent' 

const MainContent = () => {
    return (

<Box
component="main"
sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
>
<HomeContent />
</Box>
)
    }

export default MainContent