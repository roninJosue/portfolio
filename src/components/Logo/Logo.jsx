import React from 'react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <Link to={'/'} className='logo'>
      <span className='logo_text-arrow'>{'<'} </span>
      <span className='logo_text'>Reynaldo Cano</span>
      <span className='logo_text-arrow'> {'/>'}</span>
    </Link>
  );
};

export default Logo;