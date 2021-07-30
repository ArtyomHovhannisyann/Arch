import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "../../css/Studio/team.css";

import Menu from "../Home/Menu";

export default function StudioTeam() {
  const [showMenu, setShowMenu] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    {
      url: "../images/member1.png",
      memberName: "Shirely Marco",
      memberInfo:
        "AA (Architectural Association) Diploma RIBA Part 2 FOUNDER SINCE 2000",
    },
    {
      url: "../images/member2.png",
      memberName: "Shirely Marco",
      memberInfo:
        "AA (Architectural Association) Diploma RIBA Part 2 FOUNDER SINCE 2000",
    },
    {
      url: "../images/member3.png",
      memberName: "Shirely Marco",
      memberInfo:
        "AA (Architectural Association) Diploma RIBA Part 2 FOUNDER SINCE 2000",
    },
    {
      url: "../images/member4.png",
      memberName: "Shirely Marco",
      memberInfo:
        "AA (Architectural Association) Diploma RIBA Part 2 FOUNDER SINCE 2000",
    },
  ]);
  return (
    <div className={`studio-team ${showMenu ? "studio-team-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu = {setShowMenu}/>
      <div className="studio-team-content">
        <h3 className="page-name studio-team-page-name">
          Studio
          <span className="page-name-bold-text"> - Team</span>
        </h3>

        <div className="studio-team-img">
          <img src="../images/team.png" alt="team" />
        </div>
        <div className="studio-about-team">
          <p className="studio-team-info">
            The studio lends its language to the modernist style and its work
            revolves around the period and design values of the modernist
            movement.
          </p>
          <p className="studio-team-description">
            The studio lends its language to the modernist style and its work
            revolves around the period and design values of the modernist
            movement. In its the early years the studio engaged in constant
            dialogue and exploration with the core values of minimalism;
            Reduction, disassembling the building materials, as a process of
            avoiding irrelevance in order to emphasize the central essence and
            theme, refinement and search for the essence of space. The process
            led to a tight, uncompromising architecture in search of absolute
            truth. This pursuit of simplicity produced sophisticated, accurate
            and unique results. Most of the projects were characterized by
            simple, rectangular, repetitive geometric shapes that give a precise
            and fastened appearance. The fronts are uniform, monochromatic,
            devoid of decorations and overly sweeping gestures, with the main
            reference to light and movement as a basic motif. Through this
            language there is a sincere attempt to put order in urban chaos. The
            studio has been busy in recent years in search of new materialism, a
            newer thought, an exit outside the boundaries of the seller. After
            years of abstraction of the materialism in order to avoid any
            distraction, that created the momentous moments the space user
            experiences, the studio began adding layers of materials while trial
            and error, thus creating more enigmatic and elusive building spaces,
            that cause greater curiosity. Widespread use is made in the research
            of innovative materials, mainly in building envelopes. After years
            of abstraction of the materialism in order to avoid any distraction,
            that created the momentous moments the space user experiences, the
            studio began adding layers of materials while trial and error, thus
            creating more enigmatic and elusive building spaces, that cause
            greater curiosity.
          </p>
        </div>
        <div className="studio-team-members">
          {teamMembers.map((el, i) => {
            return (
              <div className="studio-team-member" key={i}>
                <div className="studio-team-member-info">
                  <h3 className="member-name">{el.memberName}</h3>
                  <p className="member-info">{el.memberInfo}</p>
                </div>
                <img src={el.url} alt="member" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer showIcons = {false}/>
    </div>
  );
}
