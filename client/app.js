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
      <div className="container">
        <div className="row align-items-center">
          {/* <Navbar /> */}
          <div className="col">
            <h1 className="col-8" style={{fontFamily: 'Lobster'}}>
              One Job, Please
            </h1>
          </div>
          {/* <div class=" float-right">
            <GoogleBtn />
          </div> */}
        </div>
        <Routes />
        <TrelloJobBoard />
        <Search />
        <Home />
      </div>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            I tried to make a footer. Copyright Katie 2020.
          </span>
        </div>
      </footer>
    </React.Fragment>
  )
}
export default App
