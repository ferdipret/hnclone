export function calculateNextStoryIds(idList, current) {
  return idList.slice(current, current + 10)
}
