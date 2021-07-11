import React, { useState } from "react";

import "../../css/Studio/contact.css";

import Menu from "../Home/Menu";

export default function Contact() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="studio-contact">
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="studio-contact-content">
        <div className="studio-contact-left-bar">
          <div
            className="menu-icon contact-menu-icon"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src="../images/menu-icon.png" alt="menu" />
          </div>
        </div>
        <div className="studio-contact-right-bar">
          <div className="header-logo contact-header-logo">
            <h3>Anarch</h3>
          </div>
          <div className="contact-right-bar-content">
            <span className="contact-info-header">Anarch Kedem Architect</span>
            <p>
              39 Maze St. Ground Floor Tel-Aviv <br />
              T. 03.6204493 F. 03.6292835
            </p>
            <p className = "contact-info-email">
              <span className="contact-info-header">Studio Manger</span>:
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrdlBNjvWWFqmmfFnxtwPBxjZNXnhXjjmTpkLRjjwvLwlDhGqMLssLWTfMQSrXQrbdCkFg"
                className="contact-email"
              >
                office@anarch.com
              </a>
            </p>
            <p className = "contact-info-email">
              <span className="contact-info-header">Press & Media</span>:
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXPMrgHtlFgCJLGkcvZMhZBjQnLljGwddLFnBbxGdPqkSdWPdGHgJQlDlpGhKPrxxGQBV" className = "contact-email">anarch.press@pitsou.com</a>
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
