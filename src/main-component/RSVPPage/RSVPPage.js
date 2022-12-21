import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar'
import RSVP from '../../components/RSVP';
import EventSection from '../../components/EventSection/EventSection';

const RSVPPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'RSVP'} pagesub={'RSVP'}/> 
            <RSVP pt={'section-padding pt-200'}/>
            <EventSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RSVPPage;
