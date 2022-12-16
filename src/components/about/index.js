import React from 'react'
import abimg from '../../images/about.jpg'


const About = (props) => {
    
    return(
        <section className={`wpo-about-section ${props.pt}`}>
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="about-title">
                                    <h2>Your Successful Wedding is Our Job.</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text and telifotion vision. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;