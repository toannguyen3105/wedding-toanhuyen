import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import Navbar2 from '../../components/Navbar2';
import BlogList from '../../components/BlogList'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';

const BlogPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;

