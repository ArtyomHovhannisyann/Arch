import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../css/footer/footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-social-media-icons">
        <a href="https://www.facebook.com/ProfAlArchitecturalStudio" target = "_blank">
          <img src="../images/facebook-logo.png" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/profal_by_anarch/" target = "_blank">
          <img src="../images/instagram-logo.png" alt="instagram" />
        </a>
      </div>
    </div>
  );
}
