import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import Footer from '../../components/footer/Footer';

const GalleryPage2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'}/> 
            <PortfolioSection2 gClass={''}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GalleryPage2;
