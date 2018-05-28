import React from 'react'
import '../styles/button.css'

function ShowMoreBtn({ fetchMoreStories, storiesLeft }) {
  return (
    storiesLeft > 0 && (
      <button
        className="show-more-btn"
        type="action"
        onClick={fetchMoreStories}>
        SHOW MORE ({storiesLeft})
      </button>
    )
  )
}

export default ShowMoreBtn
