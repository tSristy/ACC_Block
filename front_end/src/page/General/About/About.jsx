import bannerImg from '../../../img/banner3.png';
import Banner from '../../../component/Banner/Banner';
import { Container, Grid, Stack } from '@mui/material';
import TextSection from '../../../component/TextSection/TextSection';
import imgPanel from '../../../img/Layer43.png'
import AboutCard from '../../../component/CardBox/AboutCard';
import PublicIcon from '@mui/icons-material/Public';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import beta from '../../../img/beta.png';
import MyCarousel from '../../../component/Carousel/MyCarousel';
import CallAction from '../../../component/COA/CallAction';

const About = () => {
    return (
        <div>
            <Banner
                img={bannerImg}
                bannerHeight='25rem'
                text={{ firstTitle: 'Company Profile', bigTitle: null, descriptionTitle: null }}
            // btnDetails={{ btnTitle: 'get a quote', url: null, color: false }}
            />

            {/* about  */}
            <Container sx={{ py: 10}}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>

                    <Grid size={7}>

                        <TextSection textData={{
                            supportTitle: 'about us', headerTitle: 'we are the great wall', textDescription: `LContrary to popular belief, Lorem Ipsum is not simply random
 text. It has roots in a piece of classical Latin literature from 
45 BC, making it over 2000 years old. 

Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
 looked up one of the more obscure Latin words, consectetur,

Contrary to popular belief, Lorem Ipsum is not simply random
 text. It has roots in a piece of classical Latin literature from 
45 BC, making it over 2000 years old. ` }} />
                    </Grid>
                    <Grid size={4}>
                        <div>
                            <img src={imgPanel} style={{
                                height: '460px',
                                width: '340px'
                            }} alt="logo" />
                        </div>
                    </Grid>
                </Grid>

            </Container>

            {/* mission vision */}
            <Container maxWidth="auto" sx={{ mt: 7, backgroundColor: '#f7f7f7' }}>
                <Container sx={{ py: 10}}>
                    <Grid spacing={4} container
                        direction="row"
                        sx={{
                            height: '100%',
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>

                        <Grid size={6}>

                            <TextSection givenAlign='center' textData={{
                                supportTitle: 'our vision', textDescription: `LContrary to popular belief, Lorem Ipsum is not simply random
 text. It has roots in a piece of classical Latin literature from 
45 BC, making it over 2000 years old.` }} />
                        </Grid>
                        <Grid size={6}>
                            <TextSection givenAlign='center' textData={{
                                supportTitle: 'our mission', textDescription: `LContrary to popular belief, Lorem Ipsum is not simply random
 text. It has roots in a piece of classical Latin literature from 
45 BC, making it over 2000 years old.` }} />
                        </Grid>
                    </Grid>
                </Container>
            </Container>


            {/* Meet the team */}
            <Container maxWidth="auto" style={{
                position: 'relative',
                height: '1000px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '700px',
                    width: '100%',
                    backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`,
                    zIndex: 1
                }} />


                <Container sx={{ py: 7, color: 'white', position: 'relative', zIndex: 2 }}>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <AboutCard iconLogo={<PublicIcon sx={{ fontSize: '45px' }} />} textTitle="All Around Bangladesh" textDescription="Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, Contrary to " />
                        </Grid>  <Grid size={3}>
                            <AboutCard iconLogo={<PublicIcon sx={{ fontSize: '45px' }} />} textTitle="All Around Bangladesh" textDescription="Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, Contrary to " />
                        </Grid>  <Grid size={3}>
                            <AboutCard iconLogo={<PublicIcon sx={{ fontSize: '45px' }} />} textTitle="All Around Bangladesh" textDescription="Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, Contrary to " />
                        </Grid>  <Grid size={3}>
                            <AboutCard iconLogo={<PublicIcon sx={{ fontSize: '45px' }} />} textTitle="All Around Bangladesh" textDescription="Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, Contrary to " />
                        </Grid>
                    </Grid>
                </Container>

                <Container sx={{ py: 7, bgcolor: 'white', position: 'relative', zIndex: 2 }}>
                    <TextSection textData={{ supportTitle: 'Who made it', headerTitle: 'Meet the team', }} blackBg={false} />
                    <Grid container spacing={2} sx={{ pt: 7 }}>
                        <Grid size={4}>
                            <img src={beta} alt='team' style={{ width: '100%', height: '400px', objectFit: 'fill' }}
                            />
                            <div>
                                <Stack direction="row" spacing={3} sx={{ py: 3, justifyContent: 'center' }}>
                                    <FacebookIcon fontSize="inherit" />
                                    <LinkedInIcon fontSize="inherit" />
                                    <YouTubeIcon fontSize="inherit" />
                                </Stack>
                            </div>
                        </Grid>

                        <Grid size={4}>
                            <img src={beta} alt='team' style={{ width: '100%', height: '400px', objectFit: 'fill' }}
                            />
                            <div>
                                <Stack direction="row" spacing={3} sx={{ py: 3, justifyContent: 'center' }}>
                                    <FacebookIcon fontSize="inherit" />
                                    <LinkedInIcon fontSize="inherit" />
                                    <YouTubeIcon fontSize="inherit" />
                                </Stack>
                            </div>
                        </Grid>

                        <Grid size={4}>
                            <img src={beta} alt='team' style={{ width: '100%', height: '400px', objectFit: 'fill' }}
                            />
                            <div>
                                <Stack direction="row" spacing={3} sx={{ py: 3, justifyContent: 'center' }}>
                                    <FacebookIcon fontSize="inherit" />
                                    <LinkedInIcon fontSize="inherit" />
                                    <YouTubeIcon fontSize="inherit" />
                                </Stack>
                            </div>
                        </Grid>
                    </Grid>


                </Container>
            </Container>


            {/* factory  */}
            <Container maxWidth="auto">
                <Container sx={{ py: 10}}>
                    <TextSection givenAlign="center" textData={{ supportTitle: 'our factory', headerTitle: 'Visit our ground' }} blackBg={false} />
                    <MyCarousel />
                </Container>
            </Container>


            {/* call to action  */}
            <CallAction />
        </div>
    );
};

export default About;