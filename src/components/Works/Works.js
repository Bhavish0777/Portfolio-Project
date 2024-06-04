import React from "react";
import "./Works.css";
import w1 from "../../assets/w1.jpg";
import w2 from "../../assets/w2.jpg";
import w3 from "../../assets/w3.jpg";
import w4 from "../../assets/w4.jpg";
import w5 from "../../assets/w5.jpg";
import w6 from "../../assets/w6.jpg";
const Works = () => {
  return (
    <div className="work-container">
      <h1>my work</h1>
      <div className="work-list-container">
        <div className="work-item">
          <img src={w1} alt="w1" />
        </div>
        <div className="work-item">
          <img src={w2} alt="w2" />
        </div>
        <div className="work-item">
          <img src={w3} alt="w3" />
        </div>
        <div className="work-item">
          <img src={w4} alt="w4" />
        </div>
        <div className="work-item">
          <img src={w5} alt="w5" />
        </div>
        <div className="work-item">
          <img src={w6} alt="w6" />
        </div>
      </div>
    </div>
  );
};

export default Works;
