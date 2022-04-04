import React from 'react';
import { useState } from 'react';
import './footer.css';
import LogoFooter from '../Images/logo.svg';
import AppleStore1 from '../Images/applestore-btn.svg';
import GoogleStore1 from '../Images/googleplay-btn.svg';
import feautureLogo from '../Images/logo-feature.svg';

function Footer() {
  const [userEmail, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${userEmail}`);
  };

  return (
    <div>
      <footer class="footer-main">
        <div class="company">
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
        <div class="newsletter">
          <h6>{' We’re coming soon, let’s notify you.'}</h6>
          <span>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="email"
                value={userEmail}
                placeholder="enter your email address"
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit">
                <span class="iconify" data-icon="bi:send-fill"></span>
              </button>
            </form>
          </span>
        </div>
        <nav class="help-nav">
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
        <nav class="help-nav">
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
        <aside class="big-logo">
          <img src={feautureLogo} alt="" />
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
