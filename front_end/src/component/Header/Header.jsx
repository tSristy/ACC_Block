import { AppBar, Box, Container, Drawer, Grid, IconButton, List, ListItemButton, ListItemText, Menu, MenuItem, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../img/logo.jpg';
import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    const [openDrawer, setDrawerOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setAnchorEl(null);
    };


    const menuList = [
        {
            title: 'Home',
            url: '/',
        },
        {
            title: 'About',
            url: '/about-us',
        },
        {
            title: 'Product',
            url: '/aac-blocks' || '/aac-panels',
        },
        {
            title: 'Blogs & Articles',
            url: '/blogs',
        },
        {
            title: 'Contact us',
            url: '/contact-us',
        }]

    const location = useLocation();
    const [currPath, setCurrPath] = useState(location.pathname);

    useEffect(() => {
        setCurrPath(location.pathname);
    }, [location]);


    return (
        <>
            <Grid container direction="row" sx={{
                px: 1,
                backgroundColor: '#2b2b2b',
                color: 'white',
                fontWeight: '400',
                justifyContent: 'space-between',
                alignContent: 'center'
            }}>
                <Grid size={{ xs: 3, md: 6 }}><LanguageIcon fontSize="inherit" /> English</Grid>
                <Grid size={{ xs: 9, md: 6 }}>
                    <Stack direction="row" spacing={3} sx={{ justifyContent: 'flex-end', alignContent: 'center' }}>
                        <FacebookIcon fontSize="inherit" />
                        <LinkedInIcon fontSize="inherit" />
                        <YouTubeIcon fontSize="inherit" />
                    </Stack>
                </Grid>
            </Grid>

            {
                isSmallScreen ?

                    <AppBar position="static" color='light'>
                        <Toolbar>
                            <IconButton onClick={toggleDrawer(true)}
                                size="large"
                                edge="start"
                                color="success"
                                aria-label="menu"
                                sx={{ mr: "auto" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <img src={logo} style={{ height: '2rem' }} alt="logo" />
                        </Toolbar>
                    </AppBar>

                    :
                    <Container>
                        <Grid container direction="row" sx={{
                            // py: 2,
                            color: '#2b2b2b',
                            fontWeight: '600',
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Grid size={{ xs: 3, md: 3 }}>
                                <img src={logo} style={{ height: '3.75rem' }} alt="logo" />
                            </Grid>
                            <Grid size={{ xs: 9, md: 9 }}>
                                <Stack direction="row" spacing={0}>
                                    {menuList.map((row, index) => (

                                        <Box button sx={{
                                            p: 4, fontWeight: '600',
                                            textTransform: 'uppercase',
                                            color: '#2b2b2b',
                                            fontSize: '1rem',
                                            borderBottom: currPath === row.url ? '3px solid #187b3d' : null
                                        }}
                                            onClick={(e) => {
                                                if (row.title === 'Product') {
                                                    handleClick(e)
                                                } else navigate(row.url)
                                            }
                                            }>
                                            {row.title}
                                        </Box>
                                    ))}

                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={(e) => {
                                            navigate('/aac-blocks');
                                            handleClose(e)
                                        }}
                                            sx={{ py: 2, px: 4 }}>
                                            <ListItemText>
                                                AAC BLOCKS
                                            </ListItemText>
                                        </MenuItem>
                                        <MenuItem onClick={(e) => {
                                            navigate('/aac-panels');
                                            handleClose(e)
                                        }}
                                            sx={{ py: 2, px: 4 }}>
                                            <ListItemText>
                                                AAC PANELS
                                            </ListItemText>
                                        </MenuItem>
                                    </Menu>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
            }


            <Drawer open={openDrawer} onClose={toggleDrawer(false)}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: '#1a1a1aff',
                            color: 'white',
                        },
                    },
                }}>
                <List component="nav" >
                    {
                        menuList.map((item, index) => 
                            item.title === 'Product' ?
                                (<>
                                <ListItemButton key={index} sx={{ px: 4, borderBottom: '1px solid grey' }}
                                    onClick={(event) => {
                                        navigate('/aac-blocks')
                                        setDrawerOpen(false)
                                    }}
                                >
                                    <ListItemText primary='AAC Blocks' />
                                </ListItemButton>
                                <ListItemButton key={index} sx={{ px: 4, borderBottom: '1px solid grey' }}
                                    onClick={(event) => {
                                        navigate('/aac-panels')
                                        setDrawerOpen(false)
                                    }}
                                >
                                    <ListItemText primary='AAC Panels' />
                                </ListItemButton>
                                </>)
                                :
                                (<ListItemButton key={index} sx={{ px: 4, borderBottom: '1px solid grey' }}
                                    onClick={(event) => {
                                        navigate(item.url)
                                        setDrawerOpen(false)
                                    }}
                                >
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                                )
                            )
                    }
                </List>
            </Drawer>
        </>
    );
};

export default Header;