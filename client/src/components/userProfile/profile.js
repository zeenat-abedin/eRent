import React, { Fragment } from 'react'
import Header from '../Navbar/Navbar'
import ProductDisplay from '../displayProducts/productsdisplay'
import { useSelector } from 'react-redux'
function Profile() {
  const Products = useSelector(state => state.users.products)
  return (
    <Fragment>
      <Header />
      {Products ?
        <ProductDisplay fetchProducts={Products} /> : null
      }
    </Fragment>
  )
}
export default Profile
