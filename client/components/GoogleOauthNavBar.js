import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {logout} from '../store'
import OAuthLoginForm from './oauth-login-form.'

const GoogleOauthNavBar = ({handleClick, isLoggedIn}) => (
  <div className="topnav">
    <a href="/" className="p-0" />
    {isLoggedIn ? (
      <ul className="nav justify-content-end">
        {/*The navbar will show these links after you log in*/}
        <li className="nav-item ">
          <a
            href="#"
            onClick={handleClick}
            className="btn btn-danger white p-0 m-0 rounded"
          >
            {' '}
            Log out
          </a>
        </li>
      </ul>
    ) : (
      /*This will show these links of you are not logged in*/
      <div>
        <a href="/">
          <img src="job-quest-logo.png" />
        </a>
        <ul className="nav justify-content-end p-0 m-0">
          <li className="nav-item p-0 m-0">
            <OAuthLoginForm />
          </li>
        </ul>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(GoogleOauthNavBar)
