import bannerImg from '../../../img/banner1.jpg';
import Banner from '../../../component/Banner/Banner';
import logo from '../../../img/logo.jpg';
import { Avatar, Box, Button, Container, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import Carousel from '../../../component/Carousel/Carousel';
import TextSection from '../../../component/TextSection/TextSection';
import { ContactData } from './ContactData';


const formStyle = {
    width: '100%',
    marginBottom: '1.5rem'
};

const Contact = () => {
    const [subject, setSubject] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [bannerList, setBannerList] = useState([{
        img_url: bannerImg,
        img_name: 'contact'
    }]);

    useEffect(() => {
        const body = { pageName: 'Contact' };
        ServerApi(`/banner/list`, 'POST', null, body)
            .then(res => res.json())
            .then(res => {
                if (res.data.length > 0) {
                    setBannerList(res.data);
                } else return null;
            })
    }, []);

    return (
        <div >
            <Carousel details={{}}>
                {
                    bannerList.map((banner, index) => (
                        <Banner key={index} bannerHeight="25rem"
                            text={{
                                firstTitle: 'Let’s Build Smarter Together', bigTitle: null, descriptionTitle: `Reach out to us for product inquiries, dealer partnerships, or technical support`
                            }} img={banner.img_url} alt={banner.img_name} />
                    ))
                }
            </Carousel>


            <Container sx={{ py: 10 }}>
                <Grid container spacing={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid size={{ xs: 12 }}>
                        <TextSection givenAlign='center' textData={{
                            supportTitle: 'Need Quick Assistance?', headerTitle: 'Call now', textDescription: `Our team is ready to support your project with expert guidance and reliable AAC solutions`
                        }} />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box component="form" noValidate autoComplete="off" sx={{ m: 5 }}>
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
                                sx={{ ...formStyle, mb: 5, mt: 1 }}
                            />

                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                            >
                                Send now
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box component="form" noValidate autoComplete="off" sx={{ m: 5 }}>
                            {ContactData.map((item, index) => (
                                <List key={index}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: '#187b3d' }}>
                                                {item.icon}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.title} secondary={item.description} />
                                    </ListItem>
                                </List>
                            ))}
                            {/* <Divider sx={{ my: 2, bgcolor: '#187b3d' }} />
                             <Stack direction='row'>

                             </Stack> */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            <Box>
                <div style={{ height: '300px' }}>
                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6136.65707468825!2d90.39705862329069!3d23.745930515109507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89619b141f3%3A0x8a108b598fcefadb!2sNavana%20Zohura%20Square!5e0!3m2!1sen!2sbd!4v1753583129199!5m2!1sen!2sbd" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Box>
        </div>
    );
};

export default Contact;