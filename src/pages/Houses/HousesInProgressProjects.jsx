import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function HousesInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageName: "Houses",
    items: projects,
  };
  useEffect(() => {
    getProjects(
      (data) => {
        setProjects(data);
      },
      2,
      2
    );
  }, []);
  return (
    <div className="houses-in-progress-projects">
      <InProgressProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
