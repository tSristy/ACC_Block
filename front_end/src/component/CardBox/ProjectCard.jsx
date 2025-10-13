import projectImg from '../../img/Blog/Layer43.png';
import { Avatar, Container, Stack, Typography } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const ProjectCard = ({props}) => {
    return (
        <div style={{ width: '100%', cursor: 'pointer' }}>
            <div style={{
                position: 'relative',
                height: '200px',
                width: '100%',
                backgroundImage: `url(${props?.image_url || projectImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <Container sx={{
                    p: 3,
                    top: 100,
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%',
                }}>
                    <Stack direction="column" sx={{
                        p: 3,
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "flex-start",
                        color: 'white',
                        backgroundColor: '#2b2b2b'
                    }}>
                        <div style={{
                            fontSize: '1.125rem',
                            fontWeight: '500',
                            textTransform: 'uppercase',
                        }}>{props?.title || 'Project Title'}</div>


                        <div style={{
                            fontSize: '1rem',
                            fontWeight: '400',
                            textAlign: 'justify',
                            marginTop: props ? '1.5rem' : null,
                        }}>
                            <Typography variant='h6'>
                                {props?.initial_text || 'Highlight Text'}
                                </Typography>
                                {props?.detail_text.slice(0,50) || 'description Text'} </div>

                    </Stack>
                </Container>

                <Container sx={{
                    top: 99,
                    position: 'absolute',
                    zIndex: 2,
                    width: '100%',
                    display: 'flex',
                    justifyContent: "flex-end",
                }}>
                    <Avatar sx={{ bgcolor: '#66cc33' }}>
                        <NewspaperIcon />
                    </Avatar>
                </Container>
            </div>
        </div>
    );
};
export default ProjectCard;