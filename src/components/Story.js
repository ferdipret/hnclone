import React from 'react'

function Story({ title, by, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <span>By</span> {by}
      </div>
      <a href={url}>{url}</a>
    </div>
  )
}

export default Story
