import React, { useContext, useEffect } from "react";
import {
  FaCalendarDays,
  FaMoneyCheckDollar,
  FaUserGroup,
  FaLocationDot,
} from "react-icons/fa6";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Aos from "aos";

const EventCard = ({ event, aosType }) => {
  const {
    id,
    thumbnail,
    name,
    category,
    date,
    location,
    ticketPrice,
    totalRegistration,
  } = event;

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewMore = () => {
    if (user) {
      navigate(`/event/${id}`);
    } else {
      navigate("/login");
    }
  };

   useEffect(() => {
      Aos.init({ duration: 1000, once: false });
    }, []);

  return (
    <div
      className="event-card py-2"
      data-aos={aosType}
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <div className="flex flex-col h-full bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-200">
        {/*  Thumbnail */}
        <div
          className="h-60 relative overflow-hidden"
        >
          <img src={thumbnail} alt={name} className="object-top" />
        </div>

        {/* Right: Info */}
        <div className="p-6 md:pb-0">
          <div className="flex justify-between md:flex-col">
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-2 w-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">{name}</h2>
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded w-max">
                  {category}
                </span>
                <p className="text-md text-gray-600 flex flex-col md:flex-row md:items-center gap-2">
                  <FaLocationDot
                    size={16}
                    className="text-rose-500 font-bold"
                  />
                  Location: <strong>{location}</strong>
                </p>
              </div>
              {/* View More Button */}
              <div>
                <button
                  onClick={handleViewMore}
                  className="group relative inline-flex px-4 py-2 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium text-neutral-600 transition-all duration-100 [box-shadow:4px_4px_rgb(250_03_104)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(250_03_104)]"
                >
                  View More...
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-200 divide-x divide-gray-200 my-4">
              <div className="w-full h-16 py-3 px-4 inline-flex justify-start items-start gap-x-2 text-sm font-medium bg-white text-gray-800 shadow-2xs hover:bg-gray-100">
                <div className="flex gap-4 items-center justify-start">
                  <FaCalendarDays
                    size={20}
                    className="text-rose-500 font-bold"
                  />
                  <p>
                    <span className="flex items-center gap-2">Date:</span>
                    <strong className="font-bold text-md ">{date}</strong>
                  </p>
                </div>
              </div>
              <div className="w-full h-16 py-3 px-4 inline-flex justify-start items-start gap-x-2 text-sm font-medium bg-white text-gray-800 shadow-2xs hover:bg-gray-100">
                <div className="flex gap-4 items-center justify-center">
                  <FaMoneyCheckDollar
                    size={20}
                    className="text-rose-500 font-bold"
                  />
                  <p>
                    <span className="flex items-center gap-2">
                      Ticket Price:
                    </span>
                    <strong className="font-bold text-md ">
                      {ticketPrice}/- ৳{" "}
                    </strong>
                  </p>
                </div>
              </div>
              <div className="w-full h-16 py-3 px-4 inline-flex justify-start items-start gap-x-2 text-sm font-medium bg-white text-gray-800 shadow-2xs hover:bg-gray-100">
                <div className="flex gap-4 items-center justify-start">
                  <FaUserGroup size={20} className="text-rose-500 font-bold" />
                  <p>
                    <span className="flex items-center gap-2">
                      Total Registration:
                    </span>
                    <strong className="font-bold text-md ">
                      {totalRegistration}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
