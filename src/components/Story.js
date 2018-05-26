import React from 'react'
import { cleanUrl } from '../utils/index'

import '../styles/story.css'

function Story({ title, by, url, time, score }) {
  return (
    <div className="story-card-wrapper">
      <a href={url} className="story-card">
        <div>
          <div className="story-card-time">{time}</div>
          <div className="story-card-title">{title}</div>
          <div className="story-card-author">By {by}</div>
        </div>
        <div className="story-card-score">{score}</div>

        <div className="story-card-link">{cleanUrl(url)}</div>
      </a>
    </div>
  )
}

export default Story
