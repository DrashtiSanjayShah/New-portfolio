import React from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import VideoPlayer from "../components/VideoPlayer";
import Videos from "../components/Videos";
import BottomNav from "../components/BottomNav";
import "../App.css"; // if you store global layout css there

const Home = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <FilterBar />
        <VideoPlayer />
        <Videos />
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
