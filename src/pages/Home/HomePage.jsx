import React, { useState } from "react";

import "react-awesome-slider/dist/styles.css";
import "../../css/Home/home.css";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Menu from "./Menu";

export default function HomePage() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div className="home-page">
      {showMenu && <Menu closeMenu = {setShowMenu}/>}
      <div className="header">
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <img src="../images/menu-icon.png" alt="menu" />
        </div>
        <div className="header-logo">
          <h3>Anarch</h3>
        </div>
      </div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        fillParent={true}
        organicArrows={false}
        media={[
          {
            source: "../images/house1.png",
          },
          {
            source: "../images/house2.png",
          },
          {
            source: "../images/house3.png",
          },
        ]}
      />
    </div>
  );
}
