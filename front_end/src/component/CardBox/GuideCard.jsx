import { Avatar, Box, Stack } from '@mui/material';

const GuideCard = ({ iconLogo, title, textDescription }) => {
    return (
        <Box sx={{
            // boxShadow: 1,
            p: 3,
        }}>
            <Stack
                direction="column"
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box> <Avatar sx={{ width: 80, height: 80, border: 3, color: '#187b3d', bgcolor: 'white', borderColor: '#187b3d' }}>
                    {iconLogo ? iconLogo : null}
                </Avatar>
                </Box>
                <Box sx={{ letterSpacing: 1, textTransform: 'uppercase', fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', whiteSpace: "pre-line" }}>{title}</Box>
                <Box sx={{ fontSize: '1.1rem', textAlign: 'center', color: '#5e5e5eff', whiteSpace: "pre-line" }}>{textDescription}</Box>
            </Stack>
        </Box>

    );
};

export default GuideCard;