import { Stack } from '@mui/material';

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
            <div style={{
                fontSize: '1.5rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                color: blackBg ? 'white' : '#2b2b2b'
            }}>{supportTitle ? supportTitle : null}</div>

            <div style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                color: blackBg ? 'white' : '#2b2b2b'
            }}>{headerTitle ? headerTitle : null}</div>

            <div style={{
                fontSize: '1rem',
                fontWeight: '400',
                textAlign: givenAlign === 'flex-end' ? 'right':'justify',
                marginTop: textDescription ? '2rem' : null,
                color: blackBg ? 'white' : '#5e5e5eff'
            }}>{textDescription ? textDescription : null}</div>
        </Stack>
    );
};

export default TextSection;