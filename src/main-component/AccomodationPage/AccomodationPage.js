import React, {Fragment} from 'react';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar'
import EventSection from '../../components/EventSection/EventSection';

const AccomodationPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Accomodation'} pagesub={'Accomodation'}/> 
            <WeddingTime wdClass={'section-padding'}/>
            <CoupleSection cClass={'couple-section-s2'}/>
            <EventSection/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AccomodationPage;

