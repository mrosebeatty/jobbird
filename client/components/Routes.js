import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import TrelloJobBoard from './TrelloJobBoard'
// import LeftNavbar from './LeftNavbar'
import Search from './Search'
import Home from './Home'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ul className="nav justify-content-end">
          <li className="nav-item btn btn-light mx-3">
            <NavLink className="text-dark" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item btn btn-light">
            <NavLink className="text-dark" to="/jobboard">
              Job Board
            </NavLink>
          </li>
          <li className="nav-item btn btn-light mx-3">
            <NavLink className="text-dark" to="/search">
              Search
            </NavLink>
          </li>
        </ul>

        <div>
          {/* <div>
            <nav>One Job, Please</nav>
            <LeftNavbar />
            <h1>Subtitle</h1>
          </div> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/jobboard" component={TrelloJobBoard} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    )
  }
}

//we'll eventually need to change this to have a mapDispatchToProps to load jobs
export default Routes
