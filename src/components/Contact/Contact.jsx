import React, { useContext }  from 'react';
import {BsBoxArrowInUpRight} from "react-icons/all";
import { translate } from "react-i18next";
import Section from "../Section/Section";
import SectionContent from "../SectionContent/SectionContent";
import SocialNetwork from "../SocialNetwork";
import LinkButton from "../LinkButton/LinkButton";
import PortfolioContext from '../../context/context';
import SvgImage from "../SvgImage/SvgImage";
import ProfileSvg from '../../images/profile.svg'

const Contact = ({t}) => {

  const { about } = useContext(PortfolioContext);
  const { img, resume } = about;

  return (
    <Section
      left={(
        <SectionContent
          name={t('contact.title')}
          text={[
            t('contact.paragraphOne'),
          ]}
        >
          <SocialNetwork />
          <LinkButton
            text={t('contact.resumeLabel')}
            link={resume}
            icon={<BsBoxArrowInUpRight size={'2.5rem'} />}
          />
        </SectionContent>
      )}
      right={(
        (
          <SvgImage
            alt="Profile"
            svg={ProfileSvg}
          />
        )
      )}
     />
  );
};

export default translate('common')(Contact);
