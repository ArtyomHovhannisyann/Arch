import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

import "../../css/Studio/contact.css";

import Menu from "../Home/Menu";

export default function Contact() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`studio-contact ${showMenu ? "studio-contact-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="studio-contact-header">
        <div
          className="menu-black-icon contact-menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
        <div className="header-logo contact-header-logo black-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <div className="studio-contact-content">
        <h3 className="studio-page-name studio-contact-page">Studio-Contact</h3>
        <div className="studio-contact-left-bar"></div>
        <div className="studio-contact-right-bar">
          <span className="contact-info-header">Anarch Kedem Architect</span>
          <p>
            39 Maze St. Ground Floor Tel-Aviv <br />
            T. 03.6204493 F. 03.6292835
          </p>
          <p className="contact-info-email">
            <span className="contact-info-header">Studio Manger</span>:
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrdlBNjvWWFqmmfFnxtwPBxjZNXnhXjjmTpkLRjjwvLwlDhGqMLssLWTfMQSrXQrbdCkFg"
              className="contact-email"
            >
              office@anarch.com
            </a>
          </p>
          <p className="contact-info-email">
            <span className="contact-info-header">Press & Media</span>:
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXPMrgHtlFgCJLGkcvZMhZBjQnLljGwddLFnBbxGdPqkSdWPdGHgJQlDlpGhKPrxxGQBV"
              className="contact-email"
            >
              anarch.press@pitsou.com
            </a>
          </p>
        </div>
      </div>
      <Footer showIcons = {false}/>
    </div>
  );
}
