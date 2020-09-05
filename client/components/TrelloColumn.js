import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import TrelloCard from './TrelloCard'
//import TrelloAddBtn from './TrelloAddBtn'

const TrelloColumn = ({title, cards, listID}) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="card col-3"
        >
          <div className="text-dark row d-flex justify-content-around mt-5">
            <span>
              <i className="text-info far fa-file" />
            </span>
            <p className="text-center lead">{title}</p>
            <span>
              <i className=" fas fa-ellipsis-h" />
            </span>
          </div>
          <button type="button" className="btn btn-outline-info my-5 ">
            +
          </button>

          {cards.map((card, index) => {
            return (
              <TrelloCard
                key={card.id}
                index={index}
                text={card.company}
                title={card.title}
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
