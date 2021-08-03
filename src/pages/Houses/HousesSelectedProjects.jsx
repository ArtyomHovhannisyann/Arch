import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function HousesSelectedProjects({ history }) {
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
      1
    );
  }, []);
  return (
    <div className="houses-selected-projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
