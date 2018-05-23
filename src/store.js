import * as constants from './actions/constants'

const defaultState = {
  storiesIdsList: [],
  stories: [],
}

export default (state = defaultState, action) => {
  let newState

  switch (action.type) {
    case constants.SET_STORIES_IDS_LIST:
      newState = {
        ...state,
        storiesIdsList: action.payload,
      }
      break
    default:
      newState = state
      break
  }

  return newState
}
