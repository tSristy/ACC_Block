import { Container, Stack } from '@mui/material';
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
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(43, 43, 43, 0.6)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textTransform: 'uppercase'
                }}>
                <Container style={{ fontSize: '2.5rem', fontWeight: '600', textAlign: 'center' }}>{firstTitle ? firstTitle : null}</Container>
                <Container style={{ fontSize: '4rem', fontWeight: '700', textAlign: 'center' }}>{bigTitle ? bigTitle : null}</Container>
                <Container style={{ fontSize: '1.125rem', fontWeight: '400', textAlign: 'center' }}>{descriptionTitle ? descriptionTitle : null}</Container>

                {btnDetails ? (
                    <div style={{ padding: "3rem 0rem"}}>
                        <BtnUrlChange btnDetails={btnDetails} />
                    </div>
                ) : null}
            </Stack>
        </Container>
    );
};

export default Banner;