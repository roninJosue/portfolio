import React from 'react'
import {Link} from 'gatsby'

const Nav = () => {
  return(
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
