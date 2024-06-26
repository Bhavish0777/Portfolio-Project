import React from "react";
import logo from "../../assets/web-coding.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-copyright">
        <p>© 2024 Caltech ltd. All Right reserved</p>
      </div>

      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://x.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ilapaka-bhavish-7390a3299/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
