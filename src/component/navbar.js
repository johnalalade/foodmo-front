import React from 'react';
import './navbar.css';

import logo from '../Images/logo.svg';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hamburger">
          <span className="iconify" data-icon="gg:menu-right"></span>
        </div>
        <ul className="nav-bar">
          <li>
            <a href="#"> Support and FAQ</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
