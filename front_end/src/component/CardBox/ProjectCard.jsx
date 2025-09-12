import React from 'react';
import projectImg from '../../img/Layer43.png';
import { Avatar, Container, Stack } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const ProjectCard = ({ title, textDescription = ` a Latin professor at Hampden-Sydney College in Virginia,
 looked up one of the more obscure Latin words, consectetur,
` }) => {
    return (
        <div style={{ width: '100%', height: '350px' }}>
            <div style={{
                position: 'relative',
                height: '200px',
                width: '100%',
                backgroundImage: `url(${projectImg})`,
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
                        }}>{title ? title : 'Project Title'}</div>


                        <div style={{
                            fontSize: '1rem',
                            fontWeight: '400',
                            textAlign: 'justify',
                            marginTop: textDescription ? '1.5rem' : null,
                        }}>{textDescription ? textDescription : null}</div>
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