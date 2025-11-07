import { Stack, Box } from '@mui/material';

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
            <Box sx={{
                fontSize: '1.5rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                color: blackBg ? 'white' : '#2b2b2b'
            }}>{supportTitle ? supportTitle : null}</Box>

            <Box sx={{
                pt: 1,
                fontSize: '2.5rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                color: blackBg ? 'white' : '#2b2b2b'
            }}>{headerTitle ? headerTitle : null}</Box>

            <Box sx={{
                pt: textDescription ? 2 : 0,
                letterSpacing: '.5px',
                fontSize: '1rem',
                fontWeight: '400',
                textAlign: givenAlign === 'center' ? 'center' : 'left',
                color: blackBg ? 'white' : '#5e5e5eff'
            }}>{textDescription ? textDescription : null}</Box>
        </Stack>
    );
};

export default TextSection;