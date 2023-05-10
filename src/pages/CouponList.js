import { Typography } from "@mui/material";
import CouponCard from "../components/CouponCard";
import coupons from "../CouponData";
import { useCoupon } from "../context/Coupon/CouponContext";

const CouponList = () => {
  const { coupons, fetchCouponById, loading } = useCoupon();
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Coupon List
      </Typography>

      {coupons.map((coupon) => (
        <CouponCard key={coupon.id} coupon={coupon} />
      ))}
    </>
  );
};
export default CouponList;
