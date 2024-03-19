import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../css/footer/footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-social-media-icons">
        <a href="https://www.facebook.com/anarch.architectural.studio?mibextid=LQQJ4d" target = "_blank">
          <img src="../images/facebook-logo.svg" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/anarch_architectural_studio?igsh=Y2Fmb2M3YzhnN256&utm_source=qr" target = "_blank">
          <img src="../images/instagram-logo.svg" alt="instagram" />
        </a>
      </div>
    </div>
  );
}
