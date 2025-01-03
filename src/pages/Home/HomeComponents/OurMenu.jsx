import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import slide6 from "../../../assets/home/slide1.jpg";
import slide7 from "../../../assets/home/slide2.jpg";
import SectionTitle from "../../../globalComponents/SectionTitle";
const OurMenu = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-10">
      
      <SectionTitle heading="Order Online" subHeading="From 11:00am To 9:00pm" />
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-xl font-bold text-center -mt-16 uppercase text-white opacity-1">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-xl font-bold text-center -mt-16 uppercase text-white opacity-1">Pizza</h1>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-xl font-bold text-center -mt-16 uppercase text-white opacity-1">Coffee</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-xl font-bold text-center -mt-16 uppercase text-white opacity-1">Brownee</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-xl font-bold text-center -mt-16 uppercase text-white opacity-1">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
          <h1 className="text-xl font-bold text-center -mt-16 uppercase text-white opacity-1">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
          <h1 className="text-xl font-bold text-center -mt-16  mb-16 uppercase text-white opacity-1">Pizza</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurMenu;
