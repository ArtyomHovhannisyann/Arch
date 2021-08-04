import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../css/footer/footer.css";

export default function Footer() {
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
    </div>
  );
}
