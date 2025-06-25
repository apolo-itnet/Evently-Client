import React from "react";
import { FaStar, FaUsers } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const organizers = [
  {
    id: 1,
    name: "TechWorld",
    img: "https://iili.io/3eKRiEg.webp",
    events: 12,
    rating: 4.8,
    description: "Leading organizer for national tech events & hackathons.",
  },
  {
    id: 2,
    name: "ArtConnect",
    img: "https://iili.io/3eKRs4a.webp",
    events: 8,
    rating: 4.6,
    description: "Passionately organizing art & culture-based exhibitions.",
  },
  {
    id: 3,
    name: "BizSummit Group",
    img: "https://iili.io/3eKRPCF.webp",
    events: 15,
    rating: 4.9,
    description: "Top organizer of large-scale business conferences.",
  },
];

const FeaturedOrganizers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50" id="featured-organizers">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className="flex flex-col gap-2 items-center justify-center py-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="relative text-2xl px-14 py-4 font-bold text-white group cursor-none  ">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-700 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-500 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>

            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
            <span className="relative">Featured Organizer</span>
          </p>
          <p className="text-gray-600 mb-4">
            Meet our top event creators powering local experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {organizers.map((org, index) => (
            <div
              key={org.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={org.img}
                alt={org.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{org.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
                <span className="flex items-center gap-1">
                  <FaUsers className="text-rose-500" /> {org.events} Events
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" /> {org.rating}
                </span>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition">
                  View Profile
                </button>
                <button className="px-4 py-2 border border-rose-500 text-rose-500 rounded-lg hover:bg-rose-50 transition">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOrganizers;
