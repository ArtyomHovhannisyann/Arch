import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Menu({ closeMenu }) {
  const { t, i18n } = useTranslation();
  let pages = [
    [
      {
        pageHeader: t("Studio"),
      },
      {
        pageName: t("Team"),
        path: "/studio/team",
      },
      {
        pageName: t("Jobs"),
        path: "/studio/jobs",
      },
      {
        pageName: t("Contact"),
        path: "/studio/contact",
      },
    ],
    [
      {
        pageHeader: t("Apartments"),
      },
      {
        pageName: t("Selected-Projects"),
        path: "/apartaments/selected-projects",
      },
      {
        pageName: t("In-Progress"),
        path: "/apartaments/in-progress-projects",
      },
    ],
    [
      {
        pageHeader: t("Houses"),
      },
      {
        pageName: t("Selected-Projects"),
        path: "/houses/selected-projects",
      },
      {
        pageName: t("In-Progress"),
        path: "/houses/in-progress-projects",
      },
    ],
    [
      {
        pageHeader: t("Residential-and-Public-Projects"),
      },
      {
        pageName: t("Selected-Projects"),
        path: "/residential-and-public-projects/selected-projects",
      },
      {
        pageName: t("In-Progress"),
        path: "/residential-and-public-projects/in-progress-projects",
      },
    ],
    [
      {
        pageHeader: t("Landscape-Architecture"),
      },
      {
        pageName: t("Selected-Projects"),
        path: "/landscape/selected-projects",
      },
      {
        pageName: t("In-Progress"),
        path: "/landscape/in-progress-projects",
      },
    ],
  ];
  const [isEngActive, setIsEngActive] = useState(i18n.language === `en`);
  const [isArmActive, setIsArmActive] = useState(i18n.language === `am`);

  function changeLang(lang) {
    if (lang === `en`) {
      setIsArmActive(false);
      setIsEngActive(true);
    } else {
      setIsArmActive(true);
      setIsEngActive(false);
    }
    i18n.changeLanguage(lang);
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="close-icon">
          <img
            src="../images/close.png"
            alt="close"
            onClick={() => closeMenu(false)}
          />
        </div>
        <div className="menu-logo">
          <Link to="/home">
            <h3>Anarch</h3>
          </Link>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-content">
          <dl className="pages">
            {pages.map((page, pageIndex) => {
              return (
                <div className={"menu-page"} key={pageIndex}>
                  {page.map((el, i) => {
                    if (el.pageHeader) {
                      if (el.path) {
                        return (
                          <Link to={el.path ? el.path : "/"} key={i}>
                            <dt className="menu-pageheader" key={i}>
                              {el.pageHeader}
                            </dt>
                          </Link>
                        );
                      }
                      return (
                        <dt className="menu-pageheader" key={i}>
                          {el.pageHeader}
                        </dt>
                      );
                    }
                    return (
                      <Link to={el.path ? el.path : "/"} key={i}>
                        <dd key={i}>{el.pageName}</dd>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </dl>
        </div>
        <div className="menu-footer">
          <div className="social-media-icons">
            <a
              href="https://www.facebook.com/ProfAlArchitecturalStudio"
              target="_blank"
            >
              <img
                src="../images/facebook-logo.png"
                className="facebook-icon"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/profal_by_anarch/"
              target="_blank"
            >
              <img
                src="../images/instagram-logo.png"
                className="instagram-icon"
                alt="instagram"
              />
            </a>
          </div>
          <div className="menu-footer-languages">
            <p
              className={`${isEngActive ? "active-language" : ""}`}
              onClick={() => changeLang(`en`)}
            >
              English
            </p>
            <p
              className={`${isArmActive ? "active-language" : ""}`}
              onClick={() => changeLang(`am`)}
            >
              Հայերեն
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
