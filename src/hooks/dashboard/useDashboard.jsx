// // // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // // import { ModalType } from "../../types/ui";
// // // // // // // import { updateModalType } from "../../api/slices/globalSlice/global";
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import {
// // // // // // //   readDashboardLinks,
// // // // // // //   readDashboardResults,
// // // // // // // } from "../../api/slices/dashboard/dashboardSlice";
// // // // // // // import { useLocation } from "react-router-dom";

// // // // // // // export const useDashboard = () => {
// // // // // // //   const dispatch = useDispatch();
// // // // // // //   const location = useLocation();
// // // // // // //   const [links, setLinks] = useState(null);
// // // // // // //   const [results, setResults] = useState(null);
// // // // // // //   const { loading } = useSelector((state) => state.dashboard);
// // // // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);

// // // // // // //   const queryParams = new URLSearchParams(location.search);
// // // // // // //   const status = queryParams.get("status");

// // // // // // //   const handleShare = () => {
// // // // // // //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// // // // // // //   };

// // // // // // //   const handleRefLinkModal = (deviceType) => {
// // // // // // //     dispatch(
// // // // // // //       updateModalType({
// // // // // // //         type: ModalType.REFERRAL_LINK_MODAL,
// // // // // // //         data: {
// // // // // // //           links,
// // // // // // //           linkLoading: loading?.links,
// // // // // // //           deviceType,
// // // // // // //           onShare: handleShare,
// // // // // // //         },
// // // // // // //       })
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const handleQRCodeModal = (deviceType) => {
// // // // // // //     dispatch(
// // // // // // //       updateModalType({
// // // // // // //         type: ModalType.REFERRAL_QR_CODE_MODAL,
// // // // // // //         data: {
// // // // // // //           onShare: handleShare,
// // // // // // //           links,
// // // // // // //           deviceType,
// // // // // // //         },
// // // // // // //       })
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const handleRefDiscountCodeModal = (deviceType) => {
// // // // // // //     dispatch(
// // // // // // //       updateModalType({
// // // // // // //         type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL,
// // // // // // //         data: {
// // // // // // //           onShare: handleShare,
// // // // // // //           links,
// // // // // // //           deviceType,
// // // // // // //         },
// // // // // // //       })
// // // // // // //     );
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (authLoading) return;

// // // // // // //     const fetchDashboardResults = async () => {
// // // // // // //       const uid = user?.user?.id;
// // // // // // //       if (!uid) return;

// // // // // // //       try {
// // // // // // //         const response = await dispatch(
// // // // // // //           readDashboardResults({ data: { uid: uid } })
// // // // // // //         );
// // // // // // //         if (response?.payload) {
// // // // // // //           setResults(response?.payload?.counts);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Error fetching dashboard results:", err);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (status === "results") {
// // // // // // //       fetchDashboardResults();
// // // // // // //     }
// // // // // // //   }, [dispatch, user, authLoading]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (status !== "ref-guide") return;

// // // // // // //     const fetchDashboardLinks = async () => {
// // // // // // //       try {
// // // // // // //         const response = await dispatch(readDashboardLinks({}));

// // // // // // //         if (response?.payload?.data) {
// // // // // // //           setLinks(response?.payload?.data);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Error fetching dashboard links:", err);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (status === "ref-guide") {
// // // // // // //       fetchDashboardLinks();
// // // // // // //     }
// // // // // // //   }, [dispatch, status]);

// // // // // // //   return {
// // // // // // //     handleRefLinkModal,
// // // // // // //     handleQRCodeModal,
// // // // // // //     handleRefDiscountCodeModal,
// // // // // // //     results,
// // // // // // //     links,
// // // // // // //     loading,
// // // // // // //   };
// // // // // // // };





// // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // import { ModalType } from "../../types/ui";
// // // // // // import { updateModalType } from "../../api/slices/globalSlice/global";
// // // // // // import { useEffect, useState } from "react";
// // // // // // import {
// // // // // //   readDashboardLinks,
// // // // // //   readDashboardResults,
// // // // // // } from "../../api/slices/dashboard/dashboardSlice";
// // // // // // import { readPremiumUsers } from "../../api/slices/premiumUser/premium-user";
// // // // // // import { useLocation } from "react-router-dom";

// // // // // // export const useDashboard = () => {
// // // // // //   const dispatch = useDispatch();
// // // // // //   const location = useLocation();
// // // // // //   const [links, setLinks] = useState(null);
// // // // // //   const [results, setResults] = useState(null);
// // // // // //   const { loading } = useSelector((state) => state.dashboard);
// // // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);

// // // // // //   const queryParams = new URLSearchParams(location.search);
// // // // // //   const status = queryParams.get("status");

// // // // // //   const handleShare = () => {
// // // // // //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// // // // // //   };

// // // // // //   const handleRefLinkModal = (deviceType) => {
// // // // // //     dispatch(
// // // // // //       updateModalType({
// // // // // //         type: ModalType.REFERRAL_LINK_MODAL,
// // // // // //         data: {
// // // // // //           links,
// // // // // //           linkLoading: loading?.links,
// // // // // //           deviceType,
// // // // // //           onShare: handleShare,
// // // // // //         },
// // // // // //       })
// // // // // //     );
// // // // // //   };

// // // // // //   const handleQRCodeModal = (deviceType) => {
// // // // // //     dispatch(
// // // // // //       updateModalType({
// // // // // //         type: ModalType.REFERRAL_QR_CODE_MODAL,
// // // // // //         data: {
// // // // // //           onShare: handleShare,
// // // // // //           links,
// // // // // //           deviceType,
// // // // // //         },
// // // // // //       })
// // // // // //     );
// // // // // //   };

// // // // // //   const handleRefDiscountCodeModal = (deviceType) => {
// // // // // //     dispatch(
// // // // // //       updateModalType({
// // // // // //         type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL,
// // // // // //         data: {
// // // // // //           onShare: handleShare,
// // // // // //           links,
// // // // // //           deviceType,
// // // // // //         },
// // // // // //       })
// // // // // //     );
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (authLoading) return;

// // // // // //     const fetchDashboardResults = async () => {
// // // // // //       const uid = user?.id
// // // // // //       if (!uid) return;

// // // // // //       try {
// // // // // //         // ✅ Step 1: Fetch dashboard counts (points, freeUsers etc.)
// // // // // //         const response = await dispatch(
// // // // // //           readDashboardResults({ data: { uid: uid } })
// // // // // //         );

// // // // // //         // ✅ Step 2: Fetch REAL monthly count (same API as table)
// // // // // //         const monthlyRes = await dispatch(
// // // // // //           readPremiumUsers({
// // // // // //             data: { uid, type: "monthly", page: 1, size: 10 },
// // // // // //           })
// // // // // //         );

// // // // // //         // ✅ Step 3: Fetch REAL yearly count (same API as table)
// // // // // //         const yearlyRes = await dispatch(
// // // // // //           readPremiumUsers({
// // // // // //             data: { uid, type: "yearly", page: 1, size: 10 },
// // // // // //           })
// // // // // //         );

// // // // // //         if (response?.payload) {
// // // // // //           setResults({
// // // // // //             // ✅ Keep original data (points, freeUsers etc.)
// // // // // //             ...response?.payload?.counts,

// // // // // //             // ✅ Override with REAL counts from pagination (matches table)
// // // // // //             monthlyPremium: monthlyRes?.payload?.pagination?.total || 0,
// // // // // //             yearlyPremium: yearlyRes?.payload?.pagination?.total || 0,
// // // // // //           });
// // // // // //         }
// // // // // //       } catch (err) {
// // // // // //         console.error("Error fetching dashboard results:", err);
// // // // // //       }
// // // // // //     };

// // // // // //     if (status === "results") {
// // // // // //       fetchDashboardResults();
// // // // // //     }
// // // // // //   }, [dispatch, user, authLoading, status]);

// // // // // //   useEffect(() => {
// // // // // //     if (status !== "ref-guide") return;

// // // // // //     const fetchDashboardLinks = async () => {
// // // // // //       try {
// // // // // //         const response = await dispatch(readDashboardLinks({}));
// // // // // //         if (response?.payload?.data) {
// // // // // //           setLinks(response?.payload?.data);
// // // // // //         }
// // // // // //       } catch (err) {
// // // // // //         console.error("Error fetching dashboard links:", err);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchDashboardLinks();
// // // // // //   }, [dispatch, status]);

// // // // // //   return {
// // // // // //     handleRefLinkModal,
// // // // // //     handleQRCodeModal,
// // // // // //     handleRefDiscountCodeModal,
// // // // // //     results,
// // // // // //     links,
// // // // // //     loading,
// // // // // //   };
// // // // // // };







// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { ModalType } from "../../types/ui";
// // // // // import { updateModalType } from "../../api/slices/globalSlice/global";
// // // // // import { useEffect, useState } from "react";
// // // // // import {
// // // // //   readDashboardLinks,
// // // // //   readDashboardResults,
// // // // // } from "../../api/slices/dashboard/dashboardSlice";
// // // // // import { useLocation } from "react-router-dom";

// // // // // export const useDashboard = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const location = useLocation();
// // // // //   const [links, setLinks] = useState(null);
// // // // //   const [results, setResults] = useState(null);
// // // // //   const { loading } = useSelector((state) => state.dashboard);
// // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);

// // // // //   const queryParams = new URLSearchParams(location.search);
// // // // //   const status = queryParams.get("status");

// // // // //   const handleShare = () => {
// // // // //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// // // // //   };

// // // // //   const handleRefLinkModal = (deviceType) => {
// // // // //     dispatch(
// // // // //       updateModalType({
// // // // //         type: ModalType.REFERRAL_LINK_MODAL,
// // // // //         data: {
// // // // //           links,
// // // // //           linkLoading: loading?.links,
// // // // //           deviceType,
// // // // //           onShare: handleShare,
// // // // //         },
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   const handleQRCodeModal = (deviceType) => {
// // // // //     dispatch(
// // // // //       updateModalType({
// // // // //         type: ModalType.REFERRAL_QR_CODE_MODAL,
// // // // //         data: {
// // // // //           onShare: handleShare,
// // // // //           links,
// // // // //           deviceType,
// // // // //         },
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   const handleRefDiscountCodeModal = (deviceType) => {
// // // // //     dispatch(
// // // // //       updateModalType({
// // // // //         type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL,
// // // // //         data: {
// // // // //           onShare: handleShare,
// // // // //           links,
// // // // //           deviceType,
// // // // //         },
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (authLoading) return;

// // // // //     const fetchDashboardResults = async () => {
// // // // //       const uid = user?.id;
// // // // //       if (!uid) return;

// // // // //       try {
// // // // //         const response = await dispatch(
// // // // //           readDashboardResults({ data: { uid } })
// // // // //         );

// // // // //         console.log("Full payload:", response?.payload);
// // // // //         console.log("Counts:", response?.payload?.counts);

// // // // //         if (response?.payload?.counts) {
// // // // //           setResults({
// // // // //             // spread counts: { points, freeUsers, monthlyPremium, yearlyPremium }
// // // // //             ...response?.payload?.counts,
// // // // //           });
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching dashboard results:", err);
// // // // //       }
// // // // //     };

// // // // //     if (status === "results") {
// // // // //       fetchDashboardResults();
// // // // //     }
// // // // //   }, [dispatch, user, authLoading, status]);

// // // // //   useEffect(() => {
// // // // //     if (status !== "ref-guide") return;

// // // // //     const fetchDashboardLinks = async () => {
// // // // //       try {
// // // // //         const response = await dispatch(readDashboardLinks({}));
// // // // //         if (response?.payload?.data) {
// // // // //           setLinks(response?.payload?.data);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching dashboard links:", err);
// // // // //       }
// // // // //     };

// // // // //     fetchDashboardLinks();
// // // // //   }, [dispatch, status]);

// // // // //   return {
// // // // //     handleRefLinkModal,
// // // // //     handleQRCodeModal,
// // // // //     handleRefDiscountCodeModal,
// // // // //     results,
// // // // //     links,
// // // // //     loading,
// // // // //   };
// // // // // };











// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { ModalType } from "../../types/ui";
// // // // // import { updateModalType } from "../../api/slices/globalSlice/global";
// // // // // import { useEffect, useState } from "react";
// // // // // import {
// // // // //   readDashboardLinks,
// // // // //   readDashboardResults,
// // // // // } from "../../api/slices/dashboard/dashboardSlice";
// // // // // import { useLocation } from "react-router-dom";

// // // // // export const useDashboard = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const location = useLocation();
// // // // //   const [links, setLinks] = useState(null);
// // // // //   const [results, setResults] = useState(null);
// // // // //   const { loading } = useSelector((state) => state.dashboard);
// // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);

// // // // //   const queryParams = new URLSearchParams(location.search);
// // // // //   const status = queryParams.get("status");

// // // // //   const handleShare = () => {
// // // // //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// // // // //   };

// // // // //   // links is now array: [{ id, link, deviceType, discountCode }]
// // // // //   // Filter by deviceType to get ios/android specific link
// // // // //   const getLink = (deviceType) =>
// // // // //     links?.find((l) => l.deviceType === deviceType) || null;

// // // // //   const handleRefLinkModal = (deviceType) => {
// // // // //     const deviceLink = getLink(deviceType);
// // // // //     dispatch(
// // // // //       updateModalType({
// // // // //         type: ModalType.REFERRAL_LINK_MODAL,
// // // // //         data: {
// // // // //           link:        deviceLink?.link,
// // // // //           deviceType,
// // // // //           linkLoading: loading?.links,
// // // // //           onShare:     handleShare,
// // // // //         },
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   const handleQRCodeModal = (deviceType) => {
// // // // //     const deviceLink = getLink(deviceType);
// // // // //     dispatch(
// // // // //       updateModalType({
// // // // //         type: ModalType.REFERRAL_QR_CODE_MODAL,
// // // // //         data: {
// // // // //           link:     deviceLink?.link,
// // // // //           deviceType,
// // // // //           onShare:  handleShare,
// // // // //         },
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   const handleRefDiscountCodeModal = (deviceType) => {
// // // // //     const deviceLink = getLink(deviceType);
// // // // //     dispatch(
// // // // //       updateModalType({
// // // // //         type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL,
// // // // //         data: {
// // // // //           discountCode: deviceLink?.discountCode,
// // // // //           link:         deviceLink?.link,
// // // // //           deviceType,
// // // // //           onShare:      handleShare,
// // // // //         },
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   // ── Fetch dashboard counts ────────────────────────────────────────────────
// // // // //   useEffect(() => {
// // // // //     if (authLoading) return;

// // // // //     const fetchDashboardResults = async () => {
// // // // //       const uid = user?.id;
// // // // //       if (!uid) return;

// // // // //       try {
// // // // //         const response = await dispatch(
// // // // //           readDashboardResults({ data: { uid } })
// // // // //         );

// // // // //         if (response?.payload?.counts) {
// // // // //           setResults({ ...response?.payload?.counts });
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching dashboard results:", err);
// // // // //       }
// // // // //     };

// // // // //     if (status === "results") {
// // // // //       fetchDashboardResults();
// // // // //     }
// // // // //   }, [dispatch, user, authLoading, status]);

// // // // //   // ── Fetch app links ───────────────────────────────────────────────────────
// // // // //   useEffect(() => {
// // // // //     if (status !== "ref-guide") return;

// // // // //     const fetchDashboardLinks = async () => {
// // // // //       try {
// // // // //         const response = await dispatch(readDashboardLinks({}));
// // // // //         // API response: { success, message, data: [{ id, link, deviceType, discountCode }] }
// // // // //         if (response?.payload?.data) {
// // // // //           setLinks(response?.payload?.data); // store array directly
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching dashboard links:", err);
// // // // //       }
// // // // //     };

// // // // //     fetchDashboardLinks();
// // // // //   }, [dispatch, status]);

// // // // //   return {
// // // // //     handleRefLinkModal,
// // // // //     handleQRCodeModal,
// // // // //     handleRefDiscountCodeModal,
// // // // //     results,
// // // // //     links,
// // // // //     loading,
// // // // //   };
// // // // // };







// import { useDispatch, useSelector } from "react-redux";
// import { ModalType } from "../../types/ui";
// import { updateModalType } from "../../api/slices/globalSlice/global";
// import { useEffect, useState } from "react";
// import {
//   readDashboardLinks,
//   readDashboardResults,
// } from "../../api/slices/dashboard/dashboardSlice";
// import { useLocation } from "react-router-dom";

// export const useDashboard = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const [links, setLinks] = useState(null);
//   const [results, setResults] = useState(null);
//   const { loading } = useSelector((state) => state.dashboard);
//   const { user, loading: authLoading } = useSelector((state) => state.auth);

//   const queryParams = new URLSearchParams(location.search);
//   const status = queryParams.get("status");

//   const getLink = (deviceType) =>
//     links?.find((l) => l.deviceType === deviceType) || null;

//   const handleShare = (deviceType) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.SHARE_MODAL,
//         data: {
//           links,
//           deviceType,
//         },
//       })
//     );
//   };

//   const handleRefLinkModal = (deviceType) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.REFERRAL_LINK_MODAL,
//         data: {
//           links,
//           deviceType,
//           linkLoading: loading?.links,
//           onShare: () => handleShare(deviceType),
//         },
//       })
//     );
//   };

//   const handleQRCodeModal = (deviceType) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.REFERRAL_QR_CODE_MODAL,
//         data: {
//           links,
//           deviceType,
//           onShare: () => handleShare(deviceType),
//         },
//       })
//     );
//   };

//   const handleRefDiscountCodeModal = (deviceType) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL,
//         data: {
//           links,
//           deviceType,
//           onShare: () => handleShare(deviceType),
//         },
//       })
//     );
//   };

//   // ── Fetch dashboard counts ────────────────────────────────────────────────
//   useEffect(() => {
//     if (authLoading) return;

//     const fetchDashboardResults = async () => {
//       const uid = user?.id;
//       if (!uid) return;

//       try {
//         const response = await dispatch(
//           readDashboardResults({ data: { uid } })
//         );

//         if (response?.payload?.counts) {
//           setResults({ ...response?.payload?.counts });
//         }
//       } catch (err) {
//         console.error("Error fetching dashboard results:", err);
//       }
//     };

//     if (status === "results") {
//       fetchDashboardResults();
//     }
//   }, [dispatch, user, authLoading, status]);

//   // ── Fetch app links ───────────────────────────────────────────────────────
//   useEffect(() => {
//     if (status !== "ref-guide") return;

//     const fetchDashboardLinks = async () => {
//       try {
//         const response = await dispatch(readDashboardLinks({}));
//         if (response?.payload?.data) {
//           setLinks(response?.payload?.data);
//         }
//       } catch (err) {
//         console.error("Error fetching dashboard links:", err);
//       }
//     };

//     fetchDashboardLinks();
//   }, [dispatch, status]);

//   return {
//     handleRefLinkModal,
//     handleQRCodeModal,
//     handleRefDiscountCodeModal,
//     results,
//     links,
//     loading,
//   };
// };



////remove



// import { useDispatch, useSelector } from "react-redux";
// import { ModalType } from "../../types/ui";
// import { updateModalType } from "../../api/slices/globalSlice/global";
// import { useEffect, useState } from "react";
// import {
//   readDashboardLinks,
//   readDashboardResults,
// } from "../../api/slices/dashboard/dashboardSlice";
// import { useLocation } from "react-router-dom";

// // Global callback store — keeps functions OUT of Redux
// const modalCallbacks = {};
// export const getModalCallback = (key) => modalCallbacks[key];
// export const setModalCallback = (key, fn) => { modalCallbacks[key] = fn; };

// export const useDashboard = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const [links, setLinks] = useState(null);
//   const [results, setResults] = useState(null);
//   const { loading } = useSelector((state) => state.dashboard);
//   const { user, loading: authLoading } = useSelector((state) => state.auth);

//   const queryParams = new URLSearchParams(location.search);
//   const status = queryParams.get("status");

//   // Referral links are now returned directly from login response
//   const androidReferralLink = user?.androidAppReferralLink;
//   const iosReferralLink = user?.iosAppReferralLink;

//   const handleShare = (deviceType) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.SHARE_MODAL,
//         data: {
//           deviceType,
//           androidAppReferralLink: androidReferralLink,
//           iosAppReferralLink: iosReferralLink,
//         },
//       })
//     );
//   };

//   const handleRefLinkModal = (deviceType) => {
//     setModalCallback("onShare", () => handleShare(deviceType));
//     dispatch(
//       updateModalType({
//         type: ModalType.REFERRAL_LINK_MODAL,
//         data: {
//           deviceType,
//           androidAppReferralLink: androidReferralLink,
//           iosAppReferralLink: iosReferralLink,
//         },
//       })
//     );
//   };

//   const handleQRCodeModal = (deviceType) => {
//     setModalCallback("onShare", () => handleShare(deviceType));
//     dispatch(
//       updateModalType({
//         type: ModalType.REFERRAL_QR_CODE_MODAL,
//         data: {
//           deviceType,
//           androidAppReferralLink: androidReferralLink,
//           iosAppReferralLink: iosReferralLink,
//         },
//       })
//     );
//   };

//   const handleRefDiscountCodeModal = (deviceType) => {
//     setModalCallback("onShare", () => handleShare(deviceType));
//     dispatch(
//       updateModalType({
//         type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL,
//         data: {
//           deviceType,
//           androidAppReferralLink: androidReferralLink,
//           iosAppReferralLink: iosReferralLink,
//         },
//       })
//     );
//   };

//   // ── Fetch dashboard counts ────────────────────────────────────────────────
//   useEffect(() => {
//     if (authLoading) return;

//     const fetchDashboardResults = async () => {
//       const uid = user?.id;
//       if (!uid) return;
//       try {
//         const response = await dispatch(
//           readDashboardResults({ data: { uid } })
//         );
//         if (response?.payload?.counts) {
//           setResults({ ...response?.payload?.counts });
//         }
//       } catch (err) {
//         console.error("Error fetching dashboard results:", err);
//       }
//     };

//     if (status === "results") {
//       fetchDashboardResults();
//     }
//   }, [dispatch, user, authLoading, status]);

//   // ── Fetch app links ───────────────────────────────────────────────────────
//   useEffect(() => {
//     if (status !== "ref-guide") return;

//     const fetchDashboardLinks = async () => {
//       try {
//         const response = await dispatch(readDashboardLinks({}));
//         if (response?.payload?.data) {
//           setLinks(response?.payload?.data);
//         }
//       } catch (err) {
//         console.error("Error fetching dashboard links:", err);
//       }
//     };

//     fetchDashboardLinks();
//   }, [dispatch, status]);

//   return {
//     handleRefLinkModal,
//     handleQRCodeModal,
//     handleRefDiscountCodeModal,
//     results,
//     links,
//     loading,
//   };
// };




import { useDispatch, useSelector } from "react-redux";
import { ModalType } from "../../types/ui";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { useEffect, useState } from "react";
import {
  readDashboardLinks,
  readDashboardResults,
} from "../../api/slices/dashboard/dashboardSlice";
import { useLocation } from "react-router-dom";

// Global callback store — keeps functions OUT of Redux
const modalCallbacks = {};
export const getModalCallback = (key) => modalCallbacks[key];
export const setModalCallback = (key, fn) => {
  modalCallbacks[key] = fn;
};

export const useDashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [links, setLinks] = useState(null);
  const [results, setResults] = useState(null);
  const { loading } = useSelector((state) => state.dashboard);
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  // Primary source: user object from login response
  // Fallback source: fetched links state
  const androidReferralLink =
    user?.androidAppReferralLink ||
    links?.androidAppReferralLink ||
    "";

  const iosReferralLink =
    user?.iosAppReferralLink ||
    links?.iosAppReferralLink ||
    "";

  const handleShare = (deviceType) => {
    dispatch(
      updateModalType({
        type: ModalType.SHARE_MODAL,
        data: {
          deviceType,
          androidAppReferralLink: androidReferralLink,
          iosAppReferralLink: iosReferralLink,
        },
      })
    );
  };

  const handleRefLinkModal = (deviceType) => {
    setModalCallback("onShare", () => handleShare(deviceType));
    dispatch(
      updateModalType({
        type: ModalType.REFERRAL_LINK_MODAL,
        data: {
          deviceType,
          androidAppReferralLink: androidReferralLink,
          iosAppReferralLink: iosReferralLink,
        },
      })
    );
  };

  const handleQRCodeModal = (deviceType) => {
    setModalCallback("onShare", () => handleShare(deviceType));
    dispatch(
      updateModalType({
        type: ModalType.REFERRAL_QR_CODE_MODAL,
        data: {
          deviceType,
          androidAppReferralLink: androidReferralLink,
          iosAppReferralLink: iosReferralLink,
        },
      })
    );
  };

  const handleRefDiscountCodeModal = (deviceType) => {
    setModalCallback("onShare", () => handleShare(deviceType));
    dispatch(
      updateModalType({
        type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL,
        data: {
          deviceType,
          androidAppReferralLink: androidReferralLink,
          iosAppReferralLink: iosReferralLink,
        },
      })
    );
  };

  // ── Fetch dashboard counts ────────────────────────────────────────────────
  useEffect(() => {
    if (authLoading) return;

    const fetchDashboardResults = async () => {
      const uid = user?.id;
      if (!uid) return;
      try {
        const response = await dispatch(
          readDashboardResults({ data: { uid } })
        );
        if (response?.payload?.counts) {
          setResults({ ...response?.payload?.counts });
        }
      } catch (err) {
        console.error("Error fetching dashboard results:", err);
      }
    };

    if (status === "results") {
      fetchDashboardResults();
    }
  }, [dispatch, user, authLoading, status]);

  // ── Fetch app links — always fetch when user is ready ────────────────────
  // This ensures new users (whose links may not be in the login response yet)
  // always get their referral links loaded.
  useEffect(() => {
    if (authLoading) return;

    // If links are already in the user object, skip the extra fetch
    if (user?.androidAppReferralLink && user?.iosAppReferralLink) return;

    const fetchDashboardLinks = async () => {
      try {
        const response = await dispatch(readDashboardLinks({}));
        if (response?.payload?.data) {
          setLinks(response?.payload?.data);
        }
      } catch (err) {
        console.error("Error fetching dashboard links:", err);
      }
    };

    fetchDashboardLinks();
  }, [dispatch, user, authLoading]);

  return {
    handleRefLinkModal,
    handleQRCodeModal,
    handleRefDiscountCodeModal,
    results,
    links,
    loading,
  };
};