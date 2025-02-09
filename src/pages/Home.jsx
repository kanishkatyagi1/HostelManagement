import HeroBar from "../components/carousel";
import Spotlights from "../components/Spotlights";
import HostelInfo from "../components/HostelInfo";
import NoticesAndEvents from "../components/Notices&event";
import HostelHome from "../components/HostelHome";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBar />
      <Spotlights />
      <HostelInfo />
      <NoticesAndEvents />
      <HostelHome/>
    </div>
  );
};

export default Home;
