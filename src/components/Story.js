import React from 'react'
import { cleanUrl } from '../utils/index'
import moment from 'moment'

import '../styles/story.css'

function Story({ title, by, url, time, score }) {
  return (
    <div className="story-card-wrapper">
      <a href={url} className="story-card bg-color-2">
        {/* Background divs Start */}
        {/* These divs are just to create a layered background effect */}
        <div className="story-card-background-1 bg-color-1" />
        <div className="story-card-background-2 bg-color-3" />
        <div className="story-card-background-3 bg-color-4" />
        <div className="story-card-background-4 bg-color-5" />
        {/* Background divs end */}

        <div className="story-card-content">
          <div className="story-card-time">
            {moment.unix(time).format('DD MMMM YYYY')}
          </div>
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
