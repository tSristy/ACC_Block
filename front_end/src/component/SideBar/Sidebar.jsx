import { useState } from "react";
import {
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    Box,
    Avatar,
} from "@mui/material";
import { Menu as MenuIcon, Home, Info, ShoppingCart, Article } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const menuItems = [
        { text: "Dashboard", url: '/dashboard', icon: <Home sx={{ color: 'white' }} fontSize="small" /> },
        { text: "Banners & Sliders", url: '/banners-slides', icon: <ShoppingCart sx={{ color: 'white' }} fontSize="small" /> },
        { text: "Page Settings", url: '/pages-settings', icon: <Info sx={{ color: 'white' }} fontSize="small" /> },
        { text: "Blogs & Articles", url: '/blogs-articles', icon: <Article sx={{ color: 'white' }} fontSize="small" /> },
    ];

    const drawer = (
        <List>
            {menuItems.map((item) => (
                <ListItem sx={{ py: 1, px: 2, width: '230px' }} button="true" key={item.text} onClick={(e)=>{navigate(item.url)}}>
                    <ListItemIcon>
                        <Avatar sx={{ bgcolor: '#0000003f' }}>
                            {item.icon}
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText primary={item.text} slotProps={{
                        primary: {
                            fontSize: '.75rem',
                            color: 'white',
                            textTransform: 'uppercase'
                        }
                    }} />
                </ListItem>
            ))}
        </List>
    );
    return (
        <>
            {/* Top AppBar */}
            {isSmallScreen && (
                <Box sx={{ p: 1, height: '100vh', bgcolor: '#187b3d' }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>
            )}

            {/* Sidebar Drawer */}
            {isSmallScreen ? (
                <Drawer anchor="left" open={open} onClose={toggleDrawer}
                    slotProps={{
                        paper: {
                            sx: {
                                backgroundColor: '#187b3d',
                                color: 'white',
                            },
                        },
                    }}>
                    {drawer}
                </Drawer>
            ) : (
                // <Drawer variant="permanent" open>
                <Box sx={{ height: '100vh', bgcolor: '#187b3d' }}>
                    {drawer}
                </Box>
                // </Drawer>
            )}
        </>
    );
};

export default Sidebar;