import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero5 from '../../components/hero5/Hero5';
import Scrollbar from '../../components/scrollbar'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import RSVP from '../../components/RSVP';



const HomePage4 = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero5/>
            <CoupleSection />
            <VideoSection />
            <StorySection />
            <CtaSection />
            <PortfolioSection />
            <RSVP />
            <BrideGrooms />
            <EventSection />
            <PartnerSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage4;