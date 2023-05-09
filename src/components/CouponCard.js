// CouponCard.js
import React, { useState } from "react";
import "./CouponCard.css";

const CouponCard = ({ coupon }) => {
  const [buttonText, setButtonText] = useState("Copy Code");

  const copyCode = () => {
    const cpnCode = coupon._id;
    navigator.clipboard.writeText(cpnCode);
    setButtonText("COPIED");

    setTimeout(() => {
      setButtonText("Copy Code");
    }, 3000);
  };

  return (
    <div className="child">
      <div className="coupon-card">
        <h3>
          {coupon.name}
          <br />
          {coupon.description}
        </h3>
        <div className="coupon-row">
          <span id="cpnCode">{coupon._id}</span>
          <span id="cpnBtn" onClick={copyCode}>
            {buttonText}
          </span>
        </div>
        <p>Geçerlilik: {coupon.date}</p>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default CouponCard;
