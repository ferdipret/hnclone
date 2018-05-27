export function calculateNextStoryIds(idList, current) {
  return idList.slice(current, current + 10)
}

export function cleanUrl(string) {
  const regex = /\/\/([^\/,\s]+?\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)/g
  const cleanArray = regex.exec(string)

  if (cleanArray) {
    return cleanArray[1].replace(/^www\./g, '')
  }
}
