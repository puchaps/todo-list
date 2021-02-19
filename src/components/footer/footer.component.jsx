import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer-icons">
      <div className="footer-icon">
        <a href="https://github.com/puchaps">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-512.png"
            alt="github"
          />
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://www.instagram.com/adamovich_ps/?igshid=2rl7e5y71xkf">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Instagram-512.png"
            alt="instagram"
          />
        </a>
      </div>
    </div>
    <div className="footer-year">
      <span>&#169; 2021</span>
    </div>
  </footer>
);

export default Footer;
