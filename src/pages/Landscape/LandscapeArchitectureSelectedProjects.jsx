import React, { useState } from "react";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";

export default function LandscapeArchitectureSelectedProjects({ history }) {
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
  const pageInfo = {
    pageName: "Landscape Architecture",
    items: projects,
  };
  return (
    <div className="landscape-architecture-selected-projects">
      <SelectedProjects pageInfo={pageInfo} history = {history}/>
    </div>
  );
}
