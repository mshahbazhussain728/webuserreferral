// // // // // import { useEffect, useState } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { Header } from "../base-component/Header";
// // // // // import { SideBar } from "../base-component/Sidebar";
// // // // // import { MobileHeader } from "../base-component/mobile-header";
// // // // // import { useLocation } from "react-router-dom";
// // // // // import { getPageTitles } from "../utils/function";
// // // // // import { useGlobalUser } from "../utils/hooks";
// // // // // import { useDispatch, useSelector } from "react-redux";

// // // // // export const Layout = ({ children }) => {
// // // // //   const location = useLocation();
// // // // //   const dispatch = useDispatch();
// // // // //   const { user } = useSelector((state) => state.auth);
// // // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// // // // //   const [isDrawer, setIsDrawer] = useState(false);
// // // // //   const [isAboveMlg, setIsAboveMlg] = useState(
// // // // //     window.matchMedia("(min-width:1280px)").matches
// // // // //   );

// // // // //   const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

// // // // //   useEffect(() => {
// // // // //     if (user) useGlobalUser(user, dispatch);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const mediaQuery = window.matchMedia("(min-width:1280px)");
// // // // //     const handleMediaChange = (event) => setIsAboveMlg(event.matches);
// // // // //     mediaQuery.addEventListener("change", handleMediaChange);
// // // // //     return () => mediaQuery.removeEventListener("change", handleMediaChange);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (!isAboveMlg) {
// // // // //       setIsSidebarOpen(false);
// // // // //       setIsDrawer(false);
// // // // //     } else {
// // // // //       setIsSidebarOpen(true);
// // // // //     }
// // // // //   }, [isAboveMlg]);

// // // // //   const handleDrawer = () => setIsDrawer((prev) => !prev);

// // // // //   const handleClose = (e) => {
// // // // //     e.stopPropagation();
// // // // //     setIsDrawer(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">
// // // // //       <div
// // // // //         className={`fixed top-0 left-0 h-full hidden maxSize:block ${
// // // // //           isSidebarOpen && isAboveMlg ? "block" : "hidden"
// // // // //         }`}
// // // // //       >
// // // // //         <SideBar isDrawer={false} handleDrawer={handleDrawer} />
// // // // //       </div>

// // // // //       <div className="hidden md:block">
// // // // //         <Header
// // // // //           handleDrawer={handleDrawer}
// // // // //           pageTitle={pageTitle}
// // // // //           profile={user?.user?.imageUrl}
// // // // //           name={user?.user?.name}
// // // // //           isSidebarOpen={isSidebarOpen}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="md:hidden">
// // // // //         <MobileHeader
// // // // //           handleDrawer={handleDrawer}
// // // // //           pageTitle={mobileHeaderTitle}
// // // // //           profile={user?.user?.imageUrl}
// // // // //         />
// // // // //       </div>

// // // // //       {isDrawer && (
// // // // //         <div
// // // // //           className="fixed top-0 z-[999] w-screen h-screen bg-[#1E1E1E] bg-opacity-40"
// // // // //           onClick={handleClose}
// // // // //         >
// // // // //           <motion.div
// // // // //             initial={{ x: "-100%" }}
// // // // //             animate={{ x: 0 }}
// // // // //             exit={{ x: "-100%" }}
// // // // //             transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // // // //             className="w-[312px] h-full bg-white"
// // // // //           >
// // // // //             <SideBar isDrawer={true} handleDrawer={handleClose} />
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       )}

// // // // //       <div
// // // // //         className={`px-[18px] md:px-[30px] ${
// // // // //           isSidebarOpen && isAboveMlg ? "ml-[312px]" : "ml-0"
// // // // //         }`}
// // // // //       >
// // // // //         {children}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };





// // // // import { useEffect, useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { Header } from "../base-component/Header";
// // // // import { SideBar } from "../base-component/Sidebar";
// // // // import { MobileHeader } from "../base-component/mobile-header";
// // // // import { useLocation } from "react-router-dom";
// // // // import { getPageTitles } from "../utils/function";
// // // // import { useDispatch, useSelector } from "react-redux";

// // // // export const Layout = ({ children }) => {

// // // //   const location = useLocation();
// // // //   const dispatch = useDispatch();
// // // //   const reduxUser = useSelector((state) => state.auth);

// // // //   // 🔥 GOOGLE / APPLE IMAGE GLOBAL STATE
// // // //   const [globalUser, setGlobalUser] = useState(() => {
// // // //     const savedUser = localStorage.getItem("user");
// // // //     return savedUser ? JSON.parse(savedUser) : null;
// // // //   });

// // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// // // //   const [isDrawer, setIsDrawer] = useState(false);
// // // //   const [isAboveMlg, setIsAboveMlg] = useState(
// // // //     window.matchMedia("(min-width:1280px)").matches
// // // //   );

// // // //   const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

// // // //   // 🔥 LISTEN GOOGLE / APPLE LOGIN EVENT
// // // //   useEffect(() => {

// // // //     const updateUserImage = () => {
// // // //       const updatedUser = localStorage.getItem("user");
// // // //       if (updatedUser) {
// // // //         setGlobalUser(JSON.parse(updatedUser));
// // // //       }
// // // //     };

// // // //     window.addEventListener("userUpdated", updateUserImage);

// // // //     return () => {
// // // //       window.removeEventListener("userUpdated", updateUserImage);
// // // //     };

// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const mediaQuery = window.matchMedia("(min-width:1280px)");
// // // //     const handleMediaChange = (event) => setIsAboveMlg(event.matches);
// // // //     mediaQuery.addEventListener("change", handleMediaChange);
// // // //     return () => mediaQuery.removeEventListener("change", handleMediaChange);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (!isAboveMlg) {
// // // //       setIsSidebarOpen(false);
// // // //       setIsDrawer(false);
// // // //     } else {
// // // //       setIsSidebarOpen(true);
// // // //     }
// // // //   }, [isAboveMlg]);

// // // //   const handleDrawer = () => setIsDrawer((prev) => !prev);

// // // //   const handleClose = (e) => {
// // // //     e.stopPropagation();
// // // //     setIsDrawer(false);
// // // //   };

// // // //   return (
// // // //     <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">

// // // //       <div
// // // //         className={`fixed top-0 left-0 h-full hidden maxSize:block ${
// // // //           isSidebarOpen && isAboveMlg ? "block" : "hidden"
// // // //         }`}
// // // //       >
// // // //         <SideBar isDrawer={false} handleDrawer={handleDrawer} />
// // // //       </div>

// // // //       <div className="hidden md:block">
// // // //         <Header
// // // //           handleDrawer={handleDrawer}
// // // //           pageTitle={pageTitle}

// // // //           // 🔥 GOOGLE / APPLE PROFILE IMAGE
// // // //           profile={
// // // //             globalUser?.imageUrl ||
// // // //             reduxUser?.user?.imageUrl
// // // //           }

// // // //           name={
// // // //             globalUser?.name ||
// // // //             reduxUser?.user?.name
// // // //           }

// // // //           isSidebarOpen={isSidebarOpen}
// // // //         />
// // // //       </div>

// // // //       <div className="md:hidden">
// // // //         <MobileHeader
// // // //           handleDrawer={handleDrawer}
// // // //           pageTitle={mobileHeaderTitle}

// // // //           // 🔥 MOBILE HEADER IMAGE
// // // //           profile={
// // // //             globalUser?.imageUrl ||
// // // //             reduxUser?.user?.imageUrl
// // // //           }
// // // //         />
// // // //       </div>

// // // //       {isDrawer && (
// // // //         <div
// // // //           className="fixed top-0 z-[999] w-screen h-screen bg-[#1E1E1E] bg-opacity-40"
// // // //           onClick={handleClose}
// // // //         >
// // // //           <motion.div
// // // //             initial={{ x: "-100%" }}
// // // //             animate={{ x: 0 }}
// // // //             exit={{ x: "-100%" }}
// // // //             transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // // //             className="w-[312px] h-full bg-white"
// // // //           >
// // // //             <SideBar isDrawer={true} handleDrawer={handleClose} />
// // // //           </motion.div>
// // // //         </div>
// // // //       )}

// // // //       <div
// // // //         className={`px-[18px] md:px-[30px] ${
// // // //           isSidebarOpen && isAboveMlg ? "ml-[312px]" : "ml-0"
// // // //         }`}
// // // //       >
// // // //         {children}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };





// // // import { useEffect, useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Header } from "../base-component/Header";
// // // import { SideBar } from "../base-component/Sidebar";
// // // import { MobileHeader } from "../base-component/mobile-header";
// // // import { useLocation } from "react-router-dom";
// // // import { getPageTitles } from "../utils/function";
// // // import { useGlobalUser } from "../utils/hooks";
// // // import { useDispatch, useSelector } from "react-redux";

// // // export const Layout = ({ children }) => {
// // //   const location = useLocation();
// // //   const dispatch = useDispatch();

// // //   const { user } = useSelector((state) => state.auth);

// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// // //   const [isDrawer, setIsDrawer] = useState(false);
// // //   const [isAboveMlg, setIsAboveMlg] = useState(
// // //     window.matchMedia("(min-width:1280px)").matches
// // //   );

// // //   const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

// // //   // ✅ Get correct user data (handles both structures)
// // //   const currentUser = user?.user ? user.user : user;

// // //   const profileImage =
// // //     currentUser?.imageUrl ||
// // //     currentUser?.image ||
// // //     "/default-avatar.png";

// // //   const userName = currentUser?.name || "User";

// // //   useEffect(() => {
// // //     if (currentUser) useGlobalUser(currentUser, dispatch);
// // //   }, [currentUser, dispatch]);

// // //   useEffect(() => {
// // //     const mediaQuery = window.matchMedia("(min-width:1280px)");
// // //     const handleMediaChange = (event) => setIsAboveMlg(event.matches);
// // //     mediaQuery.addEventListener("change", handleMediaChange);
// // //     return () => mediaQuery.removeEventListener("change", handleMediaChange);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!isAboveMlg) {
// // //       setIsSidebarOpen(false);
// // //       setIsDrawer(false);
// // //     } else {
// // //       setIsSidebarOpen(true);
// // //     }
// // //   }, [isAboveMlg]);

// // //   const handleDrawer = () => setIsDrawer((prev) => !prev);

// // //   const handleClose = (e) => {
// // //     e.stopPropagation();
// // //     setIsDrawer(false);
// // //   };

// // //   return (
// // //     <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">
// // //       {/* Sidebar */}
// // //       <div
// // //         className={`fixed top-0 left-0 h-full hidden maxSize:block ${
// // //           isSidebarOpen && isAboveMlg ? "block" : "hidden"
// // //         }`}
// // //       >
// // //         <SideBar isDrawer={false} handleDrawer={handleDrawer} />
// // //       </div>

// // //       {/* Desktop Header */}
// // //       <div className="hidden md:block">
// // //         <Header
// // //           handleDrawer={handleDrawer}
// // //           pageTitle={pageTitle}
// // //           profile={profileImage}
// // //           name={userName}
// // //           isSidebarOpen={isSidebarOpen}
// // //         />
// // //       </div>

// // //       {/* Mobile Header */}
// // //       <div className="md:hidden">
// // //         <MobileHeader
// // //           handleDrawer={handleDrawer}
// // //           pageTitle={mobileHeaderTitle}
// // //           profile={profileImage}
// // //         />
// // //       </div>

// // //       {/* Drawer */}
// // //       {isDrawer && (
// // //         <div
// // //           className="fixed top-0 z-[999] w-screen h-screen bg-[#1E1E1E] bg-opacity-40"
// // //           onClick={handleClose}
// // //         >
// // //           <motion.div
// // //             initial={{ x: "-100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "-100%" }}
// // //             transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // //             className="w-[312px] h-full bg-white"
// // //           >
// // //             <SideBar isDrawer={true} handleDrawer={handleClose} />
// // //           </motion.div>
// // //         </div>
// // //       )}

// // //       {/* Page Content */}
// // //       <div
// // //         className={`px-[18px] md:px-[30px] ${
// // //           isSidebarOpen && isAboveMlg ? "ml-[312px]" : "ml-0"
// // //         }`}
// // //       >
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // };





// // //remove below code if it does not work


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Header } from "../base-component/Header";
// import { SideBar } from "../base-component/Sidebar";
// import { MobileHeader } from "../base-component/mobile-header";
// import { useLocation } from "react-router-dom";
// import { getPageTitles } from "../utils/function";
// import { useDispatch, useSelector } from "react-redux";

// export const Layout = ({ children }) => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDrawer, setIsDrawer] = useState(false);
//   const [isAboveMlg, setIsAboveMlg] = useState(
//     window.matchMedia("(min-width:1280px)").matches
//   );

//   const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

//   // ✅ FIXED USER STRUCTURE
//   const currentUser = user?.user ? user.user : user;

//   // ✅ FINAL IMAGE LOGIC
//   const profileImage =
//     currentUser?.imageUrl ||
//     currentUser?.image ||
//     currentUser?.picture ||
//     currentUser?.avatar ||
//     "/default-avatar.png";

//   const userName = currentUser?.name || "User";

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(min-width:1280px)");
//     const handleMediaChange = (event) => setIsAboveMlg(event.matches);
//     mediaQuery.addEventListener("change", handleMediaChange);
//     return () => mediaQuery.removeEventListener("change", handleMediaChange);
//   }, []);

//   useEffect(() => {
//     if (!isAboveMlg) {
//       setIsSidebarOpen(false);
//       setIsDrawer(false);
//     } else {
//       setIsSidebarOpen(true);
//     }
//   }, [isAboveMlg]);

//   const handleDrawer = () => setIsDrawer((prev) => !prev);
//   const handleClose = (e) => {
//     e.stopPropagation();
//     setIsDrawer(false);
//   };

//   return (
//     <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full hidden maxSize:block ${
//           isSidebarOpen && isAboveMlg ? "block" : "hidden"
//         }`}
//       >
//         <SideBar isDrawer={false} handleDrawer={handleDrawer} />
//       </div>

//       {/* Desktop Header */}
//       <div className="hidden md:block">
//         <Header
//           handleDrawer={handleDrawer}
//           pageTitle={pageTitle}
//           profile={profileImage}  // ✅ Image passed here
//           name={userName}
//           isSidebarOpen={isSidebarOpen}
//         />
//       </div>

//       {/* Mobile Header */}
//       <div className="md:hidden">
//         <MobileHeader
//           handleDrawer={handleDrawer}
//           pageTitle={mobileHeaderTitle}
//           profile={profileImage}
//         />
//       </div>

//       {/* Drawer */}
//       {isDrawer && (
//         <div
//           className="fixed top-0 z-[999] w-screen h-screen bg-[#1E1E1E] bg-opacity-40"
//           onClick={handleClose}
//         >
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="w-[312px] h-full bg-white"
//           >
//             <SideBar isDrawer={true} handleDrawer={handleClose} />
//           </motion.div>
//         </div>
//       )}

//       {/* Page Content */}
//       <div
//         className={`px-[18px] md:px-[30px] ${
//           isSidebarOpen && isAboveMlg ? "ml-[312px]" : "ml-0"
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };













// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Header } from "../base-component/Header";
// import { SideBar } from "../base-component/Sidebar";
// import { MobileHeader } from "../base-component/mobile-header";
// import { useLocation } from "react-router-dom";
// import { getPageTitles } from "../utils/function";
// import { useSelector } from "react-redux";
// import profileIcon from "../assets/pngs/profile.jpg";

// export const Layout = ({ children }) => {
//   const location = useLocation();
//   const { user } = useSelector((state) => state.auth);

//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDrawer, setIsDrawer] = useState(false);
//   const [isAboveMlg, setIsAboveMlg] = useState(
//     window.matchMedia("(min-width:1280px)").matches
//   );

//   const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

//   // ✅ FIXED: Handle all possible nested structures from Redux + localStorage
//   // Redux might store as { user: { id, name, imageUrl } } or flat { id, name, imageUrl }
//   const currentUser = user?.user ? user.user : user;

//   // ✅ FIXED: Resolve image with proper fallback chain
//   // Never pass null/undefined — always pass a valid src string
//   const resolveImage = (userObj) => {
//     if (!userObj) return profileIcon;

//     const url =
//       userObj.imageUrl ||
//       userObj.image ||
//       userObj.picture ||
//       userObj.avatar ||
//       "";

//     // Make sure it's a non-empty string
//     return url && url.trim() !== "" ? url.trim() : profileIcon;
//   };

//   // ✅ Also check localStorage as fallback in case Redux hydration is delayed
//   const getProfileImage = () => {
//     const fromRedux = resolveImage(currentUser);

//     // If Redux already has a valid URL, use it
//     if (fromRedux !== profileIcon) return fromRedux;

//     // Fallback: try reading from localStorage directly
//     try {
//       const stored = localStorage.getItem("user");
//       if (stored) {
//         const parsed = JSON.parse(stored);
//         const localUser = parsed?.user ? parsed.user : parsed;
//         return resolveImage(localUser);
//       }
//     } catch (e) {
//       // ignore parse errors
//     }

//     return profileIcon;
//   };

//   const profileImage = getProfileImage();
//   const userName = currentUser?.name || (() => {
//     // Also fallback to localStorage for name
//     try {
//       const stored = localStorage.getItem("user");
//       if (stored) {
//         const parsed = JSON.parse(stored);
//         const localUser = parsed?.user ? parsed.user : parsed;
//         return localUser?.name || "User";
//       }
//     } catch (e) {}
//     return "User";
//   })();

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(min-width:1280px)");
//     const handleMediaChange = (event) => setIsAboveMlg(event.matches);
//     mediaQuery.addEventListener("change", handleMediaChange);
//     return () => mediaQuery.removeEventListener("change", handleMediaChange);
//   }, []);

//   useEffect(() => {
//     if (!isAboveMlg) {
//       setIsSidebarOpen(false);
//       setIsDrawer(false);
//     } else {
//       setIsSidebarOpen(true);
//     }
//   }, [isAboveMlg]);

//   const handleDrawer = () => setIsDrawer((prev) => !prev);
//   const handleClose = (e) => {
//     e.stopPropagation();
//     setIsDrawer(false);
//   };

//   return (
//     <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full hidden maxSize:block ${
//           isSidebarOpen && isAboveMlg ? "block" : "hidden"
//         }`}
//       >
//         <SideBar isDrawer={false} handleDrawer={handleDrawer} />
//       </div>

//       {/* Desktop Header */}
//       <div className="hidden md:block">
//         <Header
//           handleDrawer={handleDrawer}
//           pageTitle={pageTitle}
//           profile={profileImage}
//           name={userName}
//           isSidebarOpen={isSidebarOpen}
//         />
//       </div>

//       {/* Mobile Header */}
//       <div className="md:hidden">
//         <MobileHeader
//           handleDrawer={handleDrawer}
//           pageTitle={mobileHeaderTitle}
//           profile={profileImage}  // ✅ Same profileImage used for mobile too
//         />
//       </div>

//       {/* Drawer */}
//       {isDrawer && (
//         <div
//           className="fixed top-0 z-[999] w-screen h-screen bg-[#1E1E1E] bg-opacity-40"
//           onClick={handleClose}
//         >
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="w-[312px] h-full bg-white"
//           >
//             <SideBar isDrawer={true} handleDrawer={handleClose} />
//           </motion.div>
//         </div>
//       )}

//       {/* Page Content */}
//       <div
//         className={`px-[18px] md:px-[30px] ${
//           isSidebarOpen && isAboveMlg ? "ml-[312px]" : "ml-0"
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };









import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "../base-component/Header";
import { SideBar } from "../base-component/Sidebar";
import { MobileHeader } from "../base-component/mobile-header";
import { useLocation } from "react-router-dom";
import { getPageTitles } from "../utils/function";
import { useSelector } from "react-redux";
import profileIcon from "../assets/pngs/profile.jpg";

// ✅ FIX 1: Moved resolveImage outside component so it's a pure utility.
// Also guards against "null" / "undefined" string values from DB.
const resolveImage = (userObj) => {
  if (!userObj) return null;

  const url =
    userObj.imageUrl ||
    userObj.image ||
    userObj.picture ||
    userObj.avatar ||
    "";

  if (
    url &&
    typeof url === "string" &&
    url.trim() !== "" &&
    url.trim() !== "null" &&
    url.trim() !== "undefined"
  ) {
    return url.trim();
  }

  return null;
};

// ✅ FIX 2: Dedicated localStorage fallback — only called when Redux has nothing.
const getUserFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed?.user ? parsed.user : parsed;
    }
  } catch (e) {
    // ignore
  }
  return null;
};

export const Layout = ({ children }) => {
  const location = useLocation();

  // ✅ FIX 3: Subscribe to the full auth slice so component re-renders
  // whenever Redux state changes (e.g. after Google login dispatches setUser)
  const { user } = useSelector((state) => state.auth);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDrawer, setIsDrawer] = useState(false);
  const [isAboveMlg, setIsAboveMlg] = useState(
    window.matchMedia("(min-width:1280px)").matches
  );

  const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

  // ✅ FIX 4: Normalize nested user structure — Redux might store { user: {...} } or flat {...}
  const currentUser = useMemo(() => {
    return user?.user ? user.user : user;
  }, [user]);

  // ✅ FIX 5: useMemo ensures profileImage & userName re-compute ONLY when
  // currentUser changes — not on every render. This also correctly reacts
  // to Redux updates after login, showing the real Google photo immediately.
  const profileImage = useMemo(() => {
    // First try Redux (always most up-to-date after login)
    const fromRedux = resolveImage(currentUser);
    if (fromRedux) return fromRedux;

    // Fallback: localStorage (handles page refresh before Redux rehydrates)
    const localUser = getUserFromLocalStorage();
    const fromLocal = resolveImage(localUser);
    if (fromLocal) return fromLocal;

    // Final fallback: default avatar asset
    return profileIcon;
  }, [currentUser]);

  const userName = useMemo(() => {
    if (currentUser?.name) return currentUser.name;

    // Fallback to localStorage
    const localUser = getUserFromLocalStorage();
    return localUser?.name || "User";
  }, [currentUser]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1280px)");
    const handleMediaChange = (event) => setIsAboveMlg(event.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isAboveMlg) {
      setIsSidebarOpen(false);
      setIsDrawer(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isAboveMlg]);

  const handleDrawer = () => setIsDrawer((prev) => !prev);
  const handleClose = (e) => {
    e.stopPropagation();
    setIsDrawer(false);
  };

  return (
    <div className="bg-[#fafbfd] min-h-screen h-full overflow-y-auto relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full hidden maxSize:block ${
          isSidebarOpen && isAboveMlg ? "block" : "hidden"
        }`}
      >
        <SideBar isDrawer={false} handleDrawer={handleDrawer} />
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header
          handleDrawer={handleDrawer}
          pageTitle={pageTitle}
          profile={profileImage}
          name={userName}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <MobileHeader
          handleDrawer={handleDrawer}
          pageTitle={mobileHeaderTitle}
          profile={profileImage}
        />
      </div>

      {/* Drawer */}
      {isDrawer && (
        <div
          className="fixed top-0 z-[999] w-screen h-screen bg-[#1E1E1E] bg-opacity-40"
          onClick={handleClose}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-[312px] h-full bg-white"
          >
            <SideBar isDrawer={true} handleDrawer={handleClose} />
          </motion.div>
        </div>
      )}

      {/* Page Content */}
      <div
        className={`px-[18px] md:px-[30px] ${
          isSidebarOpen && isAboveMlg ? "ml-[312px]" : "ml-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};


