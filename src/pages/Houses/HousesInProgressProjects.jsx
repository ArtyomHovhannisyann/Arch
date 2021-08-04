import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import InProgressProjects from "../../components/InProgressProjects/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function HousesInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();

  const pageInfo = {
    pageName: t("Houses"),
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
    <div className="houses-in-progress-projects projects">
      <InProgressProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
