// // // // // import { useState, useEffect, useMemo } from "react";
// // // // // import { getPageFromURL } from "../../utils/utility";
// // // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // // import { getLastHeading, getPageTitles } from "../../utils/function";
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { readPremiumUsers } from "../../api/slices/premiumUser/premium-user";
// // // // // import { FiltersDefaultValues } from "../../utils/static";

// // // // // export const useYearlyUsers = () => {
// // // // //   const location = useLocation();
// // // // //   const dispatch = useDispatch();
// // // // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // // // //   const page = searchParams.get("page");
// // // // //   const [currentPage, setCurrentPage] = useState(page || 1);
// // // // //   const [currentPageRows, setCurrentPageRows] = useState([]);
// // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // // // //   const { loading } = useSelector((state) => state.premiumUsers);
// // // // //   const [filter, setFilter] = useState({
// // // // //     sort: FiltersDefaultValues.None,
// // // // //   });

// // // // //   const sort = searchParams.get("sort");
// // // // //   const status = getLastHeading(location.search);

// // // // //   useEffect(() => {
// // // // //     if (authLoading) return;
// // // // //     const parsedPage = parseInt(page, 10);

// // // // //     let resetPage = null;
// // // // //     if (!isNaN(parsedPage)) {
// // // // //       setCurrentPage(parsedPage);
// // // // //     } else {
// // // // //       resetPage = 1;
// // // // //       setCurrentPage(1);
// // // // //     }

// // // // //     const queryStatus = searchParams.get("status");

// // // // //     const redeemHistoryRecords = async () => {
// // // // //       const uid = user?.user?.id;
// // // // //       if (!uid) return;

// // // // //       const queryParams = queryStatus || sort;

// // // // //       if (queryParams !== undefined) {
// // // // //         const filteredStatus =
// // // // //           queryStatus === "None"
// // // // //             ? ""
// // // // //             : queryStatus === "subscribed"
// // // // //             ? "active"
// // // // //             : queryStatus === "cancelled"
// // // // //             ? "canceled"
// // // // //             : queryParams;
// // // // //         const filteredData = {
// // // // //           uid: uid,
// // // // //           type: "yearly",
// // // // //           page: (Number(parsedPage) || resetPage) ?? currentPage,
// // // // //           size: 10,
// // // // //         };

// // // // //         if (filteredStatus && filteredStatus.length > 0) {
// // // // //           filteredData.status = filteredStatus;
// // // // //         }

// // // // //         if (sort) {
// // // // //           filteredData.sort = sort;
// // // // //         }

// // // // //         try {
// // // // //           const response = await dispatch(
// // // // //             readPremiumUsers({ data: filteredData })
// // // // //           );
// // // // //           if (response?.payload) {
// // // // //             const data = response.payload;
// // // // //             setCurrentPageRows(data);
// // // // //           }
// // // // //         } catch (err) {
// // // // //           console.error("Error fetching monthly premium users:", err);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     redeemHistoryRecords();
// // // // //   }, [location.search, location.key, user, authLoading, sort]);

// // // // //   useEffect(() => {
// // // // //     const handlePopState = () => {
// // // // //       setCurrentPage(getPageFromURL());
// // // // //     };
// // // // //     window.addEventListener("popstate", handlePopState);
// // // // //     return () => window.removeEventListener("popstate", handlePopState);
// // // // //   }, []);

// // // // //   const dummyData = [
// // // // //     { title: "Total Users", points: currentPageRows?.metrics?.total },
// // // // //     { title: "This Month", points: currentPageRows?.metrics?.thisMonth },
// // // // //     { title: "This Week", points: currentPageRows?.metrics?.thisWeek },
// // // // //     { title: "Revenue", points: currentPageRows?.metrics?.totalrevenue },
// // // // //   ];

// // // // //   const lastHeadingValue =
// // // // //     status === "Cleared"
// // // // //       ? "clearDate"
// // // // //       : status === "Cancelled"
// // // // //       ? "cancelledDate"
// // // // //       : "clearanceDate";

// // // // //   const headings = [
// // // // //     {
// // // // //       label: "User details",
// // // // //       value: "name",
// // // // //     },
// // // // //     { label: "Installed", value: "installDate" },
// // // // //     { label: "Subscribed", value: "subscribedDate" },
// // // // //     { label: status, value: lastHeadingValue },
// // // // //   ];

// // // // //   const { pageTitle, mobilePageTitle } = getPageTitles(location);

// // // // //   const totalCount = currentPageRows?.pagination?.total;
// // // // //   const itemsPerPage = 10;
// // // // //   const totalItems = totalCount;

// // // // //   const handlePageChange = (page) => {
// // // // //     setCurrentPage(page);
// // // // //     const params = new URLSearchParams(window.location.search);
// // // // //     params.set("page", page.toString());
// // // // //     setSearchParams(params);
// // // // //   };

// // // // //   const hanldeSortChange = (value) => {
// // // // //     const params = new URLSearchParams(window.location.search);

// // // // //     if (value === "None") {
// // // // //       params.delete("sort");
// // // // //     } else {
// // // // //       params.set("sort", value);
// // // // //     }

// // // // //     params.set("page", "1");
// // // // //     setSearchParams(params);
// // // // //     setCurrentPage(1);
// // // // //     setFilter((prev) => {
// // // // //       const updatedFilter = { ...prev, sort: value };
// // // // //       return updatedFilter;
// // // // //     });
// // // // //   };

// // // // //   return {
// // // // //     dummyData,
// // // // //     currentPageRows,
// // // // //     totalItems,
// // // // //     totalCount,
// // // // //     loading,
// // // // //     itemsPerPage,
// // // // //     handlePageChange,
// // // // //     currentPage,
// // // // //     headings,
// // // // //     pageTitle,
// // // // //     mobilePageTitle,
// // // // //     hanldeSortChange,
// // // // //     sort,
// // // // //   };
// // // // // };








// // // // import { useState, useEffect } from "react";
// // // // import { getPageFromURL } from "../../utils/utility";
// // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // import { getLastHeading, getPageTitles } from "../../utils/function";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { readPremiumUsers } from "../../api/slices/premiumUser/premium-user";
// // // // import { FiltersDefaultValues } from "../../utils/static";

// // // // export const useYearlyUsers = () => {
// // // //   const location = useLocation();
// // // //   const dispatch = useDispatch();
// // // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // // //   const page = searchParams.get("page");
// // // //   const [currentPage, setCurrentPage] = useState(page || 1);
// // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // // //   const { premiumUser, loading } = useSelector((state) => state.premiumUsers);
// // // //   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

// // // //   const sort   = searchParams.get("sort");
// // // //   const status = getLastHeading(location.search);

// // // //   useEffect(() => {
// // // //     if (authLoading) return;

// // // //     const parsedPage = parseInt(page, 10);
// // // //     let resetPage = null;

// // // //     if (!isNaN(parsedPage)) {
// // // //       setCurrentPage(parsedPage);
// // // //     } else {
// // // //       resetPage = 1;
// // // //       setCurrentPage(1);
// // // //     }

// // // //     const fetchUsers = async () => {
// // // //       const uid = user?.user?.id;
// // // //       if (!uid) return;

// // // //       const filteredData = { uid };
// // // //       if (sort) filteredData.sort = sort;

// // // //       try {
// // // //         await dispatch(readPremiumUsers({ data: filteredData }));
// // // //       } catch (err) {
// // // //         console.error("Error fetching yearly premium users:", err);
// // // //       }
// // // //     };

// // // //     fetchUsers();
// // // //   }, [location.search, location.key, user, authLoading, sort]);

// // // //   useEffect(() => {
// // // //     const handlePopState = () => setCurrentPage(getPageFromURL());
// // // //     window.addEventListener("popstate", handlePopState);
// // // //     return () => window.removeEventListener("popstate", handlePopState);
// // // //   }, []);

// // // //   const lastHeadingValue =
// // // //     status === "Cleared"
// // // //       ? "clearDate"
// // // //       : status === "Cancelled"
// // // //       ? "cancelledDate"
// // // //       : "clearanceDate";

// // // //   const headings = [
// // // //     { label: "User details", value: "name"           },
// // // //     { label: "Installed",    value: "installDate"    },
// // // //     { label: "Subscribed",   value: "subscribedDate" },
// // // //     { label: status,         value: lastHeadingValue },
// // // //     { label: "Plan Type",    value: "planType"       },
// // // //     { label: "Status",       value: "status"         },
// // // //   ];

// // // //   const { pageTitle, mobilePageTitle } = getPageTitles(location);

// // // //   // All users — no filter, show both monthly and yearly in table
// // // //   const tableRows   = premiumUser?.data ?? [];
// // // //   const monthlyRows = tableRows.filter((u) => u?.Subscriptions?.[0]?.planType === "monthly");
// // // //   const yearlyRows  = tableRows.filter((u) => u?.Subscriptions?.[0]?.planType === "yearly");

// // // //   const dummyData = [
// // // //     { title: "Total Users",   points: tableRows.length   },
// // // //     { title: "Monthly Users", points: monthlyRows.length },
// // // //     { title: "Yearly Users",  points: yearlyRows.length  },
// // // //     { title: "Revenue",       points: premiumUser?.metrics?.totalrevenue || 0 },
// // // //   ];

// // // //   const totalCount   = tableRows.length;
// // // //   const itemsPerPage = 10;
// // // //   const totalItems   = totalCount;

// // // //   const handlePageChange = (page) => {
// // // //     setCurrentPage(page);
// // // //     const params = new URLSearchParams(window.location.search);
// // // //     params.set("page", page.toString());
// // // //     setSearchParams(params);
// // // //   };

// // // //   const hanldeSortChange = (value) => {
// // // //     const params = new URLSearchParams(window.location.search);
// // // //     if (value === "None") {
// // // //       params.delete("sort");
// // // //     } else {
// // // //       params.set("sort", value);
// // // //     }
// // // //     params.set("page", "1");
// // // //     setSearchParams(params);
// // // //     setCurrentPage(1);
// // // //     setFilter((prev) => ({ ...prev, sort: value }));
// // // //   };

// // // //   return {
// // // //     dummyData,
// // // //     tableRows,
// // // //     totalItems,
// // // //     totalCount,
// // // //     loading,
// // // //     itemsPerPage,
// // // //     handlePageChange,
// // // //     currentPage,
// // // //     headings,
// // // //     pageTitle,
// // // //     mobilePageTitle,
// // // //     hanldeSortChange,
// // // //     sort,
// // // //     filter,
// // // //   };
// // // // };













// // // // import { useState, useEffect } from "react";
// // // // import { getPageFromURL } from "../../utils/utility";
// // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // import { getLastHeading, getPageTitles } from "../../utils/function";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { readPremiumUsers, readReferralCounts } from "../../api/slices/premiumUser/premium-user";
// // // // import { FiltersDefaultValues } from "../../utils/static";

// // // // export const useYearlyUsers = () => {
// // // //   const location = useLocation();
// // // //   const dispatch = useDispatch();
// // // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // // //   const page = searchParams.get("page");
// // // //   const [currentPage, setCurrentPage] = useState(page || 1);
// // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // // //   const { premiumUser, referralCounts, loading } = useSelector(
// // // //     (state) => state.premiumUsers
// // // //   );
// // // //   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

// // // //   const sort        = searchParams.get("sort");
// // // //   const queryStatus = searchParams.get("status");
// // // //   const status      = getLastHeading(location.search);

// // // //   // Map URL status → API status value
// // // //   const mappedStatus =
// // // //     queryStatus === "subscribed" ? "active"
// // // //     : queryStatus === "cancelled" ? "canceled"
// // // //     : queryStatus === "None" || !queryStatus ? undefined
// // // //     : queryStatus;

// // // //   // ── API 2: POST /referrals/users/details ─────────────────────────────────
// // // //   useEffect(() => {
// // // //     if (authLoading) return;

// // // //     const parsedPage = parseInt(page, 10);
// // // //     let resetPage = null;

// // // //     if (!isNaN(parsedPage)) {
// // // //       setCurrentPage(parsedPage);
// // // //     } else {
// // // //       resetPage = 1;
// // // //       setCurrentPage(1);
// // // //     }

// // // //     const fetchUsers = async () => {
// // // //       const uid = user?.id
// // // //       if (!uid) return;

// // // //       const requestBody = {
// // // //         uid,
// // // //         type: "yearly",
// // // //         page: Number(parsedPage) || resetPage || currentPage,
// // // //         size: 10,
// // // //       };

// // // //       if (mappedStatus) requestBody.status = mappedStatus;
// // // //       if (sort)         requestBody.sort   = sort;

// // // //       try {
// // // //         await dispatch(readPremiumUsers({ data: requestBody }));
// // // //       } catch (err) {
// // // //         console.error("Error fetching yearly premium users:", err);
// // // //       }
// // // //     };

// // // //     fetchUsers();
// // // //   }, [location.search, location.key, user, authLoading, sort, queryStatus]);

// // // //   // ── API 1: POST /referrals/details/get ───────────────────────────────────
// // // //   useEffect(() => {
// // // //     if (authLoading) return;
// // // //     const uid = user?.id
// // // //     if (!uid) return;
// // // //     dispatch(readReferralCounts({ data: { uid } }));
// // // //   }, [user, authLoading]);

// // // //   useEffect(() => {
// // // //     const handlePopState = () => setCurrentPage(getPageFromURL());
// // // //     window.addEventListener("popstate", handlePopState);
// // // //     return () => window.removeEventListener("popstate", handlePopState);
// // // //   }, []);

// // // //   const lastHeadingValue =
// // // //     status === "Cleared" ? "clearDate"
// // // //     : status === "Cancelled" ? "cancelledDate"
// // // //     : "clearanceDate";

// // // //   const headings = [
// // // //     { label: "User details", value: "name"           },
// // // //     { label: "Installed",    value: "installDate"    },
// // // //     { label: "Subscribed",   value: "subscribedDate" },
// // // //     { label: status,         value: lastHeadingValue },
// // // //     { label: "Plan Type",    value: "planType"       },
// // // //     { label: "Status",       value: "status"         },
// // // //   ];

// // // //   const { pageTitle, mobilePageTitle } = getPageTitles(location);

// // // //   // Pick the correct referralCounts category based on URL status:
// // // //   // "trial"      → yearlyTrialUsers
// // // //   // "subscribed" → yearlySubscribedUsers
// // // //   // "cancelled"  → yearlyCanceledUsers
// // // //   // default      → yearlyTotal
// // // //   const counts =
// // // //     queryStatus === "trial"       ? referralCounts?.yearlyTrialUsers
// // // //     : queryStatus === "subscribed" ? referralCounts?.yearlySubscribedUsers
// // // //     : queryStatus === "cancelled"  ? referralCounts?.yearlyCanceledUsers
// // // //     : referralCounts?.yearlyTotal ?? {};

// // // //   const dummyData = [
// // // //     { title: "Total Users", points: counts?.total     ?? 0 },
// // // //     { title: "This Month",  points: counts?.thisMonth ?? 0 },
// // // //     { title: "This Week",   points: counts?.thisWeek  ?? 0 },
// // // //     { title: "Revenue",     points: counts?.revenue   ?? 0 },
// // // //   ];

// // // //   const tableRows    = premiumUser?.data            ?? [];
// // // //   const totalCount   = premiumUser?.pagination?.total ?? 0;
// // // //   const itemsPerPage = 10;
// // // //   const totalItems   = totalCount;

// // // //   const handlePageChange = (page) => {
// // // //     setCurrentPage(page);
// // // //     const params = new URLSearchParams(window.location.search);
// // // //     params.set("page", page.toString());
// // // //     setSearchParams(params);
// // // //   };

// // // //   const hanldeSortChange = (value) => {
// // // //     const params = new URLSearchParams(window.location.search);
// // // //     if (value === "None") {
// // // //       params.delete("sort");
// // // //     } else {
// // // //       params.set("sort", value);
// // // //     }
// // // //     params.set("page", "1");
// // // //     setSearchParams(params);
// // // //     setCurrentPage(1);
// // // //     setFilter((prev) => ({ ...prev, sort: value }));
// // // //   };

// // // //   return {
// // // //     dummyData,
// // // //     tableRows,
// // // //     totalItems,
// // // //     totalCount,
// // // //     loading,
// // // //     itemsPerPage,
// // // //     handlePageChange,
// // // //     currentPage,
// // // //     headings,
// // // //     pageTitle,
// // // //     mobilePageTitle,
// // // //     hanldeSortChange,
// // // //     sort,
// // // //     filter,
// // // //   };
// // // // };








// // import { useState, useEffect } from "react";
// // import { getPageFromURL } from "../../utils/utility";
// // import { useLocation, useSearchParams } from "react-router-dom";
// // import { getLastHeading, getPageTitles } from "../../utils/function";
// // import { useDispatch, useSelector } from "react-redux";
// // import { readPremiumUsers, readReferralCounts } from "../../api/slices/premiumUser/premium-user";
// // import { FiltersDefaultValues } from "../../utils/static";

// // export const useYearlyUsers = () => {
// //   const location = useLocation();
// //   const dispatch = useDispatch();
// //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// //   const page = searchParams.get("page");
// //   const [currentPage, setCurrentPage] = useState(page || 1);
// //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// //   const { premiumUser, referralCounts, loading } = useSelector(
// //     (state) => state.premiumUsers
// //   );
// //   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

// //   const sort        = searchParams.get("sort");
// //   const queryStatus = searchParams.get("status");
// //   const status      = getLastHeading(location.search);

// //   const mappedStatus =
// //     queryStatus === "subscribed" ? "active"
// //     : queryStatus === "cancelled" ? "canceled"
// //     : queryStatus === "None" || !queryStatus ? undefined
// //     : queryStatus;

// //   // ── API 2: POST /referrals/users/premium/all ──────────────────────────────
// //   useEffect(() => {
// //     if (authLoading) return;

// //     const parsedPage = parseInt(page, 10);
// //     let resetPage = null;

// //     if (!isNaN(parsedPage)) {
// //       setCurrentPage(parsedPage);
// //     } else {
// //       resetPage = 1;
// //       setCurrentPage(1);
// //     }

// //     const fetchUsers = async () => {
// //       const uid = user?.id;
// //       if (!uid) return;

// //       const requestBody = {
// //         uid,
// //         type: "yearly",
// //         planType: "yearly",   // ← filter by yearly plan
// //         page: Number(parsedPage) || resetPage || currentPage,
// //         size: 10,
// //       };

// //       if (mappedStatus) requestBody.status = mappedStatus;
// //       if (sort)         requestBody.sort   = sort;

// //       try {
// //         await dispatch(readPremiumUsers({ data: requestBody }));
// //       } catch (err) {
// //         console.error("Error fetching yearly premium users:", err);
// //       }
// //     };

// //     fetchUsers();
// //   }, [location.search, location.key, user, authLoading, sort, queryStatus]);

// //   // ── API 1: GET /referrals/users/paid ─────────────────────────────────────
// //   useEffect(() => {
// //     if (authLoading) return;
// //     const uid = user?.id;
// //     if (!uid) return;
// //     dispatch(readReferralCounts({ data: { uid } }));
// //   }, [user, authLoading]);

// //   useEffect(() => {
// //     const handlePopState = () => setCurrentPage(getPageFromURL());
// //     window.addEventListener("popstate", handlePopState);
// //     return () => window.removeEventListener("popstate", handlePopState);
// //   }, []);

// //   const headings = [
// //     { label: "User Details", value: "name"      },
// //     { label: "Email",        value: "email"     },
// //     { label: "Joined",       value: "createdAt" },
// //     { label: "Status",       value: "status"    },
// //   ];

// //   const { pageTitle, mobilePageTitle } = getPageTitles(location);

// //   const counts =
// //     queryStatus === "subscribed" ? referralCounts?.yearlySubscribedUsers
// //     : queryStatus === "cancelled" ? referralCounts?.yearlyCanceledUsers
// //     : referralCounts?.yearlyTotal ?? {};

// //   const tableRows    = premiumUser?.data              ?? [];
// //   const totalCount   = premiumUser?.pagination?.total ?? 0;
// //   const itemsPerPage = 10;
// //   const totalItems   = totalCount;

// //   // Total Users always matches table count (from API 2)
// //   // This Month, This Week, Revenue come from API 1 computed counts
// //   const dummyData = [
// //     { title: "Total Users", points: totalCount        ?? 0 },
// //     { title: "This Month",  points: counts?.thisMonth ?? 0 },
// //     { title: "This Week",   points: counts?.thisWeek  ?? 0 },
// //     { title: "Revenue",     points: counts?.revenue   ?? 0 },
// //   ];

// //   const handlePageChange = (page) => {
// //     setCurrentPage(page);
// //     const params = new URLSearchParams(window.location.search);
// //     params.set("page", page.toString());
// //     setSearchParams(params);
// //   };

// //   const hanldeSortChange = (value) => {
// //     const params = new URLSearchParams(window.location.search);
// //     if (value === "None") {
// //       params.delete("sort");
// //     } else {
// //       params.set("sort", value);
// //     }
// //     params.set("page", "1");
// //     setSearchParams(params);
// //     setCurrentPage(1);
// //     setFilter((prev) => ({ ...prev, sort: value }));
// //   };

// //   return {
// //     dummyData,
// //     tableRows,
// //     totalItems,
// //     totalCount,
// //     loading,
// //     itemsPerPage,
// //     handlePageChange,
// //     currentPage,
// //     headings,
// //     pageTitle,
// //     mobilePageTitle,
// //     hanldeSortChange,
// //     sort,
// //     filter,
// //   };
// // };





// import { useState, useEffect } from "react";
// import { getPageFromURL } from "../../utils/utility";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { getLastHeading, getPageTitles } from "../../utils/function";
// import { useDispatch, useSelector } from "react-redux";
// import { readPremiumUsers, readReferralCounts } from "../../api/slices/premiumUser/premium-user";
// import { FiltersDefaultValues } from "../../utils/static";

// export const useYearlyUsers = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams(location.search);
//   const page = searchParams.get("page");
//   const [currentPage, setCurrentPage] = useState(page || 1);
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const { premiumUser, referralCounts, loading } = useSelector(
//     (state) => state.premiumUsers
//   );
//   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

//   const sort        = searchParams.get("sort");
//   const queryStatus = searchParams.get("status");
//   const status      = getLastHeading(location.search);

//   const mappedStatus =
//     queryStatus === "subscribed" ? "active"
//     : queryStatus === "cancelled" ? "canceled"
//     : queryStatus === "None" || !queryStatus ? undefined
//     : queryStatus;

//   // ── API 2: POST /referrals/users/premium/all ─────────────────────────────
//   useEffect(() => {
//     if (authLoading) return;

//     const parsedPage = parseInt(page, 10);
//     let resetPage = null;

//     if (!isNaN(parsedPage)) {
//       setCurrentPage(parsedPage);
//     } else {
//       resetPage = 1;
//       setCurrentPage(1);
//     }

//     const fetchUsers = async () => {
//       const uid = user?.id;
//       if (!uid) return;

//       const requestBody = {
//         uid,
//         type: "yearly",
//         planType: "yearly",
//         page: Number(parsedPage) || resetPage || currentPage,
//         size: 10,
//       };

//       if (mappedStatus) requestBody.status = mappedStatus;
//       if (sort)         requestBody.sort   = sort;

//       try {
//         await dispatch(readPremiumUsers({ data: requestBody }));
//       } catch (err) {
//         console.error("Error fetching yearly premium users:", err);
//       }
//     };

//     fetchUsers();
//   }, [location.search, location.key, user, authLoading, sort, queryStatus]);

//   // ── API 1: GET /referrals/users/paid ─────────────────────────────────────
//   useEffect(() => {
//     if (authLoading) return;
//     const uid = user?.id;
//     if (!uid) return;
//     dispatch(readReferralCounts({ data: { uid } }));
//   }, [user, authLoading]);

//   useEffect(() => {
//     const handlePopState = () => setCurrentPage(getPageFromURL());
//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   const headings = [
//     { label: "User Details",    value: "name"          },
//     { label: "Installed Date",  value: "installedDate" },
//     { label: "Subscribed Date", value: "startDate"     },
//     { label: "Clearance Date",  value: "clearedDate"   },
//     { label: "Plan Type",       value: "planType"      },
//     { label: "Status",          value: "status"        },
//   ];

//   const { pageTitle, mobilePageTitle } = getPageTitles(location);

//   const counts =
//     queryStatus === "subscribed" ? referralCounts?.yearlySubscribedUsers
//     : queryStatus === "cancelled" ? referralCounts?.yearlyCanceledUsers
//     : referralCounts?.yearlyTotal ?? {};

//   const tableRows    = premiumUser?.data              ?? [];
//   const totalCount   = premiumUser?.pagination?.total ?? 0;
//   const itemsPerPage = 10;
//   const totalItems   = totalCount;

//   const dummyData = [
//     { title: "Total Users", points: totalCount        ?? 0 },
//     { title: "This Month",  points: counts?.thisMonth ?? 0 },
//     { title: "This Week",   points: counts?.thisWeek  ?? 0 },
//     { title: "Revenue",     points: counts?.revenue   ?? 0 },
//   ];

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     const params = new URLSearchParams(window.location.search);
//     params.set("page", page.toString());
//     setSearchParams(params);
//   };

//   const hanldeSortChange = (value) => {
//     const params = new URLSearchParams(window.location.search);
//     if (value === "None") {
//       params.delete("sort");
//     } else {
//       params.set("sort", value);
//     }
//     params.set("page", "1");
//     setSearchParams(params);
//     setCurrentPage(1);
//     setFilter((prev) => ({ ...prev, sort: value }));
//   };

//   return {
//     dummyData,
//     tableRows,
//     totalItems,
//     totalCount,
//     loading,
//     itemsPerPage,
//     handlePageChange,
//     currentPage,
//     headings,
//     pageTitle,
//     mobilePageTitle,
//     hanldeSortChange,
//     sort,
//     filter,
//   };
// };




//working fine






import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useLocation, useSearchParams } from "react-router-dom";
import { getPageTitles } from "../../utils/function";
import { useDispatch, useSelector } from "react-redux";
import { readPremiumUsers, readReferralCounts } from "../../api/slices/premiumUser/premium-user";
import { FiltersDefaultValues } from "../../utils/static";

export const useYearlyUsers = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page || 1);
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const { premiumUser, referralCounts, loading } = useSelector(
    (state) => state.premiumUsers
  );
  const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

  const sort        = searchParams.get("sort");
  const queryStatus = searchParams.get("status");

  const isSubPage = ["trial", "subscribed", "cancelled"].includes(queryStatus);

  // Map URL status → API status
  // API accepts: "trial" | "active" | "canceled"
  const mappedStatus =
    queryStatus === "subscribed" ? "active"
    : queryStatus === "cancelled" ? "canceled"
    : queryStatus === "trial"    ? "trial"
    : undefined;

  // ── Fetch users ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (authLoading) return;

    const parsedPage = parseInt(page, 10);
    const resolvedPage = !isNaN(parsedPage) ? parsedPage : 1;
    setCurrentPage(resolvedPage);

    const uid = user?.id;
    if (!uid) return;

    // Postman body shape:
    // { uid, type: "yearly", status?: "trial"|"active"|"canceled", sort?, page, size }
    const requestBody = {
      uid,
      type: "yearly",   // hardcoded for yearly hook
      page: resolvedPage,
      size: 10,
    };

    // Only send status when on a sub-page (trial / subscribed / cancelled)
    if (mappedStatus) requestBody.status = mappedStatus;

    // Only send sort when a sort param exists
    if (sort) requestBody.sort = sort;

    dispatch(readPremiumUsers({ data: requestBody })).catch((err) =>
      console.error("Error fetching yearly premium users:", err)
    );
  }, [location.search, location.key, user, authLoading]);

  // ── Fetch pre-computed counts ────────────────────────────────────────────
  useEffect(() => {
    if (authLoading) return;
    const uid = user?.id;
    if (!uid) return;
    dispatch(readReferralCounts({ data: { uid } }));
  }, [user, authLoading]);

  // ── Handle browser back/forward ──────────────────────────────────────────
  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromURL());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const { pageTitle, mobilePageTitle } = getPageTitles(location);

  // ── Pick correct counts based on active sub-page ─────────────────────────
  // referralCounts shape from GET /referrals/details/get:
  // { yearlyTrialUsers, yearlySubscribedUsers, yearlyCanceledUsers, yearlyTotal }
  const counts =
    queryStatus === "trial"        ? referralCounts?.yearlyTrialUsers
    : queryStatus === "subscribed" ? referralCounts?.yearlySubscribedUsers
    : queryStatus === "cancelled"  ? referralCounts?.yearlyCanceledUsers
    : referralCounts?.yearlyTotal ?? {};

  // ── Pass raw data — Subscriptions[] stays intact for table rows ──────────
  const tableRows    = premiumUser?.data              ?? [];
  const totalCount   = premiumUser?.pagination?.total ?? 0;
  const itemsPerPage = 10;
  const totalItems   = totalCount;

  // ── Summary cards ────────────────────────────────────────────────────────
  const dummyData = [
    { title: "Total Users", points: counts?.total     ?? 0 },
    { title: "This Month",  points: counts?.thisMonth ?? 0 },
    { title: "This Week",   points: counts?.thisWeek  ?? 0 },
    { title: "Revenue",     points: counts?.revenue   ?? 0 },
  ];

  // ── Table headings ───────────────────────────────────────────────────────
  // const headings = [
  //   { label: "User Details",    value: "name"          },
  //   { label: "Installed Date",  value: "installedDate" },
  //   { label: "Subscribed Date", value: "startDate"     },
  //   { label: "Clearance Date",  value: "clearedDate"   },
  //   { label: "Plan Type",       value: "planType"      },
  //   { label: "Status",          value: "status"        },
  // ];

const headings = [
  { label: "User Details",    value: "name"           },
  { label: "Installed Date",  value: "installDate"    },  // ✅ fixed
  { label: "Subscribed Date", value: "subscribedDate" },  // ✅ fixed
  { label: "Clearance Date",  value: "clearanceDate"  },  // ✅ fixed
  { label: "Plan Type",       value: "planType"       },
  { label: "Status",          value: "status"         },
];


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    setSearchParams(params);
  };

  const hanldeSortChange = (value) => {
    const params = new URLSearchParams(window.location.search);
    if (value === "None") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    params.set("page", "1");
    setSearchParams(params);
    setCurrentPage(1);
    setFilter((prev) => ({ ...prev, sort: value }));
  };

  return {
    dummyData,
    tableRows,
    totalItems,
    totalCount,
    loading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    pageTitle,
    mobilePageTitle,
    hanldeSortChange,
    sort,
    filter,
    isSubPage,
  };
};