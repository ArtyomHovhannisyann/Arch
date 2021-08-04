import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function ResidentialAndPublicProjectsInProgressProjects({
  history,
}) {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();
  const pageInfo = {
    pageName: t("Residential-and-Public-Projects"),
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
