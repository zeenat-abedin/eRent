import React, { Fragment } from "react"
import { connect } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import './displayProducts.css'
function ProductsDisplay() {
  const Products = useSelector(state => state.users.products)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("mounting----------------")
    dispatch(getProducts())
  }, [])
  useEffect(() => {
    console.log("updatin----------------")
    dispatch(getProducts())
  }, Products)
  return (
    <Fragment>
      <div className="container wrap-product">
        {Products ? <div className="row">
          {
            Products.map((data, index) => {
              return <div key={index} className="col-xl-3 col-sm-6 col-md-4  col-lg-4 ">
                <div className="product">
                  <div className="card img-container">
                    <Link to='/'>
                      <img src={data.images[0]} alt="product" className="card-img-top img-content" />
                    </Link>
                    <div className="userlike">
                      <button type="button" className="btn btn-secondary" style={{ "marginBottom": "5px" }}><i className="fa fa-heart-o"></i></button>
                      <button type="button" className="btn btn-secondary"><i className="fa fa-share-alt " aria-hidden="true"></i></button>
                    </div>
                    <div class="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <span class="card-text">{data.bedrooms}bhk-{data.area}ft2</span>
                    </div>
                    <div className="card-footer footer-data">
                      <span className="title">{data.state}</span>
                      <span className="price">&#x20B9;<b>{data.price}</b></span>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div> : "Loading...."}
      </div>
    </Fragment>
  )
}

export default ProductsDisplay
