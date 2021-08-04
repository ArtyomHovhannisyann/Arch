import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../css/footer/footer.css";

export default function Footer({ showIcons = true }) {
  const [showHiddenLanguages, setShowHiddenLanguages] = useState(false);
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <div className="footer" id="footer">
      <div className="footer-social-media-icons">
        <a href="#">
          <img src="../images/facebook-logo.png" alt="facebook" />
        </a>
        <a href="#">
          <img src="../images/instagram-logo.png" alt="instagram" />
        </a>
      </div>
      {showIcons && (
        <div className="footer-languages">
          <ul onClick={() => setShowHiddenLanguages(!showHiddenLanguages)}>
            {showHiddenLanguages && (
              <li className="hidden-languages">
                <p onClick ={()=>i18n.changeLanguage(i18n.language == "am" ? "en" : "am")}>{i18n.language == "am" ? "English" : "Հայերեն"}</p>
              </li>
            )}
            <li>
              <img
                src="../images/language.png"
                alt="languages"
                className="language-icon"
              />
              <p>{i18n.language == "am" ? "Հայերեն" : "English"}</p>
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
