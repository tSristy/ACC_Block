import bannerImg from '../../../img/About/Company-profile.png';
import Banner from '../../../component/Banner/Banner';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import TextSection from '../../../component/TextSection/TextSection';
import SkillCard from '../../../component/CardBox/SkillCard';
import CallAction from '../../../component/COA/CallAction';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import Carousel from '../../../component/Carousel/Carousel';
import { factoryImgList, goalData, qualityList } from './AboutPageData';
import aboutUsImg from '../../../img/About/About-Us.png';

const About = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [bannerList, setBannerList] = useState([{
        img_url: bannerImg,
        img_name: 'about'
    }]);

    useEffect(() => {
        const body = { pageName: 'About' };
        ServerApi(`/display/banner-list`, 'POST', null, body)
            .then(res => res.json())
            .then(res => {
                if (res.data.length > 0) {
                    setBannerList(res.data);
                } else return null;
            })
    }, []);

    return (
        <div>

            <Carousel details={{}}>
                {
                    bannerList.map((banner, index) => (
                        <Banner key={index}
                            bannerHeight='25rem' img={banner.img_url} alt={banner.img_name}
                            text={{ firstTitle: 'Company Profile', bigTitle: null, descriptionTitle: 'Building the future of construction in Bangladesh with innovative, eco-friendly AAC solutions.' }}
                        />
                    ))}
            </Carousel>


            {/* about  */}
            <Container sx={{ py: 10 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        mt: 5,
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "stretch",
                    }}>

                    <Grid size={{ xs: 12 }}>
                        <TextSection textData={{
                            supportTitle: 'great wall', headerTitle: 'AAC Block & Panels', textDescription: `Great Wall Ceramic Industries Ltd. has expanded its legacy of excellence into sustainable building solutions with AAC Blocks and Panels. Engineered with advanced technology and tested for superior performance, Great Wall AAC products bring together strength, speed, and sustainability. From residential to commercial projects, our solutions redefine construction with lighter, greener, and more efficient alternatives to traditional bricks and concrete.`
                        }} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box>
                            {
                                goalData.map((item, index) => (
                                    <Box sx={{
                                        p: 4,
                                        mb: index === 0 ? 4 : 0,
                                        height: "250px",
                                        bgcolor: index === 1 ? '#cccccc38' : '#187b3d',
                                        borderRadius: '8px',
                                    }}>
                                        <Typography variant='h5' sx={{
                                            mb:2,
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: index === 0 ? 'white' : '#2b2b2b'}} >{item.title}</Typography>
                                        <Typography variant='subtitle1' 
                                        sx={{
                                            fontWeight: '400',
                                            color: index === 0 ? 'white' : '#2b2b2b'
                                        }}>{item.description}</Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box component="img"
                            src={aboutUsImg}
                            alt="about-us"
                            sx={{
                                boxShadow: 1,
                                width: "100%",
                                maxHeight: "530px",
                                // height: "100%",
                                borderRadius: 2,
                                objectFit: "cover",
                            }}>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            {/* quality ig */}
            <Container maxWidth="auto" sx={{
                mt: 7,
                backgroundImage: `linear-gradient(180deg, #ffffffff, #cccccc38)`
            }}>

                <TextSection givenAlign='center' textData={{
                    supportTitle: 'Learn More', headerTitle: 'About ourselves'
                }} />

                <Container sx={{ py: 10, color: 'white' }}>
                    <Grid container spacing={2}>
                        {qualityList.map((item, index) => (
                            <Grid key={index} size={{ xs: 12, md: 6 }}>
                                <SkillCard iconLogo={item.icon} title={item.title} textDescription={item.description} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>


            {/* Meet the team */}
            {/* <Container maxWidth="auto" style={{
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: isSmallScreen ? "100%" : '700px',
                    width: '100%',
                    backgroundImage: `linear-gradient(180deg, #66cc33, #187b3d)`,
                    zIndex: 1
                }} />


                <Container sx={{ pb: 10, color: 'white', position: 'relative', zIndex: 2 }}>
                    <Grid container spacing={2}>
                        {qualityList.map((item, index) => (
                            <Grid key={index} size={{ xs: 12, md: 6 }}>
                                <SkillCard iconLogo={item.icon} title={item.title} textDescription={item.description} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Container sx={{ pt: 10, bgcolor: 'white', position: 'relative', zIndex: 2 }}>
                    <TextSection textData={{ supportTitle: 'Who made it', headerTitle: 'Meet the team', }} blackBg={false} />
                    <Grid container spacing={2} sx={{ pt: 7 }}>
                        
                        { teamList.map((item,index)=>(
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <img src={item.img_url} alt={item.img_name} style={{ width: '100%', height: '400px', objectFit: 'fill' }}
                            />
                            <div>
                                <Stack direction="row" spacing={3} sx={{ py: 3, justifyContent: 'center' }}>
                                    <BtnExternalUrl btnDetails={{ btnIcon: <FacebookIcon />, btnUrl: item.facebookUrl }}/>
                                    <BtnExternalUrl btnDetails={{ btnIcon: <LinkedInIcon />, btnUrl: item.linkedInUrl }}/>
                                    <BtnExternalUrl btnDetails={{ btnIcon: <YouTubeIcon />, btnUrl: item.youtubeUrl }}/>
                                </Stack>
                            </div>
                        </Grid>
                        )
                    )}
                    </Grid>
                </Container>
            </Container> */}


            {/* factory  */}
            <Container maxWidth="auto" sx={{ py: 10 }}>
                <TextSection givenAlign="center" textData={{ supportTitle: 'our factory', headerTitle: 'Visit our ground' }} blackBg={false} />
                <Container sx={{ mt: 5 }}>
                    {/* <Grid container spacing={4}>
                        {
                            factoryImgList.reduce((acc, item, index) => {
                                if (index % (isSmallScreen ? factoryImgList.length : Math.floor(factoryImgList.length / 2)) === 0) {
                                    acc.push([]);
                                }
                                acc[acc.length - 1].push(
                                    <img src={item.img_url} alt={item.img_name} height={isSmallScreen ? '300px' : '100%'} style={{ objectFit: 'fit' }} />
                                );
                                return acc;
                            }, []).map((row, idx) => (
                                <Grid key={idx} size={{ xs: 12, md: 6 }}>
                                    <Carousel details={{}}>
                                        {row}
                                    </Carousel>
                                </Grid>
                            ))
                        } 
                    </Grid> */}

                    <Carousel details={{ itemNo: isSmallScreen ? 1 : 2 }}>
                        {
                            factoryImgList.map((row, idx) => (
                                <img key={idx} src={row.img_url} alt={row.img_name} style={{
                                    height: isSmallScreen ? "100%" : "460px",
                                    width: "100%",
                                    objectFit: 'cover'
                                }} />
                            ))
                        }
                    </Carousel>
                </Container>
            </Container>


            {/* call to action  */}
            <CallAction />
        </div>
    );
};

export default About;