import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import Aos from "aos";
import { FaArrowDown } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    img: "https://i.postimg.cc/W1cgGfZz/workshop.webp",
    title: "ANNUAL WORKSHOP 2025",
    heading: "Creative Innovation Hub",
    description: "Explore the latest trends in tech and design.",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/3xjpnCjB/conference.webp",
    title: "BUSINESS CONFERENCE 2025",
    heading: "Connect. Collaborate. Grow.",
    description: "Join industry leaders in redefining business success.",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/s2VW8QwR/art-exhibitions.webp",
    title: "ART EXHIBITION 2025",
    heading: "Colors of Culture & Creativity",
    description: "A journey through expression, passion, and artistry.",
  },
];

const Slider = () => {
  const scrollToUpcoming = () => {
    const section = document.getElementById("upcoming-events");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="flex mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={2000}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              <div  className="relative w-full h-screen">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-sky-800/30 backdrop-blur-[2px] z-10"></div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-8 md:px-4 top-20 ">
                <h2
                  className="lg:text-4xl md:text-3xl text-xl font-bold mb-4 uppercase"
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-once="false"
                >
                  {slide.title}
                </h2>
                <h1
                  className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6"
                  data-aos="fade-in"
                  data-aos-delay="200"
                  data-aos-once="false"
                >
                  {slide.heading}
                </h1>
                <p
                  className="text-md md:text-lg lg:text-base mb-8"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="false"
                >
                  {slide.description}
                </p>
                <button
                  onClick={scrollToUpcoming}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-once="false"
                  className="btn btn-secondary rounded-lg text-base font-medium  px-6 py-6 gap-2 flex items-center justify-center text-white duration-300 "
                >
                  <FaArrowDown size={20} className="animate-bounce" /> Scroll
                  Down
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
