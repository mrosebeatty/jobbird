import React from 'react'
import {connect} from 'react-redux'
import TrelloColumn from './TrelloColumn'
import TrelloAddBtn from './TrelloAddBtn'
import {DragDropContext} from 'react-beautiful-dnd'
import {sort} from '../store/actions'
import {fetchJobs} from '../store/reducers/listsReducer'

class TrelloJobBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // userjobs: {},
    }
  }

  componentDidMount() {
    this.props.fetchJobs()
  }

  onDragEnd = result => {
    const {destination, source, draggableId} = result

    if (!destination) {
      return
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }

  render() {
    const {lists} = this.props
    console.log('this are props', this.props)

    return (
      <div className="main">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="row">
            {lists.map(list => {
              return (
                <TrelloColumn
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                />
              )
            })}
            {/* <TrelloAddBtn list /> */}
          </div>
        </DragDropContext>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

const mapDispatch = dispatch => {
  return {
    fetchJobs: () => dispatch(fetchJobs())
  }
}

export default connect(mapStateToProps, mapDispatch)(TrelloJobBoard)
