import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase/util";
import { clearCurrentUser } from "../../redux/actions/userAction";

const Navbar = ({ history }) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-md">
      <Link className="navbar-brand" to="/">
        eRent
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbr"
        aria-controls="navbr"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbr">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {currentUser || localStorage.getItem("user") ? (
              <p
                onClick={() => {
                  auth.signOut();
                  localStorage.clear("user");
                  dispatch(clearCurrentUser())
                  history.push("/auth");
                }}
                className="nav-link m-0"
              >
                Logout
              </p>
            ) : (
                <Link className="nav-link" to="/auth">
                  Login
              </Link>
              )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
