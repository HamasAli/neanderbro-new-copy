import React, { useState } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";

const SwiperSection = () => {
  const [swiperRef, setSwiperRef] = useState(0);
  const isMobile = window.innerWidth < 768;

  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-40 mx-auto overflow-hidden lg:pt-16 lg:h-screen">
      <div className="flex flex-col justify-center items-center w-[95%] mx-auto">
        <Swiper
          modules={[Virtual, Navigation, Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              speed: 1000,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              speed: 1000,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
              speed: 1000,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperRef}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          virtual
          initialSlide={1}
          loop={true}
          loopedSlides={3}
          style={{
            ...(isMobile
              ? { paddingTop: "0", paddingBottom: "2rem", width: "100%" }
              : { paddingTop: "5rem", paddingBottom: "5rem", width: "100%" }), // Apply padding only for non-mobile devices
          }}
        >
          {[1, 2, 3].map((slideIndex) => (
            <SwiperSlide  key={slideIndex} virtualIndex={slideIndex - 1}>
              {({ isActive, isPrev, isNext }) => (
                <div className="flex ">
                  <img
                    alt="swiper"
                    src={`/assets/1 Homepage/carousal-image${slideIndex}.webp`}
                    className={`${isActive ? "active" : ""} ${
                      isPrev ? "prev" : ""
                    } ${isNext ? "next" : ""}`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSection;
