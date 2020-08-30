import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-3">Welcome to JOB QUEST DOT COM</h1>
        <hr />
        <div className="row">
          <div className="jumbotron col-4 bg-transparent">
            <h1 className="display-4">Text about Trelloboard</h1>
            <p className="lead">Organize your job search blah blah etc.</p>
          </div>
          <div className="img-fluid">
            <img
              src="https://images.unsplash.com/photo-1570824514661-85514eed421e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="adorable kitten in front of a tiny hot pink couch"
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="jumbotron col-4 bg-transparent">
            <h1 className="display-4">Text about search page</h1>
            <p className="lead">Find your next tech role etc. etc.</p>
          </div>
          <div className="img-fluid">
            <img
              src="https://images.unsplash.com/photo-1558563331-7b5e0e39be2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="two adult swans swimming with two baby birds"
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="jumbotron col-4 bg-transparent">
            <h1 className="display-4">Text about contacts?</h1>
            <p className="lead">
              We're not sure if we're going to have a separate contacts feature
              but we will find out!
            </p>
          </div>
          <div className="img-fluid">
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="a pile of three chocolate-frosted doughnuts on a white plate"
            />
          </div>
        </div>
        <hr />
        <div className="row" />
      </div>
    )
  }
}
export default Home
