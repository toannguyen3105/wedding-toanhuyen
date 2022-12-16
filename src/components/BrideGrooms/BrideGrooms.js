import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from '../../images/team/img-1.jpg'
import timg2 from '../../images/team/img-2.jpg'
import timg3 from '../../images/team/img-3.jpg'
import timg4 from '../../images/team/img-4.jpg'
import timg5 from '../../images/team/img-5.jpg'
import timg6 from '../../images/team/img-6.jpg'

import shape1 from '../../images/team/shape1.jpg'
import shape2 from '../../images/team/shape2.jpg'


const brideGrooms = [
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
 },
 {
    id:'4',
    tImg:timg4,
    name:'Jerome Bell',
    title:'Groom’s Sister',     
 },
 {
    id:'5',
    tImg:timg5,
    name:'Esther Howard',
    title:'Groom’s Brother',     
 },
 {
    id:'6',
    tImg:timg6,
    name:'Bessie Cooper',
    title:'Brides Maid',     
 },
]


const BrideGrooms = (props) => {

  return (
      <section className={`toanhuyen-team-section ${props.tClass}`}>
        <div className="container">
          <SectionTitle MainTitle={'Bridesmaids & Groomsmen'} />
          <div className="toanhuyen-team-wrap">
            <div className="row">
              {brideGrooms.map((brideGroom, tm) => (
                <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={tm}>
                    <div className="toanhuyen-team-item">
                        <div className="toanhuyen-team-img">
                            <div className="toanhuyen-team-img-inner">
                                <img src={brideGroom.tImg} alt="" />
                            </div>
                            <div className="shape-1"><img src={shape1} alt=""/></div>
                            <div className="shape-2"><img src={shape2} alt=""/></div>
                        </div>
                        <div className="toanhuyen-team-text">
                            <h3>{brideGroom.name}</h3>
                            <span>{brideGroom.title}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default BrideGrooms;