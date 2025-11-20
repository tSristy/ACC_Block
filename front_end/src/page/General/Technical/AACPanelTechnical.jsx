import { Box, Container, Grid, MenuItem, MenuList, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import bannerImg from '../../../img/Applications/WHERE-TO-USE-Application.png';
import TextSection from '../../../component/TextSection/TextSection';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import Carousel from '../../../component/Carousel/Carousel';
import Banner from '../../../component/Banner/Banner';
import { panelComparisonList, panelSpecification } from '../Product/productData';
import AllPagePdf from '../../../component/pdf/AllPagePdf';
import testReportPdf from '../Product/Maxcreat_AAC.pdf';

const AACPanelTechnical = () => {
    const [displayTable, setDisplayTable] = useState({
        tTable: true,
        cTable: false,
        testReport: false
    });
    const [bannerList, setBannerList] = useState([{
        img_url: bannerImg,
        img_name: 'Technical-specification'
    }]);

    useEffect(() => {
        const body = { pageName: 'ACC Panels Tech' };
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
                               text={{
                                    firstTitle: "Technical specification", descriptionTitle: "Learn more about AAC Panels"
                                }}
                            />
                        ))}
                </Carousel>
            </Box>


            {/* Product details */}
             <Container sx={{ py: 10, mb: 5 }}>
                <TextSection givenAlign='center' textData={{ supportTitle: 'Product details', headerTitle: 'Analyze Data' }} />

                <Grid container sx={{ mt: 10, overflowX: "auto" }}>
                    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                        <MenuList sx={{ p: 0, m: 0 }}>
                            <MenuItem sx={{
                                p: 5, bgcolor: displayTable.tTable ? '#66cc33' : '#cccccc38',
                                color: displayTable.tTable ? 'white' : "#5e5e5eff", fontSize: '1rem', fontWeight: 600, 
                                "&:hover": {
                                    bgcolor: "#66cc3384",
                                    color: "#187b3d"
                                }
                            }}
                                onClick={(e) => setDisplayTable({
                                    tTable: true,
                                    cTable: false,
                                    testReport: false
                                })}><Typography noWrap>
                                    Technical Specification
                                </Typography>
                            </MenuItem>

                            <MenuItem sx={{
                                p: 5, bgcolor: displayTable.cTable ? '#66cc33' : '#cccccc38',
                                color: displayTable.cTable ? 'white' : "#5e5e5eff", fontSize: '1rem', fontWeight: 600, "&:hover": {
                                    bgcolor: "#66cc3384",
                                    color: "#187b3d"
                                }
                            }}
                                onClick={(e) => setDisplayTable({
                                    tTable: false,
                                    cTable: true,
                                    testReport: false
                                })}><Typography noWrap>
                                    Comparision
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
                                cTable: false,
                                testReport: true
                            })}>
                                <Typography noWrap>
                                    Test Report
                                </Typography>
                            </MenuItem>
                        </MenuList>
                    </Grid>
                    <Grid size={{ xs: 6, sm: 8, md: 9 }} >
                        {displayTable.tTable && !displayTable.cTable && !displayTable.testReport &&
                            <TableContainer sx={{ p: 1, bgcolor: displayTable.tTable ? '#cccccc38' : 'white' }}>
                                <Table sx={{ minWidth: 650, bgcolor: 'white' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }}>  Property</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Units</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">AAC Panel</TableCell>
                                            {/* <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Clay Bricks</TableCell> */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {panelSpecification.map((row, index) => (
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
                                                {/* <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.claybrickValue}
                                                </TableCell> */}
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        }

                        {!displayTable.tTable && displayTable.cTable && !displayTable.testReport &&
                            <TableContainer sx={{ p: 1, bgcolor: displayTable.cTable ? '#cccccc38' : 'white' }}>
                                <Table border sx={{ minWidth: 650, bgcolor: 'white' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }}>Parameter</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">AAC Panel</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Clay Bricks</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Concrete Blocks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {panelComparisonList.map((row, index) => (
                                            <TableRow
                                                key={index}
                                            >
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" scope="row">
                                                    {row.parameter}
                                                </TableCell>
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.aacPanels}
                                                </TableCell>
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.redClayBricks}
                                                </TableCell>
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.concreteBlocks}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        }
                        {!displayTable.tTable && !displayTable.cTable && displayTable.testReport &&
                            <Box sx={{ p: 1, bgcolor: displayTable.testReport ? '#cccccc38' : 'white', overflow: "hidden", height: "840px" }}>
                                <Box sx={{
                                    overflow: "auto"
                                }}>
                                <AllPagePdf pdf={testReportPdf} />
                                </Box>
                            </Box>
                        }      
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AACPanelTechnical;