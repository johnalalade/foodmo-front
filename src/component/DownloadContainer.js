import React from 'react';
import './DownloadContainer.css';
import DownloadIllustration from '../Images/download-illustration.svg';
import PizzaImage from '../Images/pizza.svg';
import AppleStore from '../Images/applestore-btn.svg';
import GoogleStore from '../Images/googleplay-btn.svg';

function HowToDownload() {
  return (
    <div className="download-container">
      <div className="app-illustration">
        <img src={DownloadIllustration} alt="" />
      </div>
      <div className="download-steps">
        <aside>class
class
class
class
class
class
          <img src={PizzaImage} alt="" />
          <span>
            <p>how it works?</p>
          </span>
        </aside>
        <header>
          <h3>
            Gain control of your <span>food</span> money with our app
          </h3>
        </header>
        <div className="steps">
          <span className="step">
            <aside>
              <p>01</p>
            </aside>
            <h6>Create an Account</h6>
            <p>
              Signup to register with your phone number and add your address .
            </p>
          </span>
          <span className="step">
            <aside>
              <p>02</p>
            </aside>
            <h6>Order your food</h6>
            <p>
              Explore varieties of food options available, add your card and
              order becomes successful.
            </p>
          </span>
          <span className="step">
            <aside>
              <p>03</p>
            </aside>
            <h6>Delivery</h6>
            <p>Be rest assured your delivery on the way </p>
          </span>
        </div>
        <footer>
          <button>
            <img src={AppleStore} alt="" />
          </button>
          <button>
            <img src={GoogleStore} alt="" />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default HowToDownload;
