import React from "react";
import burger from "../assets/burgerM.jpg";
import "../styles/Contact.css";
export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${burger})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı girin.."
          />
          <label>E mail</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen mailinizi girin.."
          />
          <label>Mesajınızı Girin</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı girin.."
          />
        </form>
      </div>
    </div>
  );
};
export default Contact;
