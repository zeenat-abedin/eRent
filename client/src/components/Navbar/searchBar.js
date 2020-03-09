import React, { useState, useEffect, Fragment } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import axios from '../../config/axios'
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_PRODUCTS } from '../../redux/actions/actionType'

import './Navbar.scss'
function Search() {
  const [searchedValue, setValue] = useState(null)
  const dispatch = useDispatch()
  const getSearchData = (e) => {
    setValue(e.target.value)
  }
  const submitSearch = (e) => {
    e.preventDefault()
    const fetchSearchedValue = async () => {
      try {
        let result = await axios.get(`search/${searchedValue}`)
        if (result.data.length > 0) {
          dispatch({
            type: GET_PRODUCTS,
            payload: result.data
          })
        } else {
          toast.warn("OOps, Not available")
        }
      } catch (err) {
        toast.warn("something went Wrong, Do refresh")
      }
    }
    fetchSearchedValue()
  }
  return (
    <Fragment>
      <Form inline>
        <FormControl type="text" onChange={getSearchData} placeholder="Search-City/bedrooms" className="mr-sm-2" />
        <Button onClick={submitSearch} style={{ "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }} >Search</Button>
        <ToastContainer ClassName="toast_container" />
      </Form>
    </Fragment>
  )
}
export default Search
