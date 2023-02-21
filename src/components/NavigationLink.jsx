import React from "react";
import { NavLink } from "react-router-dom";
const NavigationLink = ({ title, path, icon }) => {
  return (
    // <NavLink
    //   to={path}
    //   className={({isActive})=>`text-sm font-inter font-normal flex items-center justify-start gap-2.5  w-full h-fit py-2.5 px-2.5 rounded-md  ${isActive?'text-slate-900 ':'text-slate-500/70'}
    // `}>
    <NavLink
      to={path}
      className={({isActive})=>`text-sm font-inter font-medium flex items-center justify-start gap-2.5  w-full h-fit py-2.5 px-2.5 rounded-md  ${isActive?'text-[#5138ed] bg-[#f7f6f9]':'text-slate-500/70'}
    `}>
      {icon}
      {title}
      {/* {({ isActive }) => {
        return (
          <>
           {icon&& <span className={isActive ? "text-blue-500" : undefined}>
              {icon}
            </span>}
            <span className={isActive ? "text-blue-500 " : undefined}>
              {title}
            </span>
          </>
        );
      }} */}
    </NavLink>
  );
};

export default NavigationLink;
