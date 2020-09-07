import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import history from '../history'

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
      history.push('/jobboard')
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
      <div className="row justify-content-center">
        <div className="col-10 border border-info rounded p-5">
          <div className="row justify-content-between">
            <div className="col-6">
              <strong>Title:</strong> {job.title}
            </div>

            <div className="col-2">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.saveJob(job)}
              >
                Save
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div>
                <div>
                  <strong>Company:</strong> {job.company}
                </div>
              </div>
              <div>
                <div>
                  <strong>Type:</strong> {job.type}
                </div>
              </div>
              <div>
                <div className="mt-3">Description: {job.description}</div>
              </div>
            </div>
          </div>

          {/* <div>
            <div>Company: {job.company}</div>
          </div>
          <div>
            <div>Type: {job.type}</div>
          <div className="row">
            <div className="col">
              Description:
              <p dangerouslySetInnerHTML={{__html: job.description}} />
            </div>
          </div>
          <div>
            <div>Description: {job.description}</div>
          </div> */}
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

/*
 <p>Description: {job.description}</p>
<p
            className="Features"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
*/
