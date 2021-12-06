import React, { useContext } from "react";
import { translate } from "react-i18next";
import PortfolioContext from "../../context/context";
import Programming from "../../images/programming.svg";
import Section from "../Section/Section";
import SvgImage from "../SvgImage/SvgImage";
import SectionContent from "../SectionContent/SectionContent";
import SocialNetwork from "../SocialNetwork";

const Header = ({ t }) => {
  const { hero } = useContext(PortfolioContext);
  const { name } = hero;


  return (
    <Section
      sectionId="hero"
      left={(
        <SectionContent
          name={name}
          text={[
            t("about.paragraphOne"),
            t("about.paragraphTwo")
          ]}
        >
          <SocialNetwork />
        </SectionContent>
      )}
      right={(
        <SvgImage
          alt="Programming"
          svg={Programming}
        />
      )}
    />
  );
};


export default translate("common")(Header);
