import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, Grid, IconButton, InputAdornment, OutlinedInput, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import TextSection from '../../../component/TextSection/TextSection';
import { Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../../img/logo.jpg';
import { ServerApi } from '../../../Route/ServerApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const boxStyle = {
        // backgroundImage: `linear-gradient(145deg,#187b3d,#66cc33)`,
        height: `80vh`
    }
    const btnStyle = {
        height: '50px',
        width: '200px',
        borderRadius: '8px',
        fontSize: '1rem',
        textTransform: 'uppercase',
        // fontWeight: '700',
        color: 'white',
        backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`
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
        color: '#187b3b',
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


    const [userDetail, setUserDetail] = useState({
        username: "",
        password: ""
    });

    const navigation = useNavigate();
    const [errMsg, setErrMsg] = useState();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        ServerApi(`/auth/login`, 'POST', null, userDetail)
            .then(res => res.json())
            .then(res => {
                if (res.access_token) {
                    sessionStorage.setItem("loginInfo", JSON.stringify(res));
                    navigation('/dashboard')
                }
                else setErrMsg(res.message)
            })
    }

    return (
        <div style={boxStyle}>
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
                                            <NavDropdown key={index} style={{ ...menuItemStyle }} title={<span style={{ color: '#187b3d' }}>{row.title}</span>}>
                                                <NavDropdown.Item href="/aac-blocks" >AAC BLOCKS</NavDropdown.Item>
                                                <NavDropdown.Item href="/aac-panels">AAC PANELS</NavDropdown.Item>
                                            </NavDropdown>
                                        ) : (
                                            <Nav.Link key={index} href={row.url} style={{ ...menuItemStyle }} >{row.title}</Nav.Link>
                                        )
                                ))}
                            </Nav>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Grid
                container
                direction="row"
                sx={{
                    height: '100%',
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Grid size={5}>
                    <TextSection givenAlign="flex-start" textData={{ supportTitle: `Great Wall Ceramic Industries Ltd.`, headerTitle: `Login`, textDescription: `Great Wall Ceramic Industries Ltd. has expanded its legacy of excellence into sustainable building solutions with AAC Blocks and Panels. Engineered with advanced technology and tested for superior performance, Great Wall AAC products bring together strength, speed, and sustainability. From residential to commercial projects, our solutions redefine construction with lighter, greener, and more efficient alternatives to traditional bricks and concrete.` }} />
                </Grid>
                <Grid size={4}>
                    <Container sx={{ py: 2 }}>
                        {/* <InputLabel htmlFor="component-simple" style={{ fontSize: "14px", fontWeight: "400", padding: "2%" }}>Username</InputLabel> */}
                        <TextField name="username"
                            fullWidth
                            variant="outlined"
                            color="success"
                            type="text"
                            onChange={(e) => setUserDetail((prev) => ({
                                ...prev, username: e.target.value
                            }))}
                            placeholder="Enter your username"
                            slotProps={{
                                input: {

                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle color="success" />
                                        </InputAdornment>
                                    ),
                                }
                            }}
                        />
                    </Container>

                    <Container sx={{ p: 2 }}>
                        {/* <InputLabel htmlFor="component-simple" style={{ fontSize: "14px", fontWeight: "600", padding: "2%" }}>Password</InputLabel> */}
                        <OutlinedInput
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            color="success"
                            onChange={(e) => setUserDetail((prev) => ({
                                ...prev, password: e.target.value
                            }))}
                            placeholder="Enter your password"

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility color='success' />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Container>
                    <Container sx={{
                        p: 2,
                        width: '100%',
                        display: 'flex',
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}>
                        <Button variant='none' style={btnStyle} onClick={(e) => handleLogin()}>Login</Button>
                    </Container>
                </Grid>

            </Grid>
        </div>
    );
};

export default Login;