import { Button } from '@mui/material';

const BtnFooter = ({ btnDetails }) => {
    const { btnIcon, btnTitle } = btnDetails;
    const btnStyle = {
        width: 'auto',
        padding: 0,
        textTransform: 'none',
    }
    return (
        <Button style={btnStyle} variant="none" startIcon={btnIcon}>
            {btnTitle ? btnTitle : null}
        </Button>
    );
};

export default BtnFooter;