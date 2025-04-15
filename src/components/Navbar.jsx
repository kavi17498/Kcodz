import React, { useState } from 'react'

function Navbar() {
  const [active, setActive] = useState('Home')

  const getLinkClass = (name) =>
    active === name ? 'text-[#FF914C]' : 'text-white'

  return (
    <>
      <div className="navbar bg-black text-white shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">
            <img src='/K.png' className='w-30' ></img>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className={getLinkClass('Home')}
                onClick={() => setActive('Home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={getLinkClass('About')}
                onClick={() => setActive('About')}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
