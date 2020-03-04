import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import logo from '../images/loader.gif';
function ProductDisplay({ fetchProducts, postsPerPage }) {
    return (
        <Fragment>
            <div className="container wrap-product">
                {fetchProducts ? <div className="row">
                    {
                        fetchProducts.map((data, index) => {
                            return <div key={index} className="col-xl-3 col-sm-6 col-md-4  col-lg-4 ">
                                <div className="product">
                                    <div className="card img-container">
                                        <Link to='/productdetails'>
                                            <img src={data.images[0]} alt="product" className="card-img-top img-content" />
                                        </Link>
                                        <div className="userlike">
                                            <button type="button" className="btn btn-secondary" style={{ "marginBottom": "5px" }}><i className="fa fa-heart-o"></i></button>
                                            <button type="button" className="btn btn-secondary"><i className="fa fa-share-alt " aria-hidden="true"></i></button>
                                        </div>
                                        <div className="card-footer footer-data">
                                            <h6 className="card-title">{data.title}</h6>
                                            <h6 className="card-text">{data.bedrooms}bhk-{data.area}ft2</h6>
                                            <div style={{ "display": "block" }}>
                                                <span className="">&#x20B9;<b>{data.price}</b></span>
                                                <span style={{ "float": "right" }}><b>{data.city}</b></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div> :
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-4">
                            <img src={logo} alt="loader" />
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                }
            </div>
        </Fragment>
    )
}

export default ProductDisplay
