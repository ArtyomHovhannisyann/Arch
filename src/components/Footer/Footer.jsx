import React, { useState } from "react";
import "../../css/footer/footer.css";

export default function Footer({ showIcons = true }) {
  const [showHiddenLanguages, setShowHiddenLanguages] = useState(false);
  return (
    <div className="footer" id="footer">
      <div className="footer-social-media-icons">
        <img src="../images/facebook-logo.png" alt="facebook" />
        <img src="../images/instagram-logo.png" alt="instagram" />
      </div>
      {showIcons && (
        <div className="footer-languages">
          <ul onClick={() => setShowHiddenLanguages(!showHiddenLanguages)}>
            {showHiddenLanguages && (
              <li className = "hidden-languages">
                <p>Հայերեն</p>
              </li>
            )}
            <li>
              <img
                src="../images/language.png"
                alt="languages"
                className="language-icon"
              />
              <p>English</p>
              <img
                src="../images/arrow-down.png"
                alt="arrow"
                className="arrow"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
