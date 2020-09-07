import React from 'react'
import {Route} from 'react-router-dom'

import GoogleOauthNavBar from './components/GoogleOauthNavBar'
import LeftNavBar from './components/LeftNavBar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <div className="row justify-content-between py-1">
        <div className="container-fluid">
          <GoogleOauthNavBar />
        </div>
      </div>

      <Route
        path="/"
        render={props => props.location.pathname !== '/' && <LeftNavBar />}
      />
      <Route exact path="/" component={Home} />
      <Footer />
    </React.Fragment>
  )
}

export default App
