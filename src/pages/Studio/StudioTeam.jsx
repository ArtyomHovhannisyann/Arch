import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "../../css/Studio/team.css";
import { generalUrl } from "../../lib/constants";
import { getStudioMembers, getStudioTeam } from "../../lib/requests";
import { useTranslation } from "react-i18next";

import Menu from "../Home/Menu";

export default function StudioTeam() {
  const [showMenu, setShowMenu] = useState(false);
  const [teamInfo, setTeamInfo] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    getStudioTeam((data) => {
      setTeamInfo(data);
    });
    getStudioMembers((data) => {
      setTeamMembers(data);
    });
  }, []);
  return (
    <div className={`studio-team ${showMenu ? "studio-team-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu={setShowMenu} />
      <div className="studio-team-content">
        <h3 className="page-name studio-team-page-name">
          {t("Studio")}
          <span className="page-name-bold-text team-page-name"> - {t("Team")}</span>
        </h3>

        <div className="studio-team-img">
          <img
            src={
              teamInfo.length > 0 ? `${generalUrl}/${teamInfo[0].image}` : ``
            }
            alt="team"
          />
        </div>
        <div className="studio-about-team">
          <p className="studio-team-info">
            {teamInfo.length > 0 &&
              (i18n.language == "am" ? teamInfo[0].info_hy : teamInfo[0].info)}
          </p>
          <p className="studio-team-description">
            {teamInfo.length > 0 &&
              (i18n.language == "am"
                ? teamInfo[0].description_hy
                : teamInfo[0].description)}
          </p>
        </div>
        <div className="studio-team-members">
          {teamMembers.map((el, i) => {
            return (
              <div className="studio-team-member" key={i}>
                <div className="studio-team-member-info">
                  <h3 className="member-name" style={i18n.language === "am" ? {fontFamily: "var(--bold-font)"} : {}}>{i18n.language == "am" ? el.name_hy : el.name}</h3>
                  <p className="member-info">{i18n.language == "am" ? el.description_hy : el.description}</p>
                </div>
                <img src={`${generalUrl}/${el.image}`} alt="member" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer showIcons={false} />
    </div>
  );
}
