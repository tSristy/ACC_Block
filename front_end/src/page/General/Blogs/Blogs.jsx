import bannerImg from '../../../img/Blog/banner2.png'
import BlogCard from '../../../component/CardBox/BlogCard';
import Banner from '../../../component/Banner/Banner';
import TextSection from '../../../component/TextSection/TextSection';
import { Box, Card, CardContent, CardMedia, Container, Modal, Stack, Typography } from '@mui/material';
import CallAction from '../../../component/COA/CallAction';
import ClientReview from '../../../component/Review/ClientReview';
import ProjectCard from '../../../component/CardBox/ProjectCard';
import Carousel from '../../../component/Carousel/Carousel';
import { useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const [bannerList, setBannerList] = useState([{
        img_url: bannerImg,
        img_name: 'about'
    }]);
    const [openModel, setOpenModel] = useState(false);
    const [detailsContent, setDetailContent] = useState();

    const [mediaList, setMediaList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [reviewList, setReviewList] = useState([]);


    const getBanner = () => {
        const body = { pageName: 'Blogs & Articles' };
        ServerApi(`/display/banner-list`, 'POST', null, body)
            .then(res => res.json())
            .then(res => {
                if (res.data.length > 0) {
                    setBannerList(res.data);
                } else return null;
            })
    }

    const getContent = () => {
        ServerApi(`/display/content-list`, 'GET')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res) {
                    setMediaList(res.mediaList);
                    setProjectList(res.projectList);
                    setReviewList(res.reviewList);
                } else return null;
            })
    }

    const handleModel = (item) => {
        console.log(item)
        item.redirect_url ? window.open(item.redirect_url, '_blank') : setOpenModel(true)
        setDetailContent(item)
    }

    useEffect(() => {
        getBanner();
        getContent();
    }, []);

    return (
        <div >
            {openModel && (
                <Modal open={openModel} onClose={(e) => {
                    setOpenModel(false);
                    setDetailContent(null)
                }} >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            p: 4,
                            maxHeight: '80vh',
                            overflowY: 'auto',
                        }}
                    >
                        <Typography variant='h6' sx={{ p: 2 }}>{detailsContent.type}</Typography>
                        <Card sx={{ display: 'flex' }} >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>

                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                </Box>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 151, width: 151,
                                    objectFit: 'cover', p: 2
                                }}
                                image={detailsContent.image_url}
                            />
                        </Card>

                    </Box>
                </Modal>
            )}


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
                    {
                        projectList.map((item, index) => (
                            <Box style={{ width: '100%' }} key={index} onClick={(e) => handleModel(item)}>
                                <ProjectCard props={item} />
                            </Box>
                        ))
                    }
                </Stack>
            </Container>

            {/* clients */}
            <Container sx={{ py: 10 }}>
                <TextSection givenAlign='center' blackBg={false} textData={{ supportTitle: 'Our Clients', headerTitle: 'Testimonials' }} />
                <ClientReview props={reviewList} />
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
                    {mediaList.map((item, index) => (
                        <Box  key={index} onClick={(e) => handleModel(item)} >
                            <BlogCard props={item} />
                        </Box>
                    ))}
                </Stack>
            </Container>

            <CallAction />
        </div>
    );
}

export default Blogs;