import React  from 'react';
import useHead from './hooks/useHead';
import LanguageSwitch from './components/LanguageSwitch';
import Nav from '../Nav';
import Theme from './components/Theme';
import Logo from '../Logo/Logo';

const Head = () => {

  const {
    visible,
  } = useHead();

  return (
    <header id='head' className={visible}>
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
