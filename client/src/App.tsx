// App.tsx
import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import {CampaignDetails, CreateCampaign, Home, Profile} from './pages';
import {Navbar, Sidebar} from './components';
import { StateContextProvider } from './context'; //added with reference to gpt

const WelcomeComponent: React.FC = () => {
  return (
    //added afterwards
    <StateContextProvider> 
    <div className = "relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
          <Sidebar/>

      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </div>
    </StateContextProvider>
  );
};

export default WelcomeComponent; 
