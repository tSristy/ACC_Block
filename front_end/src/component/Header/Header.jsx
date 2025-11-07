import {
  AppBar, Box, Collapse, Drawer, Grid, IconButton, List,
  ListItemButton, ListItemText, Menu, MenuItem, Stack, Toolbar,
  useMediaQuery, useTheme
} from '@mui/material';
import logo from '../../img/logo.jpg';
import { useEffect, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// --- New Imports for Mobile Submenu ---
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // --- State for Mobile Drawer ---
  const [openDrawer, setDrawerOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  // --- Refactored State for Desktop Submenus ---
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentChildren, setCurrentChildren] = useState(null); // Stores children for the open menu
  const open = Boolean(anchorEl);

  const handleClick = (event, children) => {
    setAnchorEl(event.currentTarget);
    setCurrentChildren(children); // Set the children to display
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCurrentChildren(null); // Clear children on close
  };

  // --- New State for Mobile Submenus ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null); // Stores the title of the open mobile menu
  const handleMobileMenuClick = (title) => {
    // Toggle the open menu
    setMobileMenuOpen(mobileMenuOpen === title ? null : title);
  };

  // --- Refactored menuList with 'children' array for submenus ---
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
      // No 'url', it's a parent
      children: [
        { title: 'AAC BLOCKS', url: '/product/aac-blocks' },
        { title: 'AAC PANELS', url: '/product/aac-panels' },
      ]
    },
    // {
    //   title: 'Blogs & Articles',
    //   url: '/blogs',
    // },
    {
      title: 'Technical Specification',
      // No 'url', it's a parent
      children: [
        { title: 'AAC BLOCKS', url: '/technical-specification/aac-blocks' },
        { title: 'AAC PANELS', url: '/technical-specification/aac-panels' },
        { title: 'BLOCK FIX', url: '/technical-specification/block-fix' },
      ]
    },
    {
      title: 'Guideline',
       children: [
        { title: 'AAC BLOCKS', url: '/guideline/aac-blocks' },
        { title: 'AAC PANELS', url: '/guideline/aac-panels' },
      ]
    },
    {
      title: 'Contact us',
      url: '/contact-us',
    }
  ];

  const location = useLocation();
  const [currPath, setCurrPath] = useState(location.pathname);

  useEffect(() => {
    setCurrPath(location.pathname);
  }, [location]);

  return (
    <>
      {/* Top social bar (unchanged) */}
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
        isSmallScreen ? (
          // --- Mobile View ---
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
        ) : (
          // --- Desktop View ---
          <Box>
            <Grid container direction="row" sx={{
              color: '#2b2b2b',
              fontWeight: '600',
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Grid size={{ xs: 3, md: 3 }} sx={{ display: "flex", justifyContent: "center" }}>
                <img src={logo} style={{ height: '3.75rem' }} alt="logo" />
              </Grid>
              <Grid size={{ xs: 9, md: 9 }}>
                <Stack direction="row" spacing={0}>
                  {menuList.map((row, index) => (
                    <Box key={index} sx={{
                      cursor: 'pointer',
                      p: 4, fontWeight: '600',
                      textTransform: 'uppercase',
                      color: '#2b2b2b',
                      fontSize: '1rem',
                      // --- Updated active border logic ---
                      borderBottom: (
                        currPath === row.url || // Check for direct match
                        (row.children && row.children.some(child => child.url === currPath)) // Check if a child is active
                      ) ? '3px solid #187b3d' : null
                    }}
                    onClick={(e) => {
                      // --- Updated onClick logic ---
                      if (row.children) {
                        handleClick(e, row.children); // Open submenu
                      } else {
                        navigate(row.url); // Navigate to simple link
                      }
                    }}
                  >
                    {row.title}
                  </Box>
                  ))}

                  {/* --- Dynamic Menu for Desktop --- */}
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose} // Use updated handleClose
                    slotProps={{
                      paper: {
                        sx: {
                          // This sets the menu width to be the same as the anchor element's width
                          width: anchorEl && anchorEl.textContent === "Technical Specification" ? anchorEl.offsetWidth : 'auto',
                          // This ensures padding calculations are consistent
                          boxSizing: 'border-box', 
                        },
                      },
                    }}
                  >
                    {/* Map over the children stored in state */}
                    {currentChildren && currentChildren.map((child, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => {
                          navigate(child.url);
                          handleClose(); // Close menu after navigation
                        }}
                        sx={{ py: 2, px: 4 }}
                      >
                        <ListItemText>
                          {child.title}
                        </ListItemText>
                      </MenuItem>
                    ))}
                  </Menu>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )
      }

      {/* --- Refactored Mobile Drawer with Collapse --- */}
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#1a1a1aff',
              color: 'white',
              width: '250px' // Optional: Set a width
            },
          },
        }}>
        <List component="nav">
          {menuList.map((item, index) =>
            // Check if item has children
            item.children ? (
              <Box key={index}>
                {/* Parent Menu Item */}
                <ListItemButton
                  sx={{ px: 4, borderBottom: '1px solid grey' }}
                  onClick={() => handleMobileMenuClick(item.title)} // Toggle collapse
                >
                  <ListItemText primary={item.title} />
                  {/* Show expand/collapse icon */}
                  {mobileMenuOpen === item.title ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {/* Collapsible Child Menu */}
                <Collapse in={mobileMenuOpen === item.title} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => (
                      <ListItemButton
                        key={childIndex}
                        sx={{ pl: 6, borderBottom: '1px solid #444' }} // Indent child items
                        onClick={() => {
                          navigate(child.url);
                          setDrawerOpen(false); // Close drawer on navigation
                          setMobileMenuOpen(null); // Close submenu
                        }}
                      >
                        <ListItemText primary={child.title} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              // Simple Menu Item (no children)
              <ListItemButton
                key={index}
                sx={{ px: 4, borderBottom: '1px solid grey' }}
                onClick={() => {
                  navigate(item.url);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            )
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;