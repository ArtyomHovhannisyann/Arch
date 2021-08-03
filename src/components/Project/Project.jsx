import React, { useState } from "react";
import Menu from "../../pages/Home/Menu";
import "../../css/Project/project.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect } from "react";
import { getProjectById } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";

export default function Project({ history, match }) {
  const id = match.params.id;
  const [showMenu, setShowMenu] = useState(false);
  const [project, setProject] = useState([]);
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    getProjectById((data) => {
      setProject(data.project);
    }, id);
  }, []);
  console.log(project);
  return (
    <div className={`project-page ${showMenu ? "project-header-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu={setShowMenu} />
      <div className="project-image-name  ">
        <div className="project-left-bar">
          <img
            src={project.photos ? `${generalUrl}/${project.photos[0].path}` : ""}
            alt=""
          />
        </div>
        <div className="project-name">
          <a href="#footer">
            <h3>{project.title}</h3>
            <img src="../images/down.png" alt="" />
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-content-location">
          <span className="project-info-header">Location</span>:
          {project.location} <br />
          <span className="project-info-header">Total floor area</span>:
          {project["total-floor-area"]}
          <br />
          <span className="project-info-header">Total site area</span>:
          {project["total-site-area"]}
          <br />
          <span className="project-info-header">
            Design and built: {project.program}
          </span>
        </div>
        <div className="project-content-about">
          <p>{project.description}</p>
        </div>
      </div>
      <div className="project-images">
        {/* {project.photos.map((el, i) => {
          if (i != 0) {
            if (i % 4 == 0) {
              return (
                <div
                  key={i}
                  className="paralax-image"
                  style={{ backgroundImage: `url(${el})` }}
                ></div>
              );
            }
            return <img src={el} alt="" key={i} />;
          }
        })} */}
        <div className="back" onClick={() => history.goBack()}>
          Back
        </div>
      </div>
      <Footer />
    </div>
  );
}
