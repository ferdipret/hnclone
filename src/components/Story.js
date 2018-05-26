import React from 'react'
import '../styles/story.css'

function Story({ title, by, url }) {
  return (
    <div className="story-card">
      <h4 className="blue">{title}</h4>
      <div>
        <span>By</span> {by}
      </div>
      <a href={url}>{url}</a>
    </div>
  )
}

export default Story
