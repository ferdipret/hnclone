import store from './store'
import * as actions from './actions'

describe('Store', () => {
  const initialState = {
    storiesIdsList: [],
    stories: [],
    numberOfStoriesLoaded: 0,
  }

  describe('when initializing', () => {
    it('should return the default state', () => {
      expect(store(undefined, {})).toEqual(initialState)
    })
  })

  describe('when given the previous state and a valid action type', () => {
    it('should update and return the new state', () => {
      const expectedState = {
        storiesIdsList: [1, 2, 3],
        stories: [],
        numberOfStoriesLoaded: 0,
      }
      const previousState = initialState

      expect(
        store(previousState, actions.setStoriesIdsList([1, 2, 3])),
      ).toEqual(expectedState)
    })
  })
})
