import { Typography } from "@mui/material";
import CouponCard from "../components/CouponCard";
import coupons from "../CouponData";

const CouponList = () => {
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
