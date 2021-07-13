import React, { useState } from "react";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";

export default function ApartamentsInProgressProject() {
  const [projects, setProjects] = useState([
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
      id: 1,
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
      id: 2,
    },
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
      id: 3,
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
      id: 4,
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
      id: 5,
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
      id: 6,
    },
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
      id: 7,
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
      id: 8,
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
      id: 9,
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
      id: 10,
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
      id: 11,
    },
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
      id: 12,
    },
  ]);
  const pageInfo = {
    pageName: "Apartaments",
    items: projects,
  };
  return (
    <div className="apartaments-in-progress-projects">
      <InProgressProjects pageInfo={pageInfo} />
    </div>
  );
}
