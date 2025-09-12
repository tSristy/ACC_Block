import { Container, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardCard from '../../../component/CardBox/DashboardCard';
import ImageIcon from '@mui/icons-material/Image';
import FeedIcon from '@mui/icons-material/Feed';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const DashBoard = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ alignItems: "stretch"}}>
                <Grid size={12} sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '8px',
                    border: 'solid 1px #ebebebff'
                }}>
                    <div>
                        <h6>Quick Stats</h6>
                    </div>
                    <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
                        <Grid size={3}>
                            <DashboardCard icon={<CategoryIcon color='primary' />} title="Products" textDescription="2" />
                        </Grid>
                        <Grid size={3}>
                            <DashboardCard icon={<FeedIcon color='success' />} title="Blog Posts" textDescription="3" />
                        </Grid>
                        <Grid size={3}>
                            <DashboardCard icon={<ImageIcon color='error' />} title="Banners" textDescription="4" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={3} sx={{
                    // py: 5,
                    bgcolor: 'white',
                    borderRadius: '8px',
                    border: 'solid 1px #ebebebff'
                }}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <SpaceDashboardIcon color='success' />
                            </ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                        </MenuItem>
                       <MenuItem >
                            <ListItemIcon>
                                <CameraAltIcon color='success' />
                            </ListItemIcon>
                            <ListItemText>
                                Banner Management
                            </ListItemText>
                        </MenuItem>
                       <MenuItem >
                            <ListItemIcon>
                                <FeedIcon color='success' />
                            </ListItemIcon>
                            <ListItemText>
                                Blog Management
                            </ListItemText>
                        </MenuItem>
                    </MenuList>
                </Grid>
                <Grid size={9}  sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '8px',
                    border: 'solid 1px #ebebebff'
                }}>
                    <div>
                        <h6>Recent Updates</h6>
                        <p>Last blog update: 20-02-2020</p>
                        <p>Last banner change: 20-02-2020</p>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
};

export default DashBoard;