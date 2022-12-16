import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Error from '../../components/404'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';

const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;

