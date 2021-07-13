import React, { useState } from "react";
import Menu from "../../pages/Home/Menu";

import "../../css/InProgressProjects/in-progress-projects.css";

export default function InProgressProjects({ pageInfo }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={("in-progress-projects", showMenu ? "in-progress-projects-hide" : "")}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="in-progress-projects-header">
        <div
          className="menu-icon menu-black-icon"
          onClick={() => setShowMenu(!showMenu)}
        >
        </div>
        <div className="header-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <div className="in-progres-projects-content">
        <h3 className="page-name">{pageInfo.pageName}-In-Progres-Projects</h3>
        <div className="projects">
          {pageInfo.items.map((project, i) => {
            return (
              <div className="project" key={i}>
                <img src={project.url} alt="in-progres" key={i + "img"} />
                <p key={i + "title"}>{project.projectTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer project-footer">
        <div className="footer-social-media-icons">
          <img src="../images/facebook-logo.png" alt="facebook" />
          <img src="../images/instagram-logo.png" alt="instagram" />
        </div>
        <div className="footer-languages">
          <ul>
            <li>
              <img src="../images/language.png" alt="languages" />
              <p>English</p>
              <img
                src="../images/arrow-down.png"
                alt="arrow"
                className="arrow"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
