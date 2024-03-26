import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

import "../../css/Studio/contact.css";
import { generalUrl } from "../../lib/constants";
import { getContacts } from "../../lib/requests";
import Header from "../../components/Header/Header";

import Menu from "../Home/Menu";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [showMenu, setShowMenu] = useState(false);
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    getContacts((data) => {
      data.length > 0 && setAddress(data[0].address);
      data.length > 0 && setPhoneNumber(data[0]["phone-number"]);
      data.length > 0 && setEmail(data[0].email);
      data.length > 0 && setImage(`${generalUrl}/${data[0].image}`);
    });
  }, []);
  return (
    <div className={`studio-contact ${showMenu ? "studio-contact-hide" : ""}`}>
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Header setShowMenu={setShowMenu} />
      <div className="studio-contact-content">
        <div
          className="studio-contact-left-bar"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        ></div>
        <div className="studio-contact-right-bar">
          <span className="contact-info-header">{t("CallBackTitle1")}</span>
          <p className="contact-address">{t("CallBackValue1")}</p>
          <p className="contact-info-email">
            <span className="contact-info-header">{t("CallBackTitle2")}</span>:
            <a
              href={`tel:${phoneNumber}`}
              className="contact-email"
            >
              {phoneNumber}
            </a>
          </p>
          <p className="contact-info-email">
            <span className="contact-info-header">{t("CallBackTitle3")}</span>:
            <a
              href={`mailto:${email}`}
              className="contact-email"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
      <Footer showIcons={false} />
    </div>
  );
}
