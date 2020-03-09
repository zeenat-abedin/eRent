import React, { useEffect, useState, useRef } from 'react'
import NavBar from '../Navbar/Navbar'
import { RegionDropdown, } from 'react-country-region-selector';
import { POST_PRODUCT } from '../../redux/actions/actionType'
import { connect } from 'react-redux'
import axios from '../../config/axios'
import { useDispatch } from 'react-redux'
import './sell.scss'
function Sell() {
  const fileInput = useRef(null)
  const dispatch = useDispatch()
  const [productDetails, setDetails] = useState({
    Title: '',
    Description: '',
    houseType: "",
    maintenanace: "",
    furniture: "",
    Price: '',
    Area: '',
    listedBy: '',
    City: '',
    Landmark: '',
    Bedrooms: '',
    parking: '',
    floorCount: '',
    floorNumber: '',
    pictureOne: '',
    pictureTwo: '',
    pictureThree: '',
    userName: '',
    mobileNumber: '',
    email: '',
    msg: false,
    formValidation: {
      titleValid: "",
      descriptionValid: "",
      houseTypeValid: "",
      maintenanaceValid: "",
      furnitureValid: "",
      priceValid: "",
      areaValid: "",
      listedByValid: "",
      cityValid: "",
      landmarkValid: "",
      bedroomsValid: '',
      parkingValid: "",
      TotalFloorsValid: "",
      FloorNumberValid: "",
      pictureOneValid: "",
      pictureTwoValid: "",
      pictureThreeValid: "",
      userNameValid: "",
      mobileNumberValid: "",
      emailValid: "",
      formValid: "true"
    }
  })
  const [locationDetails, setRegion] = useState({
    country: 'India',
    region: '',
    errMsg: '',
  })
  const getInput = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    console.log(name, value)
    switch (name) {
      case 'Title': {
        productDetails.formValidation.titleValid =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      }
      case 'Description': {
        productDetails.formValidation.descriptionValid =
          value.length < 15 ? "minimum 15 characters required" : "";
        break;
      }
      case 'Price': {
        if (isNaN(value)) {
          productDetails.formValidation.priceValid = "Price should be number"
          break;
        } else if (value <= 0) {
          productDetails.formValidation.priceValid = "Should not be empty"
          break;
        }
        //  else if (Price <= 500) {
        //   productDetails.formValidation.priceValid = "Price should be more than 500"
        // }
        else {
          productDetails.formValidation.priceValid = ""
        }
        break;
      }
      case "maintenanace": {
        if (isNaN(value)) {
          productDetails.formValidation.maintenanaceValid = "should be a number"
          break;
        } else if (value <= 0) {
          productDetails.formValidation.maintenanaceValid = "Should not be empty"
          break;
        } else {
          productDetails.formValidation.maintenanaceValid = ""
        }
        break;
      }
      case 'Area': {
        if (isNaN(value)) {
          productDetails.formValidation.areaValid = "Area should be number"
        } else if (value <= 0) {
          productDetails.formValidation.areaValid = "Should not be empty"
        } else {
          productDetails.formValidation.areaValid = ""
        }
        break;
      }
      case 'City': {
        productDetails.formValidation.cityValid =
          value.length < 3 ? "mininum 3 characters required" : "";
        break;
      }
      case 'Landmark': {
        productDetails.formValidation.landmarkValid =
          value.length < 3 ? "mininum 3 characters" : "";
        break;
      }
      case 'floorCount': {
        if (isNaN(value)) {
          productDetails.formValidation.TotalFloorsValid = "Input should be number"
        } else if (value.length <= 0) {
          productDetails.formValidation.TotalFloorsValid = "Should not be empty"
        } else {
          productDetails.formValidation.TotalFloorsValid = ""
        }
        break;
      }
      case 'floorNumber': {
        if (isNaN(value)) {
          productDetails.formValidation.FloorNumberValid = "FloorNumber should be number"
        } else if (value.length <= 0) {
          productDetails.formValidation.FloorNumberValid = "Should not be empty"
        } else {
          productDetails.formValidation.FloorNumberValid = ""
        }
        break;
      }
      case 'userName': {
        productDetails.formValidation.userNameValid =
          value.length <= 0 ? "username should not be empty" : "";
        break;
      }
      case 'mobileNumber': {
        productDetails.formValidation.mobileNumberValid =
          value.length <= 0 ? " mobile number should not be empty" : "";
        break;
      }
      case 'email': {
        productDetails.formValidation.emailValid =
          value.length <= 0 ? "Invalid Email" : "";
        break;
      }
      default:
        break;
    }
    setDetails({
      ...productDetails,
      [name]: e.target.value
    })
  }
  const getState = (val) => {
    setRegion({
      ...locationDetails,
      region: val
    })
  }
  const formValidation = () => {
    const { listedBy, Bedrooms, parking, houseType, furniture } = productDetails
    let { region } = locationDetails
    let validationData = {
      formValid: true
    }
    if (region === "") {
      locationDetails.errMsg = "State should be selected"
      validationData.formValid = false;
    } else {
      locationDetails.errMsg = ''
    }
    if (productDetails.formValidation.titleValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.descriptionValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.priceValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.areaValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.cityValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.landmarkValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.TotalFloorsValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.FloorNumberValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.userNameValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.mobileNumberValid.length > 0) {
      validationData.formValid = false;
    }
    if (productDetails.formValidation.emailValid.length > 0) {
      validationData.formValid = false;
    }
    if (listedBy === "") {
      productDetails.formValidation.listedByValid = "listedBy should be selected"
      validationData.formValid = false;
    } else {
      productDetails.formValidation.parkingValid = ""
    }
    if (furniture === "") {
      productDetails.formValidation.furnitureValid = "listedBy should be selected"
      validationData.formValid = false;
    } else {
      productDetails.formValidation.furnitureValid = ""
    }
    if (houseType === "") {
      productDetails.formValidation.houseTypeValid = "listedBy should be selected"
      validationData.formValid = false;
    } else {
      productDetails.formValidation.houseTypeValid = ""
    }
    if (Bedrooms === "") {
      productDetails.formValidation.bedroomsValid = "should be selected"
      validationData.formValid = false;
    } else {
      productDetails.formValidation.parkingValid = ""
    }
    if (parking === "") {
      productDetails.formValidation.parkingValid = "should be selected"
      validationData.formValid = false;
    } else {
      productDetails.formValidation.parkingValid = ""
    }
    setDetails({ ...productDetails })
    setRegion({ ...locationDetails })
    return validationData.formValid
  }
  const getImage = (e) => {
    const name = e.target.name
    setDetails(
      {
        ...productDetails,
        [name]: e.target.files[0]
      }
    )
  }
  const { id, displayName, email: userEmail, phone } = JSON.parse(localStorage.getItem('user'))
  const { Title, Description, houseType, furniture, maintenanace, Price, Area, listedBy, City, Landmark, Bedrooms, parking, floorCount, floorNumber,
    pictureOne, pictureTwo, pictureThree, userName, mobileNumber, email } = productDetails
  const details = {
    Title, Description, Price, Area, listedBy, City, Landmark, Bedrooms, parking, floorCount, floorNumber,
    pictureOne
  }
  // , pictureTwo, pictureThree
  const { region } = locationDetails
  const location = { region }
  const form = new FormData()

  if (mobileNumber !== '') {
    form.append('phone_number', mobileNumber)
  }else{
    form.append('phone_number', phone)
  }

  form.append('userId', id)
  form.append('Title', Title)
  form.append('Description', Description)
  form.append("houseType", houseType)
  form.append("furniture", furniture)
  form.append("maintenanace", maintenanace)
  form.append('Price', Price)
  form.append('Area', Area)
  form.append('listedBy', listedBy)
  form.append('City', City)
  form.append('Landmark', Landmark)
  form.append('Bedrooms', Bedrooms)
  form.append('parking', parking)
  form.append('location', region)
  form.append('floorCount', floorCount)
  form.append('floorNumber', floorNumber)
  form.append('pictureOne', pictureOne)
  form.append('pictureTwo', pictureTwo)
  form.append('pictureThree', pictureThree)
  form.append('userEmail', userEmail)
  const submitProductForm = (e) => {
    e.preventDefault()
    if (formValidation()) {
      // e.target.reset()
      let product = Object.assign(details, location);
      const headers = {
        "Content-Type": "form-data"
      };
      axios
        .post('/createProduct/addProduct', form, headers).then(result =>
          dispatch({
            type: POST_PRODUCT,
            payload: result
          })
        ).then(() => {
          setDetails({
            ...productDetails,
            msg: true
          })
        }).catch(err => {
          console.log("error")
        }
        )
    } else {
      alert("not success")
    }
  }
  return (
    <React.Fragment>
      <NavBar />
      <form id="form-content" className="rentalForm" encType="multipart/form-data" onSubmit={submitProductForm} >
        <div className="row" style={{ "marginBottom": "30px" }}>
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            {
              productDetails.msg ? <span className="list-group-item list-group-item-action list-group-item-success">"Successfully posted! confirmation mail have send"</span> : ""
            }
          </div>
          <div className="col-sm-4">
          </div>
        </div>
        <div className="container form-content" style={{ "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }}>
          <h2>Rent Property</h2>
          <p>Include Details</p>
          <div>
            <label htmlFor="title">
              <b>Title</b>
              <span className="text-danger">&nbsp;*</span>
            </label> &nbsp;
            {
              productDetails.formValidation.titleValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.titleValid}</span> : ""
            }
            <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.titleValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Title" name="Title" required />
          </div>
          <div>
            <label htmlFor="Description">
              <b>Description</b>
              <span className="text-danger">&nbsp;*</span>
            </label>
            {
              productDetails.formValidation.descriptionValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.descriptionValid}</span> : ""
            }
            <textarea rows='5' type="text" onChange={getInput} className={`form-control ${productDetails.formValidation.descriptionValid && 'is-invalid'}`} name="Description" placeholder="Enter Description" required></textarea>
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <label htmlFor="">
                <b>Type</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.houseTypeValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.houseTypeValid}</span> : ""
              }
              <select className={`form-control ${productDetails.formValidation.houseTypeValid && 'is-invalid'}`} onChange={getInput} name="houseType">
                <option>select</option>
                <option value="Apartments">Apartments</option>
                <option value="houses and villas">Houses&Villas</option>
              </select>
            </div>
            <div className="col-sm-4">
              <label htmlFor="">
                <b>Furnishing</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.furnitureValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.furnitureValid}</span> : ""
              }
              <select className={`form-control ${productDetails.formValidation.furnitureValid && 'is-invalid'}`} onChange={getInput} name="furniture">
                <option>select</option>
                <option value="Furnished">Furnished</option>
                <option value="unFurnished">unFurnished</option>
              </select>
            </div>
            <div className="col-sm-4">
              <label htmlFor="maintenance">
                <b>Maintenance</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.maintenanaceValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.maintenanaceValid}</span> : ""
              }
              <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.maintenanaceValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Maintenance" name="maintenanace" required />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6">
              <label htmlFor="price">
                <b>Price</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.priceValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.priceValid}</span> : ""
              }
              <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.priceValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter price" name="Price" required />
            </div>
            <div className="col-sm-6">
              <label htmlFor="area">
                <b>Builtup area (ft²)</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.areaValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.areaValid}</span> : ""
              }
              <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.areaValid && 'is-invalid'} `} onChange={getInput} placeholder="Enter Area" name="Area" required />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="propertyList">
              <b>Listed By</b>
              <span className="text-danger">&nbsp;*</span>
            </label>
            {
              productDetails.formValidation.listedByValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.listedByValid}</span> : ""
            }
            <select className={`form-control ${productDetails.formValidation.listedByValid && 'is-invalid'}`} onChange={getInput} name="listedBy">
              <option>select</option>
              <option value="Ower">Owner</option>
              <option value="Dealer">Dealer</option>
              <option value="Builder">Builder</option>
            </select>
          </div>
          <div className="row mt-2">
            <div className="col-4">
              <label htmlFor="propertyList">
                <b>State</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                locationDetails.errMsg.length > 0 ? <span className="text-danger text-right">{locationDetails.errMsg}</span> : ""
              }
              <RegionDropdown
                country={locationDetails.country}
                value={locationDetails.region}
                className={`form-control ${locationDetails.errMsg && 'is-invalid'}`}
                onChange={(val) => getState(val)} />
            </div>
            <div className="col-4">
              <label htmlFor="location">
                <b>City</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.cityValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.cityValid}</span> : ""
              }
              <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.cityValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter City" name="City" required />
            </div>
            <div className="col-4">
              <label htmlFor="location">
                <b>Landmark</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.landmarkValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.landmarkValid}</span> : ""
              }
              <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.landmarkValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Landmark" name="Landmark" required />
            </div>
          </div>
          <div className="bedroomCount mt-2" style={{ "marginBottom": "12px" }}>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="bedrooms">
                  <b>Bedrooms</b>
                  <span className="text-danger">&nbsp;*</span>
                </label>
                {
                  productDetails.formValidation.bedroomsValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.bedroomsValid}</span> : ""
                }
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="Bedrooms" onChange={getInput} value='1' />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    1</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="Bedrooms" onChange={getInput} value='2' />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    2
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="Bedrooms" onChange={getInput} id="exampleRadios3" value='3' />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    3+
                  </label>
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="Parking">
                  <b>Parking</b>
                  <span className="text-danger">&nbsp;*</span>
                </label>
                {
                  productDetails.formValidation.parkingValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.parkingValid}</span> : ""
                }
                <div className="form-check">
                  <input className="form-check-input" onChange={getInput} type="radio" name="parking" value="Yes" />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Yes</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" onChange={getInput} type="radio" name="parking" value="No" />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="floorCount">
                <b>Total floors</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.TotalFloorsValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.TotalFloorsValid}</span> : ""
              }
              <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.TotalFloorsValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter number of floors" name="floorCount" required />

            </div>
            <div className="col-sm-6">
              <label htmlFor="floorNumber">
                <b>Floor No.</b>
                <span className="text-danger">&nbsp;*</span>
              </label>
              {
                productDetails.formValidation.FloorNumberValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.FloorNumberValid}</span> : ""
              }
              <input type="text" autoComplete="off" className={`form-control ${productDetails.formValidation.FloorNumberValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Floor number" name="floorNumber" required />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="images">
              <b>Upload upto 3 images </b>
              <span className="text-danger">&nbsp;*</span>
            </label>
            <div className="row">
              <div className="col-sm-4">
                <input type="file" name="pictureOne" onChange={getImage} placeholder="Upload Image" required />
                {/* <button className="btn btn-outline-secondary" style={{ "color": "white", "height": "60px", "border": "2px solid white " }} onClick={fileInput}>Upload Image</button> */}
              </div>
              <div className="col-sm-4">
                <input type="file" name="pictureTwo" onChange={getImage} required />
              </div>
              <div className="col-sm-4">
                <input type="file" name="pictureThree" onChange={getImage} required />
              </div>
            </div>
          </div>
          <hr className="verticalLine" />
          <div>
            <h4>Verify your details</h4>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="username">
                  <b>Name</b>
                  <span className="text-danger">&nbsp;* &nbsp; </span>
                </label>
                {
                  productDetails.formValidation.userNameValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.userNameValid}</span> : ""
                }
                <input type="text" defaultValue={displayName} className={`form-control ${productDetails.formValidation.userNameValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Name" name="userName" disabled required />
              </div>
              <div className="col-sm-6">
                <label htmlFor="mobileNumber">
                  <b>Mobile number</b>
                  <span className="text-danger">&nbsp;* &nbsp; </span>
                </label>
                {
                  productDetails.formValidation.mobileNumberValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.mobileNumberValid}</span> : ""
                }
                {phone ?
                  <input type="tel" disabled pattern="[789][0-9]{9}" className={`form-control ${productDetails.formValidation.mobileNumberValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Mobile Number"
                    defaultValue={phone} name="mobileNumber" />
                  :
                  <input type="tel" pattern="[789][0-9]{9}" className={`form-control ${productDetails.formValidation.mobileNumberValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Mobile Number"
                    name="mobileNumber" />
                }
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-6">
                <label htmlFor="email">
                  <b>Email</b>
                  <span className="text-danger">&nbsp;* &nbsp; </span>
                </label>

                {
                  productDetails.formValidation.emailValid.length > 0 ? <span className="text-danger text-right">{productDetails.formValidation.emailValid}</span> : ""
                }
                <input type="gmail" disabled className={`form-control ${productDetails.formValidation.emailValid && 'is-invalid'}`} onChange={getInput} placeholder="Enter Email" defaultValue={userEmail} name="email" />
                <p>We will send you a confirmation mail after posting</p>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary text-center">Post Now</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Sell
