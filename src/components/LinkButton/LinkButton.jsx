import React from "react";

const LinkButton = ({text, link, icon = null}) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="cta-btn cta-btn--hero all_projects"
  >
    {icon}
    {text}
  </a>
);

export default LinkButton;