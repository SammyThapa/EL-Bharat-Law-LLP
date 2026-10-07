import AboutUsSec from "../components/AboutUsSec";
import CapabilitiesSec from "../components/CapabilitiesSec";
import HeroSec from "../components/HeroSec";
import Insight from "../components/Insight";
import OurTeam from "../components/OurTeam";
import WhyChooseUs from "../components/WhyChooseUs";
import Faq from "../components/Faq";

function Home() {
  return (
    <div>
      <HeroSec />
      <AboutUsSec />
      <CapabilitiesSec />
      <Insight />
      <OurTeam />
      <WhyChooseUs />
      <Faq />
    </div>
  );
}

export default Home;
