import dynamic from 'next/dynamic';
import AboutSection from './AboutSection/Main';
import ListSection from './ListSection/Main';
import Booking from '../../generic-page-components/Booking/Main';
import Footer from '../../generic-page-components/Footer/Main';

const HeroSection = dynamic(
  () => {
    return import('./HeroSection/Main');
  },
  { ssr: false }
);

const NavbarLanding = dynamic(
  () => {
    return import('../../generic-page-components/NavbarLanding/Main');
  },
  { ssr: false }
);

function HomePage() {
    return (
      <div>
        <NavbarLanding />
        <HeroSection />
        {/* <AboutSection />
        <ListSection /> */}
        <Booking />
        <Footer />
      </div>
    )
  }
  
export default HomePage