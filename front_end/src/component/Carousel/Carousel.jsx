import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ children, details }) => {
    const { itemNo, play } = details || {};

    // Calculate actual number of children to prevent empty space errors
    const childCount = React.Children.count(children);

    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "white",
                "--swiper-pagination-color": "white",
                "--swiper-navigation-size": "25px",
            }}
            modules={[Navigation, Pagination, Autoplay, A11y]}

            // DEFAULT (Mobile First): Start with 1 slide
            slidesPerView={1}
            spaceBetween={10} // Add a small gap for mobile

            loop={childCount > 1} // Only loop if more than 1 item
            navigation={!play} // Show arrows if not auto-playing
            autoplay={play ? { delay: 3000, disableOnInteraction: false } : false}
            speed={500}
            a11y={{ enabled: true }}

            // RESPONSIVE BREAKPOINTS
            breakpoints={itemNo ? {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
            } : null}
        >
            {React.Children.map(children, (item, index) => (
                <SwiperSlide key={index}>
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;