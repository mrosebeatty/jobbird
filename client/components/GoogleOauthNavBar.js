import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import OAuthLoginForm from './oauth-login-form.'

const GoogleOauthNavBar = ({handleClick, isLoggedIn}) => (
  <div>
    <ul className="nav">
      {isLoggedIn ? (
        <div className="nav-item btn btn-dark">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <OAuthLoginForm />
        </div>
      )}
    </ul>
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
