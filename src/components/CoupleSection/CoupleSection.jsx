import React from "react";
import coupleImg1 from "../../images/couple/2.jpg";
import coupleImg2 from "../../images/couple/3.jpg";

import shape1 from "../../images/couple/shape-1.png";
import shape2 from "../../images/couple/shape-2.png";
import shape3 from "../../images/couple/shape-3.png";
import shape4 from "../../images/couple/shape-4.png";

const CoupleSection = (props) => {
  return (
    <section
      className={`couple-section section-padding ${props.cClass}`}
      id="couple"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col col-lg-11">
            <div className="couple-area clearfix">
              <div className="couple-item bride">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="couple-img">
                      <img src={coupleImg1} alt="" />
                      <div className="couple-shape">
                        <img src={shape3} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="couple-text">
                      <h3>Thanh Huyền</h3>
                      <p>
                        Cô dâu Thanh Huyền là người{" "}
                        <i>xinh xắn, hoạt bát, lễ phép</i>. Cũng chính những
                        tính cách ấy, khiến chú rể lần đầu gặp mặt không khỏi ấn
                        tượng. Tuy có nhiều lúc còn trẻ con, hơi bướng bỉnh,
                        nhưng cô dâu Thanh Huyền thực sự là con người ấm áp và
                        luôn có suy nghĩ cho con đường dài phía trước của hai vợ
                        chồng.
                      </p>
                      <div className="social">
                        <ul>
                          <li>
                            <a
                              rel="noreferrer"
                              href="https://www.facebook.com/profile.php?id=100010328201818"
                              target={"_blank"}
                            >
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noreferrer"
                              href="https://www.facebook.com/profile.php?id=100010328201818"
                              target={"_blank"}
                            >
                              <i className="ti-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="couple-item groom">
                <div className="row align-items-center">
                  <div className="col-lg-7 order-lg-1 order-2">
                    <div className="couple-text">
                      <h3>Huy Toàn</h3>
                      <p>
                        Chú rể Huy Toàn là một chàng trai{" "}
                        <i>hiền lành, ít nói, và hơi béo</i>. Chính vì sự rụt
                        rè, ít nói đó mà chú rể tự cảm thấy may mắn khi tìm được
                        cô dâu trên Facebook. Chú rể chia sẻ đã phải rất mạnh
                        mẽ, lấy hết sự can đảm để nhắn tin làm quen trước với cô
                        dâu. Và đã gặt được quả ngọt{" "}
                        <img
                          width={24}
                          height={24}
                          src="https://media.baamboozle.com/uploads/images/88978/1628215210_66687.gif"
                          alt=""
                        />{" "}
                        Trong thời gian tới, chủ rể không chỉ là điểm tựa mà còn
                        được là người chia sẻ niềm vui, nỗi buồn cuộc sống với
                        cô dâu.
                      </p>
                      <div className="social">
                        <ul>
                          <li>
                            <a
                              rel="noreferrer"
                              href="https://www.facebook.com/toannguyen3105/"
                              target={"_blank"}
                            >
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noreferrer"
                              href="https://www.instagram.com/toannh8/"
                              target={"_blank"}
                            >
                              <i className="ti-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-lg-2 order-1">
                    <div className="couple-img">
                      <img src={coupleImg2} alt="" />
                      <div className="couple-shape">
                        <img src={shape4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="" />
      </div>
    </section>
  );
};

export default CoupleSection;
