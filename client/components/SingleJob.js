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
      <div>
        <div>
          <p>Title: {job.title}</p>
          <button
            type="button"
            className="float-right"
            onClick={() => this.saveJob(job)}
          >
            Save
          </button>
        </div>
        <p>Company: {job.company}</p>
        <p>Type: {job.type}</p>
        <p>Description: {job.description}</p>
      </div>
    )
  }
}

// export class SingleCampus extends React.Component {
//   render() {
//     if (this.state.campus) {
//       return (
//         <div>
//           <h1>{campus.name}</h1>
//           <img src={campus.imageUrl} />
//           <p>Location: {campus.address}</p>
//           <p>About: {campus.description}</p>

//           <hr />
//         </div>
//       )
//     } else {
//       return <div>Loading...</div>
//     }
//   }
// }

const mapState = reduxState => {
  return {
    user: reduxState.user
  }
}

export default connect(mapState)(SingleJob)
