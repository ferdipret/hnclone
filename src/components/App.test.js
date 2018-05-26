import React from 'react'
import { mount, shallow } from 'enzyme'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import App from './App'
import store, { defaultState } from '../store'
import { setStoriesIdsList } from '../actions'
import { fetchTopStories, fetchStoryDetails } from '../services'
import * as constants from '../actions/constants'
import { calculateNextStoryIds } from '../utils'
import {
  topStoriesResponse,
  storyDetailsResponse,
} from '../services/__mocks__/services'

const mock = new MockAdapter(axios, { delayResponse: 2000 })

export const responseData = ['1', '2', '3']

mock
  .onGet(/https:\/\/hacker-news.firebaseio.com\/v0\/item\/\d+\.json/)
  .reply(200, storyDetailsResponse)

mock
  .onGet(`${constants.API_ENTRY_POINT}/topstories.json`)
  .reply(200, responseData)

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('should get it`s default state from the `store` function', () => {
    expect(app.state()).toEqual(defaultState)
  })

  describe('calling `dispatch`', () => {
    afterEach(() => {
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

  describe('when mounted', () => {
    it('should call the fetchTopStories service', () => {
      return fetchTopStories('/topstories').then(() => {
        expect(app.state('storiesIdsList')).toEqual(['1', '2', '3'])
      })
    })
  })

  it('should be able to find item details', () => {
    return fetchStoryDetails('/item', 1).then(res => {})
  })

  describe('when calling `fetchMoreStories`', () => {
    it(`should fetch the next 10 stories, if there are 10 available, otherwise
        fetch the remaining stories' details
    `, () => {
      app.instance().fetchMoreStories()

      expect(app.state('stories')).toEqual([
        storyDetailsResponse,
        storyDetailsResponse,
        storyDetailsResponse,
      ])
    })
  })
})
