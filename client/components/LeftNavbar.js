import React from 'react'
import {Route, NavLink} from 'react-router-dom'

import TrelloJobBoard from './TrelloJobBoard'
import Search from './Search'
import Home from './Home'
import SingleJob from './SingleJob'

const LeftNavBar = () => {
  return (
    <div>
      <ul className="sidenav list-group list-group-flush bg-light ">
        <li className="nav-item list-group-item bg-light ">
          <nav>
            <img src="job-quest-logo.png" />
          </nav>
          <nav>
            <NavLink className="text-dark" to="/jobboard">
              My Job Board
            </NavLink>
          </nav>
        </li>
        <li className="nav-item list-group-item bg-light">
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
      <Route path="/jobs/:jobId" component={SingleJob} />
    </div>
  )
}

export default LeftNavBar
