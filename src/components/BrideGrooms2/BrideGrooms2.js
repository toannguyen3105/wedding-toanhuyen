import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle";
import timg1 from '../../images/team/img-1.jpg'
import timg2 from '../../images/team/img-2.jpg'
import timg3 from '../../images/team/img-3.jpg'
import timg4 from '../../images/team/img-4.jpg'
import timg5 from '../../images/team/img-5.jpg'
import timg6 from '../../images/team/img-6.jpg'

import shape1 from '../../images/team/shape1.jpg'
import shape2 from '../../images/team/shape2.jpg'

import VideoSection from "../VideoSection";

const Brides = [
  {
    id:'1',
    tImg:timg1,
    name:'Leslie Alexander',
    title:'Brides Brother',     
 },
 {
    id:'2',
    tImg:timg2,
    name:'Jenny Wilson',
    title:'Brides Sister',     
 },
 {
    id:'3',
    tImg:timg3,
    name:'Robert Fox',
    title:'Brides Brother',     
 }
]
const Grooms = [
 {
    id:'1',
    tImg:timg4,
    name:'Jerome Bell',
    title:'Groom’s Sister',     
 },
 {
    id:'2',
    tImg:timg5,
    name:'Esther Howard',
    title:'Groom’s Brother',     
 },
 {
    id:'3',
    tImg:timg6,
    name:'Bessie Cooper',
    title:'Brides Maid',     
 },
]


const BrideGrooms2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="bride-groom-section">
      <div className="toanhuyen-team-section section-padding pt-120">
        <div className="container">
          <SectionTitle MainTitle={'Bridesmaids'} />
          <div className="toanhuyen-team-wrap">
            <div className="row">
              {Brides.slice(0, 3).map((Bride, tm) => (
                <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={tm}>
                    <div className="toanhuyen-team-item">
                        <div className="toanhuyen-team-img">
                            <div className="toanhuyen-team-img-inner">
                                <img src={Bride.tImg} alt="" />
                            </div>
                            <div className="shape-1"><img src={shape1} alt=""/></div>
                            <div className="shape-2"><img src={shape2} alt=""/></div>
                        </div>
                        <div className="toanhuyen-team-text">
                            <h3>{Bride.name}</h3>
                            <span>{Bride.title}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <VideoSection/>
      <div className="toanhuyen-team-section pt-120 section-padding">
        <div className="container">
          <SectionTitle MainTitle={'Groomsmen'} />
          <div className="toanhuyen-team-wrap">
            <div className="row">
              {Grooms.slice(0, 6).map((Groom, gm) => (
                <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={gm}>
                    <div className="toanhuyen-team-item">
                        <div className="toanhuyen-team-img">
                            <div className="toanhuyen-team-img-inner">
                                <img src={Groom.tImg} alt="" />
                            </div>
                            <div className="shape-1"><img src={shape1} alt=""/></div>
                            <div className="shape-2"><img src={shape2} alt=""/></div>
                        </div>
                        <div className="toanhuyen-team-text">
                            <h3>{Groom.name}</h3>
                            <span>{Groom.title}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrideGrooms2;