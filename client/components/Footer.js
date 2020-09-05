import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../store'

const Footer = ({isLoggedIn}) => (
  <div>
    {!isLoggedIn ? (
      <footer className="row footer justify-content-center bg-dark text-light mt-1 sticky-bottom">
        <p>
          Made by Mr. Bean with
          <span className="lead text-danger px-1">
            <i className="fas fa-heart" />
          </span>
        </p>
      </footer>
    ) : (
      <div />
    )}
  </div>
)

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

export default connect(mapState, mapDispatch)(Footer)
