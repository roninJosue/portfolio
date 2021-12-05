import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import useSection from "./hooks/useSection";

const Section = ({sectionId, right, left}) => {
  const {
    isMobile,
    isDesktop
  } = useSection()

  return(
    <section id={sectionId} className="jumbotron hero">
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000}  distance="30px">
              {left}
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade right={true} duration={1000}  distance="30px">
              {right}
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section