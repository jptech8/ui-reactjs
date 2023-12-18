import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
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
import Logo from '../../components/Common/Logo/Logo';

const Menu = () => {
  const drawerWidth = 240;
  const menuItems = [
    { text: 'Home', icon: <PeopleIcon />, link: '/home' },
    { text: 'Reports', icon: <SupervisedUserCircleIcon />, link: '/reports' },
    { text: 'Sales', icon: <TrendingUpIcon />, link: '/sales' },
    { text: 'Logout', icon: <LogoutIcon />, link: '/logout' },
  ];

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
      <Logo />
      <Divider />
      <List>
        {menuItems.map(({ text, icon, link }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={RouterLink} to={link}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Menu;
