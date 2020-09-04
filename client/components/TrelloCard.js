import React, {Component} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import axios from 'axios'

export class TrelloCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userCards: {},
      jobs: []
    }
  }

  async componentDidMount() {
    try {
      const {data: {id: userId}} = await axios.get(`/api/auth/me`)
      const {data} = await axios.get(`/api/userjobs/${userId}`)
      //console.log ("THIS IS USERJOBS", data)
      this.setState({userCards: data})
      let jobsArr = []
      await Promise.all(
        this.state.userCards.map(async obj => {
          let jobId = obj.jobId
          const res = await axios.get(`/api/jobs/${jobId}`)
          //console.log("DATA", data)
          return jobsArr.push(res.data)
        })
      )
      this.setState({
        jobs: jobsArr
      })
    } catch (error) {
      console.log(
        'This is the error from componentDidMount in TrelloBoard',
        error
      )
    }
  }
  // async componentDidMount() {
  //   try {
  //     let jobsArr = []
  //     await Promise.all(
  //       this.props.userjobs.map(async obj => {
  //         let jobId = obj.jobId
  //         const {data} = await axios.get(`/api/jobs/${jobId}`)
  //         //console.log("DATA", data)
  //         return jobsArr.push(data)
  //       })
  //     );
  //     this.setState({
  //       cardJobs: jobsArr
  //     });
  //     }catch (error) {
  //     console.log(
  //       'This is the error from componentDidMount in SingleJob' + error
  //     )
  //   }
  // }

  render() {
    const {text, id, index} = this.props
    const jobsinfo = this.state.jobs.map(obj => {
      return <li key={obj.id}>{obj.title} </li>
    })

    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card my-1">
              {/* <p>{text}</p> */}
              <ul>{jobsinfo}</ul>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}
export default TrelloCard

/*
   map(async obj=>{
       const jobId = obj.jobId
       const userId = obj.userId
      const {data} = await axios.get(`/api/userjobs/${userId}/${jobId}`)
       return this.setState({singlejob: data})
      })
console.log("INSIDE DID MOUNT", this.props.userjobs )
const TrelloCard = ({text, id, index}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card my-1">
            <p>{text}</p>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TrelloCard







*/
