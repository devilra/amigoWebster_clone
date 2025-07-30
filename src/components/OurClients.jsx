import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const clients = [
  { id: 1, src: "/clients/client1.png" },
  { id: 2, src: "/clients/client2.png" },
  { id: 3, src: "/clients/client3.png" },
  { id: 4, src: "/clients/client4.png" },
  { id: 5, src: "/clients/client5.png" },
  { id: 6, src: "/clients/client6.png" },
];

const OurClients = () => {
  return (
    <div className="w-full text-center py-5 ">
      <h1 className="text-[#ff4e63] pb-10 text-center text-4xl md:text-5xl mt-10 font-bold">
        Our Clients
      </h1>

      {/* Navigation Buttons */}

      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}>
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="    mx-2 rounded-md">
              <img
                src={client.src}
                alt={`Client ${client.id}`}
                className="w-full h-50 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center gap-4 mb-4 px-4 mt-10">
          <button className="prev-btn bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            <IoIosArrowBack />
          </button>
          <button className="next-btn bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            <IoIosArrowForward />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default OurClients;
