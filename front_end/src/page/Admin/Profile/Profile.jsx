import { Button, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthContext } from '../../../Route/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userDetail, setUserDetail] = useState('');
    const [showCurrPassword, setShowCurrPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const handleClickShowPassword = (setVar) => setVar((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        ServerApi(`/user/info`, 'GET', user.access_token)
            .then(res => res.json())
            .then(res => {
                setUserDetail(res.data)
            })
    }, [user])

    const handlePasswordChange = () => {
        const data = { newPassword: userDetail.newPassword }
        ServerApi(`/user/password-change`, 'POST', user.access_token, data)
            .then(res => res.json())
            .then(res => {
                setUserDetail(res.data)
            })

    }

    console.log(userDetail)

    return (
        <Grid container spacing={4} sx={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid size={{ xs: 12 }} sx={{ borderBottom: '1px solid #e2e1e1ff', color: '#a1a1a1ff' }}>
                <AccountCircleIcon sx={{ fontSize: '30px' }} />  ADMIN PANEL
            </Grid>
            <Grid size={{ xs: 8, md: 4 }}>
                <InputLabel htmlFor="currPass" sx={{ fontSize: "14px", fontWeight: "600", p: 1 }}>Current Password</InputLabel>
                <OutlinedInput sx={{ mb: 2 }}
                    id="current-password"
                    type={showCurrPassword ? 'text' : 'password'}
                    fullWidth size='small'
                    color="success"
                    defaultValue={userDetail.passCode}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={(e) => handleClickShowPassword(setShowCurrPassword)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showCurrPassword ? <VisibilityOff /> : <Visibility color='success' />}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <InputLabel htmlFor="newPass" sx={{ fontSize: "14px", fontWeight: "600", p: 1 }}>New Password</InputLabel>
                <OutlinedInput sx={{ mb: 2 }}
                    id="new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    fullWidth size='small'
                    color="success"
                    value={userDetail.newPassword ? userDetail.newPassword : ""}
                    placeholder="Enter your new password"
                    onChange={(e) => {
                        setUserDetail(prev => ({
                            ...prev,
                            newPassword: e.target.value
                        }))
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={(e) => handleClickShowPassword(setShowNewPassword)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showNewPassword ? <VisibilityOff /> : <Visibility color='success' />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button onClick={handlePasswordChange} color='success' variant='contained'
                    sx={{ mb: 2, width: '100%' }}>Change Password</Button>
            </Grid>


            <Grid size={{ xs: 8, md: 6 }}>

                <Typography variant="subtitle1" fontWeight="bold">
                    Profile Information
                </Typography>

                <Stack direction='row' sx={{ px: 2, py: 1 }}>
                    <InputLabel htmlFor="name" sx={{ fontSize: "14px", fontWeight: "600", p: 1, width: '20%' }}>Name</InputLabel>
                     <TextField fullWidth
                        size="small"
                        variant="outlined"
                        defaultValue="Admin"
                    />
                </Stack>

                <Stack direction='row' sx={{ px: 2, py: 1 }}>
                    <InputLabel htmlFor="fullName" sx={{ fontSize: "14px", fontWeight: "600", p: 1, width: '20%' }}>Full Name</InputLabel>
                     <TextField fullWidth
                        size="small"
                        variant="outlined"
                        defaultValue="Admin"
                    />
                </Stack>

                <Typography variant="subtitle1" fontWeight="bold">
                    Contact Information
                </Typography>

                <Stack direction='row' sx={{ px: 2, py: 1 }}>
                    <InputLabel htmlFor="Email" sx={{ fontSize: "14px", fontWeight: "600", p: 1, width: '20%' }}>Email</InputLabel>
                     <TextField fullWidth
                        size="small"
                        variant="outlined"
                        value="needed"
                    />
                </Stack>

                <Stack direction='row' sx={{ px: 2, py: 1 }}>
                    <InputLabel htmlFor="Phone" sx={{ fontSize: "14px", fontWeight: "600", p: 1, width: '20%' }}>Phone</InputLabel>
                     <TextField fullWidth
                        size="small"
                        variant="outlined"
                        defaultValue="needed"
                    />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Profile;