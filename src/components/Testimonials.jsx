import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    name: "Gajendra Prabhu V",
    date: "1 month ago",
    rating: 5,
    text: "Exceptional work! Transformed our vision into a stunning website ",
    image: "/avatars/gajendra.jpg",
  },
  {
    name: "Ravi Kumar",
    date: "2 weeks ago",
    rating: 5,
    text: "Professional and timely service. Very happy with the outcome!",
    image: "/avatars/ravi.jpg",
  },
  {
    name: "Sneha R.",
    date: "3 weeks ago",
    rating: 4,
    text: "Their team is friendly and works with great clarity. Loved the UI!",
    image: "/avatars/sneha.jpg",
  },
  {
    name: "Dinesh M.",
    date: "1 month ago",
    rating: 5,
    text: "Great experience! They built my business website with strong SEO.",
    image: "/avatars/dinesh.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="pt-10 pb-32 md:pb-60 px-4">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
        What Our Customers Say
      </h2>

      <div className="bg-[#e6f1ff] bg-opacity-40 p-5 rounded-md flex my-4 justify-center items-center">
        <FcGoogle size={50} />

        <div className="px-5">
          <h1>Excellent on Google</h1>
          <span>4.9</span>
          {Array(5)
            .fill(1)
            .map((_, idx) => (
              <span key={idx} className="text-orange-500 text-lg">
                ★
              </span>
            ))}
          <span>(40)</span>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={20}>
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#e6f1ff] bg-opacity-40  rounded-xl shadow-md p-4 h-full flex flex-col">
              <div className="flex items-center mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.date}</p>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex mb-2">
                {Array(t.rating)
                  .fill(1)
                  .map((_, idx) => (
                    <span key={idx} className="text-orange-500 text-lg">
                      ★
                    </span>
                  ))}
              </div>

              <p className="text-gray-700 text-sm mb-2">
                “{t.text.length > 120 ? t.text.slice(0, 100) + "…" : t.text}”
              </p>
              <p className="mt-auto text-xs text-gray-500">
                Posted on <b>Google</b>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
