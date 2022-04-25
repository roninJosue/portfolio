import React from "react";
import { FaGithub, FaLinkedin, SiGmail, FaInstagram } from "react-icons/all";
import { nanoid } from "nanoid";

const icons = [
  {
    icon: FaGithub,
    href: "https://github.com/roninJosue",
    css: "github",
    ariaLabel: 'Github'
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/reynaldocano88/",
    css: "linkedin",
    ariaLabel: 'LinkedIn'
  },
  {
    icon: SiGmail,
    href: "mailto:cano.barcenas.reynaldo@gmail.com",
    css: "gmail",
    ariaLabel: 'Gmail'
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/roninjosue/",
    css: "instagram",
    ariaLabel: 'Instagram'
  }
];

const SocialIcon = ({ icon: { href, icon: Icon, ariaLabel, css = "" }, footer }) => {
  const icon2 =  footer ? '__2' : ''
  return (
    <a
      rel="noreferrer"
      className="social-networks-icon"
      href={href}
      target="_blank"
      aria-label={ariaLabel}
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