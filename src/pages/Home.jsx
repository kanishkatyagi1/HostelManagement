import HeroBar from "../components/carousel";
import Spotlights from "../components/Spotlights";
import HostelInfo from "../components/HostelInfo";
import NoticesAndEvents from "../components/Notices&event";
import HostelHome from "../components/HostelHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HeroBar />
      <Spotlights />
      <HostelInfo />
      <NoticesAndEvents />
      <HostelHome />
      <Footer />
      
    </div>
  );
};

export default Home;
