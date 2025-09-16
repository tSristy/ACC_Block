import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FeedIcon from '@mui/icons-material/Feed';

export const quickAccessList = [
    {
        title: 'Homepage',
        icon: <SpaceDashboardIcon color='success' />,
        url: '/',
    },
    {
        title: 'Banner Management',
        icon: <CameraAltIcon color='success' />,
        url: '/banners-slides',
    },
    {
        title: ' Blog Management',
        icon: <FeedIcon color='success' />,
        url: '/blogs-articles',
    },
]
