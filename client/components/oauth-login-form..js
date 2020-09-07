import React from 'react'

const OAuthLoginForm = () => (
  <form method="get" action="/auth/google">
    <div>
      <button type="submit" className="btn btn-info mr-3">
        Log in with Google
      </button>
    </div>
  </form>
)

export default OAuthLoginForm
