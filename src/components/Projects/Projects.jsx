import React, { useContext, useEffect, useState } from "react";
import { translate } from "react-i18next";
import { Container, Row } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";
import Project from "./Project";

const Projects = ({t}) => {
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
          <Title title={t('projects.title')} />
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

export default translate('common')(Projects);
