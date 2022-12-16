import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Footer from '../../components/footer/Footer';

const GalleryPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'}/> 
            <PortfolioSection pClass={'tb-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GalleryPage;
