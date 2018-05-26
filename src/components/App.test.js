import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

import store, { defaultState } from '../store'
import { setStoriesIdsList } from '../actions'

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('should get it`s default state from the `store` function', () => {
    expect(app.state()).toEqual(defaultState)
  })

  describe('calling `dispatch`', () => {
    beforeEach(() => {
      app.setState(defaultState)
    })

    it('should dispatch actions to the store and update the `App` state', () => {
      const expectedState = ['1', '2', '3']
      const action = setStoriesIdsList(expectedState)

      app.instance().dispatch(action)
      expect(app.state().storiesIdsList).toEqual(expectedState)
    })

    it('should not change state if there is no valid action passed in as an argument', () => {
      const action = {}

      app.instance().dispatch(action)
      expect(app.state()).toEqual(defaultState)
    })
  })
})
