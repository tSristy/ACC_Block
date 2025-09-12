import { Grid } from '@mui/material';
import React from 'react';

const DashboardCard = ({ icon, title, textDescription }) => {
    return (
        <div style={{
            padding: '20px', 
            backgroundColor: 'white',
            border: 'solid 1px #ebebebff',
            borderRadius: '8px'
        }}>
            <Grid container sx={{ p: 1 }}>
                <Grid size={1}>
                    <div>{icon}</div>
                </Grid>
                <Grid size={11} sx={{ px: 2 }}>
                    <div style={{ textAlign: 'justify' }}>{title ? title : null}</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 500, textTransform: 'uppercase' }}>{textDescription ? textDescription : null}</div>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardCard;