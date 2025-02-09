import HeroBar from "../components/carousel";
import Spotlights from "../components/Spotlights";
import HostelInfo from "../components/HostelInfo";
import NoticesAndEvents from "../components/Notices&event";
import HostelHome from "../components/HostelHome";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot"; // Import the chatbot

const Home = () => {
  return (
    <div>
      <HeroBar />
      <Spotlights />
      <HostelInfo />
      <NoticesAndEvents />
      <HostelHome />
      <Footer />
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default Home;
