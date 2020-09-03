import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import TrelloJobBoard from './TrelloJobBoard'
import Search from './Search'
import Home from './Home'
import SingleJob from './SingleJob'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobboard" component={TrelloJobBoard} />
          <Route exact path="/search" component={Search} />
          <Route path="/jobs/:jobId" component={SingleJob} />
        </div>
      </Router>
    )
  }
}

//we'll eventually need to change this to have a mapDispatchToProps to load jobs
export default Routes
