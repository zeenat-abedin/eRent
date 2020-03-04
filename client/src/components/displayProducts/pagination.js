import React from 'react'
import './displayProducts.css'
function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = []
  let array = totalPosts
  let sum
  for (let i in array) {
    sum = i
  }
  let length = parseInt(sum) + 1
  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-5">
      </div>
      <div className="col-sm-4 col-ms-4 col-lg-4">
        <nav>
          <ul className="pagination">
            {pageNumbers.map(num => {
              return <li key={num} className="page-item">
                <a onClick={() => paginate(num)} style={{ "color": "blue" }} className="page-link">
                  {num}
                </a>
              </li>
            })}
          </ul>
        </nav>
      </div>
      <div className="col-sm-2 col-md-4 col-lg-3">
      </div>
    </div>
  )
}
export default Pagination
