import React from 'react'

import '../styles/header.css'

function Header() {
  return (
    <div className="header">
      <div className="img-wrapper">
        <img src="hn-icon.png" alt="hacker news logo" />
      </div>
      <h1 className="title bg-color-2">HACKER NEWS</h1>
    </div>
  )
}

export default Header
