import React, { Fragment } from 'react'
import { Nav } from 'react-bootstrap'

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
                <th scope="col">Type</th>
                <th scope="col">Bedrooms</th>
              </tr>
            </thead>
            {userProducts.map((data, index) => {
              return <tbody key={index}>
                <tr>
                  <td>{data.city}</td>
                  <td>{data.houseType}</td>
                  <td>{data.bedrooms}BHK</td>
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
