import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="nav">
        <NavLink className="nav-item" to="/" exact>
          Planets
        </NavLink>
        <NavLink className="nav-item" to="/persons">
          Persons
        </NavLink>
        <NavLink className="nav-item" to="/starships">
          Starships
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
