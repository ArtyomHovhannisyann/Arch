import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function LandscapeArchitectureSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();

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
    pageName: t("Landscape-Architecture"),
    items: projects,
  };
  return (
    <div className="landscape-architecture-selected-projects projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
