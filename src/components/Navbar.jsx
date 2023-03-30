import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TbBox } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="h-[4rem] w-full  flex items-center justify-end  bg-transparent z-30 box-border sticky top-0 ">
      {/* items container */}
      <div className="h-full  items-center w-fit justify-between thin-bottom-divider bg-[#ffffff]  box-border flex lg:px-8">
        {/* <div className="font-inter font-[600] text-lg">
          <span className="flex w-fit  items-center gap-3 justify-center">
          </span>
        </div>
        <div className="flex items-center text-plus tracking-tight justify-between space-x-6">
          <p className="text-[0.9rem] font-[500] capitalize    py-1.5 px-2.5 rounded-lg ">
            <Link to="documentation">Guides</Link>
          </p>

          <p className="text-[0.9rem] font-[500] capitalize   py-1.5 px-2.5 rounded-lg ">
            <Link to="tools">Tools</Link>
          </p>
          <p className="text-lg  capitalize late-500/70  py-1.5 px-2.5 rounded-lg">
            <Link
              to="https://github.com/rogelcristobal/digiDirect-vite"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
