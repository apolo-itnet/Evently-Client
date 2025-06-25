import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaCamera } from "react-icons/fa6";
import NavbarBG from "../Components/NavbarBG";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    photoURL: "",
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState({});

  const bangladeshCities = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barisal",
    "Rangpur",
    "Mymensingh",
    "Comilla",
    "Narayanganj",
    "Gazipur",
    "Bogra",
    "Dinajpur",
    "Jessore",
    "Tangail",
    "Faridpur",
    "Jamalpur",
    "Pabna",
    "Naogaon",
    "Kushtia",
    "Satkhira",
    "Narsingdi",
    "Manikganj",
    "Munshiganj",
    "Brahmanbaria",
    "Chandpur",
    "Habiganj",
    "Lakshmipur",
    "Noakhali",
    "Feni",
    "Bhola",
    "Patuakhali",
    "Pirojpur",
    "Jhenaidah",
    "Magura",
    "Narail",
    "Sherpur",
    "Netrokona",
    "Kishoreganj",
    "Madaripur",
    "Gopalganj",
    "Shariatpur",
    "Bagerhat",
    "Chuadanga",
    "Meherpur",
    "Sirajganj",
    "Joypurhat",
    "Natore",
    "Chapainawabganj",
    "Thakurgaon",
    "Panchagarh",
    "Nilphamari",
    "Lalmonirhat",
    "Kurigram",
    "Gaibandha",
    "Sunamganj",
    "Moulvibazar",
    "Cox's Bazar",
    "Khagrachari",
    "Rangamati",
    "Bandarban",
    "Barguna",
    "Jhalokati",
  ];

  useEffect(() => {
    if (user) {
      const displayName = user.displayName || "";
      const nameParts = displayName.split(" ");
      setFormData({
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        photoURL: user.photoURL || user?.providerData?.[0]?.photoURL || "",
        phone: user.phone || "",
        city: user.city || "",
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]*$/;
    const phoneRegex = /^[0-9]{0,11}$/;
    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First name should only contain letters";
    }
    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last name should only contain letters";
    }
    if (formData.photoURL && !urlRegex.test(formData.photoURL)) {
      newErrors.photoURL =
        "Please enter a valid image URL (png, jpg, jpeg, gif, webp, svg)";
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Phone number should only contain numbers (max 11 digits)";
    }
    if (!formData.city) {
      newErrors.city = "Please select a city";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      const updatedName = `${formData.firstName} ${formData.lastName}`.trim();
      await updateUser({
        displayName: updatedName,
        photoURL: formData.photoURL,
      });
      toast.success("Profile updated successfully!", {
        style: { color: "green" },
      });
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
     <NavbarBG/>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="max-w-3xl mx-auto min-h-[calc(100vh-300px)] p-6 rounded-lg shadow-lg border border-gray-200 mt-40 my-10"
      >
        <div>
          <div className="flex flex-col items-center px-2">
            <img
              src={formData.photoURL || "https://i.postimg.cc/MGKVCq0T/man.png"}
              alt="Profile"
              className="absolute p-1 items-center justify-center -top-32 w-40 h-40 object-cover  rounded-full border border-rose-500 shadow-md z-50"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mt-4">
              {user?.displayName || "User Name"}
            </h1>
            <p className="text-gray-600">{user?.email || "user@example.com"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="mt-10 col-span-8">
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-rose-500 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 py-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-rose-500 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 py-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="photo"
                    className="text-sm mb-2 flex items-center gap-2"
                  >
                    Photo URL{" "}
                    <span className="text-rose-500">
                      <FaCamera />
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleChange}
                      placeholder="Photo URL"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-rose-500 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                    />
                    {errors.photoURL && (
                      <p className="text-sm text-red-500 py-1">
                        {errors.photoURL}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="photo"
                    className="text-sm mb-2 flex items-center gap-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-rose-500 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 py-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="photo"
                    className="text-sm mb-2 flex items-center gap-2"
                  >
                    Your City
                  </label>
                  <div className="relative">
                    <select
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-rose-500 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                    >
                      <option value={""}>Select City</option>
                      {bangladeshCities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="text-sm text-red-500 py-1">
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="py-6 flex items-center justify-center">
                <button
                  onClick={handleSave}
                  className="group relative inline-flex w-30 h-10 items-center justify-center overflow-hidden rounded-md border border-neutral-300 bg-transparent font-medium text-neutral-600 transition-all duration-100 [box-shadow:4px_4px_rgb(250_03_104)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(250_03_104)]"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="mt-10 col-span-4">
              <h2 className="text-xl font-semibold mb-4">Password</h2>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="password"
                  placeholder="Old Password"
                  className="input input-bordered w-full cursor-not-allowed bg-gray-100"
                  disabled
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="input input-bordered w-full cursor-not-allowed bg-gray-100"
                  disabled
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="input input-bordered w-full cursor-not-allowed bg-gray-100"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
