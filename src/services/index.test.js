import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { API_ENTRY_POINT } from '../actions/constants'
// import { fetchTopStories } from './index'

const mock = new MockAdapter(axios)

mock.onGet(`${API_ENTRY_POINT}/topstories`).reply(200, ['1', '2', '3'])

describe('Services', () => {
  // describe('when calling `/topstories`', () => {
  //   it('should fetch an array of ids', () => {
  //     expect(fetchTopStories).then(res => console.log(res))
  //   })
  // })
  //
  it('should be true', () => {
    expect(true).toBe(true)
  })
})
