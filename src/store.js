const defaultState = {
  storiesIdsList: [],
  stories: [],
}

export default (state = defaultState, action) => {
  let newState

  switch (action.type) {
    default:
      newState = state
      break
  }

  return newState
}
