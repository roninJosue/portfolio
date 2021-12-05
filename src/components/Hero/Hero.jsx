import React, { useContext } from "react";
import { translate } from "react-i18next";
import PortfolioContext from "../../context/context";
import Greeting from "./components/Greeting";
import Programming from "../../images/programming.svg"
import Section from "../Section/Section";
import SvgImage from "../SvgImage/SvgImage";

const Header = ({ t }) => {
  const { hero } = useContext(PortfolioContext);
  const { name } = hero;


  return (
    <Section
      sectionId='hero'
      left={(
        <Greeting
          name={name}
          text={[
            t("about.paragraphOne"),
            t("about.paragraphTwo")
          ]}
        />
      )}
      right={
        <SvgImage
          alt='Programming'
          svg={Programming}
          cls='hero-img'
        />
      }
    />
  );
};


export default translate("common")(Header);
