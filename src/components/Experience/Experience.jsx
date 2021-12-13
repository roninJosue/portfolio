import React from "react";
import { Col, Row } from "react-bootstrap";
import { translate } from "react-i18next";
import Fade from "react-reveal/Fade";
import Section from "../Section/Section";
import ExperienceSvg from "../../images/experience.svg";
import SvgImage from "../SvgImage/SvgImage";
import SectionContent from "../SectionContent/SectionContent";
import Title from "../Title/Title";

const arrWorks = [
  {
    position: "experience.experienceList.0.position",
    period: "experience.experienceList.0.period",
    company: "experience.experienceList.0.company",
    description: "experience.experienceList.0.description",
    index: 1
  },
  {
    position: "experience.experienceList.1.position",
    period: "experience.experienceList.1.period",
    company: "experience.experienceList.1.company",
    description: "experience.experienceList.1.description",
    index: 2
  }
];

let delay = 0;

const Experience = ({ t }) => {
  return (
    <Section
      cls="hero hero__2"
      left={(
        <SectionContent
          name={t("experience.title")}
          text={[
            t("experience.paragraphOne")
          ]}
        />
      )}
      right={(
        <SvgImage
          alt="Experience"
          svg={ExperienceSvg}
        />
      )}
    >
      <Row className="mb-5 flex-wrap justify-content-center">
        <Col lg={12}>
          <Title
            title={t("experience.title_2")}
            cls="education-title"
          />
        </Col>
      </Row>
      {arrWorks.map((work) => {
        delay += 100
        return (
          <Fade
            left
            duration={1000}
            delay={delay}
            key={work.index}
          >
            <Work work={work} t={t} />
          </Fade>
        );
      })}
    </Section>
  );
};

const Work = ({ work, t }) => {
  const {
    position,
    period,
    company,
    description
  } = work;

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <ExperienceWrap>
          <ExperienceHead>
            <WorkPosition position={t(position)} />
            <WorkPeriod period={t(period)} />
          </ExperienceHead>
          <ExperienceCompany company={t(company)} />
          <ExperienceDescription description={t(description)} />
        </ExperienceWrap>
      </Col>
    </Row>
  );
};

const WorkPosition = ({ position }) => (
  <h3 className="experience-position">
    {position}
  </h3>
);

const WorkPeriod = ({ period }) => (
  <span className="experience-period">
    {period}
  </span>
);

const ExperienceWrap = (props) => {
  return (
    <div className="experience-wrap">
      {props.children}
    </div>
  );
};

const ExperienceHead = (props) => {
  return (
    <div className="experience-head">
      {props.children}
    </div>
  );
};

const ExperienceCompany = ({ company }) => (
  <div className="experience-company">
    {company}
  </div>
);

const ExperienceDescription = ({ description }) => (
  <p className="experience-description">{description}</p>
);

export default translate("common")(Experience);