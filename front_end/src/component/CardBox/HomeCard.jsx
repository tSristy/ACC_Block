import { Grid, Box } from '@mui/material';

const HomeCard = ({ index, title, textDescription }) => {
    // const boxStyle = {
    //     height: '170px',
    //     backgroundImage: `url(${bgImg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    // }

    return (
        <Box sx={{
            p: 2,
            bgcolor: 'white',
            color: '#2b2b2b',
            boxShadow: '2px 2px 10px black',
            borderRight: '5px solid #66cc33'
        }}>
            <Grid container sx={{ p: 2 }}>
                <Grid size={1}>
                    <Box sx={{
                        height: "100%"
                    }}>{index}</Box>
                </Grid>
                <Grid size={11} sx={{ px: 2 }}>
                    <Box sx={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', color: '#187b3d' }}>{title ? title : null}</Box>
                    <Box sx={{ pt:2, textAlign: 'justify' }}>{textDescription ? textDescription : null}</Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeCard;