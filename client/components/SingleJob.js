import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class SingleJob extends React.Component {
  constructor() {
    super()
    this.state = {
      job: {}
    }
  }

  async componentDidMount() {
    try {
      const jobId = this.props.match.params.jobId
      const res = await axios.get(`/api/jobs/${jobId}`)
      this.setState({job: res.data})
    } catch (error) {
      console.log(
        'This is the error from componentDidMount in SingleJob' + error
      )
    }
  }

  async saveJob(job) {
    console.log('this is the state', this.state)
    try {
      const id = this.state.job.id
      const {data: {id: userId}} = await axios.get(`/api/auth/me`)
      const res = await axios.post(`/api/userjobs/${userId}/${id}/add`, job)
      this.setState({job: res.data})
    } catch (error) {
      console.log(
        'This is the error from componentDidMount in SingleJob' + error
      )
    }
  }

  render() {
    console.log(this.props)
    const job = this.state.job
    return (
      <div className="container">
        <div className="main  card border">
          <div className="row">
            <div className="col">Title: {job.title}</div>
            <button
              type="button"
              className="btn btn-outline-dark flex-end rounded  p-0 m-1"
              onClick={() => this.saveJob(job)}
            >
              Save
            </button>
          </div>

          <div className="row">
            <div className="col">Company: {job.company}</div>
          </div>
          <div className="row">
            <div className="col">Type: {job.type}</div>
          </div>
          <div className="row">
            <div className="col">
              Description:{' '}
              <div dangerouslySetInnerHTML={{__html: job.description}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = reduxState => {
  return {
    user: reduxState.user
  }
}

export default connect(mapState)(SingleJob)
