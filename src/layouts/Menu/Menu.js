import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';



const Menu = () => {
  const drawerWidth = 240;
  const MenuItems = ['Customer','Users', 'Sales','Logout']
  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {MenuItems.map((text, index) => (
       <ListItem key={text} disablePadding>
       <ListItemButton>
         <ListItemIcon>
           {text === 'Customer' && <PeopleIcon />}
           {text === 'Users' && <SupervisedUserCircleIcon />}
           {text === 'Sales' && <TrendingUpIcon />}
           {text === 'Logout' && <LogoutIcon />}
           

         </ListItemIcon>
         <ListItemText primary={text} />
       </ListItemButton>
     </ListItem>
      ))}
    </List>
    <Divider />
    
   
  </Drawer>
  )
}

export default Menu 