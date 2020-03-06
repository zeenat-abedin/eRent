import React from 'react'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from '../../config/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Example({ userDetails, userId }) {
  let { email, full_name, phone_number } = userDetails
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [userdata, updateUserData] = useState({ full_name: full_name, phone_number: phone_number })
  const getInput = (e) => {
    console.log(e.target.value)
    updateUserData({
      ...userdata,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {
    const updateProfile = async () => {
      try {
        let result = axios.post(`/profile/updateprofile/${userId}`, userdata)
        if (result) {
          toast.warn("successfully updated")
        }
      } catch (err) {
        toast.warn("Error")
      }
    }
    updateProfile()
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }}>
          <Modal.Title style={{ "color": "white" }}>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ToastContainer />
          <form>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input name="full_name" type="text" onChange={getInput} defaultValue={userdata.full_name} className="form-control" placeholder="Name" />
              </div>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" defaultValue={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" disabled />
            </div>
            {phone_number.charAt(0) !== "0" ?
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                <input type="tel" disabled pattern="[789][0-9]{9}" className="form-control" placeholder="Mobile Number"
                  defaultValue={phone_number} name="phone_number" />
              </div>
              :
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                <input type="tel" pattern="[789][0-9]{9}" defaultValue={phone_number} onChange={getInput} className="form-control" placeholder="Mobile Number"
                  name="phone_number" />
              </div>
            }
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
          </Button>
          </form>
        </Modal.Body>
        <Modal.Footer style={{ "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }}>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
export default Example
