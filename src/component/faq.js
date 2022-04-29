import React from 'react';
import './faq.css';
import { useState } from 'react';
import faqLogo from '../Images/logo-feature.svg';

function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqData = [
    {
      question: 'What is foodmo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is foodmo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is foodmo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is foodmo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
  ];
  return (
    <div className="faq-container">
      <div className="faq-main">
        <header>
          <h3>
            Fequently <br />
            asked
            <span>questions</span>
          </h3>
        </header>
        <div className="faqs">
          {faqData.map((faq, i) => {
            return (
              <div className="faq">
                <div className="title" onClick={() => toggle(i)}>
                  <h5>{faq.question}</h5>
                  <span> {selected === i ? '-' : '+'} </span>
                </div>
                <div
                  className={selected === i ? 'faq-content shows' : 'faq-content'}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="faq-logo">
        <img src={faqLogo} alt="" />
      </div>
    </div>
  );
}

export default Faq;
