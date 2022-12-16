import React from 'react';
import {Link} from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

import ins1 from '../../images/instragram/1.jpg'
import ins2 from '../../images/instragram/2.jpg'
import ins3 from '../../images/instragram/3.jpg'
import ins4 from '../../images/instragram/4.jpg'
import ins5 from '../../images/instragram/5.jpg'
import ins6 from '../../images/instragram/6.jpg'

const insstgram = [
    {
        insImg:ins1
    },
    {
        insImg:ins2
    },
    {
        insImg:ins3
    },
    {
        insImg:ins4
    },
    {
        insImg:ins5
    },
    {
        insImg:ins6
    },
]

const BlogSidebar = (props) => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt=""/>
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Wedding Event <span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Photography <span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Album <span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Wedding Dress<span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Best Gift <span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Wedding Tips <span>8</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        {insstgram.map((item, ins) => (
                            <li key={ins}><img src={item.insImg} alt="" /></li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">photography</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">wedding</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">events</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">creative</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Solution</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">collection</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Idea</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">bride & groom</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
