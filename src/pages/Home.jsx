import React from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import VideoPlayer from '../components/VideoPlayer';
import Socials from '../components/Socials';
import BottomNav from '../components/BottomNav';

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <FilterBar />
      <div className="px-3">
        <VideoPlayer />
        <Socials />
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
