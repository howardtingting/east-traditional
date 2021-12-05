import NavbarLanding from '../../generic-page-components/NavbarLanding/Main';
import HeroSection from './HeroSection/Main';
import AboutSection from './AboutSection/Main';
import ListSection from './ListSection/Main';
import Booking from '../../generic-page-components/Booking/Main';
import Footer from '../../generic-page-components/Footer/Main';

function HomePage() {
    return (
      <div>
        <NavbarLanding />
        <HeroSection />
        <AboutSection />
        <ListSection />
        <Booking />
        <Footer />
      </div>
    )
  }
  
export default HomePage