import React from "react";
import { FaGithub, FaLinkedin, SiGmail, FaInstagram } from "react-icons/all";
import { nanoid } from "nanoid";

const icons = [
  {
    icon: FaGithub,
    href: "https://github.com/roninJosue",
    css: "github"
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/reynaldo-josu%C3%A9-cano-b%C3%A1rcenas-430bb8a6/",
    css: "linkedin"
  },
  {
    icon: SiGmail,
    href: "mailto:cano.barcenas.reynaldo@gmail.com",
    css: "gmail"
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/roninjosue/",
    css: "instagram"
  }
];

const SocialIcon = ({ icon: { href, icon: Icon, css = "" }, footer }) => {
  const icon2 =  footer ? '__2' : ''
  return (
    <a
      rel="noreferrer"
      className="social-networks-icon"
      href={href}
      target="_blank"
    >
      <Icon
        className={`social-networks-${css}${icon2}`}
      />
    </a>
  )
}

const SocialNetwork = ({ footer = false }) => {
  return (
    <div className="social-networks">
      {icons.map(Icon => (<SocialIcon key={nanoid()} icon={Icon} footer={footer} />))}
    </div>
  );
};

export default SocialNetwork;