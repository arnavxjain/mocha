import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h1>mocha</h1>
        <input type="text" placeholder='Search for people around the globe'/>
        <div className="header-controls">
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default Header