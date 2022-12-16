import React from 'react'
import TimeCountDown from '../countdown';
import Particles from 'react-particles-js';
import stockShape2 from '../../images/hero/icon.png'


const Hero6 = (props) => {
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
            <Particles
                className="particaleWrapper"
                params={{
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 1.5,
                            out_mode: "in"
                        },
                        shape: {
                            type: [
                                "images",
                                "circle"
                            ],
                            images: [
                                {
                                    src: `${stockShape2}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 5,
                                    width: 7
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape2}`,
                                    height: 5,
                                    width: 7
                                },
                            ]
                        },
                        color: {
                            value: "#D66371"
                        },
                        size: {
                            value: 20,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 10,
                                sync: true
                            }
                        }

                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: false
                }}
            />
        </section>
    )
}

export default Hero6;