// import { getUser } from "./utils/auth";
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { isJSON } from "./utils/function";
// import { AuthPage } from "./pages/auth";
// import { scrollToTop } from "./utils/utility";
// import { ToastContainer } from "react-toastify";
// import { DashboardPage } from "./pages/dashboard";
// import { FreeUserPage } from "./pages/freeUser";
// import { MyRewardsPage } from "./pages/myRewards";
// import { YearlyUserPage } from "./pages/yearlyUsers";
// import { setUser } from "./api/slices/authSlice/auth";
// import { MonthlyUserPage } from "./pages/monthlyUsers";
// import { PointHistoryPage } from "./pages/pointHistory";
// import { CouponHistoryPage } from "./pages/couponHistory";
// import { RequestRedeemPage } from "./pages/requestRedeem";
// import { RedeemHistoryPage } from "./pages/redeemHistory";
// import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import PrivateRoute from "./base-component/private-route";
// import Login from "./components/login";
// import SetUpProfile from "./components/SetUpProfile";

// const App = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = isJSON(getUser());

//   useEffect(() => {
//     if (user) {
//       dispatch(setUser(user));

//       if (location.pathname === "/") {
//         navigate("/dashboard?status=ref-guide", { replace: true });
//       }
//     }
//   }, [user, location.pathname, navigate, dispatch]);

//   useEffect(() => {
//     scrollToTop();
//   }, [location.pathname]);

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />

//       <Routes>
//                 {/* <Route path="/" element={<AuthPage />} /> */}

//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/set-up-profile" element={<SetUpProfile />} />
//         <Route path="/dashboard-page" element={<DashboardPage />} />


//         {/* <Route
//           path="/dashboard"
//           element={<PrivateRoute element={<DashboardPage />} />}
//         /> */}
//         <Route
//           path="/free-users"
//           element={<PrivateRoute element={<FreeUserPage />} />}
//         />
//         <Route
//           path="/monthly-premium-users"
//           element={<PrivateRoute element={<MonthlyUserPage />} />}
//         />
//         <Route
//           path="/yearly-premium-users"
//           element={<PrivateRoute element={<YearlyUserPage />} />}
//         />
//         <Route
//           path="/my-rewards"
//           element={<PrivateRoute element={<MyRewardsPage />} />}
//         />
//         <Route
//           path="/request-redeem"
//           element={<PrivateRoute element={<RequestRedeemPage />} />}
//         />
//         <Route
//           path="/point-history"
//           element={<PrivateRoute element={<PointHistoryPage />} />}
//         />
//         <Route
//           path="/coupon-history"
//           element={<PrivateRoute element={<CouponHistoryPage />} />}
//         />
//         <Route
//           path="/redeem-history"
//           element={<PrivateRoute element={<RedeemHistoryPage />} />}
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;



import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import { getUser } from "./utils/auth";
import { isJSON } from "./utils/function";
import { scrollToTop } from "./utils/utility";

import { setUser } from "./api/slices/authSlice/auth";

 import { AuthPage } from "./pages/auth";
import { DashboardPage } from "./pages/dashboard";
import { FreeUserPage } from "./pages/freeUser";
import { MonthlyUserPage } from "./pages/monthlyUsers";
import { YearlyUserPage } from "./pages/yearlyUsers";
import { MyRewardsPage } from "./pages/myRewards";
import { PointHistoryPage } from "./pages/pointHistory";
import { CouponHistoryPage } from "./pages/couponHistory";
import { RequestRedeemPage } from "./pages/requestRedeem";
import { RedeemHistoryPage } from "./pages/redeemHistory";
// import Login from "./components/Login";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = isJSON(getUser());

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));

      if (location.pathname === "/") {
        navigate("/dashboard?status=ref-guide", { replace: true });
      }
    }
  }, [user, location.pathname, navigate, dispatch]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<AuthPage />} />
        {/* <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} /> */}

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/free-users" element={<FreeUserPage />} />
        <Route path="/monthly-premium-users" element={<MonthlyUserPage />} />
        <Route path="/yearly-premium-users" element={<YearlyUserPage />} />
        <Route path="/my-rewards" element={<MyRewardsPage />} />
        <Route path="/request-redeem" element={<RequestRedeemPage />} />
        <Route path="/point-history" element={<PointHistoryPage />} />
        <Route path="/coupon-history" element={<CouponHistoryPage />} />
        <Route path="/redeem-history" element={<RedeemHistoryPage />} />
      </Routes>
    </>
  );
};

export default App;