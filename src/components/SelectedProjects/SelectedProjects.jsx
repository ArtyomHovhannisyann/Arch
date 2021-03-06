import React, { useState } from "react";

import Menu from "../../pages/Home/Menu";

import "../../css/SelectedProjects/selected-projects.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { generalUrl } from "../../lib/constants";
import { useTranslation } from "react-i18next";

export default function SelectedProjects({ pageInfo, history }) {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();

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
          <span className="page-name-bold-text">
            {" "}
            - {t("Selected-Projects")}
          </span>
        </h3>
        <div className="projects-container">
          {pageInfo.items.projects &&
            pageInfo.items.projects.map((project, i) => {
              return (
                <div
                  className="project"
                  key={i}
                  onClick={() =>
                    history.push({
                      pathname: `/project/${project.id}`,
                      state: pageInfo.pageName,
                    })
                  }
                >
                  <img
                    src={
                      project.photos[0]
                        ? `${generalUrl}/${project.photos[0].path}`
                        : ""
                    }
                    alt="selected"
                  />
                  <p>
                    {i18n.language == "am" ? project.title_hy : project.title}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
