import React from "react";
import Slider from "../Components/Slider";
import EventCard from "../Components/EventCard";
import { useLoaderData } from "react-router";
import FeaturedOrganizers from "../Components/FeaturedOrganizers";
import Testimonial from "../Components/testimonial";

const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <div className="py-4 max-w-7xl mx-auto" id="upcoming-events">
        <div
          className="flex items-center justify-center py-6"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <p className="relative text-2xl px-14 py-4 font-bold text-white group cursor-text  ">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-700 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-500 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>

            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
            <span className="relative">Upcoming Events</span>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-2 md:px-0 md:w-10/12 lg:w-full mx-auto  gap-4  overflow-x-hidden">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              aosType={index % 2 === 0 ? "fade-right" : "fade-left"}
            />
          ))}
        </div>
      </div>
      <div>
        <FeaturedOrganizers />
      </div>
      <div className="py-10">
        <div
          className="flex flex-col gap-2 items-center justify-center py-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="relative text-2xl px-14 py-4 font-bold text-white group cursor-text  ">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-700 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-500 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>

            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
            <span className="relative">Our Testimonials</span>
          </p>
          <p className=" text-lg font-semibold text-gray-600 mb-4">
            WHAT OUR VISITOR'S SAY ?
          </p>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
