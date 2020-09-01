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
        <div>
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
