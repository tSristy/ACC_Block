import { Avatar, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia } from '@mui/material';
import imgCard from '../../img/Blog/jakaj.png';

const BlogCard = ({ props }) => {
    return (
        <Card sx={{
            width: 345,
            borderRadius: '0',
            cursor: 'pointer'
            // position: 'absolute',zIndex: 1
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={props?.image_url || imgCard}
                    alt="green iguana"
                />
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: '#5e5e5eff' }} aria-label="recipe">
                            GW
                        </Avatar>
                    }

                    title={props?.title || "It's coming down"}
                    subheader={props?.created_at || "September 14, 2016"}
                />
                <CardContent>
                    {props?.initial_text || `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at`}
                </CardContent>
            </CardActionArea>
            <Button variant='none' style={{
                color: 'white',
                borderRadius: '0',
                width: '100%',
                backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`
            }}>
                READ MORE
            </Button>

        </Card>
    );
};

export default BlogCard;