import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import BtnUrlChange from '../Button/BtnUrlChange';

const CallAction = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const divStyle = {
        color: 'white',
        height: '130px',
        backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`,
    }
    return (
        <Container maxWidth="auto" style={divStyle}>
            <Container style={{ height: '100%' }}>
                <Stack direction={isSmallScreen ? 'column' : 'row'} sx={{ height: '100%', justifyContent: isSmallScreen ? 'space-evenly' : 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 500, textAlign: 'center' }}>
                        Let’s Build Your Next Project Together & Make An Appointment
                    </div>
                    <BtnUrlChange btnDetails={{ btnTitle: 'contact us', url: '/contact-us', color: false }} />
                </Stack>
            </Container>
        </Container>
    );
};

export default CallAction;