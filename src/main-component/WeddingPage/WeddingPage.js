import React, {Fragment} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar'

const WeddingPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'The Wedding'} pagesub={'Wedding'}/> 
            <CoupleSection/>
            <VideoSection/>
            <BrideGrooms tClass={'section-padding'}/>
            <EventSection/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default WeddingPage;
