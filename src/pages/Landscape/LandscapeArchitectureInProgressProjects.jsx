import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function LandscapeArchitectureInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects(
      (data) => {
        setProjects(data);
      },
      2,
      4
    );
  }, []);
  const pageInfo = {
    pageName: "Landscape Architecture",
    items: projects,
  };
  return (
    <div className="landscape-architecture-in-progress-projects">
      <InProgressProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
