import React, { useState } from "react";

import "../../css/Studio/jobs.css";

import Menu from "../Home/Menu";

export default function Jobs() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="studio-jobs">
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="studio-jobs-content">
        <div className="studio-jobs-left-bar">
          <div
            className="menu-icon jobs-menu-icon"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src="../images/menu-icon.png" alt="menu" />
          </div>
        </div>
        <div className="studio-jobs-right-bar">
          <div className="header-logo jobs-header-logo">
            <h3>Anarch</h3>
          </div>
          <div className="jobs-right-bar-content">
            <h3>Jobs</h3>
            <p>
              We’re always looking for excellent and talented architects to join
              our team. If you think you are suitable, please send us your CV
              and a portfolio of your work to this email jobs@anarch.com
            </p>
          </div>
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
              <img src="../images/arrow-down.png" alt="arrow"  className = "arrow"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
