import {CONSTANTS} from '../actions'
import {loadJobs} from '../actions/cardsActions'
import axios from 'axios'

const WISHLIST = 0
const APPLIED = 1
const INTERVIEW = 2
const OFFER = 3
// const REJECTED = 4

const initialState = [
  {
    id: WISHLIST,
    title: 'WISHLIST',
    cards: []
  },
  {
    id: APPLIED,
    title: 'APPLIED',
    cards: []
  },
  {
    id: INTERVIEW,
    title: 'INTERVIEW',
    cards: []
  },
  {
    id: OFFER,
    title: 'OFFER',
    cards: []
  }
  // {
  //   id: REJECTED,
  //   title: 'REJECTED',
  //   cards: []
  // }
]

//thunk to get the jobs

export const fetchJobs = () => {
  return async function(dispatch) {
    try {
      const {data: {id: userId}} = await axios.get(`/api/auth/me`)
      const {data} = await axios.get(`/api/userjobs/${userId}`)
      console.log('this is data', data)

      dispatch(loadJobs(data[0].jobs))
    } catch (error) {
      console.log(error)
    }
  }
}
//-------------------

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    ///test jobs thunk, to get cards/jobs

    case CONSTANTS.LOAD_CARD_JOBS: {
      console.log(action.testJobs)
      const newState = [...state].map(column => {
        //  console.log(column)
        action.testJobs.forEach(job => {
          //console.log('job status', column.id, 'job id', job.status)
          if (job.userjobs.status == column.id) {
            column.cards.push(job)
          }
          // console.log(job, column)
        })
        return column
      })
      return newState
    }

    default:
      return state
  }
}

export default listsReducer
