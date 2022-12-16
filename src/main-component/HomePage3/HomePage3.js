import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero3 from '../../components/hero3/Hero3';
import Scrollbar from '../../components/scrollbar'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import RSVP2 from '../../components/RSVP2/RSVP2';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';



const HomePage3 =() => {

    return(
        <Fragment>
            <Navbar2/>
            <Hero3/>
            <CoupleSection cClass={'couple-section-s2'}/>
            <WeddingTime/>
            <StorySection2/>
            <PortfolioSection2 gClass={'pt-0'}/>
            <RSVP2/>
            <BrideGrooms/>
            <EventSection/>
            <PartnerSection/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage3;