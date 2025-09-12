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
import logo from '../../img/logo.jpg';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const menuItems = [
        { text: "Dashboard", icon: <Home sx={{ color: 'white' }} fontSize="small" /> },
        { text: "Banners & Sliders", icon: <ShoppingCart sx={{ color: 'white' }} fontSize="small" /> },
        { text: "Page Settings", icon: <Info sx={{ color: 'white' }} fontSize="small" /> },
        { text: "Blogs & Articles", icon: <Article sx={{ color: 'white' }} fontSize="small" /> },
    ];

    const drawer = (
        <List>
            {menuItems.map((item) => (
                <ListItem sx={{ py: 1, px: 2 }} button key={item.text}>
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
                        <MenuIcon sx={{ color: 'white'}}/>
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