import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';


const Header2 = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu2 />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand logo" to='/'><small>My</small>love<span><i
                    className="fi flaticon-dove"></i></span></Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link to="/home">Home</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                        <li><Link onClick={ClickHandler} to="/home2">Home style 2</Link></li>
                        <li><Link onClick={ClickHandler} to="/home3">Home style 3</Link></li>
                        <li><Link onClick={ClickHandler} to="/home4">Home Static Hero</Link></li>
                        <li><Link onClick={ClickHandler} to="/home5">Home Box Style</Link></li>
                        <li><Link onClick={ClickHandler} to="/home6">Home particles Effect</Link></li>
                        <li><Link onClick={ClickHandler} to="/home7">Home Video Banar</Link></li>
                        <li><Link onClick={ClickHandler} to="/invitation">Invitation</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">About</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/wedding">Wedding</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/wedding">Wedding</Link></li>
                        <li><Link onClick={ClickHandler} to="/wedding-details">Wedding Details</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/gallery">Gallery</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/gallery">Gallery Style 1</Link></li>
                        <li><Link onClick={ClickHandler} to="/gallery-s2">Gallery Style 2</Link></li>
                        <li><Link onClick={ClickHandler} to="/gallery-slide">Gallery Slide</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/rsvp">RSVP</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/story">pages</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/story">Our story</Link></li>
                        <li><Link onClick={ClickHandler} to="/accomodation">Accomodation</Link></li>
                        <li><Link onClick={ClickHandler} to="/event">When & Where</Link></li>
                        <li><Link onClick={ClickHandler} to="/groom-bride">Bridesmaid & Groomsman</Link></li>
                        <li><Link onClick={ClickHandler} to="/coming">Coming Soon</Link></li>
                        <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                        <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                        <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/blog">Blog</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">Blog details</Link>
                          <ul className="sub-menu">
                            <li><Link onClick={ClickHandler} to="/blog-single/1">Blog details right sidebar</Link>
                            </li>
                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">Blog details left
                              sidebar</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/1">Blog details
                              fullwidth</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <Link className="theme-btn" to="/rsvp"><span className="text">Attend Now</span> <span className="mobile">
                    <i className="fi flaticon-user"></i>
                  </span></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header2;