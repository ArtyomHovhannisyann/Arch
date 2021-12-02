import React, { useState } from "react";
import Menu from "../../pages/Home/Menu";
import "../../css/Project/project.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect } from "react";
import { getProjectById } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";
import { useTranslation } from "react-i18next";

export default function Project({ history, match }) {
  const id = match.params.id;
  const [showMenu, setShowMenu] = useState(false);
  const [project, setProject] = useState({});
  const { t, i18n } = useTranslation();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    getProjectById((data) => {
      setProject(data.project);
    }, id);
  }, []);

  const isMobile = window.innerWidth <= 880;
  return (
    <div className={`project-page ${showMenu ? "project-header-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu={setShowMenu} />
      <div className="project-image-name  ">
        <div className="project-left-bar">
          <img
            src={
              project.photos ? `${generalUrl}/${project.photos[0].path}` : ""
            }
            alt=""
          />
        </div>
        <div className="project-name">
          <a href="#footer">
            <h3>{i18n.language == "am" ? project.title_hy : project.title}</h3>
            <img src="../images/down.png" alt="" />
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-content-location-wrapper">
          <div className="project-content-location">
            <span className="project-info-header">{t("Location")}</span>:
            {i18n.language == "am" ? project.location_hy : project.location}
            <br />
            <span className="project-info-header">{t("Total-floor-area")}</span>
            :
            <span className="project-info-number">
              {i18n.language == "am"
                ? project["total-floor-area_hy"]
                : project["total-floor-area"]}
            </span>
            <br />
            <span className="project-info-header">{t("Design-and-built")}</span>
            :
            <span className="project-info-number">
              {i18n.language == "am"
                ? project["design-and-built_hy"]
                : project["design-and-built"]}
            </span>
            <br />
            <span className="project-info-header">{t("Design-team")}:</span>
            {i18n.language == "am"
              ? project["design-team_hy"]
              : project["design-team"]}
          </div>
        </div>
        <div className="project-content-about">
          <p>
            {i18n.language == "am"
              ? project.description_hy
              : project.description}
          </p>
        </div>
      </div>
      <div className="project-images">
        {project.photos &&
          project.photos.length > 0 &&
          project.photos.map((el, i) => {
            if (i != 0) {
              if (i % 4 == 0) {
                if (!isMobile) {
                  return (
                    <div
                      key={i}
                      className="paralax-image"
                      style={{
                        backgroundImage: `url(${generalUrl}/${el.path})`,
                      }}
                    ></div>
                  );
                } else return <></>;
              }
              return <img src={`${generalUrl}/${el.path}`} alt="" key={i} />;
            }
          })}
        <div className="back" onClick={() => history.goBack()}>
          {t("Back")}
        </div>
      </div>
      <Footer />
    </div>
  );
}
