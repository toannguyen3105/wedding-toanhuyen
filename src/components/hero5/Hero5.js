import React from 'react'
import TimeCountDown from '../countdown';


const Hero5 = (props) => {
    return (
        <section className="wpo-hero-style-4">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <h2>Margrate & Daniel</h2>
                    <p >We Are Getting Married Dec 8, 2022</p>
                    <div className="wpo-wedding-date">
                        <div className="clock-grids">
                            <TimeCountDown/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero5;