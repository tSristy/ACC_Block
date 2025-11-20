import { Container, Stack, Typography } from '@mui/material';
import BtnUrlChange from '../Button/BtnUrlChange';

const Banner = ({ bannerHeight, text, img, btnDetails }) => {
    const { firstTitle, bigTitle, descriptionTitle } = text;
    const bannerStyle = {
        height: bannerHeight,
        width: 'auto',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 0,
    }
    return (
        <Container maxWidth="auto" style={bannerStyle}>
            <Stack direction="column"
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(43, 43, 43, 0.6)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textTransform: 'uppercase'
                }}>

                <Typography variant="h2" sx={{
                    fontSize: {
                        xs: '2rem',
                        md: '3.5rem',
                    }, fontWeight: '600', textAlign: 'center'
                }}>{firstTitle ? firstTitle : null}</Typography>

                <Typography sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '3rem',
                        md: '4.5rem',
                        lg: '5rem',
                    }, fontWeight: '700', textAlign: 'center'
                }}>{bigTitle ? bigTitle : null}</Typography>

                <Typography variant="subtitle1" sx={{
                    fontSize: {
            xs: '.9rem',   
            md: '1.125rem', 
        },  fontWeight: '400', textAlign: 'center' }}>{descriptionTitle ? descriptionTitle : null}</Typography>

                {btnDetails ? (
                    <div style={{ padding: "3rem 0rem" }}>
                        <BtnUrlChange btnDetails={btnDetails} />
                    </div>
                ) : null}
            </Stack>
        </Container>
    );
};

export default Banner;