import React from "react";
import BrideGrooms from "../../components/BrideGrooms/BrideGrooms";
import CoupleSection from "../../components/CoupleSection/CoupleSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import EventSection from "../../components/EventSection/EventSection";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero";
import Navbar from "../../components/Navbar";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
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
      <BrideGrooms />
      <EventSection />
      <PartnerSection />
      <Footer />
      <Scrollbar />
    </>
  );
};

export default HomePage;
