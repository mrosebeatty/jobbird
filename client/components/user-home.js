import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, imgUrl} = props

  return (
    <div>
      <h3>Welcome, {firstName}</h3>
      <h2>
        {' '}
        Let us help you organize the process to finding the job of your dreams
      </h2>
      <img src={imgUrl} alt="photo of person" />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName,
    imgUrl: state.user.imgUrl
  }
}

export default connect(mapState)(UserHome)
