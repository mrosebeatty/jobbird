import React from 'react'

import Navbar from './components/added comp/Navbar'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="main-page-content">
        <Routes />
      </div>
    </div>
  )
}

export default App
