import React, { Fragment } from 'react'
import Header from '../Navbar/Navbar'
import ProductDisplay from '../displayProducts/productsdisplay'
import { useSelector, useDispatch } from 'react-redux'
import axios from '../../config/axios'
import { USER_PRODUCTS } from '../../redux/actions/actionType'
import UserDetailsFile from './userDetailsProfile'
import UserProductsFile from './userProducts'
function Profile() {
  const Products = useSelector(state => state.users.products)
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
