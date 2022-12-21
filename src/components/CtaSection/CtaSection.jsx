import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="toanhuyen-cta-section">
      <div className="conatiner-fluid">
        <div className="toanhuyen-cta-item">
          <h2>Lets Celebrate Your Love</h2>
          <Link to="/rsvp" className="theme-btn-s2">
            Join With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
