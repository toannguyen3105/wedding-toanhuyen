const Footer = () => {
  return (
    <footer className="toanhuyen-site-footer">
      <div className="toanhuyen-lower-footer">
        <div className="container">
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
