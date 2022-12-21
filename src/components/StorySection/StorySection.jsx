import React from "react";
import sImg1 from "../../images/story/1.jpg";
import sImg2 from "../../images/story/2.webp";
import sImg3 from "../../images/story/3.jpg";
import SectionTitle from "../SectionTitle";

import shape1 from "../../images/rsvp/shape1.png";
import shape2 from "../../images/rsvp/shape2.png";

const StorySection = () => {
  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <div className="row">
          <SectionTitle MainTitle={"Our Sweet Story"} />
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="story-timeline">
              <div className="row">
                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                  <span className="heart">
                    <i className="fi flaticon-balloon"></i>
                  </span>
                </div>
              </div>
              <div className="story-timeline-item s1">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12">
                    <div
                      className="img-holder right-align-text fadeInLeftSlow"
                      data-wow-duration="1500ms"
                    >
                      <img
                        src={sImg1}
                        className="img img-responsive"
                        alt="stroy"
                      />
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div
                      className="story-text left-align-text fadeInRightSlow"
                      data-wow-duration="2000ms"
                    >
                      <h3>Lần đầu gặp nhau</h3>
                      <span className="date">01 tháng 02 năm 2022</span>
                      <div className="line-shape">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>
                        Lần đầu gặp gỡ là cô dâu là một buổi đi tập yoga về của
                        bạn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-timeline-item">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                    <div
                      className="story-text right-align-text fadeInLeftSlow"
                      data-wow-duration="2000ms"
                    >
                      <h3>Lần hẹn hò đầu tiên</h3>
                      <span className="date">01 tháng 09 năm 2022</span>
                      <div className="line-shape s2">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>
                        Đó là ngày lễ độc lập của dân tộc, lần đầu chúng tôi hẹn
                        nhau ở một nơi xa xôi giữa lòng thủ đô Hà Nội. Với món
                        Nhật là Ramen
                      </p>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12 order-lg-2 order-1">
                    <div className="img-holder left-align-text">
                      <img
                        src={sImg2}
                        alt="stroy"
                        className="img img-responsive fadeInRightSlow"
                        data-wow-duration="1500ms"
                      />
                      <span className="heart">
                        <i className="fi flaticon-dance"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-timeline-item">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12">
                    <div className="img-holder right-align-text left-site right-heart">
                      <img
                        src={sImg3}
                        alt="stroy"
                        className="img img-responsive fadeInLeftSlow"
                        data-wow-duration="1500ms"
                      />
                      <span className="heart">
                        <i className="fi flaticon-dove"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div
                      className="story-text left-align-text fadeInRightSlow"
                      data-wow-duration="2000ms"
                    >
                      <h3>Cô ấy nói đồng ý</h3>
                      <span className="date">23 tháng 11 2022</span>
                      <div className="line-shape">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>
                        Đó là cả một câu chuyện dài và vất vả để đưa được cô ấy
                        nói đồng ý không thể dùng một vài lời mà nói nên được
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <div className="sticky-shape">
          <img src={shape1} alt="" />
        </div>
      </div>
      <div className="shape-2">
        <div className="sticky-shape">
          <img src={shape2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
