import React, { useState } from 'react';
import { IconButton, Menu as MuiMenu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { logout } from '../services/AuthService';

const Menu = ({ routes, setToken }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        logout();  // Your logout function removes the token from localStorage
        setToken(null);  // This will trigger the App component to re-render and update authentication state
        handleClose();
    };

    return (
        <div>
            <IconButton 
                onClick={handleClick} 
                edge="start" 
                style={{ marginLeft: '.5%' }}
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            <MuiMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {routes.map((route, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        <Link to={route.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="body1">{route.name}</Typography>
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem onClick={handleLogout}>
                    <Typography variant="body1">Logout</Typography>
                </MenuItem>
            </MuiMenu>
        </div>
    );
};

export default Menu;
