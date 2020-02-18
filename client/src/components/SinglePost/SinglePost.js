import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import PostCarousel from "./PostCarousel";
import Navbar from "../Navbar/Navbar";

import "./SinglePost.scss";

const SingleProduct = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 col-md-5">
            <PostCarousel />
          </div>
          <div className="col-12 col-md-7">
            {/* Price Details */}
            <div className="top d-flex align-items-center border shadow-sm p-3">
              <div className="left">
                <p className="m-0 text-muted">
                  Rent from <strike>₹14000</strike>
                </p>
                <p className="m-0">
                  <span className="price">₹12000/bed</span>
                </p>
              </div>
              <div className="right pl-5">
                <p className="m-0 text-muted">Security deposit</p>
                <span className="security m-0">₹25000</span>
              </div>
            </div>
            {/* Post details */}
            <div className="bottom  border shadow-sm p-3 mt-3">
              <div className="room-details">
                <h4 className="pb-3">
                  1 R Sharing Rooms for Women at ₹12000 in Kolkata
                </h4>
                <span className="room-location text-muted">
                  Hello world 19th main
                </span>{" "}
                | <span className="room-gender text-muted">Only For Women</span>{" "}
                |{" "}
                <span className="room-bed text-muted">
                  2 Beds Or 1 Room Available
                </span>
              </div>
              <div className="house-features mt-5">
                <h4 className="pb-3">House Features</h4>
                <div className="features d-flex justify-content-between">
                  <p className="one d-flex flex-column">
                    <i class="fas fa-bed fa-2x"></i>
                    <span className="text-muted pt-2">1 Bedroom</span>
                  </p>
                  <p className="two d-flex flex-column">
                    <i class="fas fa-bath fa-2x"></i>
                    <span className="text-muted pt-2">1 Bathroom</span>
                  </p>
                  <p className="three d-flex flex-column">
                    <i class="fas fa-couch fa-2x"></i>
                    <span className="text-muted pt-2">
                      Fully Furnished Home
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-right my-3">
            <div className="chat-btn">
              <Link to="/chat" className="btn chat-btn">Chat</Link>
            </div>
          </div>
        </div>

        {/* Map  */}
        {/* Todo --> Show location from google map */}
        <div className="row my-3">
          <div className="col-12">
            <div className="card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.542570103292!2d88.43505382691447!3d22.647438985144355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM4JzUwLjgiTiA4OMKwMjYnMDguMiJF!5e0!3m2!1sen!2sin!4v1582043409913!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
