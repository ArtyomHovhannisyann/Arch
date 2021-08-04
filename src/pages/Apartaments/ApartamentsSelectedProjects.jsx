import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function ApartamentsSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();
  const pageInfo = {
    pageName: t("Apartaments"),
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
    <div className="apartaments-selected-projects projects">
      <SelectedProjects pageInfo={pageInfo} history={history} />
    </div>
  );
}
