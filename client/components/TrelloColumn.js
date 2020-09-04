import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import TrelloCard from './TrelloCard'
import TrelloAddBtn from './TrelloAddBtn'

const TrelloColumn = ({title, cards, listID, userjobs}) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="card col-3"
        >
          <h4>{title}</h4>
          {cards.map((card, index) => {
            return (
              <TrelloCard
                key={card.id}
                index={index}
                text={card.company}
                id={card.id}
              />
            )
          })}
          {/* <TrelloAddBtn listID={listID} /> */}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default TrelloColumn
