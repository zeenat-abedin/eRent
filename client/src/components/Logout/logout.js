import React, { useEffect } from 'react'
import { auth } from "../../firebase/util";
import { clearCurrentUser } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux"
function Logout({ history }) {
  const dispatch = useDispatch()
  useEffect(() => {
    auth.signOut();
    localStorage.clear("user");
    dispatch(clearCurrentUser())
    history.push("/auth");
  })
  return (
    <React.Fragment>

    </React.Fragment>
  )
}
export default Logout
