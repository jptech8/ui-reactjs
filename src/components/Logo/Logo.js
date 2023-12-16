import  Typography  from '@mui/material/Typography';
import logo from '../../assets/images/logo.png'; 
import Toolbar from '@mui/material/Toolbar';
const Logo = () => (
    <Toolbar>
    <img src={logo} alt="Your logo" style={{ marginRight: "10px" }} />
    <Typography variant="h6" component="span">AMARON</Typography>
  </Toolbar>

  );
export default Logo;