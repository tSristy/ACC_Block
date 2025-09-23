import { IconButton } from '@mui/material';

const BtnExternalUrl = ({ btnDetails }) => {
    const { btnIcon, btnUrl } = btnDetails;

    return (
        <IconButton onClick={(e)=>window.open(btnUrl,'_blank')}>
            {btnIcon}
        </IconButton>
    );
};

export default BtnExternalUrl;