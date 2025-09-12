import bannerImg from '../../../img/banner1.jpg';
import Banner from '../../../component/Banner/Banner';
import logo from '../../../img/logo.jpg';
import { Container, Grid, Stack } from '@mui/material';
import { Form } from 'react-bootstrap';
import BtnUrlChange from '../../../component/Button/BtnUrlChange';

const Contact = () => {
    const formStyle = {
        backgroundColor: '#f5f5f5',
        borderRadius: '2px',
    }
    return (
        <div >
            <Banner
                img={bannerImg}
                bannerHeight='25rem'
                text={{ firstTitle: 'contact us', bigTitle: null, descriptionTitle: null }}
            // btnDetails={{ btnTitle: 'get a quote', url: null, color: false }}
            />

            <Container sx={{ py: 10}}>
                <Grid container spacing={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid size={6}>
                        <div style={{
                            fontSize: '1.5rem',
                            textTransform: 'uppercase'
                        }}>Get Connected</div>

                        <div style={{
                            fontSize: '2rem',
                            fontWeight: '600',
                            textTransform: 'uppercase'
                        }}>Drop us a line</div>

                        <div style={{
                            fontSize: '1rem',
                            fontWeight: '400',
                            textAlign: 'justify',
                            marginTop: '2rem'
                        }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'</div>

                        <form className='mt-5'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name :</Form.Label>
                                <Form.Control type="text" style={formStyle} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email :</Form.Label>
                                <Form.Control type="email" style={formStyle} />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                                <Form.Label>Message :</Form.Label>
                                <Form.Control as="textarea" rows={3} style={formStyle} />
                            </Form.Group>

                            <BtnUrlChange btnDetails={{ btnTitle: 'Send now', url: null, color: true }}/>
                        </form>
                    </Grid>
                    <Grid size={6}>
                        <div style={{
        boxShadow: '2px 2px 10px black'}}>
                            <Stack direction="column" sx={{ alignItems: 'flex-end', p: 3 }}>
                                <div style={{ fontSize: '1.5rem' }}>+88 017111 11111</div>
                                <div> Help Line</div>
                            </Stack>
                            <Stack direction="column" sx={{ alignItems: 'flex-start', p: 3 }}>
                                <img src={logo} style={{ height: '3.75rem' }} alt="logo" />
                                <div> 
                                    <span className='fw-semibold'>Address</span> Bangla Motor, Dhaka 
                                </div>
                                <div> 
                                    <span className='fw-semibold'>Email</span> info@gmail.com 
                                </div>
                            </Stack>
                        </div>

                        <div className="mt-5 border" style={{height: '300px'}}>
                            <iframe title="Map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6136.65707468825!2d90.39705862329069!3d23.745930515109507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89619b141f3%3A0x8a108b598fcefadb!2sNavana%20Zohura%20Square!5e0!3m2!1sen!2sbd!4v1753583129199!5m2!1sen!2sbd" width="100%" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;