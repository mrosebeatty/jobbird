import React, {Component} from 'react'
import {Route, NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TrelloJobBoard from './TrelloJobBoard'
import {logout, me} from '../store'
import Search from './Search'
import Home from './Home'
import SingleJob from './SingleJob'
import FakeBoard from './FakeBoard'

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
          <div className="row justify-content-center">
            <div className="col-2">
              <Link className="btn link text-dark" to="/jobboard">
                My Job Board
              </Link>
              <div>
                <NavLink className="btn link text-dark" to="/search">
                  Search
                </NavLink>
              </div>
            </div>

            {/* <ul className="col-2 ">
              <li className="nav-item list-group-item bg-light ">
                <button className="btn bg-dark" type="button">
                  <Link className="link text-dark" to="/jobboard">
                    My Job Board
                  </Link>
                </button>
              </li>
              <li className="nav-item list-group-item">
                <nav>
                  <NavLink className="link text-dark" to="/search">
                    Search
                  </NavLink>
                </nav>
              </li>
            </ul> */}
            <div className="col-10">
              <Route exact path="/jobboard" component={TrelloJobBoard} />
              <Route exact path="/search" component={Search} />
              <Route path="/jobs/:jobId" component={SingleJob} />
            </div>
          </div>
        ) : (
          <div>{/* <Home /> */}</div>
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
