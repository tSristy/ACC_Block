import { Stack } from '@mui/material';
import React from 'react';

const AboutCard = ({iconLogo, textTitle, textDescription}) => {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div> {iconLogo ? iconLogo : null }
                </div>
            <div style={{ fontSize: '1.5rem', textAlign: 'center'}}>{textTitle}</div>
            <div style={{ fontSize: '1rem', textAlign: 'center'}}>{textDescription}</div>
        </Stack>
    );
};

export default AboutCard;