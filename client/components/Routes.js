import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import TrelloJobBoard from './TrelloJobBoard'
import LeftNavbar from './LeftNavbar'
import Search from './Search'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <nav>One Job, Please</nav>
            <LeftNavbar />
            {/* <h1>Subtitle</h1> */}
          </div>
          <Route exact path="/jobboard" component={TrelloJobBoard} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    )
  }
}

//we'll eventually need to change this to have a mapDispatchToProps to load jobs
export default Routes
