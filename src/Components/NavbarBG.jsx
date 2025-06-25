import React from "react";

const NavbarBG = () => {
  return (
    <div>
      <div className="w-full h-60 z-0">
        <img
          className="w-full h-full object-cover object-center z-10"
          src={"https://i.postimg.cc/Jhtm9xQf/Register.webp"}
          alt=""
        />
        <div className="absolute h-60 inset-0 bg-sky-800/30 backdrop-blur-[2px] z-10"></div>
      </div>
    </div>
  );
};

export default NavbarBG;
