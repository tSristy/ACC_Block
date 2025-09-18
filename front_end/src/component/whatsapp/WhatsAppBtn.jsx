import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const btnStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25d366',
    color: 'white',
    zIndex: 9999,
    boxShadow: `0 4px 8px rgba(0,0,0,0.3)`,
    transition: `transform 0.3s ease`,
}


const FloatingWhatsAppButton = ({ phone = "8801796299885", message }) => {
    const encodedMsg = encodeURIComponent(message || "Hi! I'm interested in your services");
    const link = `https://wa.me/${phone}?text=${encodedMsg}`;

    return (
        <IconButton
            href={link}
            style={{ btnStyle }}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ p: 1 }}>
            <WhatsAppIcon sx={{ fontSize: '35px' }} />
        </IconButton>
    );
};

export default FloatingWhatsAppButton;
