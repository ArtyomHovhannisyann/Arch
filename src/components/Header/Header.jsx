import React from "react";
import "../../css/Header/header.css"

export default function Header({setShowMenu}) {
  return (
    <div className="header">
      <div
        className="menu-icon menu-black-icon"
        onClick={() => setShowMenu(true)}
      ></div>
      <div className="header-logo team-header-logo">
        <h3>Anarch</h3>
      </div>
    </div>
  );
}
