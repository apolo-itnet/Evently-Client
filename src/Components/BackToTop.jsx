import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 bg-white text-rose-500 shadow-lg hover:bg-rose-500 hover:text-white hover:border-none transition-all duration-500 cursor-pointer"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default BackToTop;