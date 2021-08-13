import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

import "../../css/Studio/contact.css";
import { generalUrl } from "../../lib/constants";
import { getContacts } from "../../lib/requests";
import Header from "../../components/Header/Header";

import Menu from "../Home/Menu";

export default function Contact() {
  const [showMenu, setShowMenu] = useState(false);
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
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
          style={{ background: `url(${image})` }}
        ></div>
        <div className="studio-contact-right-bar">
          <span className="contact-info-header">Anarch Kedem Architect</span>
          <p className="contact-address">{address}</p>
          <p className="contact-info-email">
            <span className="contact-info-header">Studio Manger</span>:
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrdlBNjvWWFqmmfFnxtwPBxjZNXnhXjjmTpkLRjjwvLwlDhGqMLssLWTfMQSrXQrbdCkFg"
              className="contact-email"
            >
              {phoneNumber}
            </a>
          </p>
          <p className="contact-info-email">
            <span className="contact-info-header">Press & Media</span>:
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXPMrgHtlFgCJLGkcvZMhZBjQnLljGwddLFnBbxGdPqkSdWPdGHgJQlDlpGhKPrxxGQBV"
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
