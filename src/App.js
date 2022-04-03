import React from 'react';
import HeaderSection from './component/header';
import AppFeatures from './component/features';
import HowToDownload from './component/DownloadContainer';
import './index.css';

function App() {
  return (
    <div>
      <HeaderSection/>
      <AppFeatures/>
      <HowToDownload/>
    </div>
  );
}

export default App;
