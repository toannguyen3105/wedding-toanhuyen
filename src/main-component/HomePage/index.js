import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Scrollbar from '../../components/scrollbar'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import RSVP from '../../components/RSVP';
import CtaSection from '../../components/CtaSection/CtaSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';



const HomePage =() => {

    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'}/>
            <Hero/>
            <CoupleSection/>
            <VideoSection/>
            <StorySection/>
            <CtaSection/>
            <PortfolioSection/>
            <RSVP/>
            <BrideGrooms/>
            <EventSection/>
            <PartnerSection/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage;