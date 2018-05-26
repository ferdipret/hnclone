import { calculateNextStoryIds } from './index'
import { topStoriesIds, defaultIds, calculatedIds } from './__mocks__/index'

it('`calculateNextStoryIds` should return an array of the next 10 ids to fetch', () => {
  expect(calculateNextStoryIds(topStoriesIds, 0)).toEqual(defaultIds)

  expect(calculateNextStoryIds(topStoriesIds, 90)).toEqual(calculatedIds)
})
