import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function LandscapeArchitectureInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();
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
    pageName: t("Landscape-Architecture"),
    items: projects,
  };
  return (
    <div className="landscape-architecture-in-progress-projects">
      <InProgressProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
