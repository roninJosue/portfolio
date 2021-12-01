import React, { useState } from 'react';

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
        theme ? <i className='fa fa-sun-o' />
          : <i className='fa fa-moon-o' />
      }
    </div>
  )
}

export default Theme