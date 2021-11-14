import React from 'react';
import useHead from './hooks/useHead';
import { Container, Row } from 'react-bootstrap';
import LanguageSwitch from './components/LanguageSwitch';
import Nav from '../Nav';
import Theme from './components/Theme';

const Head = () => {

  const {
    theme,
    visible,
    handleChange,
  } = useHead();

  return (
    <header id='head' style={{ display: `${visible ? 'block' : 'none'}` }}>
      <div className='nav-container'>
        <h1 className='justify'>Logo</h1>
        <div className='nav-wrap'>
          <Nav visible={visible} />
          <div className='nav-wrap'>
            <Theme
              theme={theme}
              handleChange={handleChange}
            />
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
