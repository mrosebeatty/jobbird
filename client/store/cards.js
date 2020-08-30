const CONSTANTS = {
  ADD_CARD: 'ADD_CARD',
  ADD_LIST: 'ADD_LIST',
  DRAG_HAPPENED: 'DRAG_HAPPENED'
}

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {text, listID}
  }
}
