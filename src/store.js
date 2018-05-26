import * as constants from './actions/constants'

export const defaultState = {
  storiesIdsList: [],
  stories: [],
  numberOfStoriesLoaded: 0,
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

    case constants.SET_STORIES_LIST_DATA:
      newState = {
        ...state,
        stories: [...state.stories, ...action.payload],
      }
      break

    default:
      newState = state
      break
  }

  return newState
}
