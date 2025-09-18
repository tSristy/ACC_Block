import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ children, details }) => {
    const { itemNo } = details;
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1}
            spaceBetween={1}
            loop={itemNo ? true : false}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={itemNo ? 2000 : 3000}
            breakpoints={{
                640: { slidesPerView: itemNo || 1 },
                // 768: { slidesPerView: 2 },
                // 1024: { slidesPerView: 3 },
            }}
            a11y={{ enabled: true }}
        //   style={{ paddingBottom: 24 }}
        >
            {
                children.map((item, index) => (

                    <SwiperSlide key={index}>{item}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Carousel;