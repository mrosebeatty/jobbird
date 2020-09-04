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
      this.setState({userCards: data})
      let jobsArr = []
      await Promise.all(
        this.state.userCards.map(async obj => {
          let jobId = obj.jobId
          const res = await axios.get(`/api/jobs/${jobId}`)
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
