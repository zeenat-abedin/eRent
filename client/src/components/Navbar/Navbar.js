import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase/util";
import { clearCurrentUser } from "../../redux/actions/userAction";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Navbar.scss'
const NavBar = ({ Color, history }) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar className='navBar fixed-top' style={{ background: Color ? "transparent" : "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }} sticky='top' collapseOnSelect expand="lg">
        <Navbar.Brand href="/" className="nav-text logo">eRent</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-text" href="#features">Sort</Nav.Link>
            {currentUser || localStorage.getItem("user") ? (
              <div className="mr-2">
                <NavDropdown className="dropDown" title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/favorites"><i className="fa fa-bookmark mr-2" aria-hidden="true"></i>Favorites</NavDropdown.Item>
                  <NavDropdown.Item href="/edit"><i className="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {currentUser || localStorage.getItem("user") ? (
                    <div
                    >
                      <NavDropdown.Item onClick={() => {
                        auth.signOut();
                        localStorage.clear("user");
                        dispatch(clearCurrentUser())
                        history.push("/auth");
                      }}>
                        <i className="fa fa-sign-out mr-2" aria-hidden="true"></i>
                        Logout</NavDropdown.Item>
                    </div>) : (null)}
                </NavDropdown>
              </div>
            ) : (
                <Nav.Link href='/auth' className="btn btn-outline-light nav-text button-text mr-2"> Login</Nav.Link>
              )}
            {currentUser || localStorage.getItem("user") ? (
            <Nav.Link href="/sellProduct" className="btn btn-outline-light button-text nav-text mr-3">Sell Product</Nav.Link>
            ):(
            <Nav.Link href="/auth" className="btn btn-outline-light button-text nav-text mr-3">Sell Product</Nav.Link>
            )}
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
