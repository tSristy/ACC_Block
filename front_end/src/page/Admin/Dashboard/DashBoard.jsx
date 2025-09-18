import { Grid, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardCard from '../../../component/CardBox/DashboardCard';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import { useNavigate } from 'react-router-dom';
import { quickAccessList } from './data';
import { useContext, useEffect, useState } from 'react';
import { ServerApi } from '../../../Route/ServerApi';
import { AuthContext } from '../../../Route/AuthContext';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [displayData, setDisplayData] = useState({
        contentNo: 2,
        bannerNo: 4,
        lastBlogUpdate: 'today',
        lastBannerUpdate: 'today'
    })
    useEffect(() => {
        ServerApi(`/img/info`, 'GET', user.access_token)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res) {
                    setDisplayData({
                        blogNo: res.contentNo,
                        bannerNo: res.bannerNo,
                        lastBlogUpdate: res.lastBlogUpdate,
                        lastBannerUpdate: res.lastBannerUpdate
                    })
                } else return null;
            })
    }, [user])

    const navigate = useNavigate();
    return (
        <div>
            <Grid container spacing={2} sx={{ alignItems: "stretch" }}>
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
                            <DashboardCard icon={<FeedIcon color='success' />} title="Blog Posts" textDescription={displayData.contentNo || 0} />
                        </Grid>
                        <Grid size={3}>
                            <DashboardCard icon={<ImageIcon color='error' />} title="Banners" textDescription={displayData.bannerNo} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={3} sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    border: 'solid 1px #ebebebff'
                }}>
                    <MenuList>
                        {quickAccessList.map((list, index) => (
                            <MenuItem key={index} onClick={(e) => navigate(list.url)}>
                                <ListItemIcon>
                                    {list.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    {list.title}
                                </ListItemText>
                            </MenuItem>
                        ))
                        }
                    </MenuList>
                </Grid>
                <Grid size={9} sx={{
                    p: 3,
                    bgcolor: 'white',
                    borderRadius: '8px',
                    border: 'solid 1px #ebebebff'
                }}>
                    <div>
                        <h6>Recent Updates</h6>
                        <p>Last blog update: {displayData.lastBlogUpdate}</p>
                        <p>Last banner change: {displayData.lastBannerUpdate}</p>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
};

export default DashBoard;