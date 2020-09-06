import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="row align-items-center mt-5">
          <div className="col-4">
            <h1 className="display-4">Job Board</h1>
            <p className="lead">
              Fusce tempus auctor sem nec lacinia. Donec facilisis eu eros id
              volutpat. Integer elit mi, congue id massa sit amet, molestie
              dignissim dui.
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
          <div className="col-3">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-vector/modern-geometric-infographic-template_1201-1154.jpg"
            />
          </div>
          <div className="col-9">
            <p>
              Ut accumsan libero in fermentum interdum. Sed at sagittis orci.
              Aliquam vel sapien velit. Nulla facilisi. In feugiat, lorem et
              lobortis euismod, dolor elit aliquet ligula, ac tristique velit
              diam et orci. Nullam eget ultrices lorem. Maecenas suscipit lectus
              sapien, et efficitur odio imperdiet a. Proin eu est tristique,
              molestie augue sit amet, eleifend ex.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://image.freepik.com/free-vector/business-infographic-design_23-2148641733.jpg"
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://image.freepik.com/free-vector/infographic-pack-with-colorful-style_23-2147700151.jpg"
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src="https://image.freepik.com/free-vector/graphic-design-labels-geometric-style_23-2148481322.jpg"
            />
          </div>
        </div>

        {/* <div className="row">
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
        </div> */}
      </div>
    )
  }
}
export default Home
