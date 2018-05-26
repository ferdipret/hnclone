import { calculateNextStoryIds, cleanUrl } from './index'
import { topStoriesIds, defaultIds, calculatedIds } from './__mocks__/utils'

it('`calculateNextStoryIds` should return an array of the next 10 ids to fetch', () => {
  expect(calculateNextStoryIds(topStoriesIds, 0)).toEqual(defaultIds)

  expect(calculateNextStoryIds(topStoriesIds, 90)).toEqual(calculatedIds)
})

it('`cleanUrl` should return a clean version of the url', () => {
  expect(
    cleanUrl(
      'https://azeria-labs.com/the-importance-of-deep-work-the-30-hour-method-for-learning-a-new-skill/',
    ),
  ).toEqual('azeria-labs.com')
})
