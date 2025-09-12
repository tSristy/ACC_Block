import { Grid } from '@mui/material';
import './Mycarousel.css';

const MyCarousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // 3 seconds
    >

      {/* Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <Grid container spacing={2} sx={{ py: 4 }}>
            <Grid size={6}>
              <img
                className="d-block w-100 carousel-img "
                src="https://images.unsplash.com/photo-1716643863806-989dd76ae093?q=80&w=774&auto=format&fit=crop"
                alt="Slide1"
              />
            </Grid>
            <Grid size={6}>
              <img
                className="d-block w-100 carousel-img "
                src="https://images.unsplash.com/photo-1578776349090-de61da00ff1a?q=80&w=687&auto=format&fit=crop"
                alt="Slide2"
              />
            </Grid>
          </Grid>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <Grid container spacing={2} sx={{ py: 4 }}>
            <Grid size={6}>
              <img
                className="d-block w-100 carousel-img "
                src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=870&auto=format&fit=crop"
                alt="Slide3"
              />
            </Grid>
            <Grid size={6}>
              <img
                className="d-block w-100 carousel-img "
                src="https://plus.unsplash.com/premium_photo-1661933050836-3f9e3d7eda61?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide4"
              />
            </Grid>
          </Grid>
        </div>
      </div>

       <div className="custom-carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
        </div>
    </div>
  );
};

export default MyCarousel;
