import { Box, Container, Grid, MenuItem, MenuList, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery, useTheme } from '@mui/material';
import bannerImg from '../../../img/Applications/WHERE-TO-USE-Application.png';
import TextSection from '../../../component/TextSection/TextSection';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import Carousel from '../../../component/Carousel/Carousel';
import Banner from '../../../component/Banner/Banner';
import { blockComparisonList, blockSpecification } from '../Product/productData';

const AACBlockTechnical = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [displayTable, setDisplayTable] = useState({
        tTable: true,
        cTable: false
    });
    const [bannerList, setBannerList] = useState([{
        img_url: bannerImg,
        img_name: 'Technical-specification'
    }]);

    useEffect(() => {
        const body = { pageName: 'ACC Blocks Tech' };
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
                                    firstTitle: "Technical specification", descriptionTitle: "Learn more about AAC Blocks"
                                }}
                            />
                        ))}
                </Carousel>
            </Box>


            {/* Product details */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' textData={{ supportTitle: 'Product details', headerTitle: 'Analyze Data' }} />

                <Grid container sx={{ mt: 10 }}>
                    <Grid size={{ md: 3 }}>
                        <MenuList sx={{ p: 0, m: 0 }}>
                            <MenuItem sx={{ p: 5, bgcolor: displayTable.tTable ? '#cccccc38' : 'white' }} onClick={(e) => setDisplayTable({
                                tTable: true,
                                cTable: false
                            })}>
                                <Box sx={{ color: displayTable.tTable ? '#66cc33' : "#5e5e5eff", fontSize: '1rem', fontWeight: 600 }}>Technical Specification
                                </Box>
                            </MenuItem>
                            <MenuItem sx={{ p: 5, bgcolor: displayTable.cTable ? '#cccccc38' : 'white' }} onClick={(e) => setDisplayTable({
                                tTable: false,
                                cTable: true
                            })}>
                                <Box sx={{ color: displayTable.cTable ? '#66cc33' : "#5e5e5eff", fontSize: '1rem', fontWeight: 600 }}>Comparision</Box>
                            </MenuItem>
                        </MenuList>
                    </Grid>
                    <Grid size={{ md: 9 }}>
                        {displayTable.tTable && !displayTable.cTable &&
                            <TableContainer sx={{ p: 1, bgcolor: displayTable.tTable ? '#cccccc38' : 'white' }}>
                                <Table sx={{ minWidth: 650, bgcolor: 'white' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }}>  Property</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Units</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">AAC Block</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Clay Bricks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {blockSpecification.map((row, index) => (
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

                        {!displayTable.tTable && displayTable.cTable &&
                            <TableContainer sx={{ p: 1, bgcolor: displayTable.cTable ? '#cccccc38' : 'white' }}>
                                <Table border sx={{ minWidth: 650, bgcolor: 'white' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }}>Parameter</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">AAC Block</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Clay Bricks</TableCell>
                                            <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", fontWeight: 600, border: 1, borderColor: '#cccccc90' }} align="center">Concrete Blocks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {blockComparisonList.map((row, index) => (
                                            <TableRow
                                                key={index}
                                            >
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" scope="row">
                                                    {row.parameter}
                                                </TableCell>
                                                <TableCell sx={{ p: 4, fontSize: '1rem', color: "#5e5e5eff", border: 1, borderColor: '#cccccc90' }} component="th" align="center" scope="row">
                                                    {row.aacBlocks}
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AACBlockTechnical;