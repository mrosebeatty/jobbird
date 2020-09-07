import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="homepage container">
        <div className="row align-items-center mt-5">
          <div className="col-4">
            <h1 className="display-6 text-lobster">
              It's your career. Don't wing it.
            </h1>
            <p className="lead">
              Leave spreadsheets and Notes apps in the dust and fly to your next
              role with jobBird.
            </p>
          </div>
          <div className="col-8">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-8">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
              alt=""
            />
          </div>
          <div className="col-4">
            <div className="font-weight-bold logo">Step 1. Search</div>
            <p>
              Explore tech opportunities from all over the world, sourced from
              GitHub's own job board.
            </p>
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-4">
            <div className="font-weight-bold logo">Step 2. Save</div>
            <p>
              See a role you like? Just click save to add it to your jobBird job
              board!
            </p>
          </div>
          <div className="col-8">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-8">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
              alt=""
            />
          </div>
          <div className="col-4">
            <div className="font-weight-bold logo">Step 3. Prep & apply</div>
            <p>
              With jobBird's convenient drag-and-drop organization
              functionality, you'll never lose track of where you are in the
              hiring process.
            </p>
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-4">
            <div className="font-weight-bold logo">Step 4. Organize</div>

            <p>
              Need an easy-to-find spot for the email addresses and phone
              numbers of your company contacts? Looking for a place to store
              interview notes? Save everything you need with jobBird's Contacts
              and Notes tabs.
            </p>
          </div>
          <div className="col-8">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
              alt=""
            />
          </div>
        </div>
        {/* <div className=" text-center">
          jobBird. Because it's more than just a job. It's your flocking career.
        </div> */}
      </div>
    )
  }
}
export default Home
