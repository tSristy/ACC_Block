import { Box, Container, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import BtnExternalUrl from '../Button/BtnExternalUrl';
import { FactoryInfo, footerIcon, footerInfo } from './FooterData';
import Divider from '@mui/material/Divider';
import BtnPdfDw from '../Button/BtnPdfDw';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#2b2b2b',
        }}>
            <Container sx={{ p: 4 }}>
                <Grid
                    container
                    direction="row"
                    sx={{
                        pt: 5,
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                    }}
                >
                    <Grid size={{ md: 5 }}>
                        <Box>
                            <Typography variant='h6' sx={{ letterSpacing: 2, color: '#ffffffff', fontWeight: 600 }}>
                                Reach Us
                            </Typography>
                            <List>
                                {footerInfo.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon sx={{ color: '#ffffffff' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.description} sx={{ color: "white" }} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant='h6' sx={{ letterSpacing: 2, color: '#ffffffff', fontWeight: 600 }}>
                                Factory
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon sx={{ color: '#ffffffff' }}>
                                        {FactoryInfo.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={FactoryInfo.description} sx={{ color: "white" }} />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 2 }}>
                        <Typography variant='h6' sx={{ letterSpacing: 2, color: '#ffffffff', fontWeight: 600 }}>
                            Quick Links
                        </Typography>
                        <List>
                            <ListItem>
                                <Link href="/about-us" color="white" underline="none">About us
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/contact-us" color="white" underline="none">Contact Us</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/product/aac-blocks" color="white" underline="none">AAC Block</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/product/aac-panels" color="white" underline="none">AAC Panel</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ md: 4 }} container
                    direction="column"
                        alignItems="flex-end">
                        <Typography variant='h6' sx={{ letterSpacing: 2, color: '#ffffffff', fontWeight: 600 }}>
                            Download Brochure
                        </Typography>
                        <Box sx={{ py: 3 }}>
                            <BtnPdfDw fileDownload='' fileName='Download' variantStyle='contained' />
                        </Box>

                        <Typography variant='h6' sx={{ letterSpacing: 2, color: '#ffffffff', fontWeight: 600 }}>
                            Follow Us
                        </Typography>
                        <Box sx={{ py: 2 }}>
                            {
                                footerIcon.map((item, index) => (
                                    <BtnExternalUrl key={index} btnDetails={{ btnIcon: item.icon, btnUrl: item.url }} />
                                ))
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Divider sx={{ bgcolor: '#9b9b9bff' }} />

            <Grid container direction="row" sx={{
                px: 3,
                py: 3,
                color: 'white',
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Grid size={{ md: 'auto' }}>
                    <Typography variant='outline' sx={{ letterSpacing: 2, color: '#9b9b9bff' }}>
                        THE GREAT WALL
                    </Typography>
                </Grid>

                <Grid size={{ md: 'auto' }}>
                    <Typography sx={{ letterSpacing: 3, fontSize: '9px', color: '#9b9b9bff' }}>
                        ALL RIGHTS RESERVED COPYRIGHTS BY Techno Bangla
                    </Typography>
                </Grid>
            </Grid >
        </Box>
    );
};

export default Footer;