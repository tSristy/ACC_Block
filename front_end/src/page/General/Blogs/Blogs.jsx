import bannerImg from '../../../img/banner2.png'
import BlogCard from '../../../component/CardBox/BlogCard';
import Banner from '../../../component/Banner/Banner';
import TextSection from '../../../component/TextSection/TextSection';
import { Container, Stack } from '@mui/material';
import CallAction from '../../../component/COA/CallAction';
import ClientReview from '../../../component/Review/ClientReview';
import ProjectCard from '../../../component/CardBox/ProjectCard';

const Blogs = () => {
    return (
        <div >
            <Banner
                img={bannerImg}
                bannerHeight='22rem'
                text={{ firstTitle: 'Blogs', bigTitle: null, descriptionTitle: null }}
            />

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