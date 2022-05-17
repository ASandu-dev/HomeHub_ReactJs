import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  let activeClassName = 'app__navbar-links active';
  let linkClassName = 'app__navbar-links';

  return (
    <nav className="app__navbar ">

      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={"/"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Home</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={"/Movies"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Movies</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={"/Pictures"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Pictures</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={"/Settings"}
              className={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Settings</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
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
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
        
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={'/'}
              style={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Home</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={'/Movies'}
              style={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Movies</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={'/Pictures'}
              style={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Pictures</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={'/Settings'}
              style={({ isActive }) =>
              isActive ? activeClassName : linkClassName}>Settings</NavLink>            
          </li>
          <li className="app__flex p-text">
            <div />
            <NavLink
              to={'/Smart'}
              style={({ isActive }) =>
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
