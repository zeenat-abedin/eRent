import React, { Fragment, useState, useEffect } from 'react'
import Header from '../Navbar/Navbar'
import ProductDisplay from '../displayProducts/productsdisplay'
import { useSelector, useDispatch } from 'react-redux'
import axios from '../../config/axios'
import { USER_PRODUCTS } from '../../redux/actions/actionType'
import UserDetailsFile from './userDetailsProfile'
import UserProductsFile from './userProducts'
function Profile() {
  const Products = useSelector(state => state.users.products)
  const userProducts = useSelector(state => state.users.userProducts)
  const [userDetails, setUserDetails] = useState(null)
  let dispatch = useDispatch()
  let userId = JSON.parse(localStorage.getItem("user")).id
  let userName = JSON.parse(localStorage.getItem("user")).displayName
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
  }, [userId])
  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        let userProducts = await axios.get(`/profile/sellerproducts/${userId}`)
        if (userProducts) {
          dispatch({
            type: USER_PRODUCTS,
            payload: userProducts.data
          })
        }
      } catch (err) {
        console.log("err")
      }
    }
    fetchUserProducts()
  })
  return (
    <Fragment>
      <Header />
      <div className="container">
        {Products ?
          <ProductDisplay fetchProducts={Products} /> :
          <div>
            {
              userDetails ? <div className="mt-4">
                <h4>Hello <b>{userName}</b> </h4>
                <UserDetailsFile userDetails={userDetails} userId={userId} />
              </div> : null
            }
            {
              userProducts ? <div className='mb-5'>
                <hr style={{ "border": '1px solid black' }} />
                <UserProductsFile userProducts={userProducts} />
              </div>
                : null
            }
          </div>
        }
      </div>
    </Fragment>
  )
}
export default Profile
