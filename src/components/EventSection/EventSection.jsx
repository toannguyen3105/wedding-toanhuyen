import React from "react";
import LocationMap from "../Modal";
import SectionTitleS2 from "../SectionTitleS2";

const Events = [
  {
    title: "Lễ Thành Hôn",
    li1: "Thứ 2, ngày 02 tháng 01, 2023 1:00 PM – 2:00 PM",
    li2: "Công ty xây dựng Sóc Sơn, ngõ 62, đường Núi Đôi, huyện Sóc Sơn",
    li3: "0363 629 810",
  },
];

const EventSection = (props) => {
  return (
    <section
      className={`toanhuyen-event-section section-padding ${props.eClass}`}
      id="event"
    >
      <div className="container">
        <SectionTitleS2 MainTitle={"When & Where"} />
        <div className="toanhuyen-event-wrap">
          <div className="row justify-content-around">
            {Events.map((event, eitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                <div className="toanhuyen-event-item">
                  <div className="toanhuyen-event-text">
                    <h2>{event.title}</h2>
                    <ul>
                      <li>{event.li1}</li>
                      <li>{event.li2}</li>
                      <li>{event.li3}</li>
                      <li>
                        <LocationMap />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
