import React from "react";
import { translate } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Section from "../Section/Section";
import GraduationCap from "../../images/graduation.svg";
import SvgImage from "../SvgImage/SvgImage";
import SectionContent from "../SectionContent/SectionContent";
import Title from "../Title/Title";

const degrees = [
  {
    degree: "education.degreesList.0.degree",
    institution: "education.degreesList.0.institution",
    from: 2008,
    to: 2012
  }
];

const Education = ({ t }) => {
  return (
    <Section
      left={
        (
          <SvgImage
            alt="GraduationCap"
            svg={GraduationCap}
          />
        )
      }
      right={(
        <SectionContent
          name={t("education.title")}
          text={[
            t("education.paragraphOne")
          ]}
        />
      )}
      sectionId="education"
    >
      <Degrees t={t} />
    </Section>
  );
};

const Degrees = ({ t }) => {
  return (
    <>
      <Row className="mt-5 flex-wrap justify-content-center">
        <Col lg={12}>
          <Title
            title={t("education.degrees")}
            cls="education-title"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        {degrees.map(degree => (
          <Fade
            left
            duration={1000}
            delay={500}
          >
            <Col md={4}>
              <DegreesItem
                degree={t(degree.degree)}
                institution={t(degree.institution)}
                from={degree.from}
                to={degree.to}
              />
            </Col>
          </Fade>
        ))}
      </Row>
    </>
  );
};

const DegreesItem = ({ degree, institution, from, to }) => {
  return (
    <div className="grade-wrap">
      <h2 className="grade-institution">{institution}</h2>
      <div className="grade-degree">{degree}</div>
      <span className="grade-period">{`${from} - ${to}`}</span>
    </div>
  );
};

export default translate("common")(Education);