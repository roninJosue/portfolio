import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import useSection from "./hooks/useSection";

const Section = ({sectionId, right, left, ...props}) => {
  const {
    isMobile,
    isDesktop
  } = useSection()

  return(
    <section id={sectionId} className="jumbotron hero mb-4">
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col lg={6} md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000}  distance="30px">
              {left}
            </Fade>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Fade right={true} duration={1000}  distance="30px">
              {right}
            </Fade>
          </Col>
        </Row>
        {props.children}
      </Container>
    </section>
  )
}

export default Section