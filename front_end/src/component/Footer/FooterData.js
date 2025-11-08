
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DialpadIcon from '@mui/icons-material/Dialpad';
import LanguageIcon from '@mui/icons-material/Language';
import FactoryIcon from '@mui/icons-material/Factory';

export const footerIcon = [
    {
        icon: <FacebookIcon sx={{ fontSize: '22px', color: '#cacacaff'}}/>,
        url: "",
    }, 
    {
        icon: <LinkedInIcon sx={{ fontSize: '22px', color: '#9b9b9bff'}}/>,
        url: "",
    },
    {
        icon: <YouTubeIcon sx={{ fontSize: '22px', color: '#9b9b9bff'}}/>,
        url: "",
    }

]

export const footerInfo = [
      {
        icon: <LocationPinIcon />,
        title: "Address",
        description: `Great Wall Ceramic Industries Ltd.
Navana Zohura Square (12th Floor),
28, Kazi Nazrul Islam Avenue,
Banglamotor, Dhaka-1000, Bangladesh`
    },
    {
        icon: <CallIcon />,
        title: "Mobile",
        description: '+8802-55168031-37'

    },
    {
        icon: <MailOutlineIcon />,
        title: "Email",
        description: "info@greatwallaacblocks.com"
    }
]

export const FactoryInfo = {
        icon: <FactoryIcon />,
        title: "Factory",
        description: 'Kholapara, Kaliganj, Gazipur, Bangladesh'
    }