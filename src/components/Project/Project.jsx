import React, { useState } from "react";
import Menu from "../../pages/Home/Menu";
import "../../css/Project/project.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Project( {history,match} ) {
  const id = match.params.id - 1
  const [showMenu, setShowMenu] = useState(false);
  const [projects, setProjects] = useState([
    {
      projectTitle: "House of Parties",
      images: [
        "../images/selected-project1.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 1,
    },
    {
      projectTitle: "SB House",
      images: [
        "../images/selected-project2.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],

      id: 2,
    },
    {
      projectTitle: "House of Parties",
      images: [
        "../images/selected-project1.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 3,
    },
    {
      projectTitle: "F House",
      images: [
        "../images/selected-project3.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 4,
    },
    {
      projectTitle: "SB House",
      images: [
        "../images/selected-project2.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],

      id: 5,
    },
    {
      projectTitle: "F House",
      images: [
        "../images/selected-project3.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],

      id: 6,
    },
    {
      projectTitle: "House of Parties",
      images: [
        "../images/selected-project1.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 7,
    },
    {
      projectTitle: "SB House",
      images: [
        "../images/selected-project2.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 8,
    },
    {
      projectTitle: "SB House",
      images: [
        "../images/selected-project2.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 9,
    },
    {
      projectTitle: "F House",
      images: [
        "../images/selected-project3.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 10,
    },
    {
      projectTitle: "F House",
      images: [
        "../images/selected-project2.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],
      id: 11,
    },
    {
      projectTitle: "House of Parties",
      images: [
        "../images/selected-project1.png",
        "../images/project1.png",
        "../images/project2.png",
        "../images/project3.png",
        "../images/project4.png",
      ],

      id: 12,
    },
  ]);

  return (
    <div className={`project-page ${showMenu ? "project-header-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className={"project-header"}>
        <div
          className="menu-black-icon"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
        <div className="header-logo contact-header-logo black-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <div className="project-image-name  ">
        <div className="project-left-bar">
          <img src={projects[id].images[0]} alt="" />
        </div>
        <div className="project-name">
          <a href="#footer">
            <h3>{projects[id].projectTitle}</h3>
            <img src="../images/down.png" alt="" />
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-content-location">
          <span className="project-info-header">Location</span>: Tel Aviv <br />
          <span className="project-info-header">Total floor area</span>: 511 sqm{" "}
          <br />
          <span className="project-info-header">Total site area</span>: 500 sqm{" "}
          <br />
          <span className="project-info-header">
            Design and built: 2010-2014 Program
          </span>
          : single family house <br />
        </div>
        <div className="project-content-about">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. At vero eos
            et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.Temporibus
            autem quibusdam et aut officiis debitis aut rerum necessitatibus
            saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
            aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
            aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>
      <div className="project-images">
        {projects[id].images.map((el, i) => {
          if (i != 0) {
            return <img src={el} alt="" key={i} />;
          }
        })}
        <div className="back" onClick={() => history.goBack()}>
          Back
        </div>
      </div>
     <Footer/>
    </div>
  );
}
