import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import PortfolioSection3 from '../../components/PortfolioSection3/PortfolioSection3';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';

const GallerySlide =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'}/> 
            <PortfolioSection3/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GallerySlide;
