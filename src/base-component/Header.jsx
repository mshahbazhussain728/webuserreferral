// // // import profileIcon from "../assets/pngs/profile.jpg";
// // // import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

// // // export const Header = ({
// // //   handleDrawer,
// // //   pageTitle,
// // //   profile,
// // //   name,
// // //   isSidebarOpen,
// // // }) => {
// // //   return (
// // //     <div
// // //       className={` ${
// // //         isSidebarOpen && "ml-[312px]"
// // //       } flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
// // //     >
// // //       <div className="flex items-center gap-x-5 maxSize:gap-x-0">
// // //         <HambugerIcon onClick={handleDrawer} />
// // //         <span className="text-[40px] font-bold">{pageTitle}</span>
// // //       </div>

// // //       <div className="flex items-center gap-x-4">
// // //         <img
// // //           src={profile || profileIcon}
// // //           alt="icon"
// // //           className="h-[58px] w-[58px] rounded-full object-cover"
// // //         />
// // //         <span className="text-[22px] font-semibold">{name}</span>
// // //       </div>
// // //     </div>
// // //   );
// // // };




// // import profileIcon from "../assets/pngs/profile.jpg";
// // import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

// // export const Header = ({
// //   handleDrawer,
// //   pageTitle,
// //   profile,
// //   name,
// //   isSidebarOpen,
// // }) => {

// //   // ✅ Remove Google image size issue (=s96-c)
// //   const formattedProfile = profile
// //     ? profile.replace("=s96-c", "")
// //     : profileIcon;

// //   return (
// //     <div
// //       className={`${
// //         isSidebarOpen && "ml-[312px]"
// //       } flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
// //     >
// //       {/* Left Side */}
// //       <div className="flex items-center gap-x-5 maxSize:gap-x-0">
// //         <HambugerIcon onClick={handleDrawer} />
// //         <span className="text-[40px] font-bold">{pageTitle}</span>
// //       </div>

// //       {/* Right Side */}
// //       <div className="flex items-center gap-x-4">
// //         <img
// //           src={formattedProfile}
// //           alt="profile"
// //           className="h-[58px] w-[58px] rounded-full object-cover"
// //           onError={(e) => {
// //             e.target.onerror = null;
// //             e.target.src = profileIcon;
// //           }}
// //         />
// //         <span className="text-[22px] font-semibold">
// //           {name || "User"}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };







// // import profileIcon from "../assets/pngs/profile.jpg";
// // import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

// // export const Header = ({
// //   handleDrawer,
// //   pageTitle,
// //   profile,
// //   name,
// //   isSidebarOpen,
// // }) => {

// //   // ✅ Use profile URL exactly as-is, fallback to local profileIcon
// //   const formattedProfile = profile && profile.trim() !== "" ? profile : profileIcon;

// //   return (
// //     <div
// //       className={`${
// //         isSidebarOpen && "ml-[312px]"
// //       } flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
// //     >
// //       {/* Left Side */}
// //       <div className="flex items-center gap-x-5 maxSize:gap-x-0">
// //         <HambugerIcon onClick={handleDrawer} />
// //         <span className="text-[40px] font-bold">{pageTitle}</span>
// //       </div>

// //       {/* Right Side */}
// //       <div className="flex items-center gap-x-4">
// //         <img
// //           src={formattedProfile}
// //           alt="profile"
// //           className="h-[58px] w-[58px] rounded-full object-cover"
// //           onError={(e) => {
// //             e.target.onerror = null;
// //             e.target.src = profileIcon;
// //           }}
// //         />
// //         <span className="text-[22px] font-semibold">
// //           {name || "User"}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };









// import profileIcon from "../assets/pngs/profile.jpg";
// import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

// export const Header = ({
//   handleDrawer,
//   pageTitle,
//   profile,
//   name,
//   isSidebarOpen,
// }) => {

//   // ✅ FIX 1: Also guard against "null" and "undefined" strings coming from DB
//   const formattedProfile =
//     profile &&
//     typeof profile === "string" &&
//     profile.trim() !== "" &&
//     profile.trim() !== "null" &&
//     profile.trim() !== "undefined"
//       ? profile.trim()
//       : profileIcon;

//   return (
//     <div
//       className={`${
//         isSidebarOpen && "ml-[312px]"
//       } flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
//     >
//       {/* Left Side */}
//       <div className="flex items-center gap-x-5 maxSize:gap-x-0">
//         <HambugerIcon onClick={handleDrawer} />
//         <span className="text-[40px] font-bold">{pageTitle}</span>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-x-4">
//         <img
//           src={formattedProfile}
//           alt="profile"
//           className="h-[58px] w-[58px] rounded-full object-cover"
//           // ✅ FIX 2: Remove onerror before setting fallback src to prevent
//           // infinite loop if profileIcon itself ever fails to load
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = profileIcon;
//           }}
//         />
//         <span className="text-[22px] font-semibold">
//           {name || "User"}
//         </span>
//       </div>
//     </div>
//   );
// };



///remove 



import profileIcon from "../assets/pngs/profile.jpg";
import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

export const Header = ({
  handleDrawer,
  pageTitle,
  profile,
  name,
  isSidebarOpen,
}) => {
  const formattedProfile =
    profile &&
    typeof profile === "string" &&
    profile.trim() !== "" &&
    profile.trim() !== "null" &&
    profile.trim() !== "undefined"
      ? profile.trim()
      : profileIcon;

  return (
    <div
      className={`${
        isSidebarOpen && "ml-[312px]"
      } flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-x-5 maxSize:gap-x-0">
        <HambugerIcon onClick={handleDrawer} />
        <span className="text-[40px] font-bold">{pageTitle}</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-x-4">
        <img
          src={formattedProfile}
          alt="profile"
          className="h-[58px] w-[58px] rounded-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profileIcon;
          }}
        />
        <span className="text-[22px] font-semibold">
          {name || "User"}
        </span>
      </div>
    </div>
  );
};