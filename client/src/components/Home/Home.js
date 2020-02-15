import React from "react";
import NavBar from '../Navbar/Navbar'
import '../Home/home.scss'
import { connect } from 'react-redux'
import ProductsDisplay from '../displayProducts/displayProducts'
import { getProducts } from '../../redux/actions/productAction'
import { useState, useEffect } from 'react'
import { mapDispatchToProps } from '../../redux/store'
function Home(props) {
  useEffect(() => {
    props.dispatch(getProducts())
  }, [])
  let Color = "transparent"
  return (
    <React.Fragment>
      <header className="headerContent">
        <NavBar Color={Color} />
      </header>
      <ProductsDisplay newProducts={props.displayProducts} />
    </React.Fragment>
  )
}

export default connect(mapDispatchToProps)(Home);
