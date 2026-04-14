import Hero from '../About/sections/Hero';
import Intro from '../About/sections/PurposeSection';
// import Team from '../components/About/Team';
import MissionVision from '../About/sections/MissionVision';
import PurposeSection from '../About/sections/PurposeSection';
import TeamSection from './sections/TeamSection';
import Partner from '../About/sections/Partner';
const About = () => {
  return (
    <>
      <Hero />
      <MissionVision />
      <PurposeSection />
      <Partner />

      <TeamSection />
    </>
  );
};

export default About;
