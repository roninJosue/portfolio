import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import LanguageSwitch from "./LanguageSwitch";

const Head = () => {
  const [theme, setTheme] = useState(false);

  const handleChange = () => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <header id="head">
      <Container>
        <Row className="justify-content-end align-items-center">
          <Fade right duration={1000} delay={100} distance="30px">
            <div role="button" className="icon-theme" onClick={handleChange}>
              {
                theme ? <i className="fa fa-sun-o" />
                      : <i className="fa fa-moon-o" />
              }
            </div>
            <LanguageSwitch />
          </Fade>
        </Row>
      </Container>
    </header>
  );
};

export default Head;
