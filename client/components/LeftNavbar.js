import React, {Component} from 'react'
import {Route, NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TrelloJobBoard from './TrelloJobBoard'
import {logout, me} from '../store'
import Search from './Search'
import Home from './Home'
import SingleJob from './SingleJob'

class LeftNavBar extends Component {
  componentDidMount() {
    this.props.me()
  }

  render() {
    const {isLoggedIn, handleClick} = this.props
    console.log(this.props)
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <ul className="sidenav list-group list-group-flush bg-light ">
              <li className="nav-item list-group-item bg-light ">
                <nav>
                  <Link className="text-dark" to="/jobboard">
                    My Job Board
                  </Link>
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
            <div className="col-12">
              <Route exact path="/home" component={Home} />
              <Route exact path="/jobboard" component={TrelloJobBoard} />
              <Route exact path="/search" component={Search} />
              <Route path="/jobs/:jobId" component={SingleJob} />
            </div>
          </div>
        ) : (
          <div>
            <Home />
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  console.log(state)
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    me: () => dispatch(me()),
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(LeftNavBar)
