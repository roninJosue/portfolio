import React from "react";
import { FaGithub } from "react-icons/all";

const AllProjectsButton = ({text}) => (
  <a
    href="https://github.com/roninJosue"
    target="_blank"
    rel="noreferrer"
    className="cta-btn cta-btn--hero all_projects"
  >
    <FaGithub
      size="3rem"
    />
    {text}
  </a>
);

export default AllProjectsButton;