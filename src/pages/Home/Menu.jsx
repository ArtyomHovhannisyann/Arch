import React from "react";
import { Link } from "react-router-dom";

export default function Menu({closeMenu}) {
  let pages = [
    [
      {
        pageHeader: "Studio",
      },
      {
        pageName: "Team",
        path:"/studio/team"
      },
      {
        pageName: "Jobs",
      },
      {
        pageName: "Contact",
      },
    ],
    [
      {
        pageHeader: "Apartments",
      },
      {
        pageName: "Selected Projects",
      },
      {
        pageName: "In Progress",
      },
    ],
    [
      {
        pageHeader: "Houses",
      },
      {
        pageName: "Selected Projects",
      },
      {
        pageName: "In Progress",
      },
    ],
    [
      {
        pageHeader: "Residential and Public Projects",
      },
      {
        pageName: "Selected Projects",
      },
      {
        pageName: "In Progress",
      },
    ],
    [
      {
        pageHeader: "Landscape Architecture",
      },
      {
        pageName: "Selected Projects",
      },
      {
        pageName: "In Progress",
      },
    ],
  ];
  return (
    <div className="menu">
      <div className="menu-header">
        <div className="close-icon">
          <img src="../images/close.png" alt="close" onClick = {()=>closeMenu(false)}/>
        </div>
        <div className="menu-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-content">
          <dl className="pages">
            {pages.map((page) => {
              return (
                <div className={"menu-page"}>
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
            <img src="../images/facebook-logo.png" className = "instagram-icon"/>
            <img src="../images/instagram-logo.png"  className = "facebook-icon"/>
          </div>
          <div className = "menu-footer-languages">
            <p className = "active-language">English</p>
            <p>Հայերեն</p>
          </div>
        </div>
      </div>
    </div>
  );
}
