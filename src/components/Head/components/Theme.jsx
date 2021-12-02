import React, { useState } from 'react';
import {FaSun, FaMoon} from 'react-icons/fa';

const getThemeFromLocalStorage = localStorage.getItem('theme')

const Theme = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage || 'light')

  const handleChange = () => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };
  return(
    <div role='button' className='icon-theme' onClick={handleChange}>
      {
        theme ? <FaSun size={'3em'} />
          : <FaMoon size={'3em'} />
      }
    </div>
  )
}

export default Theme