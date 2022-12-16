import React, {Fragment} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar'

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <CoupleSection cClass={'couple-section-s2'}/>
            <WeddingTime/>
            <StorySection2/>
            <PortfolioSection2 gClass={'pt-0'}/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
