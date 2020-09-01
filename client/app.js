import React from 'react'
//import GoogleBtn from './GoogleBtn'
import {NavLink} from 'react-router-dom'
import Routes from './components/Routes'
import Home from './components/Home'
import Navbar from './components/navbar'
import TrelloJobBoard from './components/TrelloJobBoard'
import Search from './components/Search'

function App() {
  return (
    <React.Fragment>
      <ul className="nav justify-content-end shadow p-3 mb-5 bg-light rounded">
        <li className="nav-item btn btn-light mx-3">
          <NavLink className="text-dark" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item btn btn-light">
          <NavLink className="text-dark" to="/jobboard">
            Job Board
          </NavLink>
        </li>
        <li className="nav-item btn btn-light mx-3">
          <NavLink className="text-dark" to="/search">
            Search
          </NavLink>
        </li>
      </ul>
      <div className="m-3">
        <Navbar />
        <Routes />

        <Home />
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
