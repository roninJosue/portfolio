import React from 'react'
import {Link} from 'gatsby'
import LanguageSwitch from '../Head/components/LanguageSwitch';
import Theme from '../Head/components/Theme';

const Nav = ({visible}) => {
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
        <li className='nav-item'>
          <Theme
            theme={'dark'}
            handleChange={() =>{}}
          />
        </li>
        <li className='nav-item'>
          <LanguageSwitch />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
