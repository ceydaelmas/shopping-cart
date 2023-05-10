// CouponCard.js
import React, { useState } from "react";
import "../../style/Card/CouponCard.css";
import { CouponContext, useCoupon } from "../../context/Coupon/CouponContext";
import CouponData from "../../CouponData";
//Kullanıcın indirim kuponlarım sekmesine girdiğinde çıkan kart görüntüsü.
const CouponCard = ({ coupon }) => {
  const [buttonText, setButtonText] = useState("Kodu Kopyala");
  const couponData = CouponData.find((c) => c.id === coupon.couponId);

  //kodu kopyalar.
  const copyCode = () => {
    const cpnCode = coupon.couponId;
    navigator.clipboard.writeText(cpnCode);
    setButtonText("Kopyalandı");

    setTimeout(() => {
      setButtonText("Kodu Kopyala");
    }, 3000);
  };

  return (
    <div className="child">
      <div className="coupon-card">
        <h3>
          {couponData.name}
          <br />
          {coupon.discountType === "Amount" ? (
            <span>
              {coupon.value} TL {couponData.description}
            </span>
          ) : (
            <span>
              {coupon.value}% {couponData.description}
            </span>
          )}
        </h3>
        <div className="coupon-row">
          <span id="cpnCode">{coupon.couponId}</span>
          <span id="cpnBtn" onClick={copyCode}>
            {buttonText}
          </span>
        </div>
        <p>Geçerlilik: {couponData.date}</p>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default CouponCard;
