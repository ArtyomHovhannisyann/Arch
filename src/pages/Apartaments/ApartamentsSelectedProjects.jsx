import React, { useState } from "react";
import { useEffect } from "react";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function ApartamentsSelectedProjects({ history }) {
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
    <div className="apartaments-selected-projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
