// // // // // // import { useState, useEffect } from "react";
// // // // // // import { getPageFromURL } from "../../utils/utility";
// // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
// // // // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // // // import { FiltersDefaultValues } from "../../utils/static";

// // // // // // export const useFreeUser = () => {
// // // // // //   const dispatch = useDispatch();
// // // // // //   const location = useLocation();
// // // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // // // // //   const [currentPageRows, setCurrentPageRows] = useState([]);
// // // // // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // // // // //   const { freeUser, loading } = useSelector((state) => state.freeUser);
// // // // // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // // // // //   const [filter, setFilter] = useState({
// // // // // //     sort: FiltersDefaultValues.None,
// // // // // //   });

// // // // // //   const page = searchParams.get("page");
// // // // // //   const sort = searchParams.get("sort");
// // // // // //   const status = currentPageRows?.data?.stats;

// // // // // //   const dummyData = [
// // // // // //     { title: "Total Users", points: status?.totalUsers },
// // // // // //     {
// // // // // //       title: "This Month",
// // // // // //       points: status?.thisMonthUsers,
// // // // // //     },
// // // // // //     { title: "This Week", points: status?.thisWeekUsers },
// // // // // //     { title: "Revenue", points: status?.revenue },
// // // // // //   ];

// // // // // //   const headings = [
// // // // // //     { label: "User details", value: "name" },
// // // // // //     { label: "Installed", value: "installedDate" },
// // // // // //     { label: "Status", value: "status" },
// // // // // //   ];

// // // // // //   const totalCount = currentPageRows?.pagination?.totalRecords;
// // // // // //   const itemsPerPage = 10;
// // // // // //   const totalItems = totalCount;

// // // // // //   useEffect(() => {
// // // // // //     if (authLoading) return;
// // // // // //     const parsedPage = parseInt(page, 10);

// // // // // //     let resetPage = null;
// // // // // //     if (!isNaN(parsedPage)) {
// // // // // //       setCurrentPage(parsedPage);
// // // // // //     } else {
// // // // // //       resetPage = 1;
// // // // // //       setCurrentPage(1);
// // // // // //     }

// // // // // //     const redeemHistoryRecords = async () => {
// // // // // //       const uid = user?.user?.id;
// // // // // //       if (!uid) return;

// // // // // //       if (sort !== undefined) {
// // // // // //         const filteredData = {
// // // // // //           uid: uid,
// // // // // //           page: (Number(parsedPage) || resetPage) ?? currentPage,
// // // // // //           size: 10,
// // // // // //         };

// // // // // //         if (sort) {
// // // // // //           filteredData.sort = sort;
// // // // // //         }

// // // // // //         try {
// // // // // //           const response = await dispatch(
// // // // // //             readFreeUserListing({ params: filteredData })
// // // // // //           );
// // // // // //           if (response?.payload) {
// // // // // //             const data = response?.payload;
// // // // // //             setCurrentPageRows(data);
// // // // // //           }
// // // // // //         } catch (err) {
// // // // // //           console.error("Error fetching monthly premium users:", err);
// // // // // //         }
// // // // // //       }
// // // // // //     };

// // // // // //     redeemHistoryRecords();
// // // // // //   }, [location.search, location.key, user, authLoading, sort]);

// // // // // //   useEffect(() => {
// // // // // //     const handlePopState = () => {
// // // // // //       setCurrentPage(getPageFromURL());
// // // // // //     };
// // // // // //     window.addEventListener("popstate", handlePopState);
// // // // // //     return () => window.removeEventListener("popstate", handlePopState);
// // // // // //   }, []);

// // // // // //   const handlePageChange = (page) => {
// // // // // //     setCurrentPage(page);

// // // // // //     const params = new URLSearchParams(window.location.search);
// // // // // //     params.set("page", page.toString());
// // // // // //     setSearchParams(params);
// // // // // //   };

// // // // // //   const hanldeSortChange = (value) => {
// // // // // //     const params = new URLSearchParams(window.location.search);

// // // // // //     if (value === "None") {
// // // // // //       params.delete("sort");
// // // // // //     } else {
// // // // // //       params.set("sort", value);
// // // // // //     }

// // // // // //     params.set("page", "1");
// // // // // //     setSearchParams(params);
// // // // // //     setCurrentPage(1);

// // // // // //     setFilter((prev) => {
// // // // // //       const updatedFilter = { ...prev, sort: value };
// // // // // //       return updatedFilter;
// // // // // //     });
// // // // // //   };

// // // // // //   return {
// // // // // //     dummyData,
// // // // // //     currentPageRows,
// // // // // //     totalItems,
// // // // // //     totalCount,
// // // // // //     loading,
// // // // // //     itemsPerPage,
// // // // // //     handlePageChange,
// // // // // //     currentPage,
// // // // // //     headings,
// // // // // //     freeUser,
// // // // // //     hanldeSortChange,
// // // // // //     sort,
// // // // // //     filter,
// // // // // //   };
// // // // // // };




// // // // // import { useState, useEffect } from "react";
// // // // // import { getPageFromURL } from "../../utils/utility";
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
// // // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // // import { FiltersDefaultValues } from "../../utils/static";

// // // // // export const useFreeUser = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const location = useLocation();
// // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // // // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // // // //   const [error, setError] = useState(null);
  
// // // // //   const { freeUser, loading } = useSelector((state) => state.freeUser);
  
// // // // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // // // //   const [filter, setFilter] = useState({
// // // // //     sort: FiltersDefaultValues.None,
// // // // //   });

// // // // //   const page = searchParams.get("page");
// // // // //   const sort = searchParams.get("sort");

// // // // //   // Extract data from Redux state
// // // // //   // Redux stores: { users: [...], stats: {...}, pagination: {...} }
// // // // //   const users = freeUser?.users || [];
// // // // //   const stats = freeUser?.stats || {};
// // // // //   const pagination = freeUser?.pagination || {};

// // // // //   // Prepare dummy data from stats
// // // // //   const dummyData = [
// // // // //     { title: "Total Users", points: pagination?.totalRecords || 0 },
// // // // //     { title: "This Month", points: stats?.thisMonthUsers || 0 },
// // // // //     { title: "This Week", points: stats?.thisWeekUsers || 0 },
// // // // //     { title: "Revenue", points: stats?.revenue || 0 },
// // // // //   ];

// // // // //   const headings = [
// // // // //     { label: "Name", value: "name" },
// // // // //     { label: "Phone", value: "phoneNo" },
// // // // //     { label: "Installed Date", value: "installedDate" },
// // // // //     { label: "Balance", value: "balance" },
// // // // //     { label: "Status", value: "type" },
// // // // //   ];

// // // // //   // Calculate pagination values from Redux
// // // // //   const totalCount = pagination?.totalRecords || 0;
// // // // //   const itemsPerPage = pagination?.pageSize || 10;
// // // // //   const totalPages = pagination?.totalPages || Math.ceil(totalCount / itemsPerPage) || 1;

// // // // //   // Transform users data
// // // // //   const currentPageRows = users && users.length > 0
// // // // //     ? users.map((user) => ({
// // // // //         id: user.id,
// // // // //         name: user.name || "",
// // // // //         phoneNo: user.phoneNo || "",
// // // // //         phoneCode: user.phoneCode || "",
// // // // //         installedDate: user.installedDate 
// // // // //           ? new Date(user.installedDate).toLocaleDateString() 
// // // // //           : "",
// // // // //         balance: user.balance || "0",
// // // // //         type: user.type || "",
// // // // //         image: user.image || "",
// // // // //         points: user.points || 0,
// // // // //         referredUid: user.referredUid || null,
// // // // //         createdAt: user.createdAt || "",
// // // // //         updatedAt: user.updatedAt || "",
// // // // //       }))
// // // // //     : [];

// // // // //   useEffect(() => {
// // // // //     // Don't run if auth is still loading or user is not available
// // // // //     if (authLoading || !user) {
// // // // //       console.log("Waiting for auth:", { authLoading, userAvailable: !!user });
// // // // //       return;
// // // // //     }

// // // // //     const parsedPage = parseInt(page, 10);

// // // // //     let resetPage = null;
// // // // //     if (!isNaN(parsedPage)) {
// // // // //       setCurrentPage(parsedPage);
// // // // //     } else {
// // // // //       resetPage = 1;
// // // // //       setCurrentPage(1);
// // // // //     }

// // // // //     const fetchFreeUsers = async () => {
// // // // //       // Get user ID - try different paths
// // // // //       const uid = user?.id || user?.user?.id || user?.userId;
      
// // // // //       if (!uid) {
// // // // //         console.error("User ID not found in auth state:", user);
// // // // //         setError("User information not available");
// // // // //         return;
// // // // //       }

// // // // //       console.log("Fetching free users for uid:", uid);

// // // // //       const filteredData = {
// // // // //         uid: uid,
// // // // //         page: Number(parsedPage) || resetPage || currentPage,
// // // // //         size: itemsPerPage,
// // // // //       };

// // // // //       // Add sort parameter if it exists and is not "None"
// // // // //       if (sort && sort !== "None" && sort !== undefined) {
// // // // //         filteredData.sort = sort;
// // // // //       }

// // // // //       try {
// // // // //         setError(null);
// // // // //         console.log("Dispatching readFreeUserListing with params:", filteredData);
        
// // // // //         const response = await dispatch(
// // // // //           readFreeUserListing({ params: filteredData })
// // // // //         );

// // // // //         if (response?.payload) {
// // // // //           console.log("Users fetched successfully:", response.payload);
// // // // //         } else if (response?.error) {
// // // // //           setError(response.error.message || "Failed to fetch users");
// // // // //           console.error("Failed to fetch users:", response.error);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching free users:", err);
// // // // //         setError(err.message);
// // // // //       }
// // // // //     };

// // // // //     fetchFreeUsers();
// // // // //   }, [location.search, location.key, user, authLoading, dispatch, sort, currentPage, itemsPerPage]);

// // // // //   useEffect(() => {
// // // // //     const handlePopState = () => {
// // // // //       setCurrentPage(getPageFromURL());
// // // // //     };
// // // // //     window.addEventListener("popstate", handlePopState);
// // // // //     return () => window.removeEventListener("popstate", handlePopState);
// // // // //   }, []);

// // // // //   const handlePageChange = (newPage) => {
// // // // //     // Validate page number
// // // // //     if (newPage < 1 || newPage > totalPages) {
// // // // //       return;
// // // // //     }

// // // // //     setCurrentPage(newPage);
// // // // //     const params = new URLSearchParams(window.location.search);
// // // // //     params.set("page", newPage.toString());
// // // // //     setSearchParams(params);
// // // // //   };

// // // // //   const handleSortChange = (value) => {
// // // // //     const params = new URLSearchParams(window.location.search);

// // // // //     if (value === "None" || value === FiltersDefaultValues.None) {
// // // // //       params.delete("sort");
// // // // //     } else {
// // // // //       params.set("sort", value);
// // // // //     }

// // // // //     params.set("page", "1");
// // // // //     setSearchParams(params);
// // // // //     setCurrentPage(1);

// // // // //     setFilter((prev) => ({
// // // // //       ...prev,
// // // // //       sort: value,
// // // // //     }));
// // // // //   };

// // // // //   return {
// // // // //     dummyData,
// // // // //     currentPageRows,              // Array of transformed users
// // // // //     totalItems: totalCount,
// // // // //     totalCount,
// // // // //     totalPages,
// // // // //     loading,
// // // // //     itemsPerPage,
// // // // //     handlePageChange,
// // // // //     currentPage,
// // // // //     headings,
// // // // //     freeUser,
// // // // //     handleSortChange,
// // // // //     sort,
// // // // //     filter,
// // // // //     error,
// // // // //   };
// // // // // };






// // // import { useState, useEffect } from "react";
// // // import { getPageFromURL } from "../../utils/utility";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
// // // import { useLocation, useSearchParams } from "react-router-dom";
// // // import { FiltersDefaultValues } from "../../utils/static";

// // // export const useFreeUser = () => {
// // //   const dispatch = useDispatch();
// // //   const location = useLocation();
// // //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// // //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// // //   const [error, setError] = useState(null);

// // //   const freeUserState = useSelector((state) => state?.freeUser);

// // //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// // //   const [filter, setFilter] = useState({
// // //     sort: FiltersDefaultValues.None,
// // //   });

// // //   const page = searchParams.get("page");
// // //   const sort = searchParams.get("sort");

// // //   // API response is stored in Redux as:
// // //   // freeUser.freeUser.users       → payload.data.freeUsers
// // //   // freeUser.freeUser.stats       → payload.data.stats
// // //   // freeUser.freeUser.pagination  → payload.pagination (perPage mapped to pageSize)
// // //   const freeUser   = freeUserState?.freeUser     || {};
// // //   const users      = freeUser?.users             || [];
// // //   const stats      = freeUser?.stats             || {};
// // //   const pagination = freeUser?.pagination        || {};
// // //   const loading    = freeUserState?.loading      || false;

// // //   // Summary cards
// // //   // stats fields: totalUsers, thisMonthUsers, thisWeekUsers, revenue
// // //   const dummyData = [
// // //     { title: "Total Users", points: stats?.totalUsers     || 0 },
// // //     { title: "This Month",  points: stats?.thisMonthUsers || 0 },
// // //     { title: "This Week",   points: stats?.thisWeekUsers  || 0 },
// // //     { title: "Revenue",     points: stats?.revenue        || 0 },
// // //   ];

// // //   const headings = [
// // //     { label: "Name",           value: "name" },
// // //     { label: "Phone",          value: "phoneNo" },
// // //     { label: "Installed Date", value: "installedDate" },
// // //     { label: "Balance",        value: "balance" },
// // //     { label: "Status",         value: "type" },
// // //   ];

// // //   // pagination fields: totalRecords, currentPage, totalPages, pageSize
// // //   const totalCount   = pagination?.totalRecords || 0;
// // //   const itemsPerPage = pagination?.pageSize     || 10;
// // //   const totalPages   = pagination?.totalPages   || Math.ceil(totalCount / itemsPerPage) || 1;

// // //   // Transform users array into the shape the table expects
// // //   // API fields: id, referredUid, points, name, image, type,
// // //   //             phoneCode, balance, phoneNo, installedDate,
// // //   //             createdAt, updatedAt, deletedAt, Subscriptions[]
// // //   const currentPageRows =
// // //     users && users.length > 0
// // //       ? users.map((user) => ({
// // //           id:            user.id,
// // //           name:          user.name          || "",
// // //           phoneNo:       user.phoneNo       || "",
// // //           phoneCode:     user.phoneCode     || "",
// // //           installedDate: user.installedDate || "",  // formatDate() in table handles the ISO string
// // //           balance:       user.balance       || "0",
// // //           type:          user.type          || "",
// // //           image:         user.image         || "",
// // //           points:        user.points        || 0,
// // //           referredUid:   user.referredUid   || null,
// // //           createdAt:     user.createdAt     || "",
// // //           updatedAt:     user.updatedAt     || "",
// // //         }))
// // //       : [];

// // //   useEffect(() => {
// // //     if (authLoading || !user) return;

// // //     const parsedPage = parseInt(page, 10);
// // //     let resetPage = null;

// // //     if (!isNaN(parsedPage)) {
// // //       setCurrentPage(parsedPage);
// // //     } else {
// // //       resetPage = 1;
// // //       setCurrentPage(1);
// // //     }

// // //     const fetchFreeUsers = async () => {
// // //       const uid = user?.id || user?.user?.id || user?.userId;

// // //       if (!uid) {
// // //         setError("User information not available");
// // //         return;
// // //       }

// // //       const filteredData = {
// // //         uid,
// // //         page: Number(parsedPage) || resetPage || currentPage,
// // //         size: itemsPerPage,
// // //       };

// // //       if (sort && sort !== "None") {
// // //         filteredData.sort = sort;
// // //       }

// // //       try {
// // //         setError(null);
// // //         const response = await dispatch(
// // //           readFreeUserListing({ params: filteredData })
// // //         );

// // //         if (response?.error) {
// // //           setError(response.error.message || "Failed to fetch users");
// // //         }
// // //       } catch (err) {
// // //         setError(err.message);
// // //       }
// // //     };

// // //     fetchFreeUsers();
// // //   }, [location.search, location.key, user, authLoading, sort]);

// // //   useEffect(() => {
// // //     const handlePopState = () => setCurrentPage(getPageFromURL());
// // //     window.addEventListener("popstate", handlePopState);
// // //     return () => window.removeEventListener("popstate", handlePopState);
// // //   }, []);

// // //   const handlePageChange = (newPage) => {
// // //     if (newPage < 1 || newPage > totalPages) return;
// // //     setCurrentPage(newPage);
// // //     const params = new URLSearchParams(window.location.search);
// // //     params.set("page", newPage.toString());
// // //     setSearchParams(params);
// // //   };

// // //   const handleSortChange = (value) => {
// // //     const params = new URLSearchParams(window.location.search);
// // //     if (value === "None" || value === FiltersDefaultValues.None) {
// // //       params.delete("sort");
// // //     } else {
// // //       params.set("sort", value);
// // //     }
// // //     params.set("page", "1");
// // //     setSearchParams(params);
// // //     setCurrentPage(1);
// // //     setFilter((prev) => ({ ...prev, sort: value }));
// // //   };

// // //   return {
// // //     dummyData,
// // //     currentPageRows,
// // //     totalItems: totalCount,
// // //     totalCount,
// // //     totalPages,
// // //     loading,
// // //     itemsPerPage,
// // //     handlePageChange,
// // //     currentPage,
// // //     headings,
// // //     freeUser: freeUserState,
// // //     handleSortChange,
// // //     sort,
// // //     filter,
// // //     error,
// // //   };
// // // };




// // import { useState, useEffect } from "react";
// // import { getPageFromURL } from "../../utils/utility";
// // import { useDispatch, useSelector } from "react-redux";
// // import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
// // import { useLocation, useSearchParams } from "react-router-dom";
// // import { FiltersDefaultValues } from "../../utils/static";

// // export const useFreeUser = () => {
// //   const dispatch = useDispatch();
// //   const location = useLocation();
// //   const { user, loading: authLoading } = useSelector((state) => state.auth);
// //   const [currentPage, setCurrentPage] = useState(getPageFromURL());
// //   const [error, setError] = useState(null);

// //   const freeUserState = useSelector((state) => state?.freeUser);

// //   const [searchParams, setSearchParams] = useSearchParams(location.search);
// //   const [filter, setFilter] = useState({
// //     sort: FiltersDefaultValues.None,
// //   });

// //   const page = searchParams.get("page");
// //   const sort = searchParams.get("sort");

// //   const freeUser   = freeUserState?.freeUser || {};
// //   const users      = freeUser?.users         || [];
// //   const stats      = freeUser?.stats         || {};
// //   const pagination = freeUser?.pagination    || {};
// //   const loading    = freeUserState?.loading  || false;

// //   // Summary cards
// //   const dummyData = [
// //     { title: "Total Users", points: stats?.totalUsers     || 0 },
// //     { title: "This Month",  points: stats?.thisMonthUsers || 0 },
// //     { title: "This Week",   points: stats?.thisWeekUsers  || 0 },
// //     { title: "Revenue",     points: stats?.revenue        || 0 },
// //   ];

// //   const headings = [
// //     { label: "Name",           value: "name" },
// //     { label: "Phone",          value: "phoneNo" },
// //     { label: "Installed Date", value: "installedDate" },
// //     { label: "Balance",        value: "balance" },
// //     { label: "Status",         value: "type" },
// //   ];

// //   const totalCount   = pagination?.totalRecords || 0;
// //   const itemsPerPage = pagination?.pageSize     || 10;
// //   const totalPages   = pagination?.totalPages   || Math.ceil(totalCount / itemsPerPage) || 1;

// //   // API returns type: "user" for all free users — display it as "free"
// //   const currentPageRows =
// //     users && users.length > 0
// //       ? users.map((u) => ({
// //           id:            u.id,
// //           name:          u.name          || "",
// //           phoneNo:       u.phoneNo       || "",
// //           phoneCode:     u.phoneCode     || "",
// //           installedDate: u.installedDate || "",
// //           balance:       u.balance       || "0",
// //           type:          "Free",
// //           image:         u.image         || "",
// //           points:        u.points        || 0,
// //           referredUid:   u.referredUid   || null,
// //           createdAt:     u.createdAt     || "",
// //           updatedAt:     u.updatedAt     || "",
// //         }))
// //       : [];

// //   useEffect(() => {
// //     if (authLoading || !user) return;

// //     const parsedPage = parseInt(page, 10);
// //     let resetPage = null;

// //     if (!isNaN(parsedPage)) {
// //       setCurrentPage(parsedPage);
// //     } else {
// //       resetPage = 1;
// //       setCurrentPage(1);
// //     }

// //     const fetchFreeUsers = async () => {
// //       const uid = user?.id || user?.id || user?.userId;

// //       if (!uid) {
// //         setError("User information not available");
// //         return;
// //       }

// //       const filteredData = {
// //         uid,
// //         page: Number(parsedPage) || resetPage || currentPage,
// //         size: itemsPerPage,
// //       };

// //       if (sort && sort !== "None") {
// //         filteredData.sort = sort;
// //       }

// //       try {
// //         setError(null);
// //         const response = await dispatch(
// //           readFreeUserListing({ params: filteredData })
// //         );

// //         if (response?.error) {
// //           setError(response.error.message || "Failed to fetch users");
// //         }
// //       } catch (err) {
// //         setError(err.message);
// //       }
// //     };

// //     fetchFreeUsers();
// //   }, [location.search, location.key, user, authLoading, sort]);

// //   useEffect(() => {
// //     const handlePopState = () => setCurrentPage(getPageFromURL());
// //     window.addEventListener("popstate", handlePopState);
// //     return () => window.removeEventListener("popstate", handlePopState);
// //   }, []);

// //   const handlePageChange = (newPage) => {
// //     if (newPage < 1 || newPage > totalPages) return;
// //     setCurrentPage(newPage);
// //     const params = new URLSearchParams(window.location.search);
// //     params.set("page", newPage.toString());
// //     setSearchParams(params);
// //   };

// //   const handleSortChange = (value) => {
// //     const params = new URLSearchParams(window.location.search);
// //     if (value === "None" || value === FiltersDefaultValues.None) {
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
// //     currentPageRows,
// //     totalItems: totalCount,
// //     totalCount,
// //     totalPages,
// //     loading,
// //     itemsPerPage,
// //     handlePageChange,
// //     currentPage,
// //     headings,
// //     freeUser: freeUserState,
// //     handleSortChange,
// //     sort,
// //     filter,
// //     error,
// //   };
// // };










// import { useState, useEffect } from "react";
// import { getPageFromURL } from "../../utils/utility";
// import { useDispatch, useSelector } from "react-redux";
// import { readFreeUserListing, readFreeUserCounts } from "../../api/slices/freeUserSlice/freeUser";
// import { useLocation, useSearchParams } from "react-router-dom";
// import { FiltersDefaultValues } from "../../utils/static";

// export const useFreeUser = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const [currentPage, setCurrentPage] = useState(getPageFromURL());
//   const [error, setError] = useState(null);

//   const freeUserState = useSelector((state) => state?.freeUser);

//   const [searchParams, setSearchParams] = useSearchParams(location.search);
//   const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

//   const page = searchParams.get("page");
//   const sort = searchParams.get("sort");

//   const freeUser   = freeUserState?.freeUser   || {};
//   const stats      = freeUser?.stats           || {};
//   const loading    = freeUserState?.loading    || false;

//   // Table rows from API 2 (POST /referrals/users/free/all)
//   // Response: { count, data: [{ id, name, email, createdAt, status }] }
//   const tableRows  = freeUserState?.allFreeUsers?.data       ?? [];
//   const totalCount = freeUserState?.allFreeUsers?.count      ?? 0;
//   const itemsPerPage = 10;
//   const totalPages   = Math.ceil(totalCount / itemsPerPage) || 1;

//   const headings = [
//     { label: "User Details", value: "name"      },
//     { label: "Email",        value: "email"     },
//     { label: "Joined",       value: "createdAt" },
//     { label: "Status",       value: "status"    },
//   ];

//   // Dashboard cards:
//   // Total Users → from API 2 count (matches table)
//   // This Month, This Week, Revenue → from API 1 stats
//   const dummyData = [
//     { title: "Total Users", points: totalCount            ?? 0 },
//     { title: "This Month",  points: stats?.thisMonthUsers ?? 0 },
//     { title: "This Week",   points: stats?.thisWeekUsers  ?? 0 },
//     { title: "Revenue",     points: stats?.revenue        ?? 0 },
//   ];

//   // ── API 2: POST /referrals/users/free/all ─────────────────────────────────
//   useEffect(() => {
//     if (authLoading || !user) return;

//     const parsedPage = parseInt(page, 10);
//     let resetPage = null;

//     if (!isNaN(parsedPage)) {
//       setCurrentPage(parsedPage);
//     } else {
//       resetPage = 1;
//       setCurrentPage(1);
//     }

//     const fetchFreeUsers = async () => {
//       const uid = user?.id;
//       if (!uid) {
//         setError("User information not available");
//         return;
//       }

//       const requestBody = {
//         uid,
//         page: Number(parsedPage) || resetPage || currentPage,
//         size: itemsPerPage,
//       };

//       if (sort && sort !== "None") requestBody.sort = sort;

//       try {
//         setError(null);
//         const response = await dispatch(readFreeUserListing({ data: requestBody }));
//         if (response?.error) {
//           setError(response.error.message || "Failed to fetch users");
//         }
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchFreeUsers();
//   }, [location.search, location.key, user, authLoading, sort]);

//   // ── API 1: GET /referrals/users/free ─────────────────────────────────────
//   // Used only for stats (thisMonth, thisWeek, revenue)
//   useEffect(() => {
//     if (authLoading || !user) return;
//     const uid = user?.id;
//     if (!uid) return;
//     dispatch(readFreeUserCounts({ params: { uid, page: 1, size: 10 } }));
//   }, [user, authLoading]);

//   useEffect(() => {
//     const handlePopState = () => setCurrentPage(getPageFromURL());
//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   const handlePageChange = (newPage) => {
//     if (newPage < 1 || newPage > totalPages) return;
//     setCurrentPage(newPage);
//     const params = new URLSearchParams(window.location.search);
//     params.set("page", newPage.toString());
//     setSearchParams(params);
//   };

//   const handleSortChange = (value) => {
//     const params = new URLSearchParams(window.location.search);
//     if (value === "None" || value === FiltersDefaultValues.None) {
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
//     totalItems: totalCount,
//     totalCount,
//     totalPages,
//     loading,
//     itemsPerPage,
//     handlePageChange,
//     currentPage,
//     headings,
//     handleSortChange,
//     sort,
//     filter,
//     error,
//   };
// };






import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
import { useLocation, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";

export const useFreeUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const [error, setError] = useState(null);

  const freeUserState = useSelector((state) => state?.freeUser);
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [filter, setFilter] = useState({ sort: FiltersDefaultValues.None });

  const page = searchParams.get("page");
  const sort = searchParams.get("sort");

  const loading    = freeUserState?.loading                    || false;
  const stats      = freeUserState?.freeUser?.stats            || {};
  const tableRows  = freeUserState?.freeUser?.users            ?? [];
  const pagination = freeUserState?.freeUser?.pagination       || {};
  const totalCount = pagination?.totalRecords                  ?? 0;
  const itemsPerPage = pagination?.pageSize                    ?? 10;
  const totalPages   = pagination?.totalPages                  ?? 1;

  const headings = [
    { label: "User Details", value: "name"      },
    { label: "Email",        value: "email"     },
    { label: "Joined",       value: "createdAt" },
    { label: "Status",       value: "status"    },
  ];

  // Total Users, This Month, This Week, Revenue all from GET API stats
  const dummyData = [
    { title: "Total Users", points: stats?.totalUsers     ?? 0 },
    { title: "This Month",  points: stats?.thisMonthUsers ?? 0 },
    { title: "This Week",   points: stats?.thisWeekUsers  ?? 0 },
    { title: "Revenue",     points: stats?.revenue        ?? 0 },
  ];

  // ── GET /referrals/users/free ─────────────────────────────────────────────
  useEffect(() => {
    if (authLoading || !user) return;

    const parsedPage = parseInt(page, 10);
    let resetPage = null;

    if (!isNaN(parsedPage)) {
      setCurrentPage(parsedPage);
    } else {
      resetPage = 1;
      setCurrentPage(1);
    }

    const fetchFreeUsers = async () => {
      const uid = user?.id;
      if (!uid) {
        setError("User information not available");
        return;
      }

      const params = {
        uid,
        page: Number(parsedPage) || resetPage || currentPage,
        size: itemsPerPage,
      };

      if (sort && sort !== "None") params.sort = sort;

      try {
        setError(null);
        const response = await dispatch(readFreeUserListing({ params }));
        if (response?.error) {
          setError(response.error.message || "Failed to fetch users");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFreeUsers();
  }, [location.search, location.key, user, authLoading, sort]);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromURL());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    setSearchParams(params);
  };

  const handleSortChange = (value) => {
    const params = new URLSearchParams(window.location.search);
    if (value === "None" || value === FiltersDefaultValues.None) {
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
    totalItems: totalCount,
    totalCount,
    totalPages,
    loading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    handleSortChange,
    sort,
    filter,
    error,
  };
};