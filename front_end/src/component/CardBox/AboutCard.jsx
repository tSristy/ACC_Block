import { Box, Stack } from '@mui/material';

const AboutCard = ({ iconLogo, title, textDescription }) => {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box> {iconLogo ? iconLogo : null}
            </Box>
            <Box sx={{ letterSpacing: 1, textTransform: 'uppercase', fontSize: '1.25rem', fontWeight: 500, textAlign: 'center', whiteSpace: "pre-line" }}>{title}</Box>
            <Box sx={{ pt: 1, fontSize: '1rem', textAlign: 'center', whiteSpace: "pre-line" }}>{textDescription}</Box>
        </Stack>
    );
};

export default AboutCard;