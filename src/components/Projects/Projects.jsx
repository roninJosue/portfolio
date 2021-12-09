import React, { useContext } from "react";
import { translate } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Project from "./Project";
import Section from "../Section/Section";
import ProjectSvg from "../../images/projects.svg";
import SvgImage from "../SvgImage/SvgImage";
import SectionContent from "../SectionContent/SectionContent";
import AllProjectsButton from "../AllProjectsButton/AllProjectsButton";

const Projects = ({ t }) => {
  const { repos } = useContext(PortfolioContext);

  return (
    <>
      <Section
        left={
          (
            <SvgImage
              alt="GraduationCap"
              svg={ProjectSvg}
            />
          )
        }
        right={(
          <SectionContent
            name={t("projects.title")}
            text={[
              t("projects.paragraph")
            ]}
          />
        )}
        sectionId="projects"
      >

        <div className="project-wrapper">
          <Row className="mt-5">
            {repos.length > 0 && repos.map((project) => {
              return (
                <Project
                  key={project.id}
                  isDesktop={false}
                  isMobile={false}
                  project={project}
                  demo={t("projects.demo")}
                  code={t("projects.code")}
                />
              );
            })}
          </Row>
          <Row className='justify-content-center'>
            <Col md={12}>
              <AllProjectsButton
                text={t('projects.more')}
              />
            </Col>
          </Row>
        </div>
      </Section>
    </>
  );
};

export default translate("common")(Projects);
