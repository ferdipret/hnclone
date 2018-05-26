import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { fetchTopStories, fetchStoryDetails } from './index'
import { topStoriesResponse, storyDetailsResponse } from './__mocks__'

const mock = new MockAdapter(axios)

mock
  .onGet(/https:\/\/hacker-news.firebaseio.com\/v0\/topstories\.json/)
  .reply(200, topStoriesResponse)
mock
  .onGet(/https:\/\/hacker-news.firebaseio.com\/v0\/item\/\d+\.json/)
  .reply(200, storyDetailsResponse)

describe('Services', () => {
  describe('when calling `/topstories`', () => {
    it('should fetch an array of ids and return a promise', () => {
      return fetchTopStories('/topstories').then(res => {
        expect(res.data).toEqual(topStoriesResponse)
      })
    })
  })

  describe('calling `fetchStoryDetails`', () => {
    it('should return a story items details', () => {
      return fetchStoryDetails('/item', 8863).then(res => {
        expect(res.data).toEqual(storyDetailsResponse)
      })
    })
  })
})
