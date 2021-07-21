import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "../../css/Studio/jobs.css";

import Menu from "../Home/Menu";

export default function Jobs() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`studio-jobs ${showMenu ? "studio-jobs-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
     <Header setShowMenu = {setShowMenu}/>
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
      <Footer showIcons = {false}/>
    </div>
  );
}
