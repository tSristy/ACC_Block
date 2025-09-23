import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Avatar, Box, Button, Container, Divider, Grid, List, ListItem, ListItemText, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import bannerImg from '../../../img/Products/A.png';
import blockImg from '../../../img/Products/Our-Product-C.png';
import blockImg1 from '../../../img/AAC_blocks/Size-2.png';
import blockImg2 from '../../../img/AAC_blocks/Size-1.png';
import appImg from '../../../img/Applications/WHERE-TO-USE-Application.png';
import imgWhyChoose from '../../../img/WhyChoose/1400X1200.png';
import TextSection from '../../../component/TextSection/TextSection';
import SkillCard from '../../../component/CardBox/SkillCard';
import AppCard from '../../../component/CardBox/AppCard';
import BtnUrlChange from '../../../component/Button/BtnUrlChange';
import FAQItem from '../../../component/FAQ/FAQItem';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import Carousel from '../../../component/Carousel/Carousel';
import Banner from '../../../component/Banner/Banner';
import { blockAdvantageList, blockComparisonList, blockSkillList, blockSpecification, blocksQuality } from './productData';
import AboutCard from '../../../component/CardBox/AboutCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { appCardList } from '../../../component/CardBox/Data/appCardList';

const AACBlock = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [bannerList, setBannerList] = useState([{
        img_url: bannerImg,
        img_name: 'acc_block'
    }]);

    useEffect(() => {
        const body = { pageName: 'ACC Blocks' };
        ServerApi(`/display/banner-list`, 'POST', null, body)
            .then(res => res.json())
            .then(res => {
                if (res.data.length > 0) {
                    setBannerList(res.data);
                } else return null;
            })
    }, []);

    return (
        <div >
            {/* BANNER HEAD */}
            <Box sx={{ position: 'relative' }}>
                <Carousel details={{}}>
                    {
                        bannerList.map((banner, index) => (
                            <Banner key={index}
                                bannerHeight='32rem' img={banner.img_url} alt={banner.img_name}
                                text={{}}
                            />
                        ))}
                </Carousel>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: isSmallScreen ? '100%' : '65vw',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        zIndex: 1,
                        p: isSmallScreen ? 0 : 13,
                    }}
                >
                    <TextSection textData={{ supportTitle: 'Smart Building with', headerTitle: 'Great Wall AAC Blocks', textDescription: "LIGHTWEIGHT, DURABLE, AND ECO-FRIENDLY BLOCKS FOR THE FUTURE OF CONSTRUCTION" }} blackBg={true} />
                </Box>
            </Box>


            {/* Product description */}
            <Container sx={{ py: 10 }}>
                <Grid spacing={4} container
                    direction="row"
                    sx={{
                        py: 5,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <TextSection givenAlign='' textData={{ supportTitle: 'our products', headerTitle: 'GREAT WALL AAC BLOCKS', textDescription: 'A short paragraph introducing AAC Blocks as a modern alternative to clay bricks and concrete, highlighting benefits like lightweight design, energy savings, and eco-friendliness' }} />
                    </Grid>
                    <Grid size={{ sx: 12, md: 5 }}>
                        <img src={blockImg} style={{
                            objectFit: 'cover',
                            height: '400px',
                            width: '100%'
                        }} alt="aac-Blocks" />
                    </Grid>
                </Grid>
            </Container>


            {/* Why acc? */}
            <Container maxWidth="auto" sx={{
                py: 10,
                color: 'white',
                backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`
            }}>
                <TextSection blackBg={true} givenAlign='center' textData={{ supportTitle: 'in construction', headerTitle: 'why choose aac?' }} />

                <Grid container spacing={2} sx={{ pt: 10 }}>
                    {blocksQuality.map((item, index) => (
                        <Grid key={index} size={{ xs: 6, md: 3 }}>
                            <AboutCard iconLogo={item.icon} textTitle={item.title} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Product features */}
            <div
                style={{
                    backgroundImage: `url(${imgWhyChoose})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // height: '620px',                    
                }}>
                <div style={{
                    height: '100%',
                    // backgroundColor: '#d3d3d3ff',
                    backgroundImage: `linear-gradient(180deg, #187b3d, rgba(255, 255, 255, 0.51), #ffffff)`,
                    color: 'white'
                }}>
                    <Container sx={{
                        pb: 10,
                        height: '100%'
                    }}>
                        <Grid container spacing={2}
                            direction="row"
                            sx={{
                                py: 5,
                                height: '100%',
                                justifyContent: "space-between",
                                alignItems: "stretch",
                            }}
                        >
                            {
                                blockSkillList.map((row, index) => (
                                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                                        <SkillCard iconLogo={row.icon} title={row.title} textDescription={row.description} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </div>
            </div>


            {/* Product details */}
            <Container sx={{ py: 10 }}>
                <Grid container spacing={2}>
                    <Grid size={{ md: 12 }} sx={{ py: 5 }}>
                        <TextSection givenAlign='center' textData={{ supportTitle: 'Product details', headerTitle: 'Technical Specification' }} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ p: 2, m: 2, border: 'dashed 2px #187b3d' }}>
                            <img src={blockImg1} style={{
                                objectFit: 'cover',
                                height: '400px',
                                width: '100%'
                            }} alt="brick" />
                            <img src={blockImg2} style={{
                                objectFit: 'cover',
                                height: '400px',
                                width: '100%'
                            }} alt="brick" />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {blockSpecification.map((row, index) => (
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
                            </Box>))}
                    </Grid>
                </Grid>
            </Container>

            {/* Compare table */}
            <Container maxWidth="auto" sx={{ py: 10, backgroundColor: '#167b3d' }}>
                <Grid container>
                    <Grid size={{ md: 12 }} sx={{ py: 5 }}>
                        <TextSection blackBg='true' givenAlign='center' textData={{ supportTitle: 'Make decision', headerTitle: 'Compare yourself' }} />
                    </Grid>

                    {blockComparisonList.map((item, index) => (
                        <Grid size={{ sm: 12, md: 3 }} sx={{ py: 5 }}>

                            <Box sx={{ p: 2, m: 1, backgroundColor: '#00000093', color: 'white', borderRadius: '8px' }}>
                                <Typography variant='h5'>0{index + 1}</Typography>
                                <Typography variant='h6'>{item.Name}</Typography>
                                <Divider sx={{ my: 2, bgcolor: 'white' }} />
                                {Object.entries(item).map(([key, value], idx) =>
                                    idx > 1 ? (
                                        <Box sx={{ mb: 2 }}>
                                            <Box sx={{ p: 2, color: 'black', bgcolor: '#66cc33', textTransform: 'uppercase' }}>
                                                <Typography sx={{ fontSize: '14px', textAlign: 'center' }} >{key}</Typography>
                                            </Box>
                                            <Box sx={{ p: 2, bgcolor: '#e7e7e7ff', color: '#2b2b2b' }}>
                                                <Typography sx={{ fontSize: "18px", fontWeight: 600, textAlign: 'center' }}>{value}</Typography>
                                            </Box>
                                        </Box>

                                    ) : null)}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Advantage */}
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
                    <Grid size={{ md: 12 }} sx={{ py: 5 }}>
                        <TextSection givenAlign='center' textData={{ supportTitle: 'Newly unlocked', headerTitle: 'Advantage of AAC Blocks' }} />
                    </Grid>
                    {
                        blockAdvantageList.map((row, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <SkillCard iconLogo={row.icon} title={row.title} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>

            {/* Application */}
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
                height: '200px',
                position: 'relative',
            }} />


            {/* Installation */}
            <Container sx={{ py: 10 }}>
                <Grid container>
                    <Grid size={{ md: 12 }} sx={{ py: 5 }}>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color='success' />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <TextSection textData={{ supportTitle: 'Step by Step', headerTitle: 'Installation Guidelines' }} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Step 1: Prepare the base - Clean and level the surface properly." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 2: Place blocks on a dry, level surface, 5 inches above the floor, and cover with polythene/tarpaulin." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 3: Depending on wall height, create a 3-5inch thick concrete base." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 4: If using cement mortar, soak AAC blocks in water for 10-15 minutes. (No soaking needed with adhesive.)" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 5: Place the first block carefully on the floor mortar, ensuring alignment with a water level." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 6: Apply cement mortar (8-12 mm) or adhesive (3-5 mm) between joints." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 7: Cut blocks as needed using a carbide-tipped handsaw for precise fitting." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 8: Lightly tap blocks with a rubber mallet for leveling." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Step 9: Continue the process, ensuring joints are properly sealed and aligned." />
                                    </ListItem>
                                </List>

                            </AccordionDetails>
                            <AccordionActions>
                                <Button color='success' onClick={(e) => {
                                    const link = document.createElement('a');
                                    link.href = '/files/myfile.pdf';
                                    link.download = 'Installation_Guide.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}>Download</Button>
                            </AccordionActions>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>

            {/* FAQ */}
            <div maxWidth="auto" style={{
                position: 'relative',
            }}>
                <div style={{
                    width: isSmallScreen ? '100%' : '50%',
                    position: 'absolute',
                    height: '100%',
                    left: 0,
                    top: 0,
                    backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`,
                    zIndex: 1,
                }} />

                <Container style={{ position: 'relative', zIndex: 2 }}>
                    <Grid spacing={4}
                        container
                        direction="row"
                        sx={{
                            py: 10,
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid size={{ xs: 12, md: 5 }}>
                            <TextSection blackBg={true} textData={{ headerTitle: "FAQ Questions", textDescription: 'Build faster, stronger, and smarter with Great Wall AAC Panels - Contact us today' }} />
                            <div style={{ marginTop: '40px' }}>

                                <BtnUrlChange btnDetails={{ btnTitle: 'Get a Quote', url: '/contact-us', color: false }} />
                            </div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <FAQItem />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default AACBlock;