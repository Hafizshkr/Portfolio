import React from "react";
import {Link, NavLink} from "react-router-dom";
import './Navbar.css'


const Navbar = () => {

    

  return (
    <div className="page-content">
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">
          <ul className="nav-list">
           <li>
            <NavLink to="/" >Home</NavLink>
           </li>
           <li>
            <NavLink to="/projects" >Projects</NavLink>
           </li>
           <li>
            <NavLink to="/blogs" >Blogs</NavLink>
           </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
