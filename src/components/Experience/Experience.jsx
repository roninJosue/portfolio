import React from "react";
import { Col, Row } from "react-bootstrap";
import { translate } from "react-i18next";
import Section from "../Section/Section";
import ExperienceSvg from "../../images/experience.svg";
import SvgImage from "../SvgImage/SvgImage";
import SectionContent from "../SectionContent/SectionContent";

const arrWorks = [
  {
    position: "Analista",
    period: "2017-2021",
    company: "UNAN-LEON",
    description: "Over the course of my working life, I have been able to develop applications using various technologies, both front-end and back-end. Starting from specific requirements to face a problem, it first created prototypes of the applications, and then proceeded with development.",
    index: 1
  },
  {
    position: "Analista",
    period: "2017-2021",
    company: "UNAN-LEON",
    description: "Over the course of my working life, I have been able to develop applications using various technologies, both front-end and back-end. Starting from specific requirements to face a problem, it first created prototypes of the applications, and then proceeded with development.",
    index: 2
  }
];

const Experience = ({ t }) => {
  return (
    <Section
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
      {arrWorks.map((work) => <Work key={work.index} work={work} />)}
    </Section>
  );
};

const Work = ({ work }) => {
  const {
    position,
    period,
    company,
    description
  } = work;

  return (
    <Row>
      <Col md={{span: 6, offset: 3}}>
        <ExperienceWrap>
          <ExperienceHead>
            <WorkPosition position={position} />
            <WorkPeriod period={period} />
          </ExperienceHead>
          <ExperienceCompany company={company} />
          <ExperienceDescription description={description} />
        </ExperienceWrap>
      </Col>
    </Row>
  );
};

const WorkPosition = ({position}) => (
  <h3 className='experience-position'>
    {position}
  </h3>
)

const WorkPeriod = ({period}) => (
  <span className='experience-period'>
    {period}
  </span>
)

const ExperienceWrap = (props) => {
  return(
    <div className='experience-wrap'>
      {props.children}
    </div>
  )
}

const ExperienceHead = (props) => {
  return(
    <div className='experience-head'>
      {props.children}
    </div>
  )
}

const ExperienceCompany = ({company}) => (
  <div className='experience-company'>
    {company}
  </div>
)

const ExperienceDescription = ({description}) => (
  <p className='experience-description'>{description}</p>
)

export default translate("common")(Experience);