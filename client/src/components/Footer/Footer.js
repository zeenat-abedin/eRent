import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className="container-fluid">
        {/* Top */}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 text-center text-md-left">
            <div className="tagline pb-3">
              <h3 className="m-0">eRent</h3>
              <p className="m-0 text-white">Landmark living on the avenue.</p>
            </div>
            <div className="pb-3 aboutus">
              <h4 className="m-0">About us</h4>
              <p className="m-0 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                nobis.
              </p>
            </div>
            <div className="contact-us pb-3">
              <p className="m-0">
                <i className="fas contact-icon fa-phone-alt pr-3"></i>{" "}
                <span className="text-white"> +91 0123456789</span>
              </p>
              <p className="m-0">
                <i className="fas contact-icon fa-envelope pr-3"></i>{" "}
                <span className="text-white"> erent@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center text-md-left d-flex justify-content-center justify-content-md-start">
            <div className="information">
              <h4>Information</h4>
              <ul>
                <li>About Us</li>
                <li>More Search</li>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Events</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center text-md-left">
            <div className="helpful-links">
              <h4>Helpful Links</h4>
              <ul>
                <li>Services</li>
                <li>Supports</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center text-md-left d-flex align-md-self-center align-items-center justify-content-center justify-content-md-start  pb-3">
            <div className="subscribe">
              <h4>Subscribe Info</h4>
              <input
                type="text"
                name="subscribe"
                id="subscribe"
                className="subscibe-input"
                placeholder="Enter your email"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* bottom */}
        <div className={`row pt-4 ${"bottom"}`}>
          <div className="col-12 col-md-2"></div>
          {/* icons */}
          <div className="col-12 col-md-6 d-flex justify-content-center pb-3 pb-md-0">
            <span className={"icon"}>
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className={"icon"}>
              <i className="fab fa-google-plus-g"></i>
            </span>
            <span className={"icon"}>
              <i className="fab fa-twitter"></i>
            </span>
            <span className={"icon"}>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
          {/* copyright */}
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <p className="m-0 text-white ">
              2020 &copy; eRent | All right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;