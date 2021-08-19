import React, { useState, useEffect, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Head = () => {
  const [theme, setTheme] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

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
          <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={100} distance="30px">
            <span className="icon-theme" onClick={handleChange}>{theme ?
              <i className="fa fa-sun-o"></i>
              : <i className="fa fa-moon-o"></i>
            }</span>
          </Fade>
        </Row>
      </Container>
    </header>
  );
};

export default Head;
