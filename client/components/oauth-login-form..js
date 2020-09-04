import React from 'react'

const OAuthLoginForm = () => (
  <form method="get" action="/auth/google">
    <button type="submit" className="btn btn-danger white p-0 m-0 rounded">
      Log in with Google
    </button>
  </form>
)

export default OAuthLoginForm
