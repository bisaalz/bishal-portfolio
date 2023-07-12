import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="heroBackground bg-gradient-to-r from-red-500 to-orange-500 bg-no-repear bg-center bg-cover">
      <div className="bg-[#F0F6FD] z-40 2xl:h-[68px] h-[68px] bg-opacity-[.50] backdrop-blur-lg boxShadow sticky top-0">
        <div className="container">
          <div className="Logo">1</div>
          <div className="Menu">2</div>
          <div className="Toggle">3</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
