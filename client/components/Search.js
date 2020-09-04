import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

// import dummyData2 from './dummyData2'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  async componentDidMount() {
    try {
      const {data} = await axios.get(`/api/jobs`)
      this.setState({
        ///axios.get(`/api/:userId`
        jobs: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleUpdate(keyword) {
    let filteredJobs = []
    this.state.jobs.filter(o => {
      if (
        o.company.toLowerCase().includes(keyword.toLowerCase()) ||
        o.title.toLowerCase().includes(keyword.toLowerCase()) ||
        o.location.toLowerCase().includes(keyword.toLowerCase())
      ) {
        filteredJobs.push(o)
      }

      return filteredJobs
    })
    console.log('FILTREDJOBS ARRAY', filteredJobs)
    //console.log("THIS.state.jobs BEFORE", this.state.jobs)
    this.setState({jobs: filteredJobs})
    console.log(' jobs AFTER', this.state.jobs)
  }

  render() {
    const {jobs} = this.state
    return (
      <div className="main">
        <SearchBar jobs={jobs} handleUpdate={this.handleUpdate} />
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
