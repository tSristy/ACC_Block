import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import BtnExternalUrl from '../Button/BtnExternalUrl';
import { footerIcon } from './FooterData';

const Footer = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction="row" sx={{
            px: 3,
            py:5,
            color: 'white',
            backgroundColor: '#2b2b2b',
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Grid size={{ md: 'auto' }}>
                <Typography variant='outline' sx={{ letterSpacing: 2, color: '#9b9b9bff' }}>
                    THE GREAT WALL
                </Typography>
            </Grid>
            <Grid size={{ md: 'auto' }}>
                <Container>
                    {
                        footerIcon.map((item, index) => (
                            <BtnExternalUrl key={index} btnDetails={{ btnIcon: item.icon, btnUrl: item.url }} />
                        ))
                    }
                </Container>
            </Grid>
            <Grid size={{ md: 'auto' }}>
                <Typography sx={{ letterSpacing: 3, fontSize: '10px', color: '#9b9b9bff' }}>
                    ALL RIGHT RESERVED
                </Typography>
            </Grid>
        </Grid >
    );
};

export default Footer;