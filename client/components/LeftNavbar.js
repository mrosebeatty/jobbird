import React from 'react'
import {Link} from 'react-router-dom'

const LeftNavbar = () => {
  return (
    <div className="row justify-content-center">
      <div className="btn-group-vertical">
        <button type="button" className="btn btn-outline-dark btn-lg">
          <Link className="text-dark" to="/jobboard">
            My Job Board
          </Link>{' '}
        </button>

        <button type="button" className="btn btn-outline-dark mt-3 btn-lg">
          <Link className="text-dark" to="/search">
            Search
          </Link>
        </button>
      </div>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
               <Link to="/">My Job Board</Link>
              <a className="nav-link" href="/jobboard">
                My Job Board
              </a>
            </li>
            <li className="nav-item">
              <Link to="/search">Search</Link>
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  )
}

export default LeftNavbar
