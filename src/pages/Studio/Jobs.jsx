import React, { useState } from "react";

import "../../css/Studio/jobs.css";

import Menu from "../Home/Menu";

export default function Jobs() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`studio-jobs ${showMenu ? "studio-jobs-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="studio-jobs-header">
        <div
          className="menu-black-icon jobs-menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
        <div className="header-logo jobs-header-logo black-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <div className="studio-jobs-content">
        <h3 className="studio-page-name studio-jobs-page">Studio-Job</h3>
        <div className="studio-jobs-left-bar"></div>
        <div className="studio-jobs-right-bar">
          <h3>Jobs</h3>
          <p>
            We’re always looking for excellent and talented architects to join
            our team. If you think you are suitable, please send us your CV and
            a portfolio of your work to this email jobs@anarch.com
          </p>
        </div>
      </div>
      <div className="footer">
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
