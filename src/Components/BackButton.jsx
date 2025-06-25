import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className={`group relative inline-flex px-6 py-2 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium text-neutral-600 transition-all duration-100 [box-shadow:4px_4px_rgb(250_03_104)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(250_03_104)] cursor-pointer ${className}`}
    >
      <FaArrowLeft size={19} className="pr-2 text-rose-500" />
      Back
    </button>
  );
};

export default BackButton;