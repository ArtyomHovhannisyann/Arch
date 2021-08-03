import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function ResidentialAndPublicProjectsInProgressProjects({
  history,
}) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageName: "Residential and Public Projects",
    items: projects,
  };
  useEffect(() => {
    getProjects(
      (data) => {
        setProjects(data);
      },
      2,
      3
    );
  }, []);
  return (
    <div className="residential-and-public-in-progress-projects">
      <InProgressProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
