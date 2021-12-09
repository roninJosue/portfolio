import React from "react";
import { FaGithub } from "react-icons/all";

const AllProjectsButton = () => (
  <a
    href="https://github.com/roninJosue"
    target="_blank"
    rel="noreferrer"
    className="cta-btn cta-btn--hero all_projects"
  >
    <FaGithub
      size="3rem"
    />
    All projects
  </a>
);

export default AllProjectsButton;