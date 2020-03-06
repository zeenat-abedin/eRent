import React, { Fragment } from "react"
import { getProducts } from '../../redux/actions/productAction'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDisplay from './productsdisplay'
import Pagination from './pagination'
import './displayProducts.css'
function ProductsDisplay() {
  const Products = useSelector(state => state.users.products)
  let ProductsByLocation = useSelector(state => state.users.citiesByLocation)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)
  const [color, setColor] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const indexofLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexofLastPosts - postsPerPage;
  let currentProducts
  if (ProductsByLocation) {
    ProductsByLocation = ProductsByLocation.slice(indexOfFirstPosts, indexofLastPosts)
  }
  if (Products) {
    currentProducts = Products.slice(indexOfFirstPosts, indexofLastPosts)
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    setColor({
      color: "changeColor"
    })
  }
  return (
    <Fragment>
      {ProductsByLocation ?
        <ProductDisplay fetchProducts={ProductsByLocation} postsPerPage={postsPerPage} />
        : <ProductDisplay fetchProducts={currentProducts} postsPerPage={postsPerPage} />
      }
      {ProductsByLocation ?
        <Pagination postsPerPage={postsPerPage} totalPosts={ProductsByLocation} paginate={paginate} color={color} />
        :
        <Pagination postsPerPage={postsPerPage} totalPosts={Products} paginate={paginate} color={color} />
      }
    </Fragment>
  )
}

export default ProductsDisplay
