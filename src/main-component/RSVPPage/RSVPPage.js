import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar'
import RSVP from '../../components/RSVP';
import EventSection from '../../components/EventSection/EventSection';

const RSVPPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'RSVP'} pagesub={'RSVP'}/> 
            <RSVP pt={'section-padding pt-200'}/>
            <EventSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RSVPPage;
