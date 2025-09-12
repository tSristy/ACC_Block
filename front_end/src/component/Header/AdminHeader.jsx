import { Grid } from '@mui/material';
import logo from '../../img/logo.jpg';
import BtnProfile from '../Button/BtnProfile';

const AdminHeader = () => {
    return (
        <Grid container spacing={2} sx={{ 
            // p: 2, 
            justifyContent: 'space-between', 
            borderBottom: 'solid 1px #ebebebff'
            }}>
            <Grid size={8}>
                <img src={logo} style={{ height: '3.75rem' }} alt="logo" />
            </Grid>
            <Grid size={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <BtnProfile />
            </Grid>
        </Grid>
    );
};

export default AdminHeader;