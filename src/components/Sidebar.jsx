import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbPlus } from "react-icons/tb";
import { query } from "firebase/firestore";
const Sidebar = ({ docs, loading }) => {



  const [state,setState] = React.useState([])
  
  return (
    <div className="h-full  thin-right-divider z-10 text-black bg-white w-fit flex-shrink-0   flex items-start justify-start">
      {/* category */}

      {/* links */}
      <div className="h-full w-[23rem] flex-shrink-0">
        <div className=" mt-40  px-0   flex flex-col items-center w-full justify-start">
          {/* items */}
          <div className="w-full thin-top-divider  flex   items-center flex-shrink-0 justify-start pl-10 pr-6  py-3.5 pt-10 text-[0.9rem] font-semibold ">
            <div className="w-full h-full  flex items-center justify-start  text-[#bbbed3]/70">
             
              <span className="text-[1.1rem] font-bold  flex items-center ">
                Collections
              </span>
            </div>
          </div>
          {!loading &&
            docs.map((item, id) => (
              <NavLink key={id} to={`/${item.name}`} className="py-0.5 px-0 w-full">

                {({ isActive }) => (
                  <div
                    key={id}
                    className={`cursor-pointer rounded-lg relative py-3.5  pl-14  ${
                      !isActive
                        ? " text-[#898f9f]/80 font-bold"
                        : "  text-[#9c72f9] font-bold  "
                    }  ml-0 flex items-center justify-start gap-4  `}
                  >
                    <div className="flex items-center justify-between pr-8 gap-3 w-full">
                      {/* <TbFolder className="text-lg " /> */}
                      <span className="text-[1.175rem] capitalize  ">
                        {item.name.toLowerCase()}
                      </span>
                      {isActive&&<span className="text-lg flex items-center gap-3 text-[#bbbed3]/70 font-semibold">
                      
                      
                      </span>}
                    </div>
                    {isActive&& <div className="h-[85%] w-[0.4rem] rounded-l-md bg-[#9c72f9] absolute top-1/2 -translate-y-1/2 right-0"/>}
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
