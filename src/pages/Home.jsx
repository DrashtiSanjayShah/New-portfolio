import React from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import VideoPlayer from "../components/VideoPlayer";
import Videos from "../components/Videos";
import BottomNav from "../components/BottomNav";

const Home = () => {
  return (
    <div>
      <Header />
      <FilterBar />
      <VideoPlayer />
      <Videos />
      <BottomNav />
    </div>
  );
};

export default Home;
