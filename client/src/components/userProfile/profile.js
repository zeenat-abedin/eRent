import React, { Fragment, useState, useEffect } from 'react'
import Header from '../Navbar/Navbar'
import ProductDisplay from '../displayProducts/productsdisplay'
import { useSelector } from 'react-redux'
import axios from '../../config/axios'
import UserDetails from './userDetailsProfile'
function Profile() {
  const Products = useSelector(state => state.users.products)
  const [userDetails, setUserDetails] = useState(null)
  let userId = JSON.parse(localStorage.getItem("user")).id

  useEffect(() => {
    const getProfileDetails = async () => {
      try {
        let profileDetails = await axios.get(`/profile/${userId}`)
        setUserDetails(profileDetails.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getProfileDetails()
  }, [])
  return (
    <Fragment>
      <Header />
      <div className="container">
        {
          userDetails ? <div>
            <UserDetails userDetails={userDetails} userId={userId} />
          </div> : null
        }
        {Products ?
          <ProductDisplay fetchProducts={Products} /> : null
        }
      </div>
    </Fragment>
  )
}
export default Profile
