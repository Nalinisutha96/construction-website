import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import MeridianSection from "../components/MeridianSection";
import Amenities from "../components/Amenities";
import OutdoorAmenities from "../components/OutdoorAmenities";
import BrochureSection from "../components/BrochureSection";
import HeightsSection from "../components/HeightsSection";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Location from "../components/Location";
import Footer from "../components/Footer";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection/>
       <MeridianSection/>
      <Amenities />
         <OutdoorAmenities />
           <BrochureSection/>
              <HeightsSection />
      <Gallery />
      <FAQ />
      <Location />
      <Footer />
    </>
  );
}

export default Home;