import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Menu({ closeMenu }) {
  const { t, i18n } = useTranslation();
  const [isEngActive, setIsEngActive] = useState(i18n.language === `en`);
  const [isArmActive, setIsArmActive] = useState(i18n.language === `am`);
  const [isTablet, setIsTablet] = useState(false);
  function resize() {
    const w = window.innerWidth;
    setIsTablet(w <= 881);
  }
  useEffect(() => {
    resize()
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const pages = [
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
        pageHeader: t("Offices"),
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

  function getTitle(title) {
    if (title.split(`Բնակելի և`).length > 1)
      return [...title.split(` և `)]
        .map((el) => `<span>${el}</span>`)
        .join(` և <br />`);
    return title;
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="close-icon" onClick={() => closeMenu(false)}>
        </div>
        <div className="menu-logo">
          <Link to="/home">
            <img
              alt="logo"
              className="logo-image" 
              src="/images/anarch-logo.png"
            />
          </Link>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-content">
          {!isTablet ? (
            <div className="pages">
              <div className="menu-item-titles menu-columns">
                {pages.map((page, pageIndex) => (
                  <div
                    className={"menu-item-title"}
                    key={pageIndex}
                    dangerouslySetInnerHTML={{
                      __html: getTitle(page[0] && page[0].pageHeader),
                    }}
                  />
                ))}
              </div>
              <div className="menu-items menu-columns">
                {pages.map((subPages) => (
                  <div key={subPages[0].pageHeader}>
                    {subPages.map((subpage) => (
                      <Link to={subpage.path ?? "/"} key={`${subpage.path}`}>
                        <div>{subpage.pageName}</div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <dl className="pages" style={{ display: "flex" }}>
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
          )}
        </div>
        <div className="menu-footer">
          <div className="social-media-icons">
            <a
              href="https://www.facebook.com/anarch.architectural.studio?mibextid=LQQJ4d"
              target="_blank"
            >
              <img
                src="../images/facebook-logo.svg"
                className="facebook-icon"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/anarch_architectural_studio?igsh=Y2Fmb2M3YzhnN256&utm_source=qr"
              target="_blank"
            >
              <img
                src="../images/instagram-logo.svg"
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
              style={isArmActive ? {} : {fontFamily: "sans-serif"}}
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
