const n = 500

// Will create an array of (0 [, ...n])
export const topStoriesIds = Array.apply(null, { length: n }).map(
  Number.call,
  Number,
)

export const defaultIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const calculatedIds = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
