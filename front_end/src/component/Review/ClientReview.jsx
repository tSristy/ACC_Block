import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import quotationImg from '../../img/Blog/qute.png';
import beta1 from '../../img/Blog/beta1.png';
import beta2 from '../../img/Blog/beta2.png';
import beta3 from '../../img/Blog/beta3.png';
import { useEffect, useState } from 'react';

const ClientReview = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const imgStyle = {
    height: isSmallScreen ? '150px' : '350px',
    width: '100%',
    objectFit: 'fill',
    transition: 'opacity 1s ease-in-out', // smooth fade
  };

  const imgList = [beta1, beta2, beta3];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % imgList.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [imgList.length]);

  // ✅ derive rotated list directly (no extra state)
  const rotated = [
    imgList[startIndex % imgList.length],
    imgList[(startIndex + 1) % imgList.length],
    imgList[(startIndex + 2) % imgList.length],
  ];

  return (
    <Grid container spacing={2} sx={{ pt: 7 }}>

      {isSmallScreen ? null :
        <Grid size={2} className="border">
          <img src={rotated[0]} alt="Client" style={imgStyle} />
        </Grid>
      }


      <Grid size={{ xs: 12, md: 8 }}>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ borderLeft: '5px solid #66cc33', width: '100%', height: '100%' }}>
            <img src={rotated[1]} alt="Client" style={imgStyle} />
          </div>
          <div>
            <img src={quotationImg} style={{ height: '30px' }} alt="quote" />
            <div style={{ color: '#5e5e5eff' }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at
            </div>
            <div style={{ color: '#2b2b2b', fontSize: '1.5rem', textTransform: 'uppercase' }}>
              Dummy NAME
            </div>
            <div style={{ color: '#2b2b2b' }}>Dummy Position</div>
          </div>
        </Stack>
      </Grid>


      {isSmallScreen ? null :
        <Grid size={2}>
          <img src={rotated[2]} alt="Client" style={imgStyle} />
        </Grid>
      }
    </Grid>
  );
};

export default ClientReview;
