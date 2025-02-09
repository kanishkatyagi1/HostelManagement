import HeroBar from "../components/carousel";
import Spotlights from "../components/Spotlights";
import HostelInfo from "../components/HostelInfo";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBar />
      <Spotlights />
      <HostelInfo />
      {/* Main Content */}
      <div className="text-center p-10">
        <h2 className="text-3xl font-bold">Welcome to GBU Hostels</h2>
        <p className="text-lg mt-4">Providing a comfortable and secure stay for students.</p>
      </div>
    </div>
  );
};

export default Home;
