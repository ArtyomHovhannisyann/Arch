import React, { useState, useEffect } from "react";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function LandscapeArchitectureSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects(
      (data) => {
        setProjects(data);
      },
      1,
      4
    );
  }, []);
  const pageInfo = {
    pageName: "Landscape Architecture",
    items: projects,
  };
  return (
    <div className="landscape-architecture-selected-projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
