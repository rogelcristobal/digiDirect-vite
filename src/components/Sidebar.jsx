import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbPlus } from "react-icons/tb";
import { query } from "firebase/firestore";
import {BiNote} from 'react-icons/bi'
const Sidebar = ({ docs, loading }) => {



  const [state,setState] = React.useState([])
  
  return (
    <div className="h-full sample z-10  bg-white w-fit flex-shrink-0   flex items-start justify-start">
      {/* category */}

      {/* links */}
      <div className="h-full w-[22rem] flex-shrink-0">
        <div className=" mt-40 pb-8 px-0   flex flex-col items-center w-full justify-start">
          {/* items */}
          <div className="w-full  flex  items-center flex-shrink-0 justify-start pl-10 pr-6  py-3.5 pt-10 text-[0.9rem] font-semibold ">
            <div className="w-full h-full  flex items-center justify-start  ">
             
              <span className="text-[1.1rem] font-semibold  flex items-center text-[#b0b4cb]">
                Collections
              </span>
            </div>
          </div>
          {!loading &&
            docs.map((item, id) => (
              <NavLink key={id} to={`/${item.name}`} className="py-0.5 px-6 w-full">
 {/* text-[#9c72f9] */}
                {({ isActive }) => (
                  <div
                    key={id}
                    className={`cursor-pointer rounded-lg relative py-3.5  pl-8  ${
                      !isActive
                        ? " text-[#808799]/50 font-semibold" 
                        : "   font-semibold  text-[#20304f] "
                    }   flex items-center justify-start gap-4  `}
                  >
                    <div className="flex items-center relative justify-start pr-8 gap-3 w-full">
                      {/* <BiNote className="text-lg text-[1.6rem]" /> */}
                      <span className="text-[1.150rem] capitalize  ">
                        {item.name.toLowerCase()}
                      </span>
                      {isActive&&<span className="text-lg flex items-center gap-3 text-[#bbbed3]/70 font-semibold">
                      
                      
                      </span>}
                    </div>
                    {isActive&& <div className="h-[90%] w-[0.250rem]  thin-box-divider bg-[#20304f]  absolute top-1/2 -translate-y-1/2 -right-6"/>}
                  </div>
                )}
              </NavLink>
            ))}

           {/* <div className="px-6 w-full mt-12">
             <button className="py-4 w-full thin-box-divider font-semibold bg-black text-white  rounded-xl">
              Add item
            </button>
           </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
