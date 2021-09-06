import React from 'react';
import { Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import ProjectImg from '../Image/ProjectImg';

const Project = (props) => {
  const { project: { name, description, info2, homepage, html_url: htmlUrl }, isDesktop, isMobile } = props;

  return (
    <Col md={6} lg={4} sm={12} className="mb-4">
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={500}
        distance="30px"
      >
        <div className="project-wrapper__body">
          <div>
            <div className="project-wrapper__image">
              <a
                href={htmlUrl || "#!"}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: "cubic-bezier(.03,.98,.52,.99)"
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <ProjectImg alt={name} filename={`${name}.jpg`} />
                  </div>
                </Tilt>
              </a>
            </div>
            <div>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">{name || "Project Title"}</h3>
                <p>
                  {description ||
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                </p>
                <p className="mb-4">{info2 || ""}</p>
              </div>
            </div>
          </div>
          <div className="project-wrapper__buttons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={homepage || "#!"}
            >
              See Live
            </a>

            {htmlUrl && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main"
                href={htmlUrl}
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </Fade>
    </Col>
  );
};


export default Project;
