import { useRoutes } from "react-router-dom";
import DashboardLayout from "./components/Layout/Layout";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import ProductList from "./pages/ProductList";
import { Page404 } from "./pages/Page404";
import AuthScreen from "./pages/AuthScreen";
import CouponList from "./pages/CouponList";

export const RouteList: React.FC = () => {
  return useRoutes([
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <ProductList />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/coupon-list",
          element: <CouponList />,
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart />,
        },
        {
          path: "/login-register",
          element: <AuthScreen />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ]);
};
