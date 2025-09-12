import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BtnUrlChange = ({btnDetails}) => {
    const { btnTitle, url, color} = btnDetails;
    console.log(url)
    const navigate = useNavigate();
    const btnStyle={
        height: '50px',
        width: '200px',
        borderRadius: '8px',
        fontSize: '1rem',
        textTransform: 'uppercase',
        // fontWeight: '700',
        color: color? 'white' : '#187b3d',
        backgroundColor: color? null : 'white',
        backgroundImage: color? `linear-gradient(180deg,#66cc33, #187b3d)` :null
    }

    const handleClick = (givenUrl) =>{
        navigate(givenUrl);
        window.scrollTo(0,0);
    }

    return (
        <Button variant='none' style={btnStyle} onClick={url?(e)=>handleClick(url):null}>{btnTitle}</Button>
    );
};

export default BtnUrlChange;