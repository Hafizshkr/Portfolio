import React from "react";
import {Link, NavLink} from "react-router-dom";
import './Navbar.css'


const Navbar = () => {

    

  return (
    <div className="flex justify-center">
    <div className="flex justify-center items-center   xl:bg-secondary xl:text-lg   md:bg-secondary md:text-lg md:overflow-hidden  sm:bg-secondary  sm:text-xs sm:overflow-hidden">
      <nav className="flex justify-center items-center  p-5 z-1 sm:">
        <div className="nav-background">
          <ul className="flex justify-around  xl:py-1 lg:py-1 md:py-1 sm:py-3" >
           <li>
            <NavLink to="/" >Home</NavLink>
           </li>
           <li>
            <NavLink to="/projects" >Projects</NavLink>
           </li>
           <li>
            <NavLink to="/blog" >Blog</NavLink>
           </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
