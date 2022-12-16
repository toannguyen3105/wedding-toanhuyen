import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/footer/Footer';
import BrideGrooms2 from '../../components/BrideGrooms2/BrideGrooms2';

const BrideGroomPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Bridesmaids & Groomsmen'} pagesub={'Bridesmaids & Groomsmen'}/> 
            <BrideGrooms2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BrideGroomPage;
