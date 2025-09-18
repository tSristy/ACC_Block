import bannerImg from '../../../img/banner2.png'
import BlogCard from '../../../component/CardBox/BlogCard';
import Banner from '../../../component/Banner/Banner';
import TextSection from '../../../component/TextSection/TextSection';
import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import CallAction from '../../../component/COA/CallAction';
import ClientReview from '../../../component/Review/ClientReview';
import ProjectCard from '../../../component/CardBox/ProjectCard';
import Carousel from '../../../component/Carousel/Carousel';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';

const Blogs = () => {
      const theme = useTheme();
        const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    
        const [bannerList, setBannerList] = useState([{
            img_url: bannerImg,
            img_name: 'about'
        }]);
    
        useEffect(() => {
            const body = { pageName: 'Blogs & Articles' };
            ServerApi(`/banner/list`, 'POST', null, body)
                .then(res => res.json())
                .then(res => {
                   if(res.data.length > 0) {
                        setBannerList(res.data);
                    } else return null;
                })
        }, []);

    return (
        <div >
            <Carousel details={{}}>
                {
                    bannerList.map((banner, index) => (
                        <Banner key={index}
                            bannerHeight='22rem' img={banner.img_url} alt={banner.img_name}
                            text={{ firstTitle: 'Blogs', bigTitle: null, descriptionTitle: 'Building the future of construction in Bangladesh with innovative, eco-friendly AAC solutions' }}
                        />
                    ))}
            </Carousel>

            <div style={{
                backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`
            }}>
                <TextSection givenAlign='center' blackBg={true} textData={{ headerTitle: 'get yourself a quote today' }} />
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

            {/* clients */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' blackBg={false} textData={{ supportTitle: 'Our Clients', headerTitle: 'Testimonials' }} />
                <ClientReview />
            </Container>


            {/* blogs */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' blackBg={false} textData={{ supportTitle: 'Read to know us', headerTitle: 'News & Articles' }} />

                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        pt: 7,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </Stack>
            </Container>
            
            <CallAction />
        </div>
    );
};

export default Blogs;