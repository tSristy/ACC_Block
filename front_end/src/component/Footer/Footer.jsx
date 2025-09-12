import { Grid, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BtnFooter from '../Button/BtnFooter';

const Footer = () => {
    const footerStyle = {
        padding: '3rem 3rem',
        height: '350px',
        color: 'white',
        backgroundColor: '#2b2b2b',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    return (
        <div sx={{ mt: 5 }}>
            <Grid container direction="row" style={footerStyle}>
                <Grid size={4}>
                    <div className="text-uppercase fw-semibold mb-3">
                        THE GREAT WALL
                    </div>
                    <div>
                        s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
                    </div>
                </Grid>
                <Grid size={6}>
                    <Grid container>
                        <Grid size={6}>
                            <div className="text-uppercase fw-semibold mb-3">
                                PRODUCTS
                            </div>
                        </Grid>
                        <Grid size={6}><div className="text-uppercase fw-semibold mb-3">
                            CONTACT US
                        </div></Grid>
                    </Grid>
                    <Grid container>
                        <Grid size={6}>
                            <div>AAC Blocks</div>
                            <div>AAC Panels</div>
                        </Grid>
                        <Grid size={6}>
                            <div>
                                <BtnFooter btnDetails={{ btnIcon: <MailIcon />, btnTitle: 'info@gmail.com' }} />
                            </div>
                            <div>
                                <BtnFooter btnDetails={{ btnIcon: <LocalPhoneIcon />, btnTitle: '018374364884' }} />
                            </div>
                            <div>
                                <BtnFooter btnDetails={{ btnIcon: <LocationPinIcon />, btnTitle: 'Bangla motor, Dhaka' }} />
                            </div>
                             

                            <div className="text-uppercase fw-semibold mt-4 mb-3">
                                FOLLOW US
                            </div>
                            <Stack direction="row" spacing={3}> 
                                <BtnFooter btnDetails={{ btnIcon: <FacebookIcon /> }} />                                
                                <BtnFooter btnDetails={{ btnIcon: <LinkedInIcon /> }} />                                
                                <BtnFooter btnDetails={{ btnIcon: <YouTubeIcon /> }} />                                
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;