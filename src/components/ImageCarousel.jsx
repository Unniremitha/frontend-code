import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  return (
    <div className="w-3/4 mt-8 rounded shadow-md overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/team.png" alt="Team" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/office.png" alt="Office" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/service.png" alt="Services" className="w-full h-auto object-cover" />
        </SwiperSlide>
      </Swiper>

       {/* <p className="text-sm text-center mt-8 text-gray-600 ">
        One integrated platform for all the services you need
      </p> */}
    </div>

  );
};

export default ImageCarousel;
