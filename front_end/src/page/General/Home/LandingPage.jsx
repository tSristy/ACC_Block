import React from 'react';
import HomeCard from '../../../component/CardBox/HomeCard';
import { Container, Grid, Stack } from '@mui/material';
import Banner from '../../../component/Banner/Banner';
import bannerImg from '../../../img/homepage.png';
import imgPanel from '../../../img/Layer23.png'
import TextSection from '../../../component/TextSection/TextSection';
import BtnUrlChange from '../../../component/Button/BtnUrlChange';
import img from '../../../img/banner2.png';
import SkillCard from '../../../component/CardBox/SkillCard';
import ProjectCard from '../../../component/CardBox/ProjectCard';
import imgProduct1 from '../../../img/productBrick.png';
import AppCard from '../../../component/CardBox/AppCard';
import CallAction from '../../../component/COA/CallAction';
import ClientReview from '../../../component/Review/ClientReview';
import { homeCardList } from '../../../component/CardBox/Data/homeCardList';
import { skillBrickCardList, skillPanelCardList } from '../../../component/CardBox/Data/skillCardList';

const LandingPage = () => {
    return (
        <div>
            {/* banner & card  */}
            <div style={{
                position: 'relative',
                height: '870px',
            }}>

                <Banner bannerHeight="700px" text={{
                    firstTitle: "Build Smarter, Live Better", bigTitle: "AAC Blocks & Panels", descriptionTitle: `Stronger, Faster & Greener Construction with Great Wall`
                }} img={bannerImg} btnDetails={{ btnTitle: "Get a Quote", url: '/contact-us', color: 'false' }} />

                <div style={{
                    position: 'absolute',
                    top: 650,
                    left: 0,
                    right: 0,
                    zIndex: 1
                }}>

                    <Container style={{ height: "100%", position: 'relative', zIndex: 2 }}>
                        <Grid container sx={{
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }} spacing={1}>
                            {
                                homeCardList.map((cardDetails, index) => (
                                    <Grid size={4}><HomeCard index={cardDetails.icon} title={cardDetails.title}
                                        textDescription={cardDetails.textDescription} /></Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </div>
            </div>

            {/* about  */}
            <Container sx={{ py: 10 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Grid size={7}>
                        <TextSection givenAlign="center" textData={{
                            supportTitle: 'about us', headerTitle: 'we are the great wall', textDescription: `At Great Wall, we bring innovation to construction with Autoclave Aerated Concrete (AAC) blocks - a modern alternative to traditional bricks.Our blocks are lightweight, eco-friendly, and highly efficient, designed to make building faster, cost-effective, and sustainable.
                            From homes to high-rises, we provide the materials and expertise to help you build with confidence.
                            ` }} />
                        <Stack direction="row" sx={{
                            py: 3, justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <BtnUrlChange btnDetails={{ btnTitle: 'learn more', url: '/about-us', color: true }} />
                        </Stack>
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

            {/* Why acc? */}
            <Container maxWidth="auto" sx={{
                mt: 10,
                color: 'white',
                height: '170px',
                backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`
            }}>
                <TextSection blackBg={true} givenAlign='center' textData={{ supportTitle: 'in construction', headerTitle: 'why choose aac?' }} />
            </Container>

            {/* Product features */}
            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // height: '620px',                    
                }}>
                <div style={{
                    height: '100%',
                    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backgroundColor: '#187b3cf1',
                    color: 'white'
                }}>
                    <Container sx={{
                        py: 10,
                        height: '100%'
                    }}>
                        <Grid container spacing={2}
                            direction="row"
                            sx={{
                                height: '100%',
                                justifyContent: "space-between",
                                alignItems: "stretch",
                            }}
                        >
                            {
                                skillBrickCardList.map((row, index) => (
                                    <Grid size={4} key={index}>
                                        <SkillCard iconLogo={row.icon} title={row.title} textDescription={row.textDescription} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </div>
            </div>

            {/* Product description */}
            <Container sx={{ py: 10 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "stretch",
                    }}>
                    <Grid size={12}>
                        <TextSection givenAlign='center' textData={{ supportTitle: 'our products', headerTitle: 'AAC BLOCKS', textDescription: `Great Wall Panels are a high-performance, steel-reinforced AAC solution for modern construction` }} />

                    </Grid>
                    <Grid size={6}>
                        <Stack direction="column" spacing={3} sx={{
                            height: '100%',
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <img src={imgProduct1} style={{
                                height: '100%',
                                width: '450px'
                            }} alt="logo" />
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                600 x 200 x 120 mm
                            </div>
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack direction="column" spacing={3} sx={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <img src={imgProduct1} style={{
                                height: '200px',
                                width: '350px'
                            }} alt="logo" />
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                600 x 200 x 110 mm
                            </div>
                            <img src={imgProduct1} style={{
                                height: '200px',
                                width: '350px'
                            }} alt="logo" />
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                600 x 200 x 100 mm
                            </div>

                        </Stack>
                    </Grid>
                    <Grid size={12}>
                        <Stack direction="row" sx={{
                            py: 3, justifyContent: "center",
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
                    backgroundImage: `url(${img})`,
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

                    <Container>
                        <Stack direction="row" spacing={2}
                            sx={{
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}>
                            <AppCard cardTitle='industry' />
                            <AppCard cardTitle='industry' />
                            <AppCard cardTitle='industry' />
                            <AppCard cardTitle='industry' />
                        </Stack>
                    </Container>
                </div>
            </div>
            <div style={{
                height: '250px',
                position: 'relative',
            }} />

            {/* Product description */}
            <Container sx={{ pt: 20, pb: 10 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Grid size={7}>
                        <Stack direction="column" spacing={2} sx={{
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}>
                            <TextSection givenAlign='flex-start' textData={{ supportTitle: 'our products', headerTitle: 'Great Wall AAC Panels', textDescription: 'Great Wall Panels are a high-performance, steel-reinforced AAC solution for modern construction. Designed for speed, strength, and sustainability, these panels combine lightweight durability with superior insulation and fire safety.Ideal for residential, commercial, and industrial projects, our panels are easy to install, reusable, and eco-friendly — giving you clean, dry construction with minimal waste.' }} />
                            <BtnUrlChange btnDetails={{ btnTitle: 'learn more', url: '/aac-panels', color: true }} />
                        </Stack>
                    </Grid> 
                    <Grid size={5}>
                        <div>
                            <img src={imgProduct1} style={{
                                height: '400px',
                                width: '450px'
                            }} alt="logo" />
                        </div>
                    </Grid>
                </Grid>
            </Container>


            {/* Product features Panel*/}
            <div>
                <Container sx={{ py: 10 }}>
                    <TextSection textData={{ supportTitle: 'Product Features', headerTitle: 'Why Great Wall AAC Panels' }} />
                    <Grid container spacing={2}
                        direction="row"
                        sx={{
                            mt: 10,
                            height: '100%',
                            justifyContent: "space-between",
                            alignItems: "stretch",
                        }}
                    >
                        {
                            skillPanelCardList.map((row, index) => (
                                <Grid size={6} key={index}>
                                    <SkillCard card="panel" iconLogo={row.icon} title={row.title} textDescription={row.textDescription} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
                {/* </div> */}
            </div>

            {/* projects */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' blackBg={false} textData={{ supportTitle: 'our work', headerTitle: 'Mega Projects' }} />

                <Stack
                    direction="row"
                    spacing={5}
                    sx={{
                        pt: 7,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Stack>
            </Container>

            {/* client */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' blackBg={false} textData={{ supportTitle: 'Our Clients', headerTitle: 'Testimonials' }} />
                <ClientReview />
            </Container>

            <CallAction />
        </div>
    );
};

export default LandingPage;