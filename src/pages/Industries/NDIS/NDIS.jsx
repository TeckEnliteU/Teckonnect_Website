import Hero from './Sections/Hero';
import Overview from './Sections/Overview';
import Challenges from './Sections/Challenges';
import Benefits from './Sections/Benefits';
import CTA from './Sections/CTA';

import IndustriesNavigation from '../IndustriesNavigation';
export default function NDIS() {
  return (
    <>
      <Hero />
      <Benefits />

      <Challenges />
      <Overview />
      <IndustriesNavigation />
      <CTA />
    </>
  );
}
