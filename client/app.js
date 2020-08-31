import React from 'react'
//import GoogleBtn from './GoogleBtn'
import Routes from './components/Routes'
import Home from './components/Home'
import Navbar from './components/navbar'
import TrelloJobBoard from './components/TrelloJobBoard'
import Search from './components/Search'

function App() {
  return (
    <React.Fragment>
      <div className="m-3">
        {/* <div className="row align-items-center"> */}
        {/* <Navbar /> */}
        {/* <div className="col">
            <h1 className="col-8" style={{fontFamily: 'Lobster'}}>
              One Job, Please
            </h1>
          </div> */}
        {/* <div class=" float-right">
            <GoogleBtn />
          </div> */}
        {/* </div> */}
        <Navbar />
        <Routes />

        {/* <Home /> */}
      </div>
      <footer className="row footer justify-content-center bg-dark text-light mt-1 sticky-bottom">
        <p>
          Made by Katie with
          <span className="lead text-danger px-1">
            <i className="fas fa-heart" />
          </span>
        </p>
      </footer>
    </React.Fragment>
  )
}
export default App
