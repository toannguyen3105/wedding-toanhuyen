import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return(
        <section className="toanhuyen-page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="toanhuyen-breadcumb-wrap">
                        <h2>{props.pageTitle}</h2>
                            <ol className="toanhuyen-breadcumb-wrap">
                                <li><Link to="/home">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;