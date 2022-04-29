import React from 'react';
import HeaderSection from './component/header';
import AppFeatures from './component/features';
import HowToDownload from './component/DownloadContainer';
import Footer from './component/footer';
import Faq from './component/faq';
import './index.css';

function App() {
  return (
    <div>
      <HeaderSection />
      <AppFeatures />
      <HowToDownload />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
