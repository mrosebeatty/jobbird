import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleJob extends React.Component {
  constructor() {
    super()
    this.state = {
      job: {}
    }
  }

  saveJob(job) {
    //this is where we'll write the function to save a job
    //const prevStateCampuses = this.state.campuses;
    // if (prevStateCampuses.indexOf(campus) === -1) {
    //   this.setState({
    //     campuses: [...prevStateCampuses, campus],
    //   });
    // }
  }

  async componentDidMount() {
    try {
      const jobId = this.props.match.params.jobId

      const res = await axios.get(`/api/jobs/${jobId}`)

      this.setState({job: res.data})
    } catch (error) {
      console.log('This is the error from componentDidMount in SingleJob')
    }
  }

  render() {
    const job = this.state.job
    return (
      <div>
        <div>
          <p>Title: {job.title}</p>
          <button type="button" className="float-right" onClick={this.saveJob}>
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
