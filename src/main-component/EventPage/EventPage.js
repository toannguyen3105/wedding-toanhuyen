import React, {Fragment} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar'
import EventSection from '../../components/EventSection/EventSection';

const EventPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'When & Where'} pagesub={'Events'}/> 
            <EventSection eClass={'wpo-event-section-s2'}/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;

