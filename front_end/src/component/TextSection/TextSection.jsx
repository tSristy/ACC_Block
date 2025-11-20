import { Stack, Box, Typography } from '@mui/material';

const TextSection = ({ givenAlign, textData, blackBg }) => {
    const { supportTitle, headerTitle, textDescription } = textData;
    return (
        <Stack
            direction="column"
            sx={{
                py: 1,
                height: '100%',
                alignItems: givenAlign ? givenAlign : "flex-start",
                justifyContent: "center",
            }}
        >
            {
                supportTitle &&
                <Box>
                    <Typography variant='h5' sx={{
                        fontSize: {
                            xs: '1rem',
                            md: '2rem',
                        },
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        color: blackBg ? 'white' : '#2b2b2b'
                    }}>
                        {supportTitle}
                    </Typography>
                </Box>
            }

            {
                headerTitle &&
                <Box sx={{ pt: 1 }}>
                    <Typography variant='h2' sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                            md: '3.5rem',
                        },
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: blackBg ? 'white' : '#2b2b2b'
                    }}>
                        {headerTitle}
                    </Typography>
                </Box>
            }

            {
                textDescription &&
                <Box sx={{
                    pt: 2
                }}>
                    <Typography variant='subtitle1' sx={{
                        fontWeight: '400',
                        textAlign: givenAlign === 'center' ? 'center' : 'left',
                        color: blackBg ? 'white' : '#5e5e5eff'
                    }}>
                        {textDescription}
                    </Typography>
                </Box>
            }
        </Stack>
    );
};

export default TextSection;