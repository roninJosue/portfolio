import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Project from "./Project";

const Projects = () => {
  const { repos } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Row>
            {repos.length > 0 && repos.map((project) => {
            return (
              <Project key={project.id} isDesktop={isDesktop} isMobile={isMobile} project={project} />
            );
          })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
