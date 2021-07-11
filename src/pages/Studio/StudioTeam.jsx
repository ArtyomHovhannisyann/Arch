import React, { useState } from "react";

import "../../css/Studio/team.css";

import Menu from "../Home/Menu";

export default function StudioTeam() {
  const [showMenu, setShowMenu] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    "../images/member1.png",
    "../images/member2.png",
    "../images/member3.png",
    "../images/member4.png",
  ]);
  return (
    <div className={("studio-team", showMenu ? "studio-team-hide" : "")}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <div className="header">
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <img src="../images/menu-black-icon.png" alt="menu" />
        </div>
        <div className="header-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <div className="studio-team-content">
        <h3 className="studio-page-name">Studio-Team</h3>
        <div className="studio-team-img">
          <img src="../images/team.png" alt="team" />
        </div>
        <div className="studio-about-team">
          <p className="studio-team-info">
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
            of innovative materials, mainly in building envelopes. In an attempt
            to deepen the language and cast new content, the studio has in
            recent years worked with almost contrasting materials such as corten
            steel and exposed concrete , and thin aluminum, carbon and other
            innovative materials from the technological industries. The
            combination of materials and the combination of different languages
            and sometimes even different design schools created tension and
            drama in some of the projects. Today, after 20 years of work, when
            you can already look back at a relatively broad perspective on the
            studio’s body of work, it can be noted that many of the projects are
            characterized by a contrast between simple and clean outward masses,
            and complex and rich internal sections. In doing so, the studio
            manages to produce a unique and powerful experience.The studio is
            planning projects on various scales. From designing interiors of
            restaurants, show rooms and living spaces through planning and
            designing private homes, to large residential and office buildings.
          </p>
        </div>
        <div className="studio-team-members">
          {teamMembers.map((el, i) => {
            return (
              <div className="studio-team-member" key = {i}>
                <img src={el} alt="member" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <div className="footer-social-media-icons">
          <img src="../images/facebook-logo.png" alt="facebook" />
          <img src="../images/instagram-logo.png" alt="instagram" />
        </div>
        <div className="footer-languages">
          <ul>
            <li>
              <img src="../images/language.png" alt="languages" />
              <p>English</p>
              <img src="../images/arrow-down.png" alt="arrow"  className = "arrow"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
