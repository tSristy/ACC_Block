import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BtnFooter = ({ btnDetails }) => {
    const { btnIcon, btnUrl } = btnDetails;
    const navigate = useNavigate();

    return (
        <IconButton onClick={(e)=>navigate(btnUrl)}>
            {btnIcon}
        </IconButton>
    );
};

export default BtnFooter;