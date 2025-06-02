import { useState } from "react";
// import Home from './pages/Home'
import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import FilterBar from "./components/FilterBar";
import Socials from "./components/Socials";
import BottomNav from "./components/BottomNav";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <FilterBar />
      <Socials />
      <VideoPlayer />
      <BottomNav />
    </>
  );
}

export default App;
