import React from 'react'
import { cleanUrl } from '../utils/index'

import '../styles/story.css'

function Story({ title, by, url }) {
  return (
    <div className="story-card-wrapper">
      <a href={url} className="story-card">
        <div>
          <div className="story-card-title">{title}</div>
          <div className="story-card-author">By {by}</div>
        </div>

        <div className="story-card-link">{cleanUrl(url)}</div>
      </a>
    </div>
  )
}

export default Story
