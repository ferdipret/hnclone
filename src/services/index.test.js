import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { API_ENTRY_POINT } from '../actions/constants'
import { fetchTopStories } from './index'

const mock = new MockAdapter(axios)

const responseData = ['1', '2', '3']

mock.onGet(`${API_ENTRY_POINT}/topstories`).reply(200, responseData)

describe('Services', () => {
  describe('when calling `/topstories`', () => {
    it('should fetch an array of ids and return a promise', () => {
      return fetchTopStories('/topstories').then(res => {
        expect(res.data).toEqual(responseData)
      })
    })
  })
})
