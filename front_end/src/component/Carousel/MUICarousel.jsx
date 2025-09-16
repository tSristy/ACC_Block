import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MUICarousel() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mountain lake' },
    { src: 'https://images.unsplash.com/photo-1542676032-6e468ada2953?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mountain lake' },
  ];

  return (
    // <div style={{ maxWidth: 1200, margin: '0 auto' }}>
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      slidesPerView={1}
      spaceBetween={1}
      loop
      // navigation
      // pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={2000}
      breakpoints={{
        640: { slidesPerView: 1 },
        // 768: { slidesPerView: 2 },
        // 1024: { slidesPerView: 3 },
      }}
      a11y={{ enabled: true }}
      style={{ paddingBottom: 24 }}
    >
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}
