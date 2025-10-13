import bannerImg from '../../../img/About/Company-profile.png';
import Banner from '../../../component/Banner/Banner';
import { Box, Container, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import TextSection from '../../../component/TextSection/TextSection';
import SkillCard from '../../../component/CardBox/SkillCard';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallAction from '../../../component/COA/CallAction';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import Carousel from '../../../component/Carousel/Carousel';
import { factoryImgList, goalData, qualityList, teamList } from './AboutPageData';
import aboutUsImg from '../../../img/About/About-Us.png';
import BtnExternalUrl from '../../../component/Button/BtnExternalUrl';

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
                            text={{ firstTitle: 'Company Profile', bigTitle: null, descriptionTitle: 'Building the future of construction in Bangladesh with innovative, eco-friendly AAC solutions' }}
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
                        alignItems: "center",
                    }}>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <TextSection textData={{
                            supportTitle: 'great wall', headerTitle: 'AAC Block & Panels', textDescription: `Great Wall Ceramic Industries Ltd. has expanded its legacy of excellence into sustainable building solutions with AAC Blocks and Panels. Engineered with advanced technology and tested for superior performance, Great Wall AAC products bring together strength, speed, and sustainability. From residential to commercial projects, our solutions redefine construction with lighter, greener, and more efficient alternatives to traditional bricks and concrete`
                        }} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <div>
                            <img src={aboutUsImg} style={{
                                height: '460px',
                                width: isSmallScreen ? '100%' : '340px',
                                objectFit: 'fit'
                            }} alt="logo" />
                        </div>
                    </Grid>
                </Grid>

            </Container>

            {/* mission vision */}
            <Container maxWidth="auto" sx={{
                mt: 7,
                // backgroundColor: '#f7f7f7' ,
                backgroundImage: `linear-gradient(180deg, #ffffff, #66cc33)`,
            }}>
                <Container sx={{ py: 10 }}>
                    <Grid spacing={4} container
                        direction="row"
                        sx={{
                            height: '100%',
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>

                        {
                            goalData.map((item, index) => (
                                <Grid size={{ xs: 12, md: 6 }} key={index}>
                                    <Box sx={{
                                        p: 4,
                                        bgcolor: '#fffffffa',
                                        borderRadius: '8px',
                                        height: '230px',
                                        // textTransform: 'uppercase'
                                    }}>

                                        <TextSection givenAlign='center' textData={{
                                            supportTitle: item.title, textDescription: item.description
                                        }} />
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Container>


            {/* Meet the team */}
            <Container maxWidth="auto" style={{
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
            </Container>


            {/* factory  */}
            <Container maxWidth="auto" sx={{ py: 10 }}>
                <TextSection givenAlign="center" textData={{ supportTitle: 'our factory', headerTitle: 'Visit our ground' }} blackBg={false} />
                <Container sx={{ mt: 5 }}>
                    <Grid container spacing={4}>
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
                    </Grid>
                </Container>
            </Container>


            {/* call to action  */}
            <CallAction />
        </div>
    );
};

export default About;