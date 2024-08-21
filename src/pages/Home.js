import React, { useEffect, useState } from "react";
import SocialPage from "../components/SocialPage";
import Carousel from "../components/Carousel";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import LatestNews from "../components/LatestNews";
import GalleryComponent from "../components/GalleryComponent";
import Temples from "../components/Temples";
import NearbyPlaces from "../components/NearbyPlaces";
import DailyUpdate from "../components/Update";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Social from "../components/social-icon/Social";
import DonationRate from "../components/DonationRate";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 5500); // Adjust the time as needed
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Social />
          <Carousel />
          {/* <DonationRate/> */}
          <AboutSection />
          <Services />
          {/* <LatestNews /> */}
          {/* <DailyUpdate/> */}
          {/* <LatestNews /> */}
          <DailyUpdate />
          <GalleryComponent />
          {/* <Temples />
          <NearbyPlaces /> */}
        
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
