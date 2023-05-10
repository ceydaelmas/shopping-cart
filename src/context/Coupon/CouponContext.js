import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../config";

export const CouponContext = createContext();

export const useCoupon = () => {
  return useContext(CouponContext);
};
export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCouponData = () => {
    fetch(`${BASE_URL}get-all-coupons`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoupons(data);
        console.log(data);
      });
  };

  const fetchCouponById = (couponId) => {
    return fetch(`${BASE_URL}api/Product/get-product-by-id?Id=${couponId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    fetchCouponData();
  }, []);

  const value = {
    coupons,
    loading,
    fetchCouponById,
  };

  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
};
