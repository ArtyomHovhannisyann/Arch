import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function HousesSelectedProjects({ history }) {
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
      1
    );
  }, []);
  return (
    <div className="houses-selected-projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
