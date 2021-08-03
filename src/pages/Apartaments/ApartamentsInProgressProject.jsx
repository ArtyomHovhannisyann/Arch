import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function ApartamentsInProgressProject({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageName: "Apartaments",
    items: projects,
  };
  useEffect(() => {
    getProjects(
      (data) => {
        setProjects(data);
      },
      1,
      1
    );
  }, []);
  return (
    <div className="apartaments-in-progress-projects">
      <InProgressProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
