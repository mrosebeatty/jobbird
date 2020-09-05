import React from 'react'
//import GoogleBtn from './GoogleBtn'
import Home from './components/Home'
import GoogleOauthNavBar from './components/GoogleOauthNavBar'
import LeftNavBar from './components/LeftNavBar'
import TrelloJobBoard from './components/TrelloJobBoard'
import Search from './components/Search'

function App() {
  return (
    //ask Madison about adding a switch statement; the navbar should only show when you're logged in
    //also switch statement to go between job board and search page
    <React.Fragment>
      <GoogleOauthNavBar />
      <div>
        <LeftNavBar />
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
