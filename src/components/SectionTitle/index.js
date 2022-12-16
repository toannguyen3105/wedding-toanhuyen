import React from 'react'


const SectionTitle = (props) => {
    return(
        <div className="toanhuyen-section-title">
            <div className="section-title-icon">
                <i className="fi flaticon-dove"></i>
            </div>
            <h2>{props.MainTitle}</h2>
        </div>
    )
}

export default SectionTitle;