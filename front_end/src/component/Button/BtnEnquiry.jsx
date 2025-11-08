import { BorderColor, BorderLeft, BorderRight } from '@mui/icons-material';
import { Box, Button, Drawer, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const BtnEnquiry = () => {
    const btnStyle = {
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        position: 'fixed',
        top: '200px',
        right: '0px',
        backgroundColor: '#2b2b2b',
        color: 'white',
        zIndex: 888,
        boxShadow: 1,
        border:1,
        borderLeft: 0,
        borderColor: '#9b9b9bff',
        py: 4,
        px: 1,
        "&:hover": {
            cursor: 'pointer',
            color: '#25d366'
        }
    }

    const [openDrawer, setDrawerOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };
    const [subject, setSubject] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    return (
        <>
            <Box variant='none' sx={btnStyle} onClick={toggleDrawer(true)}>Enquiry Now</Box>

            <Drawer open={openDrawer} anchor='right' onClose={toggleDrawer(false)}
                slotProps={{
                    paper: {
                        sx: {
                            // backgroundColor: '#1a1a1aff',
                            // color: 'white',
                            width: '30vw',
                            zIndex: 999
                        },
                    },
                }}>

                <Box component="form" noValidate autoComplete="off" sx={{ p: 4 }}>
                    <Typography variant='h5' sx={{ mb: 2 }}>Send a Message</Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth size="small" color="success"
                        sx={{ mt: 1 }}
                    />
                    <TextField
                        label="Phone"
                        type="tel"
                        variant="outlined"
                        fullWidth size="small" color="success"
                        sx={{ mt: 1 }}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth size="small" color="success"
                        sx={{ mt: 1 }}
                    />

                    <FormControl fullWidth color='success' size='small' sx={{ mt: 1 }}>
                        <InputLabel>Subject</InputLabel>
                        <Select
                            value={subject}
                            label="Subject"
                            onChange={handleSubjectChange}
                        >
                            <MenuItem value="Product Inquiry">Product Inquiry</MenuItem>
                            <MenuItem value="Technical Support">Technical Support</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        sx={{
                            width: '100%',
                            marginBottom: '1.5rem', mb: 5, mt: 1
                        }}
                    />

                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                    >
                        Send now
                    </Button>
                </Box>
            </Drawer>
        </>

    );
};

export default BtnEnquiry;