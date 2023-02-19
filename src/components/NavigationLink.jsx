import React from "react";
import { NavLink } from "react-router-dom";
const NavigationLink = ({ title, path }) => {

  return (
    <NavLink to={path} className="text-sm font-inter font-medium ">
      {({ isActive }) => (
        <span className={isActive ? 'text-blue-500' : undefined}>{title}</span>
      )}
    </NavLink>
  );
};

export default NavigationLink;
