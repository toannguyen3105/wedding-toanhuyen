import React from 'react'
import {Link} from 'react-router-dom'
import SectionTitle from '../SectionTitle'
import blogs from '../../api/blogs'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className={`wpo-blog-section section-padding ${props.blogClass}`}>
            <div className="container">
                <SectionTitle topTitle={'News'} MainTitle={'Read Our Wedding News'}/>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.map((blog, Bitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt=""/>
                                        <div className="thumb">{blog.thumb} </div>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h2>
                                        <ul>
                                            <li>By <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.author}</Link></li>
                                            <li>{blog.create_at}</li>
                                        </ul>
                                        <p>{blog.description}</p>
                                        <Link className="read-more" onClick={ClickHandler} to={`/blog-single/${blog.id}`}>Read More..</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default BlogSection;