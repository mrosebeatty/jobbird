import React from 'react'
import {connect} from 'react-redux'
import {logout} from './store'
import GoogleOauthNavBar from './components/GoogleOauthNavBar'
import LeftNavBar from './components/LeftNavBar'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <div className="row">
        <GoogleOauthNavBar />
      </div>

      <div className="row m-3">
        <div className="col">
          <LeftNavBar />
        </div>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default App
