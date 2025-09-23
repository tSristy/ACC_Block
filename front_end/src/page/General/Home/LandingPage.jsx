import React, { useEffect, useState } from 'react';
import HomeCard from '../../../component/CardBox/HomeCard';
import { Avatar, Box, Container, Divider, Grid, ImageList, ImageListItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Banner from '../../../component/Banner/Banner';
import imgPanel from '../../../img/Products/Our-Product-D.png'
import TextSection from '../../../component/TextSection/TextSection';
import BtnUrlChange from '../../../component/Button/BtnUrlChange';
import SkillCard from '../../../component/CardBox/SkillCard';
import ProjectCard from '../../../component/CardBox/ProjectCard';
import AppCard from '../../../component/CardBox/AppCard';
import CallAction from '../../../component/COA/CallAction';
import ClientReview from '../../../component/Review/ClientReview';
import { homeCardList } from '../../../component/CardBox/Data/homeCardList';
import { skillBrickCardList, skillPanelCardList } from '../../../component/CardBox/Data/skillCardList';
import Carousel from '../../../component/Carousel/Carousel';
import { ServerApi } from '../../../Route/ServerApi';
import { bannerText, imgLists, technicalSpecs } from './HomePageData';
import { appCardList } from '../../../component/CardBox/Data/appCardList';
import bannerImg1 from '../../../img/HomePage/A.png';
import bannerImg2 from '../../../img/HomePage/B.png';
import bannerImg3 from '../../../img/HomePage/C.png';
import appImg from '../../../img/Applications/WHERE-TO-USE-Application.png';
import imgWhyChoose from '../../../img/WhyChoose/1400X1200.png';
import aboutImg from '../../../img/About/About-Us.png'

const LandingPage = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [bannerList, setBannerList] = useState([
        {
            img_url: bannerImg1,
            img_name: 'home'
        },
        {
            img_url: bannerImg2,
            img_name: 'home'
        },
        {
            img_url: bannerImg3,
            img_name: 'home'
        }
    ]);
    useEffect(() => {
        const body = { pageName: 'Home' };
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
            {/* banner & card  */}
            <div style={{
                position: 'relative',
                // height: '870px',
            }}>

                <Carousel details={{}}>
                    {
                        bannerList.map((banner, index) => (
                            <Banner key={index} bannerHeight="700px" text={{
                                firstTitle: "The Great Wall", bigTitle: bannerText[index].bigTitle, descriptionTitle: bannerText[index].descriptionTitle
                            }} img={banner.img_url} alt={banner.img_name} btnDetails={{ btnTitle: "Get a Quote", url: '/contact-us', color: 'false' }} />
                        ))
                    }
                </Carousel>

                {isSmallScreen ? null : <>
                    <div style={{
                        position: 'absolute',
                        top: 650,
                        left: 0,
                        right: 0,
                        zIndex: 1
                    }}>

                        <Container style={{ height: "100%", position: 'relative', zIndex: 2 }}>
                            <Grid container sx={{
                                height: '100%',
                                justifyContent: "space-evenly",
                                alignItems: "scratch",
                            }} spacing={1}>
                                {
                                    homeCardList.map((cardDetails, index) => (
                                        <Grid key={index} size={4}><HomeCard index={cardDetails.icon} title={cardDetails.title}
                                            textDescription={cardDetails.textDescription} /></Grid>
                                    ))
                                }
                            </Grid>
                        </Container>
                    </div>
                    <Container sx={{ mb: 15 }}></Container>
                </>}
            </div>


            {/* about  */}
            <Container sx={{ py: 10 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        py: 5,
                        height: '100%',
                        justifyContent: isSmallScreen ? "center" : "space-between",
                        alignItems: "center",
                    }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <TextSection givenAlign="center" textData={{
                            supportTitle: 'about us', headerTitle: 'we are the great wall', textDescription: `Great Wall AAC Block is the smart solution for modern construction. Tested by BUET and manufactured with cutting-edge technology, our blocks deliver durability, thermal insulation, and eco-friendliness while reducing overall project costs. With proven strength, lightweight efficiency, and sustainability, Great Wall AAC Blocks represent the future of building in Bangladesh
                            ` }} />
                        <Stack direction="row" sx={{
                            py: 3, justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <BtnUrlChange btnDetails={{ btnTitle: 'learn more', url: '/about-us', color: true }} />
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <div>
                            <img src={aboutImg} style={{
                                height: '460px',
                                width: isSmallScreen ? '100%' : '340px'
                            }} alt="logo" />
                        </div>
                    </Grid>
                </Grid>

            </Container>

            {/* Why acc? */}
            <Container maxWidth="auto" sx={{
                // mt:10,
                py: 10,
                color: 'white',
                backgroundImage: `linear-gradient(180deg, #66cc33, #187b3d)`
            }}>
                <TextSection blackBg={true} givenAlign='center' textData={{ supportTitle: 'in construction', headerTitle: 'why choose aac?' }} />
            </Container>

            {/* Product features */}
            <div
                style={{
                    backgroundImage: `url(${imgWhyChoose})`,
                    backgroundSize: 'cover',
                    backgroundPosition: isSmallScreen ? 'repeat' : 'center',
                    // height: '620px',                    
                }}>
                <div style={{
                    height: '100%',
                    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backgroundColor: '#187b3cbb',
                    color: 'white'
                }}>
                    <Container sx={{
                        py: 15,
                        height: '100%'
                    }}>
                        <Grid container spacing={2}
                            direction={isSmallScreen ? "column" : "row"}
                            sx={{
                                height: '100%',
                                justifyContent: "space-between",
                                alignItems: "stretch",
                            }}
                        >
                            {
                                skillBrickCardList.map((row, index) => (
                                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                                        <SkillCard iconLogo={row.icon} title={row.title} textDescription={row.textDescription} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </div>
            </div>


            {/* Table Specification */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' textData={{ supportTitle: 'Product details', headerTitle: 'Technical Specification' }} />
                <Grid container spacing={4} sx={{ pt: 5 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {technicalSpecs.map((row, index) =>
                            index < 3 ? (
                                <Box key={index} sx={{
                                    position: 'relative', m: 2, p: 4,
                                    borderRadius: '8px',
                                    // bgcolor: '#187b3d', 
                                    backgroundImage: `linear-gradient(180deg, #66cc33, #187b3d)`,
                                    color: 'white',
                                    // boxShadow: '1px 1px 5px black' 
                                }}>
                                    <Avatar sx={{ width: 50, height: 50, boxShadow: '1px 1px 5px black', bgcolor: '#66cc33', position: 'absolute', left: -20, top: 25 }}>
                                        <Typography variant='h6'>0{index + 1}</Typography>
                                    </Avatar>
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                        sx={{ px: 4 }}
                                    >
                                        <Box sx={{ width: '50%' }}>
                                            <Typography variant='h5'>{row.parameter}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='h6'>{row.value}</Typography>
                                        </Box>
                                    </Stack>
                                </Box>) : null)}
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {technicalSpecs.map((row, index) =>
                            index > 2 ? (
                                <Box key={index} sx={{
                                    position: 'relative', m: 2, p: 4,
                                    borderRadius: '8px',
                                    // bgcolor: '#187b3d', 
                                    backgroundImage: `linear-gradient(180deg, #66cc33, #187b3d)`,
                                    color: 'white',
                                    // boxShadow: '1px 1px 5px black' 
                                }}>
                                    <Avatar sx={{ width: 50, height: 50, boxShadow: '1px 1px 5px black', bgcolor: '#66cc33', position: 'absolute', left: -20, top: 25 }}>
                                        <Typography variant='h6'>0{index + 1}</Typography>
                                    </Avatar>
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                        sx={{ px: 4 }}
                                    >
                                        <Box sx={{ width: '50%' }}>
                                            <Typography variant='h5'>{row.parameter}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='h6'>{row.value}</Typography>
                                        </Box>
                                    </Stack>
                                </Box>) : null)}
                    </Grid>
                </Grid>
            </Container>


            {/* Product description */}
            <Container sx={{ py: 5 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Grid size={12} sx={{ pb: 5 }}>
                        <TextSection givenAlign='center' textData={{ supportTitle: 'our products', headerTitle: 'AAC BLOCKS', }} />

                    </Grid>
                    <Grid size={12}>
                        <ImageList variant="masonry" cols={isSmallScreen ? 1 : 3} gap={8}>
                            {imgLists.length > 0 && imgLists.map((item, index) => (
                                <ImageListItem key={index} sx={{ p: 1, border: '2px dashed #187b3d' }}>
                                    <img
                                        srcSet={`${item.img_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img_url}?w=248&fit=crop&auto=format`}
                                        alt={item.img_name}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid size={12} sx={{
                        pt: 5, pb: 5,
                    }}>
                        <Stack direction="row" sx={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <BtnUrlChange btnDetails={{ btnTitle: 'learn more', url: '/aac-blocks', color: true }} />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Application */}
            <div
                style={{
                    backgroundImage: `url(${appImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '470px',
                }}>
                <div style={{
                    height: '100%',
                    backgroundColor: 'rgba(17, 17, 17, 0.7)',
                    color: 'white'
                }}>
                    <Container sx={{ py: 10 }}>
                        <TextSection blackBg={true} textData={{ supportTitle: 'where to use', headerTitle: 'Application' }} />
                    </Container>

                    <Container sx={{ pb: 15 }}>
                        <Stack direction="row" spacing={2}
                            sx={{
                                justifyContent: isSmallScreen ? "center" : "space-around",
                                alignItems: "center",
                            }}>
                            <Carousel details={{ itemNo: 4 }}>
                                {appCardList.map((item, index) => (
                                    <AppCard key={index}
                                    title={item.title} imgUrl={item.imgUrl} />
                                ))}
                            </Carousel>
                        </Stack>
                    </Container>
                </div>
            </div>
            <div style={{
                height: '330px',
                position: 'relative',
            }} />

            {/* Product description */}
            <Container sx={{ py: 10 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack direction="column" spacing={2} sx={{
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}>
                            <TextSection givenAlign='flex-start' textData={{ supportTitle: 'our products', headerTitle: 'Great Wall AAC Panels', textDescription: 'Great Wall AAC Panels are innovative, steel-reinforced, tongue-and-groove designed panels that deliver unmatched speed, strength, and insulation for modern buildings. Ideal for both residential and commercial projects, they simplify construction, save costs, and create more usable space with thinner yet stronger walls' }} />
                            <BtnUrlChange btnDetails={{ btnTitle: 'learn more', url: '/aac-panels', color: true }} />
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <div>
                            <img src={imgPanel} style={{
                                height: '400px',
                                width: isSmallScreen ? '100%' : '450px'
                            }} alt="logo" />
                        </div>
                    </Grid>
                </Grid>
            </Container>


            {/* Product features Panel*/}
            <Container sx={{ py: 10 }}>
                <TextSection textData={{ supportTitle: 'Product Features', headerTitle: 'Why Great Wall AAC Panels' }} />
                <Grid container spacing={2}
                    direction="row"
                    sx={{
                        mb: 5,
                        mt: 5,
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "stretch",
                    }}
                >
                    {
                        skillPanelCardList.map((row, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <SkillCard card="panel" iconLogo={row.icon} title={row.title} textDescription={row.textDescription} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            {/* </div> */}


            {/* projects */}
            <Container sx={{ py: 5 }}>
                <TextSection givenAlign='center' blackBg={false} textData={{ supportTitle: 'our work', headerTitle: 'Mega Projects' }} />

                <Grid container spacing={4}
                    direction="row"
                    sx={{
                        pt: 10,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid size={{ xs: 12, md: 4 }}>
                        <ProjectCard />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <ProjectCard />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <ProjectCard />
                    </Grid>
                </Grid>
            </Container>

            {/* client */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' blackBg={false} textData={{ supportTitle: 'Our Clients', headerTitle: 'Testimonials' }} />
                <Container sx={{ pb: 5 }}>
                    <ClientReview />
                </Container>
            </Container>

            <CallAction />
        </div>
    );
};

export default LandingPage;