import { Box, Container, Grid } from '@mui/material';
import bannerImg from '../../../img/WhyChoose/1400X1200.png';
import TextSection from '../../../component/TextSection/TextSection';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import Carousel from '../../../component/Carousel/Carousel';
import Banner from '../../../component/Banner/Banner';
import { panelInstallationSteps } from '../Product/productData';
import GuideCard from '../../../component/CardBox/GuideCard';
import BtnPdfDw from '../../../component/Button/BtnPdfDw';

const AACPanelGuide = () => {

    const [bannerList, setBannerList] = useState([{
        img_url: bannerImg,
        img_name: 'acc_block'
    }]);

    useEffect(() => {
        const body = { pageName: 'ACC Panels Guide' };
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
                                    firstTitle: "Installation Guidelines", descriptionTitle: "Learn more about AAC panels"
                                }}
                            />
                        ))}
                </Carousel>
            </Box>

            <Container sx={{ pb: 10 }}>
                <Box sx={{ pt: 10, pb: 5 }}>
                    <TextSection textData={{ supportTitle: 'Step by Step', headerTitle: 'Installation Guidelines' }} />
                </Box>

                <Grid container spacing={4}>
                    {
                        panelInstallationSteps.map((row, index) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                <GuideCard iconLogo={row.icon} title={row.step} textDescription={row.description} />
                            </Grid>
                        ))
                    }

                    <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <BtnPdfDw fileDownload='/files/myfile.pdf' fileName='Download' variantStyle='outlined' />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default AACPanelGuide;