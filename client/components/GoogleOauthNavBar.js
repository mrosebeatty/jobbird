import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import OAuthLoginForm from './oauth-login-form.'

const GoogleOauthNavBar = ({handleClick, isLoggedIn}) => (
  <div className="topnav">
    <a href="/" className="p-0" />
    {isLoggedIn ? (
      <ul className="nav justify-content-end">
        {/*The navbar will show these links after you log in*/}
        <li className="nav-item ">
          <a href="#" onClick={handleClick}>
            Log out
          </a>
        </li>
      </ul>
    ) : (
      <ul className="nav justify-content-end p-0 m-0">
        <li className="nav-item p-0 m-0">
          {/* The navbar will show these links before you log in */}
          <OAuthLoginForm />
        </li>
      </ul>
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

/**
 * PROP TYPES
 */
GoogleOauthNavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
