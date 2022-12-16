import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = (props) => {
  const links = [
    {
      key: "home",
      title: "Home",
    },
    {
      key: "couple",
      title: "Couple",
    },
    {
      key: "story",
      title: "Story",
    },
    {
      key: "gallery",
      title: "Gallery",
    },
    {
      key: "RSVP",
      title: "RSVP",
    },
    {
      key: "event",
      title: "Event",
    },
  ];
  return (
    <header id="header">
      <div className={`toanhuyen-site-header ${props.hclass}`}>
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
                  <NavLink className="navbar-brand logo" to="/">
                    <small>Toan</small>huyen
                    <span>
                      <i className="fi flaticon-balloon"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    {links.map((link) => (
                      <li key={link.key}>
                        <Link
                          activeClass="active"
                          to={link.key}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <NavLink className="theme-btn" to="/rsvp">
                    <span className="text">Attend Now</span>{" "}
                    <span className="mobile">
                      <i className="fi flaticon-user"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
