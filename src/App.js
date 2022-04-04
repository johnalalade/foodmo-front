import React from 'react';
import HeaderSection from './component/header';
import AppFeatures from './component/features';
import HowToDownload from './component/DownloadContainer';
import Footer from './component/footer'
import './index.css';

function App() {
  return (
    <div>
      <HeaderSection/>
      <AppFeatures/>
      <HowToDownload/>
      <Footer/>
    </div>
  );
}

export default App;
