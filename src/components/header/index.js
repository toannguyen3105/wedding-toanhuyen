import React from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = (props) => {

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
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink className="navbar-brand logo" to='/'><small>My</small>love<span><i
                    className="fi flaticon-dove"></i></span></NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link>
                      <ul className="sub-menu">
                        <li><NavLink onClick={ClickHandler} to="/home">Home style 1</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/home2">Home style 2</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/home3">Home style 3</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/home4">Home Static Hero</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/home5">Home Box Style</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/home6">Home particles Effect</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/home7">Home Video Banar</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/invitation">Invitation</NavLink></li>
                      </ul>
                    </li>
                    <li><Link activeClass="active" to="couple" spy={true} smooth={true} duration={500} >Couple</Link></li>
                    <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} >Story</Link></li>
                    <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} >Gallery</Link></li>
                    <li><Link activeClass="active" to="RSVP" spy={true} smooth={true} duration={500} >RSVP</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} duration={500} >Events</Link></li>
                    <li className="menu-item-has-children">
                      <NavLink onClick={ClickHandler} to="/blog">Blog</NavLink>
                      <ul className="sub-menu">
                        <li><NavLink onClick={ClickHandler} to="/blog">Blog right sidebar</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</NavLink></li>
                        <li><NavLink onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</NavLink></li>
                        <li className="menu-item-has-children">
                          <NavLink onClick={ClickHandler} to="/">Blog details</NavLink>
                          <ul className="sub-menu">
                            <li><NavLink onClick={ClickHandler} to="/blog-single/1">Blog details right sidebar</NavLink>
                            </li>
                            <li><NavLink onClick={ClickHandler} to="/blog-single-left-sidebar/1">Blog details left
                              sidebar</NavLink></li>
                            <li><NavLink onClick={ClickHandler} to="/blog-single-fullwidth/1">Blog details
                              fullwidth</NavLink></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <NavLink className="theme-btn" to="/rsvp"><span className="text">Attend Now</span> <span className="mobile">
                    <i className="fi flaticon-user"></i>
                  </span></NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;