import React, { useContext } from "react";
import DocsContext from "../context/DocsContext";

const Sidebar = () => {
  const { state } = useContext(DocsContext);

  return (
    <div className="h-[calc(100vh-3rem)] sticky top-14    overflow-y-auto  box-border flex-auto justify-start items-start w-[25rem]  thin-right-divider ">
      {/*sidebar content */}
      <nav className="relative h-full w-full px-[0rem] mt-8 mb-20  box-border lg:px-8 ">
        {/* items */}
        <div className="  h-full w-full text-left flex items-center flex-col justify-start  font-inter space-y-4">
          <div className="w-full box-border  flex flex-col  pl-0 items-start justify-start">
            {state.category && (
              <p className=" text-[0.85rem]    text-left font-inter  font-semibold text-slate-900 capitalize mb-3">
                {state.category}
              </p>
            )}
            <a
              href={`#${state.category}`}
              className={`relative text-[0.825rem] font-[400] py-1  ml-5
               
                 w-full  cursor-pointer ${
                   !state.viewState ? "text-slate-900" : " text-[#356be5]"
                 }`}
            >
              {state.title}
              <div
                className={`h-[110%] w-[1.5px]   absolute top-1/2 -translate-y-1/2 -left-5 ${
                  state.viewState ? "bg-[#356be5]" : "bg-slate-100"
                }`}
              ></div>
            </a>
            {/* items */}
            {state.sections.map((item, id) => (
              <>
                {item.category && (
                  <p className=" text-[0.85rem] mt-3 lg:mb-3  text-left font-inter  font-semibold text-slate-900 capitalize ">
                    {item.category}
                  </p>
                )}
                <a
                  key={id}
                  href={`#${item.title}`}
                  className={`relative text-[0.825rem] capitalize ml-5 font-[400] py-1  mb-1 font-inter ${
                    item.child && "ml-0"
                  }  w-full  cursor-pointer ${
                    !item.viewState ? "text-slate-700" : " text-[#356be5] "
                  }`}
                >
                  {item.title}

                  <div
                    className={`h-[110%] w-[1.5px]   absolute top-1/2 -translate-y-1/2 -left-5 ${
                      item.viewState ? "bg-[#356be5]" : "bg-slate-100"
                    }`}
                  ></div>
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
