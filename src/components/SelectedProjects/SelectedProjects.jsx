import React, { useState } from "react";

import Menu from "../../pages/Home/Menu";

import "../../css/SelectedProjects/selected-projects.css";

export default function SelectedProjects({ pageInfo }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={
        ("selected-projects", showMenu ? "selected-projects-hide" : "")
      }
    >
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="selected-projects-header">
        <div
          className="menu-icon menu-black-icon"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
        <div className="header-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <div className="selected-projects-content">
        <h3 className="page-name">{pageInfo.pageName}-Selected-Projects</h3>
        <div className="projects">
          {pageInfo.items.map((project, i) => {
            return (
              <div className="project" key={i}>
                <img src={project.url} alt="selected" key={i + "img"} />
                <p key={i + "title"}>{project.projectTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer projects-footer">
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
