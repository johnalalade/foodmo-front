import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './footer.css';
import LogoFooter from '../Images/logo.svg';
import AppleStore1 from '../Images/applestore-btn.svg';
import GoogleStore1 from '../Images/googleplay-btn.svg';
import feautureLogo from '../Images/logo-feature.svg';

function Footer() {
  const url = 'https://food-mo.herokuapp.com/waiting';
  const [userEmail, Data] = useState("");

  const submit = (event) => {
    event.preventDefault();
    Axios.post(url, {
      email: userEmail,
    }).then((res) => {
      console.log(res);
    });
  };
  const handle = (event) => {
    Data(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <footer className="footer-main">
        <div className="company">
          <img src={LogoFooter} alt="" />
          <span>
            <button>
              <img src={AppleStore1} alt="" />
            </button>
            <button>
              <img src={GoogleStore1} alt="" />
            </button>
          </span>
        </div>
        <div className="newsletter">
          <h6>{' Were coming soon, lets notify you.'}</h6>
          <span>
            <form onSubmit={(event) => submit(event)}>
              <input
                onChange={(event) => handle(event)}
                type="text"
                value={userEmail.email}
                placeholder="enter your email address"
                id="email"
              ></input>
            <button type="submit">
              <span className="iconify" data-icon="bi:send-fill"></span>
            </button>
          </form>
          </span>
        </div>
        <nav className="help-nav">
          <h6>Help</h6>
          <ul>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <nav className="help-nav">
          <h6>Social Media</h6>
          <ul>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>

        <small>Copyright @2022 FoodMo ng</small>
        <aside className="big-logo">
          <img src={feautureLogo} alt="" />
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
