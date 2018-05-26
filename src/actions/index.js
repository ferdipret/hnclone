import * as constants from './constants'

export function setStoriesIdsList(payload) {
  return {
    type: constants.SET_STORIES_IDS_LIST,
    payload,
  }
}

export function setStoriesListData(payload) {
  return {
    type: constants.SET_STORIES_LIST_DATA,
    payload,
  }
}
