import React from "react";
import "./Footer.style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} cooking recipe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
