import QRCODE from "../../images/qr-code.jpeg";

const Footer = () => {
  return (
    <footer className="toanhuyen-site-footer">
      <div className="toanhuyen-lower-footer">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>QR CODE</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-heart"></i>
                      <div
                        style={{
                          borderRadius: 50,
                          border: "1px solid #ccc",
                        }}
                      >
                        <img src={QRCODE} alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                &copy; {new Date().getFullYear()}. Design By{" "}
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/toannguyen3105/"
                  target={"_blank"}
                >
                  toannh8
                </a>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
