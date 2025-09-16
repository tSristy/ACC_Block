import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const BtnProfile = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const options = [
        {  
            title: 'Profile',
            fun: () => {
                setAnchorEl(null);
                navigate(`/profile`);
            },
            icon: <AccountCircleIcon color='success' />,
            // url: '/profile',
        },
        {
            title: 'Logout',
            icon: <LogoutIcon color='info'/>,
            fun: () => {
                setAnchorEl(null);
                sessionStorage.removeItem('loginInfo');
                navigate(`/great-wall`);
            },
            // url: '/great-wall',
        }
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((option,index) => (
                    <MenuItem key={index} onClick={(e) => option.fun()} 
                sx={{ px: 5}}>
                        <ListItemIcon>
                            {option.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {option.title}
                        </ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default BtnProfile;