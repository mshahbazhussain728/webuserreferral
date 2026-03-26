// // // import { ModalType } from "../../types/ui";
// // // import { useState, useEffect } from "react";
// // // import { getPageFromURL } from "../../utils/utility";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { updateModalType } from "../../api/slices/globalSlice/global";
// // // import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
// // // import { useLocation, useSearchParams } from "react-router-dom";
// // // import { FiltersDefaultValues } from "../../utils/static";

// // // export const useRedeemHistory = () => {
// // //   const dispatch = useDispatch();
// // //   const location = useLocation();
// // //   const [currentPageRows, setCurrentPageRows] = useState([]);
// // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // //   const [filter, setFilter] = useState({
// // //     sort: FiltersDefaultValues.None,
// // //   });
// // //   const { redeemHistory, loading } = useSelector(
// // //     (state) => state.redeemHistory
// // //   );

// // //   const sort = searchParams.get("sort");
// // //   const page = searchParams.get("page");

// // //   const handleShare = () => {
// // //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// // //   };

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

// // //     const redeemHistoryRecords = async () => {
// // //       const uid = user?.user?.id;
// // //       if (!uid) return;

// // //       if (sort !== undefined) {
// // //         const filteredData = {
// // //           uid: 2,
// // //           page: (Number(parsedPage) || resetPage) ?? currentPage,
// // //           size: 10,
// // //         };

// // //         if (sort) {
// // //           filteredData.sort = sort;
// // //         }

// // //         try {
// // //           const response = await dispatch(
// // //             readRedeemHistory({ params: filteredData })
// // //           );
// // //           if (response?.payload) {
// // //             const data = response?.payload;
// // //             setCurrentPageRows(data);
// // //           }
// // //         } catch (err) {
// // //           console.error("Error fetching monthly premium users:", err);
// // //         }
// // //       }
// // //     };

// // //     redeemHistoryRecords();
// // //   }, [location.search, location.key, user, authLoading, sort]);

// // //   useEffect(() => {
// // //     const handlePopState = () => {
// // //       setCurrentPage(getPageFromURL());
// // //     };
// // //     window.addEventListener("popstate", handlePopState);
// // //     return () => window.removeEventListener("popstate", handlePopState);
// // //   }, []);

// // //   const headings = [
// // //     { label: "Redeemed Date", value: "approvedDate" },
// // //     { label: "Redeemed Points", value: "points" },
// // //     { label: "Status", value: "status" },
// // //   ];

// // //   const totalCount = currentPageRows?.pagination?.total;
// // //   const itemsPerPage = 10;
// // //   const totalItems = totalCount;

// // //   const handlePageChange = (page) => {
// // //     setCurrentPage(page);

// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("page", page.toString());
// // //     setSearchParams(params);
// // //   };

// // //   const handlePaymentDetails = (
// // //     reqSentDate,
// // //     points,
// // //     reqApprovedDate,
// // //     paymentMethod,
// // //     paymentDate,
// // //     status
// // //   ) => {
// // //     dispatch(
// // //       updateModalType({
// // //         type: ModalType.PAYMENT_DETAILS,
// // //         data: {
// // //           reqSentDate,
// // //           points,
// // //           reqApprovedDate,
// // //           paymentMethod,
// // //           paymentDate,
// // //           status,
// // //           onShare: handleShare,
// // //         },
// // //       })
// // //     );
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

// // //   return {
// // //     currentPageRows,
// // //     totalItems,
// // //     totalCount,
// // //     loading,
// // //     itemsPerPage,
// // //     handlePageChange,
// // //     currentPage,
// // //     headings,
// // //     redeemHistory,
// // //     sort,
// // //     filter,
// // //     handlePaymentDetails,
// // //     hanldeSortChange,
// // //   };
// // // };




// // // import { ModalType } from "../../types/ui";
// // // import { useState, useEffect } from "react";
// // // import { getPageFromURL } from "../../utils/utility";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { updateModalType } from "../../api/slices/globalSlice/global";
// // // import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
// // // import { useLocation, useSearchParams } from "react-router-dom";
// // // import { FiltersDefaultValues } from "../../utils/static";

// // // export const useRedeemHistory = () => {
// // //   const dispatch = useDispatch();
// // //   const location = useLocation();
// // //   const [currentPageRows, setCurrentPageRows] = useState([]);
// // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // //   const [filter, setFilter] = useState({
// // //     sort: FiltersDefaultValues.None,
// // //   });
// // //   const { redeemHistory, loading } = useSelector(
// // //     (state) => state.redeemHistory
// // //   );

// // //   const sort = searchParams.get("sort");
// // //   const page = searchParams.get("page");

// // //   const handleShare = () => {
// // //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// // //   };

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

// // //     const redeemHistoryRecords = async () => {
// // //       const uid = user?.user?.id; // ✅ Fixed: use real user ID
// // //       if (!uid) return;

// // //       // ✅ Fixed: removed sort !== undefined condition so data loads on initial render
// // //       const filteredData = {
// // //         uid: uid, // ✅ Fixed: was hardcoded as uid: 2
// // //         page: (Number(parsedPage) || resetPage) ?? currentPage,
// // //         size: 10,
// // //         sort: "createdAt", // ✅ Default sort from your API
// // //         order: "desc",     // ✅ Default order from your API
// // //       };

// // //       if (sort && sort !== "None") {
// // //         filteredData.sort = sort; // ✅ Override with user selected sort
// // //       }

// // //       try {
// // //         const response = await dispatch(
// // //           readRedeemHistory({ params: filteredData })
// // //         );
// // //         if (response?.payload) {
// // //           const data = response?.payload;
// // //           setCurrentPageRows(data);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error fetching redeem history:", err);
// // //       }
// // //     };

// // //     redeemHistoryRecords();
// // //   }, [location.search, location.key, user, authLoading, sort]);

// // //   useEffect(() => {
// // //     const handlePopState = () => {
// // //       setCurrentPage(getPageFromURL());
// // //     };
// // //     window.addEventListener("popstate", handlePopState);
// // //     return () => window.removeEventListener("popstate", handlePopState);
// // //   }, []);

// // //   const headings = [
// // //     { label: "Redeemed Date", value: "approvedDate" },
// // //     { label: "Redeemed Points", value: "points" },
// // //     { label: "Status", value: "status" },
// // //   ];

// // //   const totalCount = currentPageRows?.pagination?.total || 0;
// // //   const itemsPerPage = 10;
// // //   const totalItems = totalCount;

// // //   const handlePageChange = (page) => {
// // //     setCurrentPage(page);
// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("page", page.toString());
// // //     setSearchParams(params);
// // //   };

// // //   const handlePaymentDetails = (
// // //     reqSentDate,
// // //     points,
// // //     reqApprovedDate,
// // //     paymentMethod,
// // //     paymentDate,
// // //     status
// // //   ) => {
// // //     dispatch(
// // //       updateModalType({
// // //         type: ModalType.PAYMENT_DETAILS,
// // //         data: {
// // //           reqSentDate,
// // //           points,
// // //           reqApprovedDate,
// // //           paymentMethod,
// // //           paymentDate,
// // //           status,
// // //           onShare: handleShare,
// // //         },
// // //       })
// // //     );
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

// // //   return {
// // //     currentPageRows,
// // //     totalItems,
// // //     totalCount,
// // //     loading,
// // //     itemsPerPage,
// // //     handlePageChange,
// // //     currentPage,
// // //     headings,
// // //     redeemHistory,
// // //     sort,
// // //     filter,
// // //     handlePaymentDetails,
// // //     hanldeSortChange,
// // //   };
// // // };






















// // // import { ModalType } from "../../types/ui";
// // // import { useState, useEffect } from "react";
// // // import { getPageFromURL } from "../../utils/utility";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { updateModalType } from "../../api/slices/globalSlice/global";
// // // import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
// // // import { useLocation, useSearchParams } from "react-router-dom";
// // // import { FiltersDefaultValues } from "../../utils/static";

// // // export const useRedeemHistory = () => {
// // //   const dispatch = useDispatch();
// // //   const location = useLocation();
// // //   const [currentPageRows, setCurrentPageRows] = useState([]);
// // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // //   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
// // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // //   const [filter, setFilter] = useState({
// // //     sort: FiltersDefaultValues.None,
// // //   });
// // //   const { redeemHistory, loading } = useSelector(
// // //     (state) => state.redeemHistory
// // //   );

// // //   const sort = searchParams.get("sort");
// // //   const page = searchParams.get("page");

// // //   // Detect screen size changes for responsive pagination
// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       setIsSmallScreen(window.innerWidth < 768);
// // //     };

// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   const handleShare = () => {
// // //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// // //   };

// // //   // Format status for display - handles real-time API responses
// // //   const formatStatus = (status) => {
// // //     if (!status) return { label: "Pending", color: "bg-yellow-100 text-yellow-800" };

// // //     const statusMap = {
// // //       pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
// // //       approved: { label: "Approved", color: "bg-green-100 text-green-800" },
// // //       rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
// // //       completed: { label: "Completed", color: "bg-blue-100 text-blue-800" },
// // //       processing: { label: "Processing", color: "bg-purple-100 text-purple-800" },
// // //       paid: { label: "Paid", color: "bg-green-100 text-green-800" },
// // //       failed: { label: "Failed", color: "bg-red-100 text-red-800" },
// // //       success: { label: "Success", color: "bg-green-100 text-green-800" },
// // //     };

// // //     const normalizedStatus = String(status).toLowerCase().trim();
// // //     return statusMap[normalizedStatus] || {
// // //       label: String(status).charAt(0).toUpperCase() + String(status).slice(1),
// // //       color: "bg-gray-100 text-gray-800",
// // //     };
// // //   };

// // //   // Format date for display
// // //   const formatDate = (date) => {
// // //     if (!date) return "N/A";
// // //     try {
// // //       return new Date(date).toLocaleDateString("en-US", {
// // //         year: "numeric",
// // //         month: "short",
// // //         day: "numeric",
// // //       });
// // //     } catch (error) {
// // //       console.error("Error formatting date:", error);
// // //       return "N/A";
// // //     }
// // //   };

// // //   // Format points with locale
// // //   const formatPoints = (points) => {
// // //     if (!points && points !== 0) return "0";
// // //     return Number(points).toLocaleString();
// // //   };

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

// // //     const redeemHistoryRecords = async () => {
// // //       const uid = user?.user?.id;
// // //       if (!uid) return;

// // //       // Determine items per page based on screen size
// // //       const itemsPerPageByScreen = isSmallScreen ? 5 : 10;

// // //       const filteredData = {
// // //         uid: uid,
// // //         page: (Number(parsedPage) || resetPage) ?? currentPage,
// // //         size: itemsPerPageByScreen,
// // //         sort: "createdAt",
// // //         order: "desc",
// // //       };

// // //       if (sort && sort !== "None" && sort !== "createdAt") {
// // //         filteredData.sort = sort;
// // //       }

// // //       try {
// // //         const response = await dispatch(
// // //           readRedeemHistory({ params: filteredData })
// // //         );
// // //         if (response?.payload) {
// // //           const data = response?.payload;

// // //           // Transform data to include formatted values for UI
// // //           const transformedData = (data?.data || []).map((item) => ({
// // //             ...item,
// // //             // Ensure status is always current from API
// // //             status: item.status || item.paymentStatus || "pending",
// // //             // Pre-format data for UI consumption
// // //             formattedDate: formatDate(item.approvedDate || item.createdAt),
// // //             formattedPoints: formatPoints(item.points),
// // //             statusDisplay: formatStatus(item.status || item.paymentStatus || "pending"),
// // //           }));

// // //           setCurrentPageRows(transformedData);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error fetching redeem history:", err);
// // //       }
// // //     };

// // //     redeemHistoryRecords();
// // //   }, [location.search, location.key, user, authLoading, sort, isSmallScreen, dispatch, currentPage]);

// // //   useEffect(() => {
// // //     const handlePopState = () => {
// // //       setCurrentPage(getPageFromURL());
// // //     };
// // //     window.addEventListener("popstate", handlePopState);
// // //     return () => window.removeEventListener("popstate", handlePopState);
// // //   }, []);

// // //   const headings = [
// // //     { label: "Redeemed Date", value: "approvedDate" },
// // //     { label: "Redeemed Points", value: "points" },
// // //     { label: "Status", value: "status" },
// // //   ];

// // //   // Get total count from API response or array length
// // //   const totalCount = redeemHistory?.pagination?.total || currentPageRows?.length || 0;
  
// // //   const itemsPerPage = isSmallScreen ? 5 : 10;
// // //   const totalItems = totalCount;
// // //   const totalPages = Math.ceil(totalCount / itemsPerPage);

// // //   const handlePageChange = (page) => {
// // //     // Validate page number
// // //     if (page < 1 || page > totalPages) return;

// // //     setCurrentPage(page);
// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("page", page.toString());
// // //     setSearchParams(params);

// // //     // Scroll to top on page change for better UX on small screens
// // //     if (isSmallScreen) {
// // //       setTimeout(() => {
// // //         window.scrollTo({ top: 0, behavior: "smooth" });
// // //       }, 100);
// // //     }
// // //   };

// // //   const handlePaymentDetails = (
// // //     reqSentDate,
// // //     points,
// // //     reqApprovedDate,
// // //     paymentMethod,
// // //     paymentDate,
// // //     status
// // //   ) => {
// // //     dispatch(
// // //       updateModalType({
// // //         type: ModalType.PAYMENT_DETAILS,
// // //         data: {
// // //           reqSentDate,
// // //           points,
// // //           reqApprovedDate,
// // //           paymentMethod,
// // //           paymentDate,
// // //           status: status || "pending",
// // //           statusDisplay: formatStatus(status),
// // //           onShare: handleShare,
// // //         },
// // //       })
// // //     );
// // //   };

// // //   const handleSortChange = (value) => {
// // //     const params = new URLSearchParams(window.location.search);

// // //     if (value === "None" || value === "createdAt") {
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

// // //   // Get visible page numbers for pagination
// // //   const getVisiblePageNumbers = () => {
// // //     const maxVisiblePages = isSmallScreen ? 3 : 5;
// // //     const pages = [];

// // //     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
// // //     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

// // //     if (endPage - startPage + 1 < maxVisiblePages) {
// // //       startPage = Math.max(1, endPage - maxVisiblePages + 1);
// // //     }

// // //     for (let i = startPage; i <= endPage; i++) {
// // //       pages.push(i);
// // //     }

// // //     return pages;
// // //   };

// // //   return {
// // //     // Original exports (compatible with your component)
// // //     currentPageRows,
// // //     redeemHistory: currentPageRows, // Return formatted data for tables
// // //     totalItems,
// // //     totalCount,
// // //     loading,
// // //     itemsPerPage,
// // //     handlePageChange,
// // //     currentPage,
// // //     headings,
// // //     sort,
// // //     filter,
// // //     handlePaymentDetails,
// // //     handleSortChange,
    
// // //     // New exports for small screen support
// // //     isSmallScreen,
// // //     totalPages,
// // //     getVisiblePageNumbers,
// // //     formatStatus,
// // //     formatDate,
// // //     formatPoints,
// // //   };
// // // };





// // import { ModalType } from "../../types/ui";
// // import { useState, useEffect } from "react";
// // import { getPageFromURL } from "../../utils/utility";
// // import { useDispatch, useSelector } from "react-redux";
// // import { updateModalType } from "../../api/slices/globalSlice/global";
// // import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
// // import { useLocation, useSearchParams } from "react-router-dom";
// // import { FiltersDefaultValues } from "../../utils/static";

// // export const useRedeemHistory = () => {
// //   const dispatch = useDispatch();
// //   const location = useLocation();
// //   const [currentPageRows, setCurrentPageRows] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// //   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
// //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// //   const [filter, setFilter] = useState({
// //     sort: FiltersDefaultValues.None,
// //   });
// //   const { redeemHistory, loading } = useSelector(
// //     (state) => state.redeemHistory
// //   );

// //   const sort = searchParams.get("sort");
// //   const page = searchParams.get("page");

// //   // Detect screen size changes for responsive pagination
// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsSmallScreen(window.innerWidth < 768);
// //     };

// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const handleShare = () => {
// //     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
// //   };

// //   // Format status for display - handles real-time API responses
// //   const formatStatus = (status) => {
// //     if (!status) return { label: "Pending", color: "bg-yellow-100 text-yellow-800" };

// //     const statusMap = {
// //       pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
// //       approved: { label: "Approved", color: "bg-green-100 text-green-800" },
// //       rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
// //       completed: { label: "Completed", color: "bg-blue-100 text-blue-800" },
// //       processing: { label: "Processing", color: "bg-purple-100 text-purple-800" },
// //       paid: { label: "Paid", color: "bg-green-100 text-green-800" },
// //       failed: { label: "Failed", color: "bg-red-100 text-red-800" },
// //       success: { label: "Success", color: "bg-green-100 text-green-800" },
// //     };

// //     const normalizedStatus = String(status).toLowerCase().trim();
// //     return statusMap[normalizedStatus] || {
// //       label: String(status).charAt(0).toUpperCase() + String(status).slice(1),
// //       color: "bg-gray-100 text-gray-800",
// //     };
// //   };

// //   // Format date for display
// //   const formatDate = (date) => {
// //     if (!date) return "N/A";
// //     try {
// //       return new Date(date).toLocaleDateString("en-US", {
// //         year: "numeric",
// //         month: "short",
// //         day: "numeric",
// //       });
// //     } catch (error) {
// //       console.error("Error formatting date:", error);
// //       return "N/A";
// //     }
// //   };

// //   // Format points with locale
// //   const formatPoints = (points) => {
// //     if (!points && points !== 0) return "0";
// //     return Number(points).toLocaleString();
// //   };

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

// //     const redeemHistoryRecords = async () => {
// //       const uid = user?.user?.id;
// //       if (!uid) return;

// //       // Determine items per page based on screen size
// //       const itemsPerPageByScreen = isSmallScreen ? 5 : 10;

// //       const filteredData = {
// //         uid: uid,
// //         page: (Number(parsedPage) || resetPage) ?? currentPage,
// //         size: itemsPerPageByScreen,
// //         sort: "createdAt",
// //         order: "desc",
// //       };

// //       if (sort && sort !== "None" && sort !== "createdAt") {
// //         filteredData.sort = sort;
// //       }

// //       try {
// //         const response = await dispatch(
// //           readRedeemHistory({ params: filteredData })
// //         );
// //         if (response?.payload) {
// //           const data = response?.payload;

// //           // Transform data to include formatted values for UI
// //           const transformedData = (data?.data || []).map((item) => ({
// //             ...item,
// //             // Ensure status is always current from API
// //             status: item.status || item.paymentStatus || "pending",
// //             // Pre-format data for UI consumption
// //             formattedDate: formatDate(item.approvedDate || item.createdAt),
// //             formattedPoints: formatPoints(item.points),
// //             statusDisplay: formatStatus(item.status || item.paymentStatus || "pending"),
// //           }));

// //           setCurrentPageRows(transformedData);
// //         }
// //       } catch (err) {
// //         console.error("Error fetching redeem history:", err);
// //       }
// //     };

// //     redeemHistoryRecords();
// //   }, [location.search, location.key, user, authLoading, sort, isSmallScreen, dispatch, currentPage]);

// //   useEffect(() => {
// //     const handlePopState = () => {
// //       setCurrentPage(getPageFromURL());
// //     };
// //     window.addEventListener("popstate", handlePopState);
// //     return () => window.removeEventListener("popstate", handlePopState);
// //   }, []);

// //   const headings = [
// //     { label: "Created Date", value: "createdAt" },
// //     { label: "Points", value: "points" },
// //     { label: "Chat", value: "chat" },
// //     { label: "Status", value: "status" },
// //   ];

// //   // Get total count from API response or array length
// //   const totalCount = redeemHistory?.pagination?.total || currentPageRows?.length || 0;
  
// //   const itemsPerPage = isSmallScreen ? 5 : 10;
// //   const totalItems = totalCount;
// //   const totalPages = Math.ceil(totalCount / itemsPerPage);

// //   const handlePageChange = (page) => {
// //     // Validate page number
// //     if (page < 1 || page > totalPages) return;

// //     setCurrentPage(page);
// //     const params = new URLSearchParams(window.location.search);
// //     params.set("page", page.toString());
// //     setSearchParams(params);

// //     // Scroll to top on page change for better UX on small screens
// //     if (isSmallScreen) {
// //       setTimeout(() => {
// //         window.scrollTo({ top: 0, behavior: "smooth" });
// //       }, 100);
// //     }
// //   };

// //   const handlePaymentDetails = (
// //     reqSentDate,
// //     points,
// //     reqApprovedDate,
// //     paymentMethod,
// //     paymentDate,
// //     status
// //   ) => {
// //     dispatch(
// //       updateModalType({
// //         type: ModalType.PAYMENT_DETAILS,
// //         data: {
// //           reqSentDate,
// //           points,
// //           reqApprovedDate,
// //           paymentMethod,
// //           paymentDate,
// //           status: status || "pending",
// //           statusDisplay: formatStatus(status),
// //           onShare: handleShare,
// //         },
// //       })
// //     );
// //   };

// //   const handleSortChange = (value) => {
// //     const params = new URLSearchParams(window.location.search);

// //     if (value === "None" || value === "createdAt") {
// //       params.delete("sort");
// //     } else {
// //       params.set("sort", value);
// //     }

// //     params.set("page", "1");
// //     setSearchParams(params);
// //     setCurrentPage(1);

// //     setFilter((prev) => {
// //       const updatedFilter = { ...prev, sort: value };
// //       return updatedFilter;
// //     });
// //   };

// //   // Get visible page numbers for pagination
// //   const getVisiblePageNumbers = () => {
// //     const maxVisiblePages = isSmallScreen ? 3 : 5;
// //     const pages = [];

// //     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
// //     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

// //     if (endPage - startPage + 1 < maxVisiblePages) {
// //       startPage = Math.max(1, endPage - maxVisiblePages + 1);
// //     }

// //     for (let i = startPage; i <= endPage; i++) {
// //       pages.push(i);
// //     }

// //     return pages;
// //   };

// //   return {
// //     // Original exports (compatible with your component)
// //     currentPageRows,
// //     redeemHistory: currentPageRows, // Return formatted data for tables
// //     totalItems,
// //     totalCount,
// //     loading,
// //     itemsPerPage,
// //     handlePageChange,
// //     currentPage,
// //     headings,
// //     sort,
// //     filter,
// //     handlePaymentDetails,
// //     handleSortChange,
    
// //     // New exports for small screen support
// //     isSmallScreen,
// //     totalPages,
// //     getVisiblePageNumbers,
// //     formatStatus,
// //     formatDate,
// //     formatPoints,
// //   };
// // };








// import { ModalType } from "../../types/ui";
// import { useState, useEffect } from "react";
// import { getPageFromURL } from "../../utils/utility";
// import { useDispatch, useSelector } from "react-redux";
// import { updateModalType } from "../../api/slices/globalSlice/global";
// import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { FiltersDefaultValues } from "../../utils/static";

// export const useRedeemHistory = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const [currentPageRows, setCurrentPageRows] = useState([]);
//   const [currentPage, setCurrentPage] = useState(getPageFromURL());
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const [searchParams, setSearchParams] = useSearchParams(location.search);
//   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });
//   const { redeemHistory, loading } = useSelector((state) => state.redeemHistory);

//   const sort = searchParams.get("sort");
//   const page = searchParams.get("page");

//   useEffect(() => {
//     const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleShare = () => {
//     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
//   };

//   const formatStatus = (status) => {
//     if (!status) return { label: "Pending", color: "bg-yellow-100 text-yellow-800" };

//     const statusMap = {
//       pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
//       approved: { label: "Approved", color: "bg-green-100 text-green-800" },
//       rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
//       completed: { label: "Completed", color: "bg-blue-100 text-blue-800" },
//       processing: { label: "Processing", color: "bg-purple-100 text-purple-800" },
//       paid: { label: "Paid", color: "bg-green-100 text-green-800" },
//       failed: { label: "Failed", color: "bg-red-100 text-red-800" },
//       success: { label: "Success", color: "bg-green-100 text-green-800" },
//       successful: { label: "Successful", color: "bg-green-100 text-green-800" },
//     };

//     const normalizedStatus = String(status).toLowerCase().trim();
//     return statusMap[normalizedStatus] || {
//       label: String(status).charAt(0).toUpperCase() + String(status).slice(1),
//       color: "bg-gray-100 text-gray-800",
//     };
//   };

//   const formatDate = (date) => {
//     if (!date) return "N/A";
//     try {
//       return new Date(date).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       });
//     } catch (error) {
//       return "N/A";
//     }
//   };

//   const formatPoints = (points) => {
//     if (!points && points !== 0) return "0";
//     return Number(points).toLocaleString();
//   };

//   useEffect(() => {
//     if (authLoading) return;

//     const parsedPage = parseInt(page, 10);
//     const resolvedPage = !isNaN(parsedPage) ? parsedPage : 1;
//     setCurrentPage((prev) => (prev !== resolvedPage ? resolvedPage : prev));

//     // ✅ FIXED: user.id — authSlice stores state.user = payload.data directly
//     const uid = user?.id;
//     if (!uid) return;

//     const itemsPerPageByScreen = isSmallScreen ? 5 : 10;

//     const filteredData = {
//       uid,
//       page: resolvedPage,
//       size: itemsPerPageByScreen,
//       sort: (sort && sort !== "None" && sort !== "createdAt") ? sort : "createdAt",
//       order: "desc",
//     };

//     const fetchRedeemHistory = async () => {
//       try {
//         const response = await dispatch(readRedeemHistory({ params: filteredData }));
//         if (response?.payload) {
//           const data = response.payload;
//           const transformedData = (data?.data || []).map((item) => ({
//             ...item,
//             status: item.status || item.paymentStatus || "pending",
//             formattedDate: formatDate(item.approvedDate || item.createdAt),
//             formattedPoints: formatPoints(item.points),
//             statusDisplay: formatStatus(item.status || item.paymentStatus || "pending"),
//           }));
//           setCurrentPageRows(transformedData);
//         }
//       } catch (err) {
//         console.error("Error fetching redeem history:", err);
//       }
//     };

//     fetchRedeemHistory();

//     // ✅ FIXED: removed currentPage from deps to prevent infinite loop
//   }, [location.search, location.key, user, authLoading, sort, isSmallScreen, dispatch]);

//   useEffect(() => {
//     const handlePopState = () => setCurrentPage(getPageFromURL());
//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   const headings = [
//     { label: "Created Date", value: "createdAt" },
//     { label: "Points", value: "points" },
//     { label: "Chat", value: "chat" },
//     { label: "Status", value: "status" },
//   ];

//   const totalCount = redeemHistory?.pagination?.total || currentPageRows?.length || 0;
//   const itemsPerPage = isSmallScreen ? 5 : 10;
//   const totalItems = totalCount;
//   const totalPages = Math.ceil(totalCount / itemsPerPage);

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//     const params = new URLSearchParams(window.location.search);
//     params.set("page", page.toString());
//     setSearchParams(params);
//     if (isSmallScreen) {
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     }
//   };

//   const handlePaymentDetails = (reqSentDate, points, reqApprovedDate, paymentMethod, paymentDate, status) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.PAYMENT_DETAILS,
//         data: {
//           reqSentDate,
//           points,
//           reqApprovedDate,
//           paymentMethod,
//           paymentDate,
//           status: status || "pending",
//           statusDisplay: formatStatus(status),
//           onShare: handleShare,
//         },
//       })
//     );
//   };

//   const handleSortChange = (value) => {
//     const params = new URLSearchParams(window.location.search);
//     if (value === "None" || value === "createdAt") {
//       params.delete("sort");
//     } else {
//       params.set("sort", value);
//     }
//     params.set("page", "1");
//     setSearchParams(params);
//     setCurrentPage(1);
//     setFilter((prev) => ({ ...prev, sort: value }));
//   };

//   const getVisiblePageNumbers = () => {
//     const maxVisiblePages = isSmallScreen ? 3 : 5;
//     const pages = [];
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
//     if (endPage - startPage + 1 < maxVisiblePages) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }
//     for (let i = startPage; i <= endPage; i++) pages.push(i);
//     return pages;
//   };

//   return {
//     currentPageRows,
//     redeemHistory: currentPageRows,
//     totalItems,
//     totalCount,
//     loading,
//     itemsPerPage,
//     handlePageChange,
//     currentPage,
//     headings,
//     sort,
//     filter,
//     handlePaymentDetails,
//     handleSortChange,
//     isSmallScreen,
//     totalPages,
//     getVisiblePageNumbers,
//     formatStatus,
//     formatDate,
//     formatPoints,
//   };
// };




// import { ModalType } from "../../types/ui";
// import { useState, useEffect } from "react";
// import { getPageFromURL } from "../../utils/utility";
// import { useDispatch, useSelector } from "react-redux";
// import { updateModalType } from "../../api/slices/globalSlice/global";
// import { readRedeemHistory, updateRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { FiltersDefaultValues } from "../../utils/static";

// export const useRedeemHistory = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const [currentPageRows, setCurrentPageRows] = useState([]);
//   const [currentPage, setCurrentPage] = useState(getPageFromURL());
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const [searchParams, setSearchParams] = useSearchParams(location.search);
//   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });
//   const { redeemHistory, loading } = useSelector((state) => state.redeemHistory);

//   const sort = searchParams.get("sort");
//   const page = searchParams.get("page");

//   useEffect(() => {
//     const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);




//   const handleShare = () => {
//     dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
//   };

//   const formatStatus = (status) => {
//     if (!status) return { label: "Pending", color: "bg-yellow-100 text-yellow-800" };

//     const statusMap = {
//       pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
//       approved: { label: "Approved", color: "bg-green-100 text-green-800" },
//       rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
//       completed: { label: "Completed", color: "bg-blue-100 text-blue-800" },
//       processing: { label: "Processing", color: "bg-purple-100 text-purple-800" },
//       inprogress: { label: "In Progress", color: "bg-orange-100 text-orange-800" },
//       inProgress: { label: "In Progress", color: "bg-orange-100 text-orange-800" },
//       paid: { label: "Paid", color: "bg-green-100 text-green-800" },
//       failed: { label: "Failed", color: "bg-red-100 text-red-800" },
//       success: { label: "Success", color: "bg-green-100 text-green-800" },
//       successful: { label: "Successful", color: "bg-green-100 text-green-800" },
//     };

//     const normalizedStatus = String(status).toLowerCase().trim();
//     return statusMap[normalizedStatus] || statusMap[status] || {
//       label: String(status).charAt(0).toUpperCase() + String(status).slice(1),
//       color: "bg-gray-100 text-gray-800",
//     };
//   };

//   const formatDate = (date) => {
//     if (!date) return "N/A";
//     try {
//       return new Date(date).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       });
//     } catch (error) {
//       return "N/A";
//     }
//   };

//   const formatPoints = (points) => {
//     if (!points && points !== 0) return "0";
//     return Number(points).toLocaleString();
//   };

//   useEffect(() => {
//     if (authLoading) return;

//     const parsedPage = parseInt(page, 10);
//     const resolvedPage = !isNaN(parsedPage) ? parsedPage : 1;
//     setCurrentPage((prev) => (prev !== resolvedPage ? resolvedPage : prev));

//     const uid = user?.id;
//     if (!uid) return;

//     const itemsPerPageByScreen = isSmallScreen ? 5 : 10;

//     const filteredData = {
//       uid,
//       page: resolvedPage,
//       size: itemsPerPageByScreen,
//       sort: (sort && sort !== "None" && sort !== "createdAt") ? sort : "createdAt",
//       order: "desc",
//     };

//     const fetchRedeemHistory = async () => {
//       try {
//         const response = await dispatch(readRedeemHistory({ params: filteredData }));
//         if (response?.payload) {
//           const data = response.payload;
//           const transformedData = (data?.data || []).map((item) => ({
//             ...item,
//             status: item.status || item.paymentStatus || "pending",
//             formattedDate: formatDate(item.approvedDate || item.createdAt),
//             formattedPoints: formatPoints(item.points),
//             statusDisplay: formatStatus(item.status || item.paymentStatus || "pending"),
//           }));
//           setCurrentPageRows(transformedData);
//         }
//       } catch (err) {
//         console.error("Error fetching redeem history:", err);
//       }
//     };

//     fetchRedeemHistory();
//   }, [location.search, location.key, user, authLoading, sort, isSmallScreen, dispatch]);

//   useEffect(() => {
//     const handlePopState = () => setCurrentPage(getPageFromURL());
//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   // ✅ Update redeem history status
//   // POST https://referralapis.appistan.co/api/referrals/redeem/history/update
//   // Body: { id, status }
//   const handleUpdateStatus = async (id, status) => {
//     try {
//       const response = await dispatch(
//         updateRedeemHistory({
//           data: { id, status },
//         })
//       );

//       if (response?.payload?.success) {
//         // ✅ Update the row locally so UI reflects new status immediately
//         setCurrentPageRows((prev) =>
//           prev.map((row) =>
//             row.id === id
//               ? {
//                   ...row,
//                   status,
//                   statusDisplay: formatStatus(status),
//                 }
//               : row
//           )
//         );
//         return response.payload.data;
//       } else {
//         console.error("Update failed:", response?.payload?.message);
//         return null;
//       }
//     } catch (err) {
//       console.error("Error updating redeem status:", err);
//       return null;
//     }
//   };

//   const headings = [
//     { label: "Created Date", value: "createdAt" },
//     { label: "Points", value: "points" },
//     { label: "Chat", value: "chat" },
//     { label: "Status", value: "status" },
//   ];

//   const totalCount = redeemHistory?.pagination?.total || currentPageRows?.length || 0;
//   const itemsPerPage = isSmallScreen ? 5 : 10;
//   const totalItems = totalCount;
//   const totalPages = Math.ceil(totalCount / itemsPerPage);

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//     const params = new URLSearchParams(window.location.search);
//     params.set("page", page.toString());
//     setSearchParams(params);
//     if (isSmallScreen) {
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     }
//   };

//   const handlePaymentDetails = (reqSentDate, points, reqApprovedDate, paymentMethod, paymentDate, status) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.PAYMENT_DETAILS,
//         data: {
//           reqSentDate,
//           points,
//           reqApprovedDate,
//           paymentMethod,
//           paymentDate,
//           status: status || "pending",
//           statusDisplay: formatStatus(status),
//           onShare: handleShare,
//         },
//       })
//     );
//   };

//   const handleSortChange = (value) => {
//     const params = new URLSearchParams(window.location.search);
//     if (value === "None" || value === "createdAt") {
//       params.delete("sort");
//     } else {
//       params.set("sort", value);
//     }
//     params.set("page", "1");
//     setSearchParams(params);
//     setCurrentPage(1);
//     setFilter((prev) => ({ ...prev, sort: value }));
//   };

//   const getVisiblePageNumbers = () => {
//     const maxVisiblePages = isSmallScreen ? 3 : 5;
//     const pages = [];
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
//     if (endPage - startPage + 1 < maxVisiblePages) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }
//     for (let i = startPage; i <= endPage; i++) pages.push(i);
//     return pages;
//   };

//   return {
//     currentPageRows,
//     redeemHistory: currentPageRows,
//     totalItems,
//     totalCount,
//     loading,
//     itemsPerPage,
//     handlePageChange,
//     currentPage,
//     headings,
//     sort,
//     filter,
//     handlePaymentDetails,
//     handleSortChange,
//     handleUpdateStatus,  // ✅ expose so table/card components can call it
//     isSmallScreen,
//     totalPages,
//     getVisiblePageNumbers,
//     formatStatus,
//     formatDate,
//     formatPoints,
//   };
// };




////remove




import { ModalType } from "../../types/ui";
import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { readRedeemHistory, updateRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
import { useLocation, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";

export const useRedeemHistory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });
  const { loading } = useSelector((state) => state.redeemHistory);

  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  const itemsPerPage = 10;

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShare = () => {
    dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
  };

  const formatStatus = (status) => {
    if (!status) return { label: "Pending", color: "bg-yellow-100 text-yellow-800" };

    const statusMap = {
      pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
      approved: { label: "Approved", color: "bg-green-100 text-green-800" },
      rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
      completed: { label: "Completed", color: "bg-blue-100 text-blue-800" },
      processing: { label: "Processing", color: "bg-purple-100 text-purple-800" },
      inprogress: { label: "In Progress", color: "bg-orange-100 text-orange-800" },
      inProgress: { label: "In Progress", color: "bg-orange-100 text-orange-800" },
      paid: { label: "Paid", color: "bg-green-100 text-green-800" },
      failed: { label: "Failed", color: "bg-red-100 text-red-800" },
      success: { label: "Success", color: "bg-green-100 text-green-800" },
      successful: { label: "Successful", color: "bg-green-100 text-green-800" },
    };

    const normalizedStatus = String(status).toLowerCase().trim();
    return statusMap[normalizedStatus] || statusMap[status] || {
      label: String(status).charAt(0).toUpperCase() + String(status).slice(1),
      color: "bg-gray-100 text-gray-800",
    };
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    try {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return "N/A";
    }
  };

  const formatPoints = (points) => {
    if (!points && points !== 0) return "0";
    return Number(points).toLocaleString();
  };

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
      size: itemsPerPage,
      sort: (sort && sort !== "None" && sort !== "createdAt") ? sort : "createdAt",
      order: "desc",
    };

    const fetchRedeemHistory = async () => {
      try {
        const response = await dispatch(readRedeemHistory({ params: filteredData }));

        if (response?.payload) {
          const data = response.payload;

          // ✅ Extract total count from all possible API response shapes
          const apiTotal =
            data?.pagination?.total ||
            data?.pagination?.totalItems ||
            data?.pagination?.count ||
            data?.total ||
            data?.totalCount ||
            data?.count ||
            data?.meta?.total ||
            data?.meta?.totalCount ||
            0;

          setTotalCount(apiTotal);

          const transformedData = (data?.data || []).map((item) => ({
            ...item,
            status: item.status || item.paymentStatus || "pending",
            formattedDate: formatDate(item.approvedDate || item.createdAt),
            formattedPoints: formatPoints(item.points),
            statusDisplay: formatStatus(item.status || item.paymentStatus || "pending"),
          }));

          setCurrentPageRows(transformedData);
        }
      } catch (err) {
        console.error("Error fetching redeem history:", err);
      }
    };

    fetchRedeemHistory();
  }, [location.search, location.key, user, authLoading, sort, dispatch]);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromURL());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await dispatch(
        updateRedeemHistory({
          data: { id, status },
        })
      );

      if (response?.payload?.success) {
        setCurrentPageRows((prev) =>
          prev.map((row) =>
            row.id === id
              ? { ...row, status, statusDisplay: formatStatus(status) }
              : row
          )
        );
        return response.payload.data;
      } else {
        console.error("Update failed:", response?.payload?.message);
        return null;
      }
    } catch (err) {
      console.error("Error updating redeem status:", err);
      return null;
    }
  };

  const headings = [
    { label: "Created Date", value: "createdAt" },
    { label: "Points", value: "points" },
    { label: "Chat", value: "chat" },
    { label: "Status", value: "status" },
  ];

  const totalItems = totalCount;
  const totalPages = totalCount > 0 ? Math.ceil(totalCount / itemsPerPage) : 0;

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    setSearchParams(params);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const handlePaymentDetails = (reqSentDate, points, reqApprovedDate, paymentMethod, paymentDate, status) => {
    dispatch(
      updateModalType({
        type: ModalType.PAYMENT_DETAILS,
        data: {
          reqSentDate,
          points,
          reqApprovedDate,
          paymentMethod,
          paymentDate,
          status: status || "pending",
          statusDisplay: formatStatus(status),
          onShare: handleShare,
        },
      })
    );
  };

  const handleSortChange = (value) => {
    const params = new URLSearchParams(window.location.search);
    if (value === "None" || value === "createdAt") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    params.set("page", "1");
    setSearchParams(params);
    setCurrentPage(1);
    setFilter((prev) => ({ ...prev, sort: value }));
  };

  const getVisiblePageNumbers = () => {
    const maxVisiblePages = isSmallScreen ? 3 : 5;
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    return pages;
  };

  return {
    currentPageRows,
    redeemHistory: currentPageRows,
    totalItems,
    totalCount,
    loading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    sort,
    filter,
    handlePaymentDetails,
    handleSortChange,
    handleUpdateStatus,
    isSmallScreen,
    totalPages,
    getVisiblePageNumbers,
    formatStatus,
    formatDate,
    formatPoints,
  };
};