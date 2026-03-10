// // // // import { getUser } from "./utils/auth";
// // // // import React, { useEffect } from "react";
// // // // import { useDispatch } from "react-redux";
// // // // import { isJSON } from "./utils/function";
// // // // import { AuthPage } from "./pages/auth";
// // // // import { scrollToTop } from "./utils/utility";
// // // // import { ToastContainer } from "react-toastify";
// // // // import { DashboardPage } from "./pages/dashboard";
// // // // import { FreeUserPage } from "./pages/freeUser";
// // // // import { MyRewardsPage } from "./pages/myRewards";
// // // // import { YearlyUserPage } from "./pages/yearlyUsers";
// // // // import { setUser } from "./api/slices/authSlice/auth";
// // // // import { MonthlyUserPage } from "./pages/monthlyUsers";
// // // // import { PointHistoryPage } from "./pages/pointHistory";
// // // // import { CouponHistoryPage } from "./pages/couponHistory";
// // // // import { RequestRedeemPage } from "./pages/requestRedeem";
// // // // import { RedeemHistoryPage } from "./pages/redeemHistory";
// // // // import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// // // // import PrivateRoute from "./base-component/private-route";
// // // // import Login from "./components/login";
// // // // import SetUpProfile from "./components/SetUpProfile";

// // // // const App = () => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const dispatch = useDispatch();
// // // //   const user = isJSON(getUser());

// // // //   useEffect(() => {
// // // //     if (user) {
// // // //       dispatch(setUser(user));

// // // //       if (location.pathname === "/") {
// // // //         navigate("/dashboard?status=ref-guide", { replace: true });
// // // //       }
// // // //     }
// // // //   }, [user, location.pathname, navigate, dispatch]);

// // // //   useEffect(() => {
// // // //     scrollToTop();
// // // //   }, [location.pathname]);

// // // //   return (
// // // //     <>
// // // //       <ToastContainer position="top-right" autoClose={3000} />

// // // //       <Routes>
// // // //                 {/* <Route path="/" element={<AuthPage />} /> */}

// // // //         <Route path="/" element={<Login />} />
// // // //         <Route path="/login" element={<Login />} />
// // // //         <Route path="/set-up-profile" element={<SetUpProfile />} />
// // // //         <Route path="/dashboard-page" element={<DashboardPage />} />


// // // //         {/* <Route
// // // //           path="/dashboard"
// // // //           element={<PrivateRoute element={<DashboardPage />} />}
// // // //         /> */}
// // // //         <Route
// // // //           path="/free-users"
// // // //           element={<PrivateRoute element={<FreeUserPage />} />}
// // // //         />
// // // //         <Route
// // // //           path="/monthly-premium-users"
// // // //           element={<PrivateRoute element={<MonthlyUserPage />} />}
// // // //         />
// // // //         <Route
// // // //           path="/yearly-premium-users"
// // // //           element={<PrivateRoute element={<YearlyUserPage />} />}
// // // //         />
// // // //         <Route
// // // //           path="/my-rewards"
// // // //           element={<PrivateRoute element={<MyRewardsPage />} />}
// // // //         />
// // // //         <Route
// // // //           path="/request-redeem"
// // // //           element={<PrivateRoute element={<RequestRedeemPage />} />}
// // // //         />
// // // //         <Route
// // // //           path="/point-history"
// // // //           element={<PrivateRoute element={<PointHistoryPage />} />}
// // // //         />
// // // //         <Route
// // // //           path="/coupon-history"
// // // //           element={<PrivateRoute element={<CouponHistoryPage />} />}
// // // //         />
// // // //         <Route
// // // //           path="/redeem-history"
// // // //           element={<PrivateRoute element={<RedeemHistoryPage />} />}
// // // //         />
// // // //       </Routes>
// // // //     </>
// // // //   );
// // // // };

// // // // export default App;



// // // import React, { useEffect } from "react";
// // // import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// // // import { useDispatch } from "react-redux";
// // // import { ToastContainer } from "react-toastify";

// // // import { getUser } from "./utils/auth";
// // // import { isJSON } from "./utils/function";
// // // import { scrollToTop } from "./utils/utility";

// // // import { setUser } from "./api/slices/authSlice/auth";

// // // //  import { AuthPage } from "./pages/auth";
// // // import { DashboardPage } from "./pages/dashboard";
// // // import { FreeUserPage } from "./pages/freeUser";
// // // import { MonthlyUserPage } from "./pages/monthlyUsers";
// // // import { YearlyUserPage } from "./pages/yearlyUsers";
// // // import { MyRewardsPage } from "./pages/myRewards";
// // // import { PointHistoryPage } from "./pages/pointHistory";
// // // import { CouponHistoryPage } from "./pages/couponHistory";
// // // import { RequestRedeemPage } from "./pages/requestRedeem";
// // // import { RedeemHistoryPage } from "./pages/redeemHistory";
// // // import Login from "./components/Login";
// // // import SetUpProfile from "./components/SetUpProfile";

// // // const App = () => {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();
// // //   const user = isJSON(getUser());

// // //   useEffect(() => {
// // //     if (user) {
// // //       dispatch(setUser(user));

// // //       if (location.pathname === "/") {
// // //         navigate("/dashboard?status=ref-guide", { replace: true });
// // //       }
// // //     }
// // //   }, [user, location.pathname, navigate, dispatch]);

// // //   useEffect(() => {
// // //     scrollToTop();
// // //   }, [location.pathname]);

// // //   return (
// // //     <>
// // //       <ToastContainer position="top-right" autoClose={3000} />

// // //       <Routes>
// // //         {/* <Route path="/" element={<AuthPage />} /> */}
// // //         <Route path="/" element={<Login />} />
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/setupprofile" element={<SetUpProfile />} />

// // //         <Route path="/dashboard" element={<DashboardPage />} />
// // //         <Route path="/free-users" element={<FreeUserPage />} />
// // //         <Route path="/monthly-premium-users" element={<MonthlyUserPage />} />
// // //         <Route path="/yearly-premium-users" element={<YearlyUserPage />} />
// // //         <Route path="/my-rewards" element={<MyRewardsPage />} />
// // //         <Route path="/request-redeem" element={<RequestRedeemPage />} />
// // //         <Route path="/point-history" element={<PointHistoryPage />} />
// // //         <Route path="/coupon-history" element={<CouponHistoryPage />} />
// // //         <Route path="/redeem-history" element={<RedeemHistoryPage />} />
// // //       </Routes>
// // //     </>
// // //   );
// // // };

// // // export default App;





// // // import React, { useEffect } from "react";
// // // import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// // // import { useDispatch } from "react-redux";
// // // import { ToastContainer } from "react-toastify";
// // // import { GoogleOAuthProvider } from "@react-oauth/google";

// // // import { getUser } from "./utils/auth";
// // // import { isJSON } from "./utils/function";
// // // import { scrollToTop } from "./utils/utility";

// // // import { setUser } from "./api/slices/authSlice/auth";

// // // // import { AuthPage } from "./pages/auth";
// // // import { DashboardPage } from "./pages/dashboard";
// // // import { FreeUserPage } from "./pages/freeUser";
// // // import { MonthlyUserPage } from "./pages/monthlyUsers";
// // // import { YearlyUserPage } from "./pages/yearlyUsers";
// // // import { MyRewardsPage } from "./pages/myRewards";
// // // import { PointHistoryPage } from "./pages/pointHistory";
// // // import { CouponHistoryPage } from "./pages/couponHistory";
// // // import { RequestRedeemPage } from "./pages/requestRedeem";
// // // import { RedeemHistoryPage } from "./pages/redeemHistory";
// // // import Login from "./components/Login";
// // // import SetUpProfile from "./components/SetUpProfile";
// // // import PaymentRequestChat from "./components/PaymentRequestChat";

// // // const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// // // /**
// // //  * AppContent - Contains all routes and business logic
// // //  * Wrapped inside GoogleOAuthProvider in App component
// // //  */
// // // const AppContent = () => {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();
// // //   const user = isJSON(getUser());

// // //   useEffect(() => {
// // //     if (user) {
// // //       dispatch(setUser(user));

// // //       if (location.pathname === "/") {
// // //         navigate("/dashboard?status=ref-guide", { replace: true });
// // //       }
// // //     }
// // //   }, [user, location.pathname, navigate, dispatch]);

// // //   useEffect(() => {
// // //     scrollToTop();
// // //   }, [location.pathname]);

// // //   return (
// // //     <>
// // //       <ToastContainer position="top-right" autoClose={3000} />

// // //       <Routes>
// // //         {/* <Route path="/" element={<AuthPage />} /> */}
// // //         <Route path="/" element={<Login />} />
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/setupprofile" element={<SetUpProfile />} />
// // //         <Route path="/payment-request-chat" element={<PaymentRequestChat />} />

// // //         <Route path="/dashboard" element={<DashboardPage />} />
// // //         <Route path="/free-users" element={<FreeUserPage />} />
// // //         <Route path="/monthly-premium-users" element={<MonthlyUserPage />} />
// // //         <Route path="/yearly-premium-users" element={<YearlyUserPage />} />
// // //         <Route path="/my-rewards" element={<MyRewardsPage />} />
// // //         <Route path="/request-redeem" element={<RequestRedeemPage />} />
// // //         <Route path="/point-history" element={<PointHistoryPage />} />
// // //         <Route path="/coupon-history" element={<CouponHistoryPage />} />
// // //         <Route path="/redeem-history" element={<RedeemHistoryPage />} />
// // //       </Routes>
// // //     </>
// // //   );
// // // };

// // // /**
// // //  * App - Root component with GoogleOAuthProvider wrapper
// // //  * GoogleOAuthProvider MUST be the outermost wrapper
// // //  */
// // // const App = () => {
// // //   return (
// // //     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
// // //       <AppContent />
// // //     </GoogleOAuthProvider>
// // //   );
// // // };

// // // export default App;





// import React, { useEffect } from "react";
// import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// import { getUser } from "./utils/auth";
// import { isJSON } from "./utils/function";
// import { scrollToTop } from "./utils/utility";

// import { setUser } from "./api/slices/authSlice/auth";

// // import { AuthPage } from "./pages/auth";
// import { DashboardPage } from "./pages/dashboard";
// import { FreeUserPage } from "./pages/freeUser";
// import { MonthlyUserPage } from "./pages/monthlyUsers";
// import { YearlyUserPage } from "./pages/yearlyUsers";
// import { MyRewardsPage } from "./pages/myRewards";
// import { PointHistoryPage } from "./pages/pointHistory";
// import { CouponHistoryPage } from "./pages/couponHistory";
// import { RequestRedeemPage } from "./pages/requestRedeem";
// import { RedeemHistoryPage } from "./pages/redeemHistory";
// import Login from "./components/Login";
// import SetUpProfile from "./components/SetUpProfile";
// import PaymentRequestChat from "./components/PaymentRequestChat";

// const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// /**
//  * AppContent - Contains all routes and business logic
//  * Wrapped inside GoogleOAuthProvider in App component
//  */
// const AppContent = () => {
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
//          {/* <Route path="/" element={<AuthPage />} /> */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/signup" element={<Login />} />
//         <Route path="/setupprofile" element={<SetUpProfile />} />
//         <Route path="/payment-request-chat" element={<PaymentRequestChat />} />

//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/free-users" element={<FreeUserPage />} />
//         <Route path="/monthly-premium-users" element={<MonthlyUserPage />} />
//         <Route path="/yearly-premium-users" element={<YearlyUserPage />} />
//         <Route path="/my-rewards" element={<MyRewardsPage />} />
//         <Route path="/request-redeem" element={<RequestRedeemPage />} />
//         <Route path="/point-history" element={<PointHistoryPage />} />
//         <Route path="/coupon-history" element={<CouponHistoryPage />} />
//         <Route path="/redeem-history" element={<RedeemHistoryPage />} />
//       </Routes>
//     </>
//   );
// };

// /**
//  * App - Root component with GoogleOAuthProvider wrapper
//  * GoogleOAuthProvider MUST be the outermost wrapper
//  */
// const App = () => {
//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <AppContent />
//     </GoogleOAuthProvider>
//   );
// };

// export default App;



// import React, { useEffect } from "react";
// import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// import { getUser } from "./utils/auth";
// import { isJSON } from "./utils/function";
// import { scrollToTop } from "./utils/utility";

// import { setUser } from "./api/slices/authSlice/auth";

// // import { AuthPage } from "./pages/auth";
// import { DashboardPage } from "./pages/dashboard";
// import { FreeUserPage } from "./pages/freeUser";
// import { MonthlyUserPage } from "./pages/monthlyUsers";
// import { YearlyUserPage } from "./pages/yearlyUsers";
// import { MyRewardsPage } from "./pages/myRewards";
// import { PointHistoryPage } from "./pages/pointHistory";
// import { CouponHistoryPage } from "./pages/couponHistory";
// import { RequestRedeemPage } from "./pages/requestRedeem";
// import { RedeemHistoryPage } from "./pages/redeemHistory";
// import Login from "./components/Login";
// import SetUpProfile from "./components/SetUpProfile";
// import PaymentRequestChat from "./components/PaymentRequestChat";

// const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// // Only renders MonthlyUserPage if status is trial/subscribed/cancelled
// const MonthlyUserGuard = () => {
//   const { search } = useLocation();
//   const status = new URLSearchParams(search).get("status");
//   const validStatuses = ["trial", "subscribed", "cancelled"];

//   if (!validStatuses.includes(status)) {
//     return <Navigate to="/dashboard?status=ref-guide" replace />;
//   }

//   return <MonthlyUserPage />;
// };

// // Only renders YearlyUserPage if status is trial/subscribed/cancelled
// const YearlyUserGuard = () => {
//   const { search } = useLocation();
//   const status = new URLSearchParams(search).get("status");
//   const validStatuses = ["trial", "subscribed", "cancelled"];

//   if (!validStatuses.includes(status)) {
//     return <Navigate to="/dashboard?status=ref-guide" replace />;
//   }

//   return <YearlyUserPage />;
// };

// /**
//  * AppContent - Contains all routes and business logic
//  * Wrapped inside GoogleOAuthProvider in App component
//  */
// const AppContent = () => {
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
//         {/* <Route path="/" element={<AuthPage />} /> */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/signup" element={<Login />} />
//         <Route path="/setupprofile" element={<SetUpProfile />} />
//         <Route path="/payment-request-chat" element={<PaymentRequestChat />} />

//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/free-users" element={<FreeUserPage />} />

//         {/* Monthly: only trial/subscribed/cancelled work, bare URL redirects to dashboard */}
//         <Route path="/monthly-premium-users" element={<MonthlyUserGuard />} />

//         {/* Yearly: only trial/subscribed/cancelled work, bare URL redirects to dashboard */}
//         <Route path="/yearly-premium-users" element={<YearlyUserGuard />} />

//         <Route path="/my-rewards" element={<MyRewardsPage />} />
//         <Route path="/request-redeem" element={<RequestRedeemPage />} />
//         <Route path="/point-history" element={<PointHistoryPage />} />
//         <Route path="/coupon-history" element={<CouponHistoryPage />} />
//         <Route path="/redeem-history" element={<RedeemHistoryPage />} />
//       </Routes>
//     </>
//   );
// };

// /**
//  * App - Root component with GoogleOAuthProvider wrapper
//  * GoogleOAuthProvider MUST be the outermost wrapper
//  */
// const App = () => {
//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <AppContent />
//     </GoogleOAuthProvider>
//   );
// };

// export default App;





import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";

import { getUser } from "./utils/auth";
import { isJSON } from "./utils/function";
import { scrollToTop } from "./utils/utility";
import { setUser } from "./api/slices/authSlice/auth";

import { DashboardPage }     from "./pages/dashboard";
import { FreeUserPage }      from "./pages/freeUser";
import { MonthlyUserPage }   from "./pages/monthlyUsers";
import { YearlyUserPage }    from "./pages/yearlyUsers";
import { MyRewardsPage }     from "./pages/myRewards";
import { PointHistoryPage }  from "./pages/pointHistory";
import { CouponHistoryPage } from "./pages/couponHistory";
import { RequestRedeemPage } from "./pages/requestRedeem";
import { RedeemHistoryPage } from "./pages/redeemHistory";
import Login                 from "./components/Login";
import SetUpProfile          from "./components/SetUpProfile";
import PaymentRequestChat    from "./components/PaymentRequestChat";

const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// ── Protected Route ───────────────────────────────────────────────────────────
// Checks accessToken cookie — this is what Login.jsx sets after successful auth
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("accessToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// ── Public Route ──────────────────────────────────────────────────────────────
// Redirects to dashboard if user is already logged in
const PublicRoute = ({ children }) => {
  const token = Cookies.get("accessToken");
  if (token) {
    return <Navigate to="/dashboard?status=ref-guide" replace />;
  }
  return children;
};

// ── Monthly Guard ─────────────────────────────────────────────────────────────
const MonthlyUserGuard = () => {
  const { search } = useLocation();
  const status = new URLSearchParams(search).get("status");
  const validStatuses = ["trial", "subscribed", "cancelled"];
  if (!validStatuses.includes(status)) {
    return <Navigate to="/dashboard?status=ref-guide" replace />;
  }
  return <MonthlyUserPage />;
};

// ── Yearly Guard ──────────────────────────────────────────────────────────────
const YearlyUserGuard = () => {
  const { search } = useLocation();
  const status = new URLSearchParams(search).get("status");
  const validStatuses = ["trial", "subscribed", "cancelled"];
  if (!validStatuses.includes(status)) {
    return <Navigate to="/dashboard?status=ref-guide" replace />;
  }
  return <YearlyUserPage />;
};

// ── AppContent ────────────────────────────────────────────────────────────────
const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Rehydrate Redux user from cookie on page refresh
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) return;

    const user = isJSON(getUser());
    if (user) {
      dispatch(setUser(user));
      if (location.pathname === "/") {
        navigate("/dashboard?status=ref-guide", { replace: true });
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>

        {/* ── Public routes — redirect to dashboard if already logged in ── */}
        <Route path="/"       element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/login"  element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signin" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Login /></PublicRoute>} />

        {/* ── Setup profile — semi public ── */}
        <Route path="/setupprofile" element={<SetUpProfile />} />

        {/* ── Protected routes ── */}
        <Route path="/dashboard" element={
          <ProtectedRoute><DashboardPage /></ProtectedRoute>
        } />

        <Route path="/free-users" element={
          <ProtectedRoute><FreeUserPage /></ProtectedRoute>
        } />

        <Route path="/monthly-premium-users" element={
          <ProtectedRoute><MonthlyUserGuard /></ProtectedRoute>
        } />

        <Route path="/yearly-premium-users" element={
          <ProtectedRoute><YearlyUserGuard /></ProtectedRoute>
        } />

        <Route path="/my-rewards" element={
          <ProtectedRoute><MyRewardsPage /></ProtectedRoute>
        } />

        <Route path="/request-redeem" element={
          <ProtectedRoute><RequestRedeemPage /></ProtectedRoute>
        } />

        <Route path="/point-history" element={
          <ProtectedRoute><PointHistoryPage /></ProtectedRoute>
        } />

        <Route path="/coupon-history" element={
          <ProtectedRoute><CouponHistoryPage /></ProtectedRoute>
        } />

        <Route path="/redeem-history" element={
          <ProtectedRoute><RedeemHistoryPage /></ProtectedRoute>
        } />

        <Route path="/payment-request-chat" element={
          <ProtectedRoute><PaymentRequestChat /></ProtectedRoute>
        } />

        {/* ── Catch all ── */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AppContent />
    </GoogleOAuthProvider>
  );
};

export default App;