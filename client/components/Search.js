import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

// import dummyData2 from './dummyData2'

class Search extends React.Component {
  // state = dummyData2;
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }
  async componentDidMount() {
    try {
      const {data} = await axios.get(`/api/jobs`)
      this.setState({
        jobs: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  //state = dummyData2;
  render() {
    const {jobs} = this.state
    return (
      <div>
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="d-flex flex-wrap">
          {/* need to make this a link to the job at job.id */}
          {jobs.map(job => (
            <Link to={`/jobs/${job.id}`} key={job.id}>
              <div key={job.id} className="card border col-sm-6 ">
                <br />
                {/* <img
                src={job.company_logo}
                alt="company logo"
                className="img-thumbnail"
              /> */}
                <p className="card-title">{job.company}</p>
                <br />
                <p className="card-text">{job.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default Search
