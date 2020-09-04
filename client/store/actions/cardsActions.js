import {CONSTANTS} from '../actions'

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {text, listID}
  }
}

export const loadJobs = testJobs => {
  return {
    type: CONSTANTS.LOAD_CARD_JOBS,
    testJobs
  }
}
