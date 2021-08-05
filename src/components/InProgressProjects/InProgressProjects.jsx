import React, { useState } from "react";
import Menu from "../../pages/Home/Menu";

import "../../css/InProgressProjects/in-progress-projects.css";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";
import { generalUrl } from "../../lib/constants";
import { useTranslation } from "react-i18next";

export default function InProgressProjects({ pageInfo, history }) {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div
      className={
        ("in-progress-projects", showMenu ? "in-progress-projects-hide" : "")
      }
    >
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu={setShowMenu} />
      <div className="in-progres-projects-content">
        <h3 className="page-name">
          {pageInfo.pageName}
          <span className="page-name-bold-text"> - {t("In-Progress")}</span>
        </h3>
        <div className="projects-container">
          {pageInfo.items.projects &&
            pageInfo.items.projects.map((project, i) => {
              return (
                <div
                  className="project"
                  key={i}
                  onClick={() => history.push(`/project/${project.id}`)}
                >
                  <img
                    src={
                      project.photos[0]
                        ? `${generalUrl}/${project.photos[0].path}`
                        : ""
                    }
                    alt="in-progres"
                  />
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
