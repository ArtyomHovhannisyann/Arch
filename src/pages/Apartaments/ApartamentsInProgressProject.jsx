import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function ApartamentsInProgressProject({ history }) {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();

  const pageInfo = {
    pageName: t("Apartments"),
    items: projects,
  };
  useEffect(() => {
    getProjects(
      (data) => {
        setProjects(data);
      },
      1,
      2
    );
  }, []);
  return (
    <div className="apartaments-in-progress-projects projects">
      <InProgressProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
