import { setStoriesIdsList, setStoriesListData } from './index'
import * as constants from './constants'

describe('Calling setStoriesIdsList', () => {
  it('returns an action to set the story ids', () => {
    const payload = [1, 2, 3]

    const expectedAction = {
      type: constants.SET_STORIES_IDS_LIST,
      payload,
    }

    expect(setStoriesIdsList(payload)).toEqual(expectedAction)
  })
})

describe('Calling setStoriesListData', () => {
  const payload = [
    {
      id: 1,
      name: 'Foo',
    },
    {
      id: 2,
      name: 'Bar',
    },
    {
      id: 3,
      name: 'Baz',
    },
  ]

  const expectedAction = {
    type: constants.SET_STORIES_LIST_DATA,
    payload,
  }

  expect(setStoriesListData(payload)).toEqual(expectedAction)
})
