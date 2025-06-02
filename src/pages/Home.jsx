import BottomNav from '../components/BottomNav'; // Add this 

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <FilterBar />
      <div className="px-3 pb-5"> {/* Added padding at bottom */}
        <VideoPlayer />
        <ActionButtons />
        <h5 className="mt-4">SOCIALS</h5>
        <Socials />
      </div>
      <BottomNav /> {/* New Bottom Navigation */}
    </div>
  );
};

