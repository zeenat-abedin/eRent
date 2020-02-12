import React from "react";
import NavBar from '../Navbar/Navbar'
import '../Home/home.scss'
function Home() {
  let Color = "transparent"
  return (
    <React.Fragment>
      <header className="headerContent">
        <NavBar Color={Color} />
      </header>
    </React.Fragment>
  )
}

export default Home;
