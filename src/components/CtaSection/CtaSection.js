import React from 'react'
import {Link} from 'react-router-dom'


const CtaSection = (props) => {
    return(
        <div className="wpo-cta-section">
            <div className="conatiner-fluid">
                <div className="wpo-cta-item">
                    <h2>Lets Celebrate Your Love</h2>
                    <Link to="/home" className="theme-btn-s2">Join With Us</Link>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;