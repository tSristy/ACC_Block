import { Box, Stack } from '@mui/material';
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
            <Box> {iconLogo ? iconLogo : null }
            </Box>
            <Box sx={{ fontSize: '1.25rem', fontWeight: 500, textAlign: 'center'}}>{textTitle}</Box>
            <Box sx={{pt:1, fontSize: '1rem', textAlign: 'center'}}>{textDescription}</Box>
        </Stack>
    );
};

export default AboutCard;