import React from 'react'

function Header() {
  return (
    <header>
        <div className="header-inner">
            <div className="logo">
                <p>Jakub</p>
            </div>
            <div className="header-links">
                <a href="">Home</a>
                <a href="https://github.com/jacqouese?tab=repositories" target="_blank">All projects</a>
                <p>Polski</p>
            </div>
        </div>
    </header>
  )
}

export default Header