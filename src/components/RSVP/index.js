import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import SectionTitle from "../../components/SectionTitle";

import vec1 from "../../images/rsvp/flower1.png";
import vec2 from "../../images/rsvp/flower2.png";

import shape1 from "../../images/rsvp/shape1.png";
import shape2 from "../../images/rsvp/shape2.png";

const RSVP = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    address: "",
    guest: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      setForms({
        name: "",
        email: "",
        address: "",
        guest: "",
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <section className={`toanhuyen-contact-section ${props.pt}`} id="RSVP">
      <div className="container">
        <div className="toanhuyen-contact-section-wrapper">
          <div className="toanhuyen-contact-form-area">
            <SectionTitle MainTitle={"Are you attending?"} />

            <form
              onSubmit={(e) => submitHandler(e)}
              className="contact-validation-active"
            >
              <div className="form-field">
                <input
                  value={forms.name}
                  type="text"
                  name="name"
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                  className="form-control"
                  placeholder="Hãy điền tên của bạn"
                />
                {validator.message("name", forms.name, "required|alpha_space")}
              </div>
              <div className="form-field">
                <input
                  value={forms.email}
                  type="email"
                  name="email"
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                  className="form-control"
                  placeholder="Hãy điền email của bạn"
                />
                {validator.message("email", forms.email, "required|email")}
              </div>
              <div className="radio-buttons">
                <p>
                  <input
                    type="radio"
                    id="attend"
                    name="radio-group"
                    defaultChecked
                  />
                  <label htmlFor="attend">Đồng ý, tôi sẽ tham dự</label>
                </p>
                <p>
                  <input type="radio" id="not" name="radio-group" />
                  <label htmlFor="not">Tiếc quá, tôi không thể tham gia</label>
                </p>
              </div>
              <div className="form-field">
                <select
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                  value={forms.guest}
                  type="text"
                  className="form-control"
                  name="guest"
                >
                  <option>File đính kèm</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                </select>
                {validator.message("guest", forms.guest, "required")}
              </div>
              <div className="submit-area">
                <button type="submit" className="theme-btn">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          <div className="vector-1">
            <img src={vec1} alt="" />
          </div>
          <div className="vector-2">
            <img src={vec2} alt="" />
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
export default RSVP;
