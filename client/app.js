import React from 'react'
//import GoogleBtn from './GoogleBtn'
import Routes from './components/Routes'
import Home from './components/Home'
import GoogleOauthNavBar from './components/GoogleOauthNavBar'
import LeftNavBar from './components/LeftNavBar'

function App() {
  return (
    <React.Fragment>
      <GoogleOauthNavBar />
      <div className="m-3">
        <div className="col">
          <LeftNavBar />
        </div>

        <Routes />
      </div>
      <footer className="row footer justify-content-center bg-dark text-light mt-1 sticky-bottom">
        <p>
          Made by Mr. Bean with
          <span className="lead text-danger px-1">
            <i className="fas fa-heart" />
          </span>
        </p>
      </footer>
    </React.Fragment>
  )
}
export default App
