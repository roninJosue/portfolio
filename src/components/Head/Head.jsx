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
      <Container>
        <Row className='justify-content-end align-items-center'>
          <h1 className='justify'>Logo</h1>
          <Nav visible={visible} />
          <Theme
            theme={theme}
            handleChange={handleChange}
          />
          <LanguageSwitch />
        </Row>
      </Container>
    </header>
  );
};

export default Head;
