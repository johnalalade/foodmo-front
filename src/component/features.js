import React from 'react';
import './features.css';
import feautureLogo from '../Images/logo-feature.svg'
import ImageL from '../Images/feature-3.svg'
function AppFeatures() {
  const feature = [
    {
      title: 'Use Your Food Money For Food Only',
      para: 'You can be tempted to divert your food money to other things. This is why you need a foodwallet that is safe, secure and dedicated only to your food needs.',
      link: 'Join the waiting list',
      imageIllustration: require('../Images/feature-1.svg'),
    },
    {
      title: 'Organize Your Foodlife',
      para: 'You can now centralize your food budget and spending on our platform. We help you manage your spending and reward you with food gifts, giveaway deals, big food loans',
      link: 'Join the waiting list',
      imageIllustration: '{ImageL}',
    },
    {
      title: 'Buy Food Now Pay Later.',
      para: 'Just like the telecom companies do with your airtime, if and when you run out of money or with an insufficient fund for your food purchases, we can advance you a food loan that allows you buy the food you need and you pay us back later.',
      link: 'Join the waiting list',
      imageIllustration: require('../Images/feature-3.svg'),
    },
    {
      title: 'Save More Money On Food.',
      para: 'Our online marketplaces and offline partner vendors all work to offer you food deals at best prices. For example, Collabo Deals offer you wholesale rates when you team up with others. Same with Super Deals and Giveaway Deals marketplaces.',
      link: 'Join the waiting list',
      imageIllustration: require('../Images/feature-4.svg'),
    },
    {
      title: 'Fast &amp; Reliable Delivery ',
      para: 'Our deliveries are fast and flexible using standby delivery bikes and vehicles and better still, buyers can pick up food packages from our nearest drop points to them.',
      link: 'Join the waiting list',
      imageIllustration: require('../Images/feature-5.svg'),
    },
    {
      title: 'No Charges On Food Payments',
      para: ' Its now easy to avoid bank troubles and charges when paying for food by sending money from your foodwallet to the sellers wallet as many times as you like for free. ',
      link: 'Join the waiting list',
      imageIllustration: require('../Images/feature-1.svg'),
    },
  ];
  return (
    <div class="features-container">
      <header>
        <h3>Handle your food budget with us</h3>
      </header>{' '}
      <div> {feature[0].title}</div>
      <div className="features">
        {feature.map((feat, idx) => {
          return (
            <div>
              <h5> {feat.title}</h5>
              <p>{feat.para}</p>
              <a href="#">{feat.link}</a>
              <img src={`${feat.imageIllustration}`} alt="" />
            </div>
          );
        })}
        <aside>
          <img src={feautureLogo} alt="" />
        </aside>
      </div>
    </div>
  );
}

export default AppFeatures;
