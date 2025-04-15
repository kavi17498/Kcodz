import React from 'react'

function Navbar() {
  return (
    <>
      <div className="navbar bg-black text-white shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">KCodz</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><a>Home</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
