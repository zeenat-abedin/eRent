import React, { Fragment } from 'react'
import { Nav } from 'react-bootstrap'
import axios from '../../config/axios'
import {Link} from "react-router-dom"
const removeProduct = (id) => {
  try {
      axios.get(`/delete/${id}`)
  } catch (err) {
    console.log(err)
  }
}
function UserProducts({ userProducts }) {
  return (
    <Fragment>
      {userProducts.length > 0 ?
        <div>
          <h1>Your Products</h1>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">City</th>
                <th scope="col">Bedrooms</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {userProducts.map((data, index) => {
              return <tbody key={index}>
                <tr>
                  <td><Link to={`/post/${data.id}`}>{data.city}</Link></td>
                  <td>{data.bedrooms}BHK</td>
                  <td><button className="btn btn-danger" onClick={() => removeProduct(data.id)}>Remove</button></td>
                </tr>
              </tbody>
            })}
          </table>
        </div>
        : <div>
          <h1>No Products</h1>
          <Nav.Link href="/sellProduct" style={{ "width": "120px", "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }} className="btn btn-outline-light button-text nav-text mb-5">Sell Product</Nav.Link>
        </div>
      }

    </Fragment>
  )
}
export default UserProducts
