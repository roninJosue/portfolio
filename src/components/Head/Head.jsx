import React  from 'react';
import useHead from './hooks/useHead';
import Nav from '../Nav';
import Logo from '../Logo/Logo';

const Head = () => {

  const {
    visible,
  } = useHead();

  return (
    <header id='head' className={`head ${visible.join(' ')}`}>
      <div className='nav-container'>
        <Logo />
        <div className='nav-wrap'>
          <Nav visible={visible} />
        </div>
      </div>
    </header>
  );
};

export default Head;
