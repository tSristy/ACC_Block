import { Avatar, Grid, Stack } from '@mui/material';

const SkillCard = ({ card, iconLogo, title, textDescription }) => {
    const boxStyle = {
        // width: '380px',
        height: '100%',
        padding: '1rem',
        backgroundColor: card ? '#cccccc38' : 'white',
        boxShadow: card ? null : '2px 2px 10px black',
        color: '#2b2b2b',
        borderRight: '5px solid #66cc33'
    }
    return (
        <div style={boxStyle}>
            <Grid container spacing={2}
                direction="row"
                sx={{
                    p: 2,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Grid size={{ xs: 2 }}>
                    <div>
                        <Avatar sx={{ bgcolor: ' #187b3d' }}>
                           { iconLogo }
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
                        <div style={{
                            fontSize: '1.125rem',
                            textTransform: 'uppercase',
                            fontWeight: 500
                        }}>{title ? title : null}</div>

                        <div style={{
                            fontSize: '1rem',
                            fontWeight: '400',
                            // textAlign: 'justify',
                            color: '#5e5e5eff'
                        }}>{textDescription ? textDescription : null}</div>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default SkillCard;