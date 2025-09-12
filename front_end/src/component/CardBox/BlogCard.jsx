import { Avatar, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia } from '@mui/material';
import imgCard from '../../img/jakaj.png';

const BlogCard = () => {
    return (
            <Card sx={{ 
                width: 345, 
                borderRadius: '0',
                // position: 'absolute',zIndex: 1
                }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image={imgCard}
                        alt="green iguana"
                    />
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#5e5e5eff' }} aria-label="recipe">
                                R
                            </Avatar>
                        }

                        title="It's coming down"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
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