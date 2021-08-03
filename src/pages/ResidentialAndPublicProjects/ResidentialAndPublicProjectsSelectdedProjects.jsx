import React, { useState, useEffect } from "react";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function ResidentialAndPublicProjectsSelectdedProjects({
  history,
}) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects(
      (data) => {
        setProjects(data);
      },
      1,
      3
    );
  }, []);
  const pageInfo = {
    pageName: "Residential and Public Projects",
    items: projects,
  };
  return (
    <div className="residential-and-public-projects-selected-projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
