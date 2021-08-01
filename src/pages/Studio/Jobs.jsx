import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "../../css/Studio/jobs.css";
import { getJobs } from "../../lib/requests";

import Menu from "../Home/Menu";

export default function Jobs() {
  const [showMenu, setShowMenu] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    getJobs((data) => {
      data.length > 0 && setTitle(data[0].title);
      data.length > 0 && setDescription(data[0].description);
    });
  }, []);
  return (
    <div className={`studio-jobs ${showMenu ? "studio-jobs-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu={setShowMenu} />
      <div className="studio-jobs-content">
        <div className="studio-jobs-left-bar"></div>
        <div className="studio-jobs-right-bar">
          <h3>{title && title}</h3>
          <p>{description && description}</p>
        </div>
      </div>
      <Footer showIcons={false} />
    </div>
  );
}
