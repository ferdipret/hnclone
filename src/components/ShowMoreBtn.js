import React from 'react'

function ShowMoreBtn({ fetchMoreStories }) {
  return (
    <button type="action" onClick={fetchMoreStories}>
      SHOW MORE
    </button>
  )
}

export default ShowMoreBtn
