import * as constants from './constants'

export function setStoriesIdsList(payload) {
  return {
    type: constants.SET_STORIES_IDS_LIST,
    payload,
  }
}
