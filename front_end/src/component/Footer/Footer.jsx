import { Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BtnFooter from '../Button/BtnFooter';

const Footer = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction="row" sx={{
            p: 3,
            color: 'white',
            backgroundColor: '#2b2b2b',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant='outline' sx={{ letterSpacing: 5 }}>
                    THE GREAT WALL
                </Typography>

                <Typography variant='subtitle2'>
                    Great Wall AAC Block is the smart solution for modern construction. Tested by BUET and manufactured with cutting-edge technology
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 2}}>
                <Container sx={{ justifyContent: 'flex-end'}}>

                    <Typography >CONTACT US</Typography>
                    <div>
                        <BtnFooter btnDetails={{ btnIcon: <MailIcon />, btnTitle: 'info@gmail.com' }} />
                    </div>
                    <div>
                        <BtnFooter btnDetails={{ btnIcon: <LocalPhoneIcon />, btnTitle: '018374364884' }} />
                    </div>
                    <div>
                        <BtnFooter btnDetails={{ btnIcon: <LocationPinIcon />, btnTitle: 'Bangla motor, Dhaka' }} />
                    </div>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Footer;