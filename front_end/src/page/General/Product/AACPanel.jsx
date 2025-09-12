import { Container, Grid, Stack } from '@mui/material';
import img from '../../../img/banner2.png';
import imgPanel from '../../../img/productPanel.png';
import imgBrick from '../../../img/productBrick.png';
import imgTable from '../../../img/table.png';
import TextSection from '../../../component/TextSection/TextSection';
import SkillCard from '../../../component/CardBox/SkillCard';
import { Table } from 'react-bootstrap';
import AppCard from '../../../component/CardBox/AppCard';
import BtnUrlChange from '../../../component/Button/BtnUrlChange';
import FAQItem from '../../../component/FAQ/FAQItem';
import { skillPanelCardList } from '../../../component/CardBox/Data/skillCardList';
const AACPanel = () => {
    const bannerStyle = {
        height: '510px',
        width: 'auto',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 0
    }
    return (
        <div >
            {/* BANNER HEAD */}
            <Container maxWidth="auto" style={bannerStyle}>
                <Stack direction="column"
                    style={{
                        height: '100%',
                        backgroundColor: 'rgba(43, 43, 43, 0.6)',
                    }}>
                    <div style={{ position: 'relative', height: '100vh' }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '70%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                zIndex: 1,
                            }}
                        />

                        <Container style={{ height: "100%", position: 'relative', zIndex: 2 }}>
                            <Grid container style={{
                                height: '100%'
                            }}>
                                <Grid size={7} >
                                    <TextSection textData={{ supportTitle: 'our product', headerTitle: 'AAC Panel', textDescription: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) " }} blackBg={true} />
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Stack>
            </Container>

            {/* Why acc? */}
            <Container maxWidth="auto" style={{
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
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
                                skillPanelCardList.map((row, index) => (
                                    <Grid size={3} key={index}>
                                        <SkillCard iconLogo={row.icon} title={row.title} textDescription={row.textDescription} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </div>
            </div>

            {/* Product description */}
            <Container sx={{ py: 10}}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>

                    <Grid size={6}>

                        <TextSection givenAlign='center' textData={{ supportTitle: 'our products', headerTitle: 'Great Wall AAC Panels', textDescription: 'Great Wall Panels are a high-performance, steel-reinforced AAC solution for modern construction. Designed for speed, strength, and sustainability, these panels combine lightweight durability with superior insulation and fire safety.Ideal for residential, commercial, and industrial projects, our panels are easy to install, reusable, and eco-friendly — giving you clean, dry construction with minimal waste.' }} />
                    </Grid>
                    <Grid size={6}>
                        <div>
                            <img src={imgPanel} style={{
                                height: '400px',
                                width: '450px'
                            }} alt="logo" />
                        </div>
                    </Grid>
                </Grid>
            </Container>

            {/* Product details */}
            <Container sx={{ py: 10}}>
                <Stack
                    direction="row"
                    sx={{
                        height: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <div>
                        <img src={imgBrick} style={{
                            height: '400px',
                            width: '450px'
                        }} alt="brick" />
                    </div>

                    <div style={{ width: '100%' }}>
                        <img src={imgTable} style={{
                            height: '400px',
                            width: '100%'
                        }} alt="logo" />
                    </div>
                </Stack>
            </Container>

            {/* Compare table */}
            <Container maxWidth="auto" style={{ backgroundColor: '#f7f7f7' }}>
                <Container sx={{ py: 10}}>
                    <Table striped borderless>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#f7f7f7', fontWeight: 600, fontSize: '1.5rem' }}>Key</th>
                                <th style={{ backgroundColor: '#f7f7f7', fontWeight: 600, fontSize: '1.5rem' }}>AAC Panel</th>
                                <th style={{ backgroundColor: '#f7f7f7', fontWeight: 600, fontSize: '1.5rem' }}>Traditional Panel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>john</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>

                </Container>
            </Container>

            {/* Application */}
            <Container maxWidth="auto"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '470px',
                    padding: 0
                }}>
                <div style={{
                    height: '100%',
                    backgroundColor: 'rgba(17, 17, 17, 0.7)',
                    color: 'white'
                }}>
                    <Container sx={{ py: 10}}>
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
            </Container>

            {/* FAQ */}
            <div maxWidth="auto" style={{
                marginTop: '250px',
                position: 'relative',
                height: '80vh'
            }}>
                <div style={{
                    width: '50%',
                    position: 'absolute',
                    height: '100%',
                    left: 0,
                    top: 0,
                    backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`,
                    zIndex: 1,
                }} />

                <Container style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                    <Grid spacing={4}
                        container
                        direction="row"
                        sx={{
                            py: 7,
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid size={5}>
                            <TextSection blackBg={true} textData={{ headerTitle: "FAQ Questions", textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' }} />
                            <div style={{ marginTop: '40px' }}>

                                <BtnUrlChange btnDetails={{ btnTitle: 'contact us', url: '/contact-us', color: false }} />
                            </div>
                        </Grid>

                        <Grid size={5}>
                             <FAQItem/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default AACPanel;