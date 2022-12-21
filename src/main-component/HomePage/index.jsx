import React from "react";
import CoupleSection from "../../components/CoupleSection/CoupleSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero";
import Navbar from "../../components/Navbar";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import RSVP from "../../components/RSVP";
import Scrollbar from "../../components/scrollbar";
import StorySection from "../../components/StorySection/StorySection";
import VideoSection from "../../components/VideoSection";

const HomePage = () => {
  return (
    <>
      <Navbar hclass={"toanhuyen-site-header-s1"} />
      <Hero />
      <CoupleSection />
      <VideoSection />
      <StorySection />
      <CtaSection />
      <PortfolioSection />
      <RSVP />
      <EventSection />
      <Footer />
      <Scrollbar />
    </>
  );
};

export default HomePage;
