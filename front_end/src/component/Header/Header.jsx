import { Container, Grid, Stack } from '@mui/material';
import logo from '../../img/logo.jpg';
import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const miniBarStyle = {
        padding: '0rem 3rem',
        height: '2rem',
        backgroundColor: '#2b2b2b',
        color: 'white',
        fontWeight: '400',
        justifyContent: 'space-between',
        alignContent: 'center'
    }
    const menuBarStyle = {
        // padding: '0rem 3rem',
        height: '6rem',
        color: '#2b2b2b',
        fontWeight: '600',
        justifyContent: "center",
        alignItems: "center",
    }
    const menuItemStyle = {
        height: '100%',
        borderRadius: '0',
        // borderBottom: '3px solid #187b3d',
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#2b2b2b',
        fontSize: '1rem',
        // fontFamily: "Poppins",
        fontStyle: 'normal',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const menuList = [
        {
            title: 'Home',
            url: '/',
        },
        {
            title: 'About',
            url: '/about-us',
        }, {
            title: 'Product',
            url: '/aac-blocks' || '/aac-panels',
        }, {
            title: 'Blogs & Articles',
            url: '/blogs',
        }, {
            title: 'Contact us',
            url: '/contact-us',
        }]

    const location = useLocation();
    const [currPath, setCurrPath] = useState(location.pathname);

    useEffect(() => {
        setCurrPath(location.pathname);
    }, [location]);

    console.log(currPath)

    return (
        <>
            <Grid container direction="row" style={miniBarStyle}>
                <Grid size={6}><LanguageIcon fontSize="inherit" /> English</Grid>
                <Grid size={6}>
                    <Stack direction="row" spacing={3} sx={{ justifyContent: 'flex-end', alignContent: 'center' }}>
                        <FacebookIcon fontSize="inherit" />
                        <LinkedInIcon fontSize="inherit" />
                        <YouTubeIcon fontSize="inherit" />
                    </Stack>
                </Grid>
            </Grid>

            <Container>
                <Grid container direction="row" style={menuBarStyle}>
                    <Grid size={3}>
                        <img src={logo} style={{ height: '3.75rem' }} alt="logo" />
                    </Grid>
                    <Grid size={9} style={{ height: '100%' }}>
                        <Stack direction="row" spacing={0} style={{ height: '100%' }}>
                            <Nav className="me-auto">
                                {menuList.map((row, index) => (
                                    row.title === 'Product' ?
                                        (
                                            <NavDropdown key={index} style={{ ...menuItemStyle, borderBottom: currPath === row.url ? '3px solid #187b3d' : null }} title={<span style={{ color: '#2b2b2b' }}>{row.title}</span>}>
                                                <NavDropdown.Item href="/aac-blocks" >AAC BLOCKS</NavDropdown.Item>
                                                <NavDropdown.Item href="/aac-panels">AAC PANELS</NavDropdown.Item>
                                            </NavDropdown>
                                        ) : (
                                            <Nav.Link key={index} href={row.url} style={{ ...menuItemStyle, borderBottom: currPath === row.url ? '3px solid #187b3d' : null }} >{row.title}</Nav.Link>
                                        )
                                ))}
                            </Nav>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

export default Header;