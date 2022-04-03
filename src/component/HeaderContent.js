import React from 'react';
import { useState } from 'react';
import './HeaderContent.css';
import headerIllustration from '../Images/header-illustration.png';

function HeaderContent() {
  const [userEmail, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${userEmail}`);
  };

  return (
    <div className="heroe-main-container">
      <div className="heroe-text">
        <aside className="aside-btn">
          <p>What could be better?</p>
        </aside>
        <article>
          <h2>
            You enjoy the <span>food</span>, we handle the payments.
          </h2>
          <p>
            No matter your income or stipend, Foodmo helps you get the best
            value for your food money by allowing you buy food at best prices
            from any of our partner food vendors online or offline with the
            option to either pay now or pay later.
          </p>
        </article>
        <footer className="waiting-list">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              value={userEmail}
              placeholder="enter your email"
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Join the waitinglist</button>
          </form>
        </footer>
      </div>
      <div className="header-illustration">
        <img src={headerIllustration} alt="Logo" />
      </div>
    </div>
  );
}
export default HeaderContent;
