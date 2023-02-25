import React, { useContext } from "react";
import DocsContext from "../context/DocsContext";
import { FiChevronDown} from 'react-icons/fi'

const Sidebar = () => {
  const { state } = useContext(DocsContext);

  return (
    <div className="h-[calc(100vh-3rem)] sticky top-[3.8rem]    overflow-y-auto  box-border flex-auto justify-start items-start w-[25.5rem]  thin-right-divider ">
      {/*sidebar content */}
      <nav className="relative h-full w-full px-[0rem] mt-8 mb-40  box-border lg:px-8 ">
        {/* items */}
        <div className="  h-full w-full text-left flex items-center flex-col justify-start  font-inter space-y-4">
          <div className="w-full box-border  flex flex-col  pl-0 items-start justify-start">

            {/* <button className="relative text-[0.875rem] w-full flex items-center justify-between font-[600]  thin-box-divider font-plus ">
              <span>Guides</span>
              <FiChevronDown />
            </button> */}

            {state.category && (
              <p className=" text-[0.85rem]    text-left font-inter  font-semibold text-slate-900 capitalize mb-3">
                {state.category}
              </p>
            )}
            <a
              href={`#${state.category}`}
              className={`relative text-[0.875rem] capitalize px-3   font-[400] py-2 rounded-md
                 w-full  cursor-pointer ${
                   !state.viewState ? "text-slate-900" : " text-[#356be5] font-[500] bg-[#f5f9fa]"
                 }`}
            >
              {state.title}
              
            </a>
          
            {state.sections.map((item, id) => (
              <>
                {item.category && (
                  <p className=" text-[0.85rem] mt-4 lg:mb-4  text-left font-inter  font-semibold text-slate-900 capitalize ">
                    {item.category}
                  </p>
                )}
                <a
                  key={id}
                  href={`#${item.title}`}
                  className={`relative text-[0.875rem] capitalize px-3   font-[400] py-2 rounded-md  font-inter ${
                    item.child && "ml-0"
                  }  w-full  cursor-pointer ${
                    !item.viewState ? "text-slate-700" : " text-[#356be5] font-[500] bg-[#f5f9fa]"
                  }`}
                >
                  {item.title} 

                  {/* <div
                    className={`h-[105%] w-[1.5px]   absolute top-1/2 -translate-y-1/2 -left-5 ${
                      item.viewState ? "bg-[#356be5]" : "bg-slate-100"
                    }`}
                  ></div> */}
                </a>
              </>
            ))}
          </div>
        </div>

        {/* {[{title:'Product listing helper',pathname:'listing-helper',icon:<FiBox />}].map((item,id)=>(
             <NavigationLink key={id} icon={item?.icon} title={item.title} path={item.pathname}></NavigationLink>
          ))} */}
      </nav>
    </div>
  );
};

export default Sidebar;
