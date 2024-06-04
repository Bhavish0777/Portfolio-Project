import React from "react";
import Typical from "react-typical";
import profile from "../../assets/profile2.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      {/*Header content*/}
      <div className="header-content">
        {/*heder content*/}
        <h1>Hey! I' am</h1>
        <h2 className="name">Bhavish</h2>
        <h2>
          I' am a
          <Typical
            steps={[
              " Frontend Developer 🔯",
              1000,
              " Backend Developer 🎯",
              1000,
              " Full Stack Developer 🚀",
              1000,
              " MERN Stack Developer ✅",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          In literary theory, a text is any object that can be "read", whether
          this object is a work of literature, a street sign, an arrangement of
          buildings on a city block, or styles of clothing. It is a set of signs
          that is available to be reconstructed by a reader if sufficient
          interpretants are available.
        </p>
        {/*Payment links*/}
        <div className="header-payment-container">
          <button>
            <span>Hire me</span>
          </button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/*image container*/}
      <div className="profile-image-container">
        <img src={profile} alt="profile-img" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
