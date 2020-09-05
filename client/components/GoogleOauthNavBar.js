import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../store'
import OAuthLoginForm from './oauth-login-form.'

const GoogleOauthNavBar = ({handleClick, isLoggedIn}) => (
  <div className="d-flex topnav row">
    <nav className="col">
      <a href="/">
        <img src="/job-quest-logo.png" />
      </a>
    </nav>
    {isLoggedIn ? (
      <ul className="nav ">
        {/*The navbar will show these links after you log in*/}
        <li className="nav-item flex-end col">
          <a
            href="#"
            onClick={handleClick}
            className="btn btn-danger white p-1 m-1 rounded"
          >
            Log out
          </a>
        </li>
      </ul>
    ) : (
      /*The navbar will show these links if you are not logged in*/
      <div>
        <ul className="nav  ">
          <li className="nav-item p-0 m-0 flex-end col">
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
