import { Grid } from '@mui/material';
import bgImg from '../../img/banner2.png';

const HomeCard = ({ index, title, textDescription }) => {
    const boxStyle = {
        height: '170px',
        // backgroundImage: `url(${bgImg})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        backgroundColor: 'white',
        padding: 0,
        color: '#2b2b2b', 
        boxShadow: '2px 2px 10px black',
    }
    return (
        <div style={boxStyle}>
            <div style={{
                padding: '1rem',
                height: '100%',
                width: '100%',
                // backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                borderRight: '5px solid #66cc33'
            }}>
                <Grid container sx={{ p: 2 }}>
                    <Grid size={1}>
                        <div style={{
                            height: "100%"
                        }}>{index}</div>
                    </Grid>
                    <Grid size={11} sx={{ px: 2 }}>
                        <div style={{ fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase', color: '#187b3d' }}>{title ? title : null}</div>
                        <div style={{ textAlign: 'justify' }}>{textDescription ? textDescription : null}</div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default HomeCard;