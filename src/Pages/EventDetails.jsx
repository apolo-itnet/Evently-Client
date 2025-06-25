import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import PageLoader from "../Components/PageLoader";
import NavbarBG from "../Components/NavbarBG";
import { HiOutlineHome } from "react-icons/hi2";
import { IoPinOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { FaCalendarDays, FaRegClock } from "react-icons/fa6";
import { RiCalendarEventFill } from "react-icons/ri";
import BackButton from "../Components/BackButton";
import { Helmet } from "react-helmet";

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isReserved, setIsReserved] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch("/event.json");
        const events = await response.json();
        const selectedEvent = events.find((e) => e.id === id);
        if (selectedEvent) {
          setEvent(selectedEvent);
        } else {
          navigate("/not-found");
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id, navigate]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
        mobile: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Name and Email are required!");
      return;
    }
    if (isReserved){
      toast.error("You already booked the seat")
      return;
    } 
    setIsReserved(true);
    toast.success("Seat reserved successfully!", { style: { color: "green" } });
  };

  if (loading) return <PageLoader />;

  if (!event) return null;

  return (
    <div className=" bg-gray-100">
      <div>
        <Helmet>
          <title>Evently | {event.name}</title>
        </Helmet>
      </div>
      <NavbarBG />
      {/* {loading && <PageLoader />} */}
      {/* Event Details */}
      <div className="max-w-6xl mx-auto my-10 p-4 rounded-lg shadow-lg">
        {/* Speaker Image and Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          <div className="md:col-span-4 col-span-12 flex items-center">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src={event.speakerImage || "https://via.placeholder.com/300"}
              alt={event.speaker}
              className="w-full h-full flex items-center object-cover rounded-lg"
            />
          </div>

          <div className="md:col-span-8 col-span-12">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="w-full"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold pr-4 mb-1 inline-flex border-b-2 border-rose-500">
                {event.speaker}
              </h1>
                <span className="hidden lg:flex"><BackButton /></span>
              </div>
              <p className="text-gray-600 text-justify py-3">
                {event.description || "No description available."}
              </p>
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                src={event.coverImage || "https://via.placeholder.com/300"}
                alt={event.speaker}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 md:gap-2 gap-10 mb-8 px-4"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            className="col-span-6 lg:pl-6"
          >
            <div className="flex flex-col  justify-center gap-10">
              <div className="flex items-center gap-4">
                <span className="text-white bg-rose-500 p-5 rounded-full  ">
                  <HiOutlineHome size={26} />
                </span>
                <div>
                  <h1 className="text-lg uppercase font-bold pb-1">
                    Venue Hall
                  </h1>

                  <h2 className="flex">
                    {" "}
                    <span className="text-rose-500">
                      <IoPinOutline size={24} />
                    </span>
                    {event.location}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white bg-rose-500 p-5 rounded-full  ">
                  <MdContactPhone size={26} />
                </span>
                <div>
                  <h1 className="text-lg uppercase font-bold">For Booking</h1>
                  <p className="text-sm">Phone : +880 123 888 9515</p>
                  <p className="text-sm">Email : evetnly@company.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white bg-rose-500 p-5 rounded-full  ">
                  <RiCalendarEventFill size={26} />
                </span>
                <div>
                  <h1 className="text-lg uppercase font-bold pb-1">
                    Event Schedules
                  </h1>
                  <p className="flex items-center gap-1 ">
                    {" "}
                    <span className="text-rose-500">
                      <FaCalendarDays />
                    </span>{" "}
                    {event.date}
                  </p>
                  <p className="flex items-center gap-1 ">
                    {" "}
                    <span className="text-rose-500">
                      <FaRegClock />{" "}
                    </span>
                    {event.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            className="col-span-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Reserve Your Seat</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 py-2 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 py-2 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number (Optional)
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 py-2 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="group relative inline-flex px-6 py-3 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium text-neutral-600 transition-all duration-100 [box-shadow:4px_4px_rgb(250_03_104)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(250_03_104)]"
                >
                  Reserve Seat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
