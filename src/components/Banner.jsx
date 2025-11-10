import React, { memo, useRef } from "react";
import { FaStar, FaCar, FaLock } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";

const bannerImages = [
  "https://i.pinimg.com/1200x/4d/48/0c/4d480c6a0df8a37cbbfd8f0d84b62618.jpg",
  "https://i.pinimg.com/736x/74/70/9f/74709f15b23210d0f6e171b6257ed2f2.jpg",
  "https://i.pinimg.com/1200x/bb/07/d2/bb07d27fae444b16c8e9c66913a7ac7b.jpg",
];

const travelTexts = [
  "Explore the world with Travel Ease...",
  1500,
  "Plan your perfect trip effortlessly...",
  1500,
  "Find the best travel deals worldwide...",
  1500,
  "Discover hidden gems across the globe...",
  1500,
  "Book flights, hotels, and adventures easily...",
  1500,
  "Travel smart. Travel with Travel Ease!",
  1500,
];

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperStyles = `
    .mySwiper .swiper-pagination-bullet-active {
      background: white;
    }
    .mySwiper .swiper-pagination-bullet {
      background: white;
      opacity: 0.5;
    }
  `;

  return (
    <>
      <style>{swiperStyles}</style>
      <section
        className="rounded-2xl container mx-auto overflow-hidden shadow-lg relative pt-10"
        role="region"
        aria-label="TravelEase banner"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }, 0);
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Keyboard, Pagination, Navigation, Autoplay]}
          className="mySwiper h-full"
        >
          {bannerImages.map((bannerImg, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative h-[60vh] min-h-[450px] w-full">
                  <img
                    src={bannerImg}
                    alt={`Banner ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(2,6,23,0.6), rgba(3,7,30,0.4))",
                    }}
                  ></div>

                  <div className="grid md:grid-cols-2 gap-6 items-center relative h-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                    <div className="space-y-4 sm:space-y-6 z-10 text-white">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Rent, Ride, Relax — Make every trip effortless
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg max-w-xl text-slate-100/90">
                        Browse trusted vehicle owners, list your own vehicle,
                        manage bookings and trips — all in one modern interface
                        built for travelers and hosts.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/allVehicles"
                          className="px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white text-slate-900 font-semibold shadow text-center"
                        >
                          All Vehicles
                        </Link>
                        <Link
                          to="/myVehicles"
                          className="px-4 cursor-pointer sm:px-5 py-2 sm:py-3 rounded-lg border glass text-center"
                        >
                          List Your Vehicle
                        </Link>
                      </div>
                      <div
                        className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-200"
                        id="bannerStats"
                      >
                        <div className="flex items-center gap-2">
                          <FaStar className="text-sm sm:text-base" />{" "}
                          <span>Trusted hosts</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCar className="text-sm sm:text-base" />{" "}
                          <span>100+ vehicles</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaLock className="text-sm sm:text-base" />{" "}
                          <span>Secure profiles</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block rounded-xl  overflow-hidden border glass p-4 z-10">
                      <pre className="bg-transparent text-xs sm:text-sm text-slate-100">
                        <TypeAnimation
                          sequence={travelTexts}
                          wrapper="span"
                          speed={50}
                          className="absolute left-4 top-1/2 -translate-y-1/2  text-base pointer-events-none"
                          repeat={Infinity}
                        />
                      </pre>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-90 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:bg-opacity-100"
        >
          <IoIosArrowBack size={16} className="sm:size-5 text-gray-700" />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-90 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:bg-opacity-100"
        >
          <IoIosArrowForward size={16} className="sm:size-5 text-gray-700" />
        </div>
      </section>
    </>
  );
};

export default memo(Banner);
