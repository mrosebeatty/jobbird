import React from 'react'
import {connect} from 'react-redux'
import {logout} from './store'
import GoogleOauthNavBar from './components/GoogleOauthNavBar'
import LeftNavBar from './components/LeftNavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <GoogleOauthNavBar />
      </div>

      <div className="row mt-3">
        <div className="col">
          <LeftNavBar />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
