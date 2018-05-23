import store from './store'

describe('Store', () => {
  describe('when initializing', () => {
    it('should return the default state', () => {
      const initialState = {
        storiesIdsList: [],
        stories: [],
      }

      expect(store(undefined, {})).toEqual(initialState)
    })
  })
})
