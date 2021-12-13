import React from "react";
import { FaExternalLinkAlt } from "react-icons/all";
import { translate } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Section from "../Section/Section";
import GraduationCap from "../../images/graduation.svg";
import SvgImage from "../SvgImage/SvgImage";
import SectionContent from "../SectionContent/SectionContent";
import Title from "../Title/Title";
import { nanoid } from "nanoid";

const degrees = [
  {
    degree: "education.degreesList.0.degree",
    institution: "education.degreesList.0.institution",
    from: 2008,
    to: 2012
  }
];

const certificates = [
  {
    degree: "education.certificatesList.0.degree",
    institution: "education.certificatesList.0.institution",
    certificateLink: "https://www.freecodecamp.org/certification/roninjosue/responsive-web-design",
    issued: "education.certificatesList.0.issued"
  },
  {
    degree: "education.certificatesList.1.degree",
    institution: "education.certificatesList.1.institution",
    certificateLink: "https://www.freecodecamp.org/certification/roninjosue/javascript-algorithms-and-data-structures",
    issued: "education.certificatesList.1.issued"
  },
  {
    degree: "education.certificatesList.2.degree",
    institution: "education.certificatesList.2.institution",
    certificateLink: "https://certificates.cs50.io/60e7d0d8-1116-4b41-a140-d66457f81eb4.pdf?size=letter",
    issued: "education.certificatesList.2.issued"
  }
];

const Education = ({ t }) => {
  return (
    <Section
      cls="hero hero__2"
      left={(
        <SvgImage
          alt="GraduationCap"
          svg={GraduationCap}
        />
      )}
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
      <Degrees
        t={t}
        list={degrees}
        head="education.degrees"
      />
      <Degrees
        t={t}
        head="education.certificates"
        list={certificates}
      />
    </Section>
  );
};

const Degrees = ({ t, list, head }) => {
  let delay = 0;
  return (
    <>
      <Row className="mt-5 flex-wrap justify-content-center">
        <Col lg={12}>
          <Title
            title={t(head)}
            cls="education-title"
          />
        </Col>
      </Row>
      <Row
        className="
        mt-5
        flex-wrap
        justify-content-center
        justify-content-md-between
        "
      >
        {list.map(degree => {
          delay += 500;
          return (
            <Fade
              left
              duration={1000}
              delay={delay}
              key={nanoid()}
            >
              <Col md={4}>
                <DegreesItem
                  degree={t(degree.degree)}
                  institution={t(degree.institution)}
                  from={degree.from}
                  to={degree.to}
                  issued={t(degree.issued)}
                  certificateLink={degree.certificateLink}
                  see={t("education.seeCertificate")}
                />
              </Col>
            </Fade>
          );
        })}
      </Row>
    </>
  );
};

const DegreesItem = (
  {
    degree,
    institution,
    from,
    to,
    issued,
    certificateLink,
    see
  }
) => {
  return (
    <div className="grade-wrap">
      <h2 className="grade-institution">{institution}</h2>
      <div className="grade-degree">{degree}</div>
      {from && to && (
        <span className="grade-period">{`${from} - ${to}`}</span>
      )}
      {issued && (
        <span className="grade-period">{issued}</span>
      )}
      {certificateLink && (
        <a className="text-left" rel="stylesheet noreferrer" target="_blank" href={certificateLink}>
          <span className="mr-4">{see}</span>
          <FaExternalLinkAlt />
        </a>
      )}
    </div>
  );
};

export default translate("common")(Education);