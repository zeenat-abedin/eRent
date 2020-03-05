import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostCarousel from "./PostCarousel";
import Navbar from "../Navbar/Navbar";
import { getProduct } from "../../redux/actions/productAction";

import "./SinglePost.scss";

const SingleProduct = ({ match }) => {
  const postId = match.params.postId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(Number(postId)));
  }, [postId]);
  const { singleProduct, errorMessage } = useSelector(state => state.users);
  if (errorMessage) {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid my-5 h-70">
          <div className="row h-75">
            <div className="col-12">
              <h1 className="text-center text-danger">{errorMessage}</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  if (!singleProduct) {
    return <React.Fragment>
      <Navbar />
      <div className="container-fluid my-5 h-70">
        <div className="row h-75">
          <div className="col-12">
            <h1 className="text-center text-info">Loading...</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  }
  console.log(singleProduct);
  const {
    price,
    phone_number,
    images,
    floorCount,
    floorNumber,
    bedrooms,
    description,
    title,
    state,
    city,
    listedBy,
    houseType,
    furniture
  } = singleProduct;
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 col-md-5">
            <PostCarousel images={images} />
          </div>
          <div className="col-12 col-md-7">
            {/* Price Details */}
            <div className="top d-flex align-items-center justify-content-between border shadow-sm p-3">
              <div className="left">
                <p className="m-0 text-muted">
                  Rent from <strike>{price + 2000}</strike>
                </p>
                <p className="m-0">
                  <span>
                    <span className="price">{price}/bed</span>
                  </span>
                </p>
              </div>
              <div className="right">
                <p className="m-0 text-muted">Security deposit</p>
                <span className="security m-0">{price * 3}</span>
              </div>
              <div className="contact-num">
                <p className="m-0 text-muted">Contact Number</p>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {phone_number}
                </span>
              </div>
            </div>
            {/* Post details */}
            <div className="bottom  border shadow-sm p-3 mt-3">
              <div className="room-details">
                <h4 className="pb-3">{title}</h4>
                <span className="room-location text-muted">
                  State: {state} - City: {city}
                </span>{" "}
                |{" "}
                {/* <span className="room-gender text-muted">Only For Women</span>{" "} */}
                |{" "}
                <span className="room-bed text-muted">
                  {bedrooms} Beds Or 1 Room Available
                </span>
              </div>
              <div className="house-f-details pt-4">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item list-group-item-secondary text-dark">
                    House type: {houseType}
                  </li>
                  <li className="list-group-item list-group-item-secondary text-dark">
                    Total Floor: {floorCount}
                  </li>
                  <li className="list-group-item list-group-item-secondary text-dark">
                    Rent floor Number: {floorNumber}
                  </li>
                  <li className="list-group-item list-group-item-secondary text-dark">
                    Listed by: {listedBy}
                  </li>
                </ul>
              </div>
              <div className="house-features mt-5">
                <h4 className="pb-3">House Features</h4>
                <div className="features d-flex justify-content-between">
                  <p className="one d-flex flex-column">
                    <i className="fas fa-bed fa-2x"></i>
                    <span className="text-muted pt-2">{bedrooms} Bedroom</span>
                  </p>
                  <p className="two d-flex flex-column">
                    <i className="fas fa-bath fa-2x"></i>
                    <span className="text-muted pt-2">1 Bathroom</span>
                  </p>
                  <p className="three d-flex flex-column">
                    <i className="fas fa-couch fa-2x"></i>
                    <span className="text-muted pt-2">{furniture} Home</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-right my-3">
            <div className="chat-btn">
              <Link to="/chat" className="btn chat-btn">
                Chat
              </Link>
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
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
