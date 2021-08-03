import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Menu({ closeMenu }) {
  let pages = [
    [
      {
        pageHeader: "Studio",
      },
      {
        pageName: "Team",
        path: "/studio/team",
      },
      {
        pageName: "Jobs",
        path: "/studio/jobs",
      },
      {
        pageName: "Contact",
        path: "/studio/contact",
      },
    ],
    [
      {
        pageHeader: "Apartments",
      },
      {
        pageName: "Selected Projects",
        path: "/apartaments/selected-projects",
      },
      {
        pageName: "In Progress",
        path: "/apartaments/in-progress-projects",
      },
    ],
    [
      {
        pageHeader: "Houses",
      },
      {
        pageName: "Selected Projects",
        path: "/houses/selected-projects",
      },
      {
        pageName: "In Progress",
        path: "/houses/in-progress-projects",
      },
    ],
    [
      {
        pageHeader: "Residential and Public Projects",
      },
      {
        pageName: "Selected Projects",
        path: "/residential-and-public-projects/selected-projects",
      },
      {
        pageName: "In Progress",
        path: "/residential-and-public-projects/in-progress-projects",
      },
    ],
    [
      {
        pageHeader: "Landscape Architecture",
      },
      {
        pageName: "Selected Projects",
        path: "/landscape/selected-projects",
      },
      {
        pageName: "In Progress",
        path: "/landscape/in-progress-projects",
      },
    ],
  ];
  const { t, i18n } = useTranslation(`common`);
  const [isEngActive, setIsEngActive] = useState(i18n.language === `en`);
  const [isArmActive, setIsArmActive] = useState(i18n.language === `am`);

  function changeLang(lang) {
    if ( lang === `en` ) {
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
          <h3>Anarch</h3>
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
            <img
              src="../images/facebook-logo.png"
              className="facebook-icon"
              alt="facebook"
            />
            <img
              src="../images/instagram-logo.png"
              className="instagram-icon"
              alt="instagram"
            />
          </div>
          <div className="menu-footer-languages">
            <p
              className={`${isEngActive ? "active-language" : ""}`}
              onClick={()=>changeLang(`en`)}
            >
              English
            </p>
            <p
              className={`${isArmActive ? "active-language" : ""}`}
              onClick={()=>changeLang(`am`)}
            >
              Հայերեն
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
