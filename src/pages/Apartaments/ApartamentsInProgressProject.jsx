import React, { useState } from "react";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";

export default function ApartamentsInProgressProject() {
  const [projects, setProjects] = useState([
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
    },
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
    },
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
    },
    {
      projectTitle: "SB House",
      url: "../images/selected-project2.png",
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
    },
    {
      projectTitle: "F House",
      url: "../images/selected-project3.png",
    },
    {
      projectTitle: "House of Parties",
      url: "../images/selected-project1.png",
    },
  ]);
  const pageInfo = {
    pageName: "Apartaments",
    items: projects,
  };
  return (
    <div onClick="apartaments-in-progress-projects">
      <InProgressProjects pageInfo = {pageInfo}/>
    </div>
  );
}
