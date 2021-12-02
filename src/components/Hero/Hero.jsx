import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import {translate} from "react-i18next";
import PortfolioContext from '../../context/context';
import Greeting from './components/Greeting';

const Header = ({t}) => {
  const { hero } = useContext(PortfolioContext);
  const { name } = hero;

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

  return (
    <section id="hero" className="jumbotron hero">
      <Container fluid>
        <Row>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <Greeting
                name={name}
                text={[
                  t('about.paragraphOne'),
                  t('about.paragraphTwo')
                ]}
              />
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {t('head.cta')}
              </Link>
            </span>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default translate('common')(Header);
