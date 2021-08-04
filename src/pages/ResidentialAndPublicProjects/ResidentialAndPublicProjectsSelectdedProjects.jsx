import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function ResidentialAndPublicProjectsSelectdedProjects({
  history,
}) {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();
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
    pageName: t("Residential-and-Public-Projects"),
    items: projects,
  };
  return (
    <div className="residential-and-public-projects-selected-projects projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
