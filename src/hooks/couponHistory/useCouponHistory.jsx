// // // // // import { useState, useEffect } from "react";
// // // // // import { getPageFromURL } from "../../utils/utility";
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // // import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
// // // // // import { FiltersDefaultValues } from "../../utils/static";

// // // // // export const useCouponHistory = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const location = useLocation();
// // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // // // //   const [currentPageRows, setCurrentPageRows] = useState([]);
// // // // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // // // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // // // //   const [filter, setFilter] = useState({
// // // // //     sort: FiltersDefaultValues.None,
// // // // //   });
// // // // //   const { couponHistory, loading } = useSelector(
// // // // //     (state) => state.couponHistory
// // // // //   );

// // // // //   const sort = searchParams.get("sort");
// // // // //   const page = searchParams.get("page");

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

// // // // //     const couponHistoryRecords = async () => {
// // // // //       const uid = user?.user?.id;
// // // // //       if (!uid) return;

// // // // //       if (sort !== undefined) {
// // // // //         const filteredData = {
// // // // //           uid: uid,
// // // // //           page: (Number(parsedPage) || resetPage) ?? currentPage,
// // // // //           size: 10,
// // // // //         };

// // // // //         if (sort) {
// // // // //           filteredData.sort = sort;
// // // // //         }

// // // // //         try {
// // // // //           const response = await dispatch(
// // // // //             readCouponHistory({ params: filteredData })
// // // // //           );
// // // // //           if (response?.payload) {
// // // // //             const data = response?.payload;
// // // // //             setCurrentPageRows(data);
// // // // //           }
// // // // //         } catch (err) {
// // // // //           console.error("Error fetching monthly premium users:", err);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     couponHistoryRecords();
// // // // //   }, [location.search, location.key, user, authLoading, sort]);

// // // // //   useEffect(() => {
// // // // //     const handlePopState = () => {
// // // // //       setCurrentPage(getPageFromURL());
// // // // //     };
// // // // //     window.addEventListener("popstate", handlePopState);
// // // // //     return () => window.removeEventListener("popstate", handlePopState);
// // // // //   }, []);

// // // // //   const headings = [
// // // // //     { label: "Type", value: "type" },
// // // // //     { label: "Coupon", value: "coupon" },
// // // // //     { label: "Redeemed Date", value: "createdAt" },
// // // // //     { label: "Status", value: "status" },
// // // // //   ];

// // // // //   const itemsPerPage = 10;
// // // // //   const totalCount = currentPageRows?.pagination?.total;
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
// // // // //     currentPageRows,
// // // // //     totalItems,
// // // // //     totalCount,
// // // // //     loading,
// // // // //     itemsPerPage,
// // // // //     handlePageChange,
// // // // //     currentPage,
// // // // //     headings,
// // // // //     couponHistory,
// // // // //     sort,
// // // // //     filter,
// // // // //     hanldeSortChange,
// // // // //   };
// // // // // };

// // // // import { useState, useEffect } from "react";
// // // // import { getPageFromURL } from "../../utils/utility";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
// // // // import { FiltersDefaultValues } from "../../utils/static";

// // // // export const useCouponHistory = () => {
// // // //   const dispatch = useDispatch();
// // // //   const location = useLocation();
// // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
  
// // // //   // Get the couponHistory from Redux state
// // // //   const { couponHistory, loading, error } = useSelector(
// // // //     (state) => state.couponHistory || {}
// // // //   );

// // // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // // //   const [filter, setFilter] = useState({
// // // //     sort: FiltersDefaultValues.None,
// // // //   });
// // // //   const [formError, setFormError] = useState(null);

// // // //   const sort = searchParams.get("sort");
// // // //   const order = searchParams.get("order") || "desc";
// // // //   const page = searchParams.get("page");

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

// // // //     const couponHistoryRecords = async () => {
// // // //       const uid = user?.user?.id;
      
// // // //       console.log("🔍 useCouponHistory - User ID:", uid);

// // // //       if (!uid) {
// // // //         console.warn("⚠️ No user ID found");
// // // //         setFormError("User not authenticated");
// // // //         return;
// // // //       }

// // // //       const filteredData = {
// // // //         uid: uid,
// // // //         page: !isNaN(parsedPage) ? parsedPage : resetPage || currentPage,
// // // //         size: 10,
// // // //         order: order,
// // // //       };

// // // //       if (sort && sort !== "None") {
// // // //         filteredData.sort = sort;
// // // //       }

// // // //       console.log("📤 Dispatching readCouponHistory with params:", filteredData);

// // // //       try {
// // // //         const response = await dispatch(
// // // //           readCouponHistory({ params: filteredData, setError: setFormError })
// // // //         );

// // // //         console.log("📥 Response from dispatch:", response);

// // // //         if (response?.payload) {
// // // //           console.log("✅ Got payload:", response.payload);
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("❌ Error fetching coupon history:", err);
// // // //         setFormError(err?.message || "Failed to fetch coupons");
// // // //       }
// // // //     };

// // // //     couponHistoryRecords();
// // // //   }, [location.search, location.key, user, authLoading, sort, order, dispatch, currentPage]);

// // // //   useEffect(() => {
// // // //     const handlePopState = () => {
// // // //       setCurrentPage(getPageFromURL());
// // // //     };
// // // //     window.addEventListener("popstate", handlePopState);
// // // //     return () => window.removeEventListener("popstate", handlePopState);
// // // //   }, []);

// // // //   const headings = [
// // // //     { label: "Type", value: "type" },
// // // //     { label: "Coupon", value: "coupon" },
// // // //     { label: "Redeemed Date", value: "createdAt" },
// // // //     { label: "Expiry Date", value: "expiryDate" },
// // // //     { label: "Points", value: "points" },
// // // //     { label: "Status", value: "status" },
// // // //   ];

// // // //   const itemsPerPage = 10;

// // // //   // Extract data and pagination from Redux state
// // // //   const currentPageRows = couponHistory || {
// // // //     data: [],
// // // //     pagination: {
// // // //       total: 0,
// // // //       page: 1,
// // // //       size: 10,
// // // //       pages: 0,
// // // //     },
// // // //   };

// // // //   const pagination = currentPageRows?.pagination || {
// // // //     total: 0,
// // // //     page: 1,
// // // //     size: 10,
// // // //     pages: 0,
// // // //   };

// // // //   const totalCount = pagination?.total || 0;
// // // //   const totalItems = totalCount;

// // // //   console.log("📊 couponHistory from Redux:", couponHistory);
// // // //   console.log("📊 currentPageRows:", currentPageRows);
// // // //   console.log("📊 pagination:", pagination);
// // // //   console.log("📊 loading:", loading);

// // // //   const handlePageChange = (newPage) => {
// // // //     setCurrentPage(newPage);

// // // //     const params = new URLSearchParams(window.location.search);
// // // //     params.set("page", newPage.toString());
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

// // // //     setFilter((prev) => {
// // // //       const updatedFilter = { ...prev, sort: value };
// // // //       return updatedFilter;
// // // //     });
// // // //   };

// // // //   const handleOrderChange = (newOrder) => {
// // // //     const params = new URLSearchParams(window.location.search);
// // // //     params.set("order", newOrder);
// // // //     params.set("page", "1");
// // // //     setSearchParams(params);
// // // //     setCurrentPage(1);
// // // //   };

// // // //   const formatDate = (dateString) => {
// // // //     if (!dateString) return "N/A";
// // // //     try {
// // // //       const date = new Date(dateString);
// // // //       return date.toLocaleDateString("en-US", {
// // // //         year: "numeric",
// // // //         month: "short",
// // // //         day: "numeric",
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("Error formatting date:", error);
// // // //       return "Invalid Date";
// // // //     }
// // // //   };

// // // //   return {
// // // //     couponHistory,
// // // //     totalItems,
// // // //     totalCount,
// // // //     loading,
// // // //     itemsPerPage,
// // // //     handlePageChange,
// // // //     currentPage,
// // // //     headings,
// // // //     sort,
// // // //     order: order,
// // // //     filter,
// // // //     hanldeSortChange,
// // // //     handleOrderChange,
// // // //     formatDate,
// // // //     pagination,
// // // //     error: error || formError,
// // // //     currentPageRows,
// // // //   };
// // // // };



// // // import { useState, useEffect } from "react";
// // // import { getPageFromURL } from "../../utils/utility";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useLocation, useSearchParams } from "react-router-dom";
// // // import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
// // // import { FiltersDefaultValues } from "../../utils/static";

// // // export const useCouponHistory = () => {
// // //   const dispatch = useDispatch();
// // //   const location = useLocation();
// // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
  
// // //   // Get the Redux state properly
// // //   const reduxState = useSelector((state) => state.couponHistory);
// // //   const couponHistory = reduxState?.couponHistory || {
// // //     data: [],
// // //     pagination: {
// // //       total: 0,
// // //       page: 1,
// // //       size: 10,
// // //       pages: 0,
// // //     },
// // //   };
// // //   const loading = reduxState?.loading;
// // //   const error = reduxState?.error || null;

// // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // //   const [filter, setFilter] = useState({
// // //     sort: FiltersDefaultValues.None,
// // //   });
// // //   const [formError, setFormError] = useState(null);

// // //   const sort = searchParams.get("sort");
// // //   const order = searchParams.get("order") || "desc";
// // //   const page = searchParams.get("page");

// // //   useEffect(() => {
// // //     if (authLoading) return;

// // //     const parsedPage = parseInt(page, 10);

// // //     let resetPage = null;
// // //     if (!isNaN(parsedPage)) {
// // //       setCurrentPage(parsedPage);
// // //     } else {
// // //       resetPage = 1;
// // //       setCurrentPage(1);
// // //     }

// // //     const couponHistoryRecords = async () => {
// // //       const uid = user?.user?.id;
      
// // //       console.log("🔍 useCouponHistory - User ID:", uid);

// // //       if (!uid) {
// // //         console.warn("⚠️ No user ID found");
// // //         setFormError("User not authenticated");
// // //         return;
// // //       }

// // //       const filteredData = {
// // //         uid: uid,
// // //         page: !isNaN(parsedPage) ? parsedPage : resetPage || currentPage,
// // //         size: 10,
// // //         order: order,
// // //       };

// // //       if (sort && sort !== "None") {
// // //         filteredData.sort = sort;
// // //       }

// // //       console.log("📤 Dispatching readCouponHistory with params:", filteredData);

// // //       try {
// // //         const response = await dispatch(
// // //           readCouponHistory({ params: filteredData, setError: setFormError })
// // //         );

// // //         console.log("📥 Response from dispatch:", response);

// // //         if (response?.payload) {
// // //           console.log("✅ Got payload:", response.payload);
// // //           console.log("✅ Payload data items:", response.payload?.data?.length);
// // //           console.log("✅ Payload pagination:", response.payload?.pagination);
// // //         }
// // //       } catch (err) {
// // //         console.error("❌ Error fetching coupon history:", err);
// // //         setFormError(err?.message || "Failed to fetch coupons");
// // //       }
// // //     };

// // //     couponHistoryRecords();
// // //   }, [location.search, location.key, user, authLoading, sort, order, dispatch, currentPage]);

// // //   useEffect(() => {
// // //     const handlePopState = () => {
// // //       setCurrentPage(getPageFromURL());
// // //     };
// // //     window.addEventListener("popstate", handlePopState);
// // //     return () => window.removeEventListener("popstate", handlePopState);
// // //   }, []);

// // //   const headings = [
// // //     { label: "Type", value: "type" },
// // //     { label: "Coupon", value: "coupon" },
// // //     { label: "Redeemed Date", value: "createdAt" },
// // //     { label: "Expiry Date", value: "expiryDate" },
// // //     // { label: "Points", value: "points" },
// // //     // { label: "Status", value: "status" },
// // //   ];

// // //   const itemsPerPage = 10;

// // //   // currentPageRows is the full object with data and pagination
// // //   const currentPageRows = couponHistory;
// // //   const pagination = couponHistory?.pagination || {
// // //     total: 0,
// // //     page: 1,
// // //     size: 10,
// // //     pages: 0,
// // //   };

// // //   const totalCount = pagination?.total || 0;
// // //   const totalItems = totalCount;

// // //   console.log("📊 Redux couponHistory:", couponHistory);
// // //   console.log("📊 currentPageRows:", currentPageRows);
// // //   console.log("📊 currentPageRows.data:", currentPageRows?.data);
// // //   console.log("📊 currentPageRows.data.length:", currentPageRows?.data?.length);
// // //   console.log("📊 pagination:", pagination);
// // //   console.log("📊 loading:", loading);
// // //   console.log("📊 totalCount:", totalCount);

// // //   const handlePageChange = (newPage) => {
// // //     setCurrentPage(newPage);

// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("page", newPage.toString());
// // //     setSearchParams(params);
// // //   };

// // //   const hanldeSortChange = (value) => {
// // //     const params = new URLSearchParams(window.location.search);

// // //     if (value === "None") {
// // //       params.delete("sort");
// // //     } else {
// // //       params.set("sort", value);
// // //     }

// // //     params.set("page", "1");
// // //     setSearchParams(params);
// // //     setCurrentPage(1);

// // //     setFilter((prev) => {
// // //       const updatedFilter = { ...prev, sort: value };
// // //       return updatedFilter;
// // //     });
// // //   };

// // //   const handleOrderChange = (newOrder) => {
// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("order", newOrder);
// // //     params.set("page", "1");
// // //     setSearchParams(params);
// // //     setCurrentPage(1);
// // //   };

// // //   const formatDate = (dateString) => {
// // //     if (!dateString) return "N/A";
// // //     try {
// // //       const date = new Date(dateString);
// // //       return date.toLocaleDateString("en-US", {
// // //         year: "numeric",
// // //         month: "short",
// // //         day: "numeric",
// // //       });
// // //     } catch (error) {
// // //       console.error("Error formatting date:", error);
// // //       return "Invalid Date";
// // //     }
// // //   };

// // //   return {
// // //     couponHistory,
// // //     totalItems,
// // //     totalCount,
// // //     loading,
// // //     itemsPerPage,
// // //     handlePageChange,
// // //     currentPage,
// // //     headings,
// // //     sort,
// // //     order: order,
// // //     filter,
// // //     hanldeSortChange,
// // //     handleOrderChange,
// // //     formatDate,
// // //     pagination,
// // //     error: error || formError,
// // //     currentPageRows,
// // //   };
// // // };




// // // import { useState, useEffect } from "react";
// // // import { getPageFromURL } from "../../utils/utility";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useLocation, useSearchParams } from "react-router-dom";
// // // import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
// // // import { FiltersDefaultValues } from "../../utils/static";

// // // export const useCouponHistory = () => {
// // //   const dispatch = useDispatch();
// // //   const location = useLocation();
// // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // //   const { couponHistory, loading } = useSelector((state) => state.couponHistory);

// // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // //   const [filter, setFilter] = useState({
// // //     sort: FiltersDefaultValues.None,
// // //   });

// // //   const sort = searchParams.get("sort");
// // //   const order = searchParams.get("order") || "desc";
// // //   const page = searchParams.get("page");

// // //   useEffect(() => {
// // //     if (authLoading) return;

// // //     const parsedPage = parseInt(page, 10);

// // //     let resetPage = null;
// // //     if (!isNaN(parsedPage)) {
// // //       setCurrentPage(parsedPage);
// // //     } else {
// // //       resetPage = 1;
// // //       setCurrentPage(1);
// // //     }

// // //     const couponHistoryRecords = async () => {
// // //       const uid = user?.id
// // //       if (!uid) return;

// // //       const filteredData = {
// // //         uid: uid,
// // //         page: !isNaN(parsedPage) ? parsedPage : resetPage || currentPage,
// // //         size: 10,
// // //         order: order,
// // //       };

// // //       if (sort && sort !== "None") {
// // //         filteredData.sort = sort;
// // //       }

// // //       try {
// // //         await dispatch(
// // //           readCouponHistory({ params: filteredData })
// // //         );
// // //       } catch (err) {
// // //         console.error("Error fetching coupon history:", err);
// // //       }
// // //     };

// // //     couponHistoryRecords();
// // //   }, [location.search, location.key, user, authLoading, sort, order, dispatch, currentPage]);

// // //   useEffect(() => {
// // //     const handlePopState = () => {
// // //       setCurrentPage(getPageFromURL());
// // //     };
// // //     window.addEventListener("popstate", handlePopState);
// // //     return () => window.removeEventListener("popstate", handlePopState);
// // //   }, []);

// // //   const headings = [
// // //     { label: "Type", value: "type" },
// // //     { label: "Coupon", value: "coupon" },
// // //     { label: "Redeemed Date", value: "createdAt" },
// // //     { label: "Expiry Date", value: "expiryDate" },
// // //     { label: "Points", value: "points" },
// // //     { label: "Status", value: "status" },
// // //   ];

// // //   const itemsPerPage = 10;
// // //   const currentPageRows = couponHistory;
// // //   const totalCount = couponHistory?.pagination?.total || 0;
// // //   const totalItems = totalCount;

// // //   const handlePageChange = (newPage) => {
// // //     setCurrentPage(newPage);

// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("page", newPage.toString());
// // //     setSearchParams(params);
// // //   };

// // //   const hanldeSortChange = (value) => {
// // //     const params = new URLSearchParams(window.location.search);

// // //     if (value === "None") {
// // //       params.delete("sort");
// // //     } else {
// // //       params.set("sort", value);
// // //     }

// // //     params.set("page", "1");
// // //     setSearchParams(params);
// // //     setCurrentPage(1);

// // //     setFilter((prev) => {
// // //       const updatedFilter = { ...prev, sort: value };
// // //       return updatedFilter;
// // //     });
// // //   };

// // //   const handleOrderChange = (newOrder) => {
// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("order", newOrder);
// // //     params.set("page", "1");
// // //     setSearchParams(params);
// // //     setCurrentPage(1);
// // //   };

// // //   return {
// // //     currentPageRows,
// // //     totalItems,
// // //     totalCount,
// // //     loading,
// // //     itemsPerPage,
// // //     handlePageChange,
// // //     currentPage,
// // //     headings,
// // //     sort,
// // //     order,
// // //     filter,
// // //     hanldeSortChange,
// // //     handleOrderChange,
// // //   };
// // // };





// import { useState, useEffect } from "react";
// import { getPageFromURL } from "../../utils/utility";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
// import { FiltersDefaultValues } from "../../utils/static";

// export const useCouponHistory = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const { couponHistory, loading } = useSelector((state) => state.couponHistory);

//   const [currentPage, setCurrentPage] = useState(getPageFromURL());
//   const [searchParams, setSearchParams] = useSearchParams(location.search);
//   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

//   const sort = searchParams.get("sort");
//   const order = searchParams.get("order") || "desc";
//   const page = searchParams.get("page");

//   useEffect(() => {
//     if (authLoading) return;

//     const parsedPage = parseInt(page, 10);
//     const resolvedPage = !isNaN(parsedPage) ? parsedPage : 1;

//     // ✅ Only update if changed to avoid re-render loop
//     setCurrentPage((prev) => (prev !== resolvedPage ? resolvedPage : prev));

//     const uid = user?.id; // ✅ correct path
//     if (!uid) return;

//     const filteredData = {
//       uid,
//       page: resolvedPage,
//       size: 10,
//       order,
//     };

//     if (sort && sort !== "None") {
//       filteredData.sort = sort;
//     }

//     const fetchCouponHistory = async () => {
//       try {
//         await dispatch(readCouponHistory({ params: filteredData }));
//       } catch (err) {
//         console.error("Error fetching coupon history:", err);
//       }
//     };

//     fetchCouponHistory();

//     // ✅ FIXED: removed currentPage from deps — it's set inside this effect
//     //           which was causing an infinite re-fetch loop
//   }, [location.search, location.key, user, authLoading, sort, order, dispatch]);

//   useEffect(() => {
//     const handlePopState = () => setCurrentPage(getPageFromURL());
//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   const headings = [
//     { label: "Type", value: "type" },
//     { label: "Coupon", value: "coupon" },
//     { label: "Redeemed Date", value: "createdAt" },
//     { label: "Expiry Date", value: "expiryDate" },
//     { label: "Points", value: "points" },
//     { label: "Status", value: "status" },
//   ];

//   const itemsPerPage = 10;
//   const currentPageRows = couponHistory;
//   const totalCount = couponHistory?.pagination?.total || 0;
//   const totalItems = totalCount;

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//     const params = new URLSearchParams(window.location.search);
//     params.set("page", newPage.toString());
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

//   const handleOrderChange = (newOrder) => {
//     const params = new URLSearchParams(window.location.search);
//     params.set("order", newOrder);
//     params.set("page", "1");
//     setSearchParams(params);
//     setCurrentPage(1);
//   };

//   return {
//     currentPageRows,
//     totalItems,
//     totalCount,
//     loading,
//     itemsPerPage,
//     handlePageChange,
//     currentPage,
//     headings,
//     sort,
//     order,
//     filter,
//     hanldeSortChange,
//     handleOrderChange,
//   };
// };



// import { useState, useEffect } from "react";
// import { getPageFromURL } from "../../utils/utility";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
// import { FiltersDefaultValues } from "../../utils/static";

// export const useCouponHistory = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const { couponHistory, loading } = useSelector((state) => state.couponHistory);

//   const [currentPage, setCurrentPage] = useState(getPageFromURL());
//   const [searchParams, setSearchParams] = useSearchParams(location.search);
//   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

//   const sort = searchParams.get("sort");
//   const order = searchParams.get("order") || "desc";
//   const page = searchParams.get("page");

//   useEffect(() => {
//     if (authLoading) return;

//     const parsedPage = parseInt(page, 10);
//     const resolvedPage = !isNaN(parsedPage) ? parsedPage : 1;

//     setCurrentPage((prev) => (prev !== resolvedPage ? resolvedPage : prev));

//     const uid = user?.id;
//     if (!uid) return;

//     const filteredData = {
//       uid,
//       page: resolvedPage,
//       size: 10,
//       order,
//     };

//     if (sort && sort !== "None") {
//       filteredData.sort = sort;
//     }

//     const fetchCouponHistory = async () => {
//       try {
//         await dispatch(readCouponHistory({ params: filteredData }));
//       } catch (err) {
//         console.error("Error fetching coupon history:", err);
//       }
//     };

//     fetchCouponHistory();
//   }, [location.search, location.key, user, authLoading, sort, order, dispatch]);

//   useEffect(() => {
//     const handlePopState = () => setCurrentPage(getPageFromURL());
//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   const headings = [
//     { label: "Type", value: "type" },
//     { label: "Coupon", value: "coupon" },
//     { label: "Redeemed Date", value: "createdAt" },
//     { label: "Expiry Date", value: "expiryDate" },
//     { label: "Points", value: "points" },
//     { label: "Status", value: "status" },
//   ];

//   const itemsPerPage = 10;

//   // ✅ THE FIX: extract the array from couponHistory object
//   const currentPageRows = Array.isArray(couponHistory?.data) ? couponHistory.data : [];
//   const totalCount = couponHistory?.pagination?.total || 0;
//   const totalItems = totalCount;

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//     const params = new URLSearchParams(window.location.search);
//     params.set("page", newPage.toString());
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

//   const handleOrderChange = (newOrder) => {
//     const params = new URLSearchParams(window.location.search);
//     params.set("order", newOrder);
//     params.set("page", "1");
//     setSearchParams(params);
//     setCurrentPage(1);
//   };

//   return {
//     currentPageRows,  // ✅ Now always a plain array []
//     totalItems,
//     totalCount,
//     loading,
//     itemsPerPage,
//     handlePageChange,
//     currentPage,
//     headings,
//     sort,
//     order,
//     filter,
//     hanldeSortChange,
//     handleOrderChange,
//   };
// };






import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
import { FiltersDefaultValues } from "../../utils/static";

export const useCouponHistory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const { couponHistory, loading } = useSelector((state) => state.couponHistory);

  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

  const sort = searchParams.get("sort");
  const order = searchParams.get("order") || "desc";
  const page = searchParams.get("page");

  useEffect(() => {
    if (authLoading) return;

    const parsedPage = parseInt(page, 10);
    const resolvedPage = !isNaN(parsedPage) ? parsedPage : 1;

    setCurrentPage((prev) => (prev !== resolvedPage ? resolvedPage : prev));

    const uid = user?.id;
    if (!uid) return;

    const filteredData = {
      uid,
      page: resolvedPage,
      size: 10,
      order,
    };

    if (sort && sort !== "None") {
      filteredData.sort = sort;
    }

    const fetchCouponHistory = async () => {
      try {
        await dispatch(readCouponHistory({ params: filteredData }));
      } catch (err) {
        console.error("Error fetching coupon history:", err);
      }
    };

    fetchCouponHistory();
  }, [location.search, location.key, user, authLoading, sort, order, dispatch]);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromURL());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const headings = [
    { label: "Type", value: "type" },
    { label: "Coupon", value: "coupon" },
    { label: "Redeemed Date", value: "createdAt" },
    { label: "Expiry Date", value: "expiryDate" },
    { label: "Points", value: "points" },
    { label: "Status", value: "status" },
  ];

  const itemsPerPage = 10;

  const currentPageRows = Array.isArray(couponHistory?.data) ? couponHistory.data : [];
  const totalCount = couponHistory?.pagination?.total || 0;
  const totalItems = totalCount;

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

  const handleOrderChange = (newOrder) => {
    const params = new URLSearchParams(window.location.search);
    params.set("order", newOrder);
    params.set("page", "1");
    setSearchParams(params);
    setCurrentPage(1);
  };

  /**
   * Normalizes the status string from the API into a consistent lowercase value.
   * Fixes the mobile bug where status was always displaying as "active"
   * due to inconsistent casing or field mapping from the API response.
   *
   * Usage in your component:
   *   const statusLabel = getStatusLabel(row.status);
   *   const statusClass = getStatusClass(row.status);
   */
  const getStatusLabel = (status) => {
    if (!status) return "Unknown";
    const normalized = String(status).toLowerCase().trim();
    switch (normalized) {
      case "active":
        return "Active";
      case "expired":
        return "Expired";
      case "used":
        return "Used";
      case "pending":
        return "Pending";
      default:
        return status; // fallback to raw value
    }
  };

  const getStatusClass = (status) => {
    const normalized = String(status || "").toLowerCase().trim();
    switch (normalized) {
      case "active":
        return "text-green-600 bg-green-100";
      case "expired":
        return "text-red-600 bg-red-100";
      case "used":
        return "text-gray-600 bg-gray-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    currentPageRows,
    totalItems,
    totalCount,
    loading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    sort,
    order,
    filter,
    hanldeSortChange,
    handleOrderChange,
    // ✅ New helpers for correct status display (fixes mobile "always active" bug)
    getStatusLabel,
    getStatusClass,
    // ✅ totalPages exposed for mobile pagination
    totalPages,
  };
};