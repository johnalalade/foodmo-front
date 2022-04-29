import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './HeaderContent.css';
import headerIllustration from '../Images/header-illustration.png';

function HeaderContent() {
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
          <form onSubmit={(event) => submit(event)}>
            <input
              onChange={(event) => handle(event)}
              type="text"
              value={userEmail.email}
              placeholder="enter your email"
              id="email"
            ></input>
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
