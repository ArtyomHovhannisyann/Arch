import React, { useState } from "react";

import Menu from "../../pages/Home/Menu";

import "../../css/SelectedProjects/selected-projects.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function SelectedProjects({ pageInfo, history }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`selected-projects ${
        showMenu ? "selected-projects-hide" : ""
      }`}
    >
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu={setShowMenu} />
      <div className="selected-projects-content">
        <h3 className="page-name">
          {pageInfo.pageName}
          <span className="page-name-bold-text"> - Selected-Projects</span>
        </h3>
        <div className="projects">
          {pageInfo.items.map((project, i) => {
            return (
              <div
                className="project"
                key={i}
                onClick={() => history.push(`/project/${project.id}`)}
              >
                <img src={project.images[0]} alt="selected" />
                <p>{project.projectTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
