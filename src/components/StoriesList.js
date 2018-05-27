import React from 'react'
import Story from './Story'
import '../styles/stories-list.css'

function StoriesList({ stories }) {
  return (
    stories && (
      <div className="app-container">
        <div className="list-container">
          {stories.map(story => <Story key={story.id} {...story} />)}
        </div>
      </div>
    )
  )
}

export default StoriesList
