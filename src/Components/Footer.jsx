import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {

  const scrollToHome = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto bg-gray-900 w-full">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <button
                onClick={scrollToHome}
                className="flex-none text-xl font-semibold text-white focus:outline-hidden focus:opacity-80 cursor-pointer"
                aria-label="Brand"
              >
                Evently
              </button>
            </div>
            {/* End Col */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">QUICK LINKS</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200"
                    href="#"
                  >
                    Careers
                  </a>{" "}
                  <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                    We're hiring
                  </span>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Other Page</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200"
                    href="#"
                  >
                    Terms & Condition
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200"
                    href="#"
                  >
                    Blog
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}

            <div className="col-span-2">
              <h4 className="font-semibold text-gray-100">Stay up to date</h4>

              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Subscribe
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-2.5 sm:py-3 px-4 block w-full border-transparent rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary shadow-none text-white border-none px-8 py-6"
                    href="#"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                Subscribe our newsletter to get latest news and update from us... <br /> Never spam.
                </p>
              </form>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <p className="text-sm text-gray-400">© 2025 Evently.All rights reserved</p>
            </div>
            {/* End Col */}

            {/* Social Brands */}
            <div>
              <p className="text-sm text-gray-400 pr-2">Crafted By Apolo Barua</p>
            </div>
            {/* End Social Brands */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </div>
  );
};

export default Footer;
