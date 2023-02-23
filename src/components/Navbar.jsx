import React from "react";
import { Link } from "react-router-dom";
import {FaGithub} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="h-[3.8rem] flex items-center justify-end thin-bottom-divider bg-inherit z-30 box-border sticky top-0 ">
      {/* items container */}
      <div className="h-fit container mx-auto container items-center w-full justify-end  box-border flex lg:pr-8">
        <div className="flex items-center   justify-between space-x-6">
          <p className="text-sm font-[600] capitalize   bg-[#ebf2fd]/90 py-1 px-2.5 rounded-lg text-[#356be5] ">
            <Link to="documentation">Guides</Link>
          </p>

          <p className="text-sm font-[600] capitalize   py-1.5 px-2.5 rounded-lg ">
            <Link to="documentation">Tools</Link>
          </p>
          <span className="w-[1px] h-7 bg-slate-300/50 "></span>
          <p className="text-lg  capitalize late-500/70  py-1.5 px-2.5 rounded-lg">
            <Link href="https://github.com/rogelcristobal/digiDirect-vite">
               <FaGithub />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
