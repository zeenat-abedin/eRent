import React from "react";
import NavBar from '../Navbar/Navbar'
import '../Home/home.scss'
import ProductsDisplay from '../displayProducts/displayProducts'
function Home() {
  let Color = "transparent"
  return (
    <React.Fragment>
      <header className="headerContent">
        <NavBar Color={Color} />
      </header>
      <ProductsDisplay />
    </React.Fragment>
  )
}

export default Home;
