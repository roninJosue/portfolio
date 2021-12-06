import React from "react";
import { translate } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import Section from "../Section/Section";
import GraduationCap from "../../images/graduation.svg";
import SvgImage from "../SvgImage/SvgImage";
import SectionContent from "../SectionContent/SectionContent";

const degrees = [
  {
    degree: 'education.degreesList.0.degree',
    institution: 'education.degreesList.0.institution'
  },
  {
    degree: 'education.degreesList.0.degree',
    institution: 'education.degreesList.0.institution'
  }
]

const Education = ({t}) => {
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
          name={t('education.title')}
          text={[
            t('education.paragraphOne')
          ]}
        />
      )}
      sectionId="education"
    >
      <Degrees t={t} />
    </Section>
  );
};

const Degrees = ({t}) => {
  return(
    <Row className='mt-5'>
      <Col lg={12}>
        <h2>{t('education.degrees')}</h2>
      </Col>
      {degrees.map(degree=>(
        <Col>
          <h3>{t(degree.degree)}</h3>
          <h4>{t(degree.institution)}</h4>
        </Col>
      ))}
    </Row>
  )
}

export default translate('common')(Education);