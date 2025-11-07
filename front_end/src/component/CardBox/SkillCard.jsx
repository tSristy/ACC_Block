import { Avatar, Grid, Stack, Box } from '@mui/material';

const SkillCard = ({ card, iconLogo, title, textDescription }) => {

    return (
        <Box sx={{
            p: 3,
            height: '100%',
            backgroundColor: card ? '#cccccc38' : 'white',
            boxShadow: card ? null : 2,
            color: '#2b2b2b',
            borderRight: '5px solid #66cc33'
        }}>
            <Grid container spacing={2}
                direction="row"
                sx={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Grid size={{ xs: 2 }}>
                    <div>
                        <Avatar sx={{ bgcolor: ' #187b3d' }}>
                            {iconLogo}
                        </Avatar>
                    </div>
                </Grid>
                <Grid size={{ xs: 8 }}>
                    <Stack
                        direction="column"
                        sx={{
                            height: '100%',
                            alignItems: "flex-start",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{
                            fontSize: '1.125rem',
                            textTransform: 'uppercase',
                            fontWeight: 600
                        }}>{title ? title : null}</Box>

                        <Box sx={{
                            mt: 1,
                            fontSize: '1rem',
                            fontWeight: '400',
                            // textAlign: 'justify',
                            color: '#5e5e5eff'
                        }}>{textDescription ? textDescription : null}</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SkillCard;