import React from 'react'
import {connect} from 'react-redux'
import TrelloColumn from './TrelloColumn'
import {DragDropContext} from 'react-beautiful-dnd'
import {sort} from '../store/reducers/fakeBoardReducer'

class TrelloJobBoard extends React.Component {
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
    const {lists1} = this.props

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="row">
          {lists1.map(list => (
            <TrelloColumn
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
        </div>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  lists1: state.lists1
})

export default connect(mapStateToProps)(TrelloJobBoard)
