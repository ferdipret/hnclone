import React from 'react'
import { cleanUrl } from '../utils/index'

import '../styles/story.css'

function Story({ title, by, url }) {
  return (
    <div className="story-card">
      <div className="story-card-title">
        {title}
        <span className="story-card-author"> By {by}</span>
      </div>

      <div />
      <a href={url}>{cleanUrl(url)}</a>
    </div>
  )
}

export default Story
