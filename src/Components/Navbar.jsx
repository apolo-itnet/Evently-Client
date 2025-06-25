import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import userIcon from "../assets/user.png";
import { AuthContext } from "../context/AuthContext";
import ButtonSpinner from "./ButtonSpinner";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        await signOutUser();
        toast.success("Logout Successful", { style: { color: "green" } });
        navigate("/");
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  const getProfileImage = () => {
    if (!user) return userIcon;
    return user.photoURL || user?.providerData?.[0]?.photoURL || userIcon;
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      {/* nav-1 */}
      <div
        data-aos="fade-down"
        data-aos-delay="50"
        className="nav-1 w-full py-4 px-4 border-b border-gray-100/40 hidden md:block"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-3">
              <p className="bg-secondary rounded-full p-3 text-white">
                <PiPhoneCallLight size={22} />
              </p>
              <div className="text-sm">
                <p>PHONE NUMBER :</p>
                <p>+880 123 888 9515</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-secondary rounded-full p-3 text-white">
                <MdMarkEmailRead size={22} />
              </p>
              <div className="text-sm">
                <p>EMAIL ADDRESS :</p>
                <p>evetnly@company.com</p>
              </div>
            </div>
          </div>

          {/* social-icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="border border-gray-100/30 rounded-full p-2 hover:bg-secondary-content hover:border-secondary-content transition-colors"
            >
              <FaGithub size={16} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-gray-100/30 rounded-full p-2 hover:bg-secondary-content hover:border-secondary-content transition-colors"
            >
              <FaLinkedin size={16} className="text-white" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              className="border border-gray-100/30 rounded-full p-2 hover:bg-secondary-content hover:border-secondary-content transition-colors"
            >
              <FaTwitter size={16} className="text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="border border-gray-100/30 rounded-full p-2 hover:bg-secondary-content hover:border-secondary-content transition-colors"
            >
              <FaFacebook size={16} className="text-white" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="border border-gray-100/30 rounded-full p-2 hover:bg-secondary-content hover:border-secondary-content transition-colors"
            >
              <FaYoutube size={16} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* nav-2 */}
      <div className="nav-2 max-w-6xl mx-auto w-full px-2 md:px-4 lg:px-0 ">
        <div className="navbar md:p-0 flex justify-between items-center shadow-none border-none">
          <div className="flex items-center ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-60 p-4 py-8 shadow flex gap-4 text-base text-gray-700"
              >
                <div className="w-30 h-full block md:hidden ">
                  <NavLink to={"/"}>
                    <img
                      className="w-full h-full"
                      src="https://i.postimg.cc/bvY0K8nG/logo.png"
                      alt="Logo"
                    />
                  </NavLink>
                </div>
                <NavLink
                  className={({ isActive }) =>
                    `relative inline-block py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 
                   after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                   ${
                     isActive
                       ? "active"
                       : "hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-bottom-right after:scale-x-0"
                   }`
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 
                   after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                   ${
                     isActive
                       ? "active"
                       : "hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-bottom-right after:scale-x-0"
                   }`
                  }
                  to={"/profile"}
                >
                  My Profile
                </NavLink>
              </ul>
            </div>
            <div className="w-40 h-full hidden md:block ">
              <NavLink to={"/"}>
                <img
                  className="w-full h-full"
                  src="https://i.postimg.cc/bvY0K8nG/logo.png"
                  alt="Logo"
                />
              </NavLink>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="px-1 flex justify-center items-center gap-8 text-base font-semibold">
              <NavLink
                className={({ isActive }) =>
                  `relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 
                   after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                   ${
                     isActive
                       ? "active"
                       : "hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-bottom-right after:scale-x-0"
                   }`
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 
                   after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                   ${
                     isActive
                       ? "active"
                       : "hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-bottom-right after:scale-x-0"
                   }`
                }
                to={"/profile"}
              >
                My Profile
              </NavLink>
            </ul>
          </div>

          <div className="flex gap-4 justify-end">
            {user ? (
              <div className="relative flex items-center gap-4">
                <img
                  src={getProfileImage()}
                  alt="User"
                  className="h-12 w-12 rounded-full cursor-pointer object-cover border border-rose-500 p-1"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                />
                {showTooltip && (
                  <div className="absolute top-14 -left-10 bg-gray-700 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                    {user.displayName || "User"}
                  </div>
                )}
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="group relative inline-flex w-30 h-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium text-neutral-50 transition-all duration-100 [box-shadow:5px_5px_rgb(250_03_104)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(250_03_104)] cursor-pointer"
                >
                  {isLoading ? <ButtonSpinner /> : "Logout"}
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="group relative inline-flex w-30 h-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium text-neutral-50 transition-all duration-100 [box-shadow:5px_5px_rgb(250_03_104)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(250_03_104)]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
