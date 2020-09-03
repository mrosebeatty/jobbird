import React from 'react'
import {Route, NavLink} from 'react-router-dom'

import TrelloJobBoard from './TrelloJobBoard'
import Search from './Search'
import Home from './Home'

const LeftNavBar = () => {
  return (
    <div>
      <ul className="navbar justify-content-end shadow p-3 mb-5 bg-light rounded">
        <li className="nav-item btn btn-light mx-3">
          <nav>
            <NavLink className="text-dark" to="/">
              Home
            </NavLink>
          </nav>
        </li>
        <li className="nav-item btn btn-light">
          <nav>
            <NavLink className="text-dark" to="/jobboard">
              My Job Board
            </NavLink>
          </nav>
        </li>
        <li className="nav-item btn btn-light mx-3">
          <nav>
            <NavLink className="text-dark" to="/search">
              Search
            </NavLink>
          </nav>
        </li>
      </ul>
      <Route exact path="/home" component={Home} />
      <Route exact path="/jobboard" component={TrelloJobBoard} />
      <Route exact path="/search" component={Search} />
    </div>
  )
}

export default LeftNavBar
