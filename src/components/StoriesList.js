import React from 'react'
import Story from './Story'

function StoriesList({ stories }) {
  return stories && stories.map(story => <Story key={story.id} {...story} />)
}

export default StoriesList
