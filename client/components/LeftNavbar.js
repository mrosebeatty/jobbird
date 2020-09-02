import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const LeftNavBar = () => {
  return (
    <div>
      <ul className="navbar justify-content-end shadow p-3 mb-5 bg-light rounded">
        <li className="nav-item btn btn-light mx-3">
          <NavLink className="text-dark" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item btn btn-light">
          <NavLink className="text-dark" to="/jobboard">
            My Job Board
          </NavLink>
        </li>
        <li className="nav-item btn btn-light mx-3">
          <NavLink className="text-dark" to="/search">
            Search
          </NavLink>
        </li>
      </ul>
      {/*
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

export default LeftNavBar
