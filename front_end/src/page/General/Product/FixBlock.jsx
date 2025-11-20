import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, MenuItem, MenuList, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material';
import bannerImg from '../../../img/Products/A.png';
import blockImg from '../../../img/Products/Our-Product-C.png';
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
import { blocksQuality, fixAdvantageList, fixInstallationSteps, FixSkillList, fixSpecification } from './productData';
import AboutCard from '../../../component/CardBox/AboutCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { appCardList } from '../../../component/CardBox/Data/appCardList';
import GuideCard from '../../../component/CardBox/GuideCard';
import AllPagePdf from '../../../component/pdf/AllPagePdf';
import testReportPdf from './Maxcreat_AAC.pdf';
import WarningIcon from '@mui/icons-material/Warning';

const FixBlock = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [displayTable, setDisplayTable] = useState({
        tTable: true,
        cTable: false,
        testReport: false,
    });
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
                    <TextSection textData={{ supportTitle: 'Smart Building with', headerTitle: 'Great Wall Block-Fix', textDescription: "FIXING THE GREEN FUTURE WITH STRONG BONDING BETWEEN THE BLOCKS." }} blackBg={true} />
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
                        <TextSection givenAlign='' textData={{ supportTitle: 'our products', headerTitle: 'Great Wall Block-Fix', textDescription: 'Great Wall Block-Fix is a dry pre-mixed polymer based fast setting, thin-bed, strong bonding water resistance materials for AAC (Autoclaved Aerated Concrete) Blocks, AAC Panels & Concrete Blocks fixing adhesive.' }} />
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
                backgroundImage: `linear-gradient(180deg, #ffffffff, #cccccc38)`
                // backgroundImage: `linear-gradient(180deg, #66cc33, #187b3d)`
            }}>
                <TextSection blackBg={false} givenAlign='center' textData={{ supportTitle: 'in construction', headerTitle: 'why choose aac?' }} />

                <Grid container spacing={2} sx={{ pt: 10 }}>
                    {blocksQuality.map((item, index) => (
                        <Grid key={index} size={{ xs: 6, md: 3 }}>
                            <AboutCard iconLogo={item.icon} title={item.title} />
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
                    backgroundImage: `linear-gradient(180deg, #cccccc38, #ffffff)`,
                    color: 'white'
                }}>
                    <Container sx={{ py: 10, color: 'white' }}>
                        <Grid container spacing={2}>
                            {FixSkillList.map((item, index) => (
                                <Grid key={index} size={{ xs: 12, md: 6 }}>
                                    <SkillCard iconLogo={item.icon} title={item.title} textDescription={item.description} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </div>


            {/* Product details */}
            <Container sx={{ pt: 10 }}>
                <TextSection givenAlign='center' textData={{ supportTitle: 'Product details', headerTitle: 'Analyze Data' }} />

                <Grid container sx={{ mt: 10, overflowX: "auto" }}>
                    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                        <MenuList sx={{ p: 0, m: 0 }}>
                            <MenuItem sx={{
                                p: 5, bgcolor: displayTable.tTable ? '#66cc33' : '#cccccc38',
                                color: displayTable.tTable ? 'white' : "#5e5e5eff", fontSize: '1rem', fontWeight: 600, "&:hover": {
                                    bgcolor: "#66cc3384",
                                    color: "#187b3d"
                                }
                            }}
                                onClick={(e) => setDisplayTable({
                                    tTable: true,
                                    testReport: false
                                })}>
                                <Typography noWrap>
                                    Technical Specification
                                </Typography>
                            </MenuItem>

                            <MenuItem sx={{
                                p: 5, bgcolor: displayTable.testReport ? '#66cc33' : '#cccccc38',
                                color: displayTable.testReport ? 'white' : "#5e5e5eff", fontSize: '1rem', fontWeight: 600, "&:hover": {
                                    bgcolor: "#66cc3384",
                                    color: "#187b3d"
                                }
                            }} onClick={(e) => setDisplayTable({
                                tTable: false,
                                testReport: true
                            })}>
                                <Typography noWrap>
                                    Test Report
                                </Typography>
                            </MenuItem>
                        </MenuList>
                    </Grid>
                    <Grid size={{ sx: 6, sm: 8, md: 9 }}>
                        {displayTable.tTable && !displayTable.testReport &&
                            <TableContainer sx={{ p: 1, bgcolor: displayTable.tTable ? '#cccccc38' : 'white' }}>
                                <Table sx={{ minWidth: 650, bgcolor: 'white' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }}>  Property</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Units</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Block-Fix</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Clay Bricks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {fixSpecification.map((row, index) => (
                                            <TableRow
                                                key={index}
                                            >
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" scope="row">
                                                    {row.parameter}
                                                </TableCell>
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.unit}
                                                </TableCell>
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.value}
                                                </TableCell>
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.claybrickValue}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        }

                        {!displayTable.tTable && displayTable.testReport &&
                            <Box sx={{ p: 1, bgcolor: displayTable.testReport ? '#cccccc38' : 'white' }}>
                                <AllPagePdf pdf={testReportPdf} />
                            </Box>
                        }
                    </Grid>
                </Grid>
            </Container>



            {/* Advantage */}
            <Container sx={{
                py: 10,
                mb: 5,
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
                    <Grid size={{ md: 12 }} sx={{ py: 10 }}>
                        <TextSection givenAlign='center' textData={{ supportTitle: 'Newly unlocked', headerTitle: 'Advantage of AAC Blocks' }} />
                    </Grid>
                    {
                        fixAdvantageList.map((row, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <SkillCard iconLogo={row.icon} title={row.title} />
                            </Grid>
                        ))
                    }
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
                height: '200px',
                position: 'relative',
            }} />


            <Container sx={{ pt: 20, pb: 10 }}>
                <TextSection textData={{ supportTitle: 'Safety Directions', headerTitle: 'guidelines & precautions', }} givenAlign={"center"} />
                <Stack spacing={4} sx={{ pt: 5 }}>
                    <SkillCard card={true} title="Avoid Direct Contact" iconLogo={<WarningIcon />} textDescription="Precautions must be taken to avoid contact with skin, eyes, etc. Always wear recommended protective gear during application." />
                    <SkillCard card={true} title="Prolonged Irritation" iconLogo={<WarningIcon />} textDescription="In case of prolonged irritation, medical advice should be sought. Do not ignore persistent symptoms." />
                    <SkillCard card={true} title="Medical Emergency" iconLogo={<WarningIcon />} textDescription="If swallowed, seek medical attention immediately." />
                </Stack>
            </Container>


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
                                <Grid container spacing={4}>
                                    {
                                        fixInstallationSteps.map((row, index) => (
                                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                                <GuideCard iconLogo={row.icon} title={row.step} textDescription={row.description} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>

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
            <div style={{
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
                            <TextSection blackBg={true} textData={{ headerTitle: "FAQ Questions", textDescription: 'Build faster, stronger, and smarter with Great Wall AAC Panels - Contact us today.' }} />
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

export default FixBlock;