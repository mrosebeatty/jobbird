import React from 'react'
import {Route} from 'react-router-dom'

import GoogleOauthNavBar from './components/GoogleOauthNavBar'
import LeftNavBar from './components/LeftNavBar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <div className="row">
        <GoogleOauthNavBar />
      </div>

      {/* <div className="row m-3">
        <div className="col">
          <LeftNavBar />
        </div>
      </div> */}
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
