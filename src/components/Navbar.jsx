import React from "react";
import { TbUser } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 thin-bottom-divider w-[calc(100%-26.5rem)] h-24 px-12 flex items-center justify-end">
      <div className="rounded-full h-12 w-12 bg-gray-100 grid place-content-center text-xl">
        <TbUser />
      </div>
    </div>
  );
};

export default Navbar;
