import { Container, Stack } from '@mui/material';
import BtnUrlChange from '../Button/BtnUrlChange';

const CallAction = () => {
    const divStyle={
        color: 'white',
        height: '190px',
        backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`,
    }
    return (
        <Container maxWidth="auto" style={divStyle}>
          <Container style={{height:'100%'}}>
           <Stack direction='row' sx={{ height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 500}}>
                    Let’s Build Your Next Project Together & Make An Appointment
                </div>
                <BtnUrlChange btnDetails={{ btnTitle: 'contact us', url: '/contact-us', color: false }}/>
           </Stack>
          </Container>
        </Container>
    );
};

export default CallAction;