import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  let activeClassName = 'app__flex p-text active-link';
  let linkClassName = 'app__flex p-text';

  return (
    <nav className="app__navbar ">

      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        
          <li className="app__flex p-text">
            
            <NavLink
              to={"/"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Home</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Movies"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Movies</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Pictures"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Pictures</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Settings"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Settings</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Smart"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Smart</NavLink>            
          </li>
        
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            
            whileInView={{ x: [-300, -100] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
        
          <li className="app__flex p-text">
            
            <NavLink
              to={"/"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Home</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Movies"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Movies</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Pictures"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Pictures</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Settings"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Settings</NavLink>            
          </li>
          <li className="app__flex p-text">
            
            <NavLink
              to={"/Smart"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Smart</NavLink>            
          </li>
        
      </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
