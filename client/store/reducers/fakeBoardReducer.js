export const CONSTANTS = {
  ADD_CARD: 'ADD_CARD',
  ADD_LIST: 'ADD_LIST',
  DRAG_HAPPENED: 'DRAG_HAPPENED'
}

let listID = 4
let cardID = 6

const initialState = [
  {
    id: `list-${0}`,
    title: 'WISHLIST',
    cards: [
      {
        id: `card-${0}`,
        company: 'Bitovi',
        text: 'Senior JavaScript Developer'
      },
      {
        id: `card-${1}`,
        company: 'Novartis',
        text: 'Web Developer'
      }
    ]
  },
  {
    id: `list-${1}`,
    title: 'APPLIED',
    cards: []
  },
  {
    id: `list-${2}`,
    title: 'INTERVIEW',
    cards: []
  },
  {
    id: `list-${3}`,
    title: 'OFFER',
    cards: []
  }
]

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  }
}

const fakeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CONSTANTS.ADD_LIST:
    //   const newList = {
    //     title: action.payload,
    //     cards: [],
    //     id: `list-${listID}`,
    //   }
    //   listID += 1
    //   return [...state, newList]

    // case CONSTANTS.ADD_CARD: {
    //   const newCard = {
    //     text: action.payload.text,
    //     id: `card-${cardID}`,
    //   }
    //   cardID += 1

    //   const newState = state.map((list) => {
    //     if (list.id === action.payload.listID) {
    //       return {
    //         ...list,
    //         cards: [...list.cards, newCard],
    //       }
    //     } else {
    //       return list
    //     }
    //   })

    //   return newState
    // }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload

      const newState = [...state]

      //if the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)

        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      //if the list is in different column

      if (droppableIndexStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id)

        const card = listStart.cards.splice(droppableIndexStart, 1)

        const listEnd = state.find(list => droppableIdEnd === list.id)

        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      return newState

    default:
      return state
  }
}

export default fakeBoardReducer
