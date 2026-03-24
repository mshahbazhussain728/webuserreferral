// // // import { formatDate } from "../../../utils/function";

// // // export const YearlyPremUsersTableRows = ({ data }) => {
// // //   return (
// // //     <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
// // //       {data?.map((item, index) => (
// // //         <div
// // //           key={index}
// // //           className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[10px] px-[15px] grid grid-cols-[minmax(200px,_4fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)] items-center"
// // //         >
// // //           <div className="flex items-center gap-x-[18px]">
// // //             <img
// // //               src={item?.image}
// // //               alt="profile"
// // //               className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover"
// // //             />
// // //             <span className="text-base font-medium">{item?.name}</span>
// // //           </div>

// // //           <span className="text-base font-medium flex items-center justify-center">
// // //             {formatDate(item?.installedDate)}
// // //           </span>
// // //           <span className="text-base font-medium flex items-center justify-center">
// // //             {formatDate(item?.subscribeDate)}
// // //           </span>
// // //           <span className="text-base font-medium flex items-center justify-center">
// // //             {formatDate(item?.clearanceDate)}
// // //           </span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };





// // // import { formatDate } from "../../../utils/function";
// // // import profile from "../../../assets/pngs/profile.jpg";

// // // export const YearlyPremUsersTableRows = ({ data }) => {
// // //   return (
// // //     <div className="overflow-y-visible flex flex-col gap-y-[10px]">
// // //       {data?.map((item, index) => {
// // //         const subscription  = item?.Subscriptions?.[0];
// // //         const subscribeDate = subscription?.startDate   || subscription?.createdAt;
// // //         const clearanceDate = subscription?.clearedDate || subscription?.canceledDate;
// // //         const planType      = subscription?.planType    || "N/A";
// // //         const status        = subscription?.status      || "N/A";

// // //         return (
// // //           <div
// // //             key={index}
// // //             className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[10px] px-[15px] grid grid-cols-[minmax(180px,_3fr)_minmax(150px,_2fr)_minmax(150px,_2fr)_minmax(150px,_2fr)_minmax(120px,_2fr)_minmax(100px,_1fr)] items-center gap-x-4"
// // //           >
// // //             {/* Column 1: Name with Image */}
// // //             <div className="flex items-center gap-x-[18px]">
// // //               <img
// // //                 src={item?.image || profile}
// // //                 alt="profile"
// // //                 className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover"
// // //               />
// // //               <span className="text-base font-medium truncate">{item?.name}</span>
// // //             </div>

// // //             {/* Column 2: Installed Date */}
// // //             <span className="text-base font-medium flex items-center justify-center">
// // //               {formatDate(item?.installedDate)}
// // //             </span>

// // //             {/* Column 3: Subscribed Date */}
// // //             <span className="text-base font-medium flex items-center justify-center">
// // //               {formatDate(subscribeDate)}
// // //             </span>

// // //             {/* Column 4: Clearance Date */}
// // //             <span className="text-base font-medium flex items-center justify-center">
// // //               {formatDate(clearanceDate)}
// // //             </span>

// // //             {/* Column 5: Plan Type */}
// // //             <span className="text-base font-medium flex items-center justify-center capitalize">
// // //               {planType}
// // //             </span>

// // //             {/* Column 6: Status */}
// // //             <div className="flex items-center justify-center">
// // //               <span
// // //                 className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize
// // //                   ${status === "active"
// // //                     ? "bg-green-100 text-green-800"
// // //                     : status === "canceled" || status === "cancelled"
// // //                     ? "bg-red-100 text-red-800"
// // //                     : "bg-blue-100 text-blue-800"
// // //                   }`}
// // //               >
// // //                 {status}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };








// // // import { formatDate } from "../../../utils/function";
// // // import profile from "../../../assets/pngs/profile.jpg";

// // // export const YearlyPremUsersTableRows = ({ data }) => {
// // //   return (
// // //     <div className="overflow-y-visible flex flex-col gap-y-[10px]">
// // //       {data?.map((item, index) => {
// // //         const status = item?.status || "N/A";

// // //         return (
// // //           <div
// // //             key={index}
// // //             className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[10px] px-[15px] grid grid-cols-[minmax(180px,_3fr)_minmax(150px,_2fr)_minmax(150px,_2fr)_minmax(100px,_1fr)] items-center gap-x-4"
// // //           >
// // //             {/* Column 1: Name with fallback image */}
// // //             <div className="flex items-center gap-x-[18px]">
// // //               <img
// // //                 src={profile}
// // //                 alt="profile"
// // //                 className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover"
// // //               />
// // //               <span className="text-base font-medium truncate">
// // //                 {item?.name || "N/A"}
// // //               </span>
// // //             </div>

// // //             {/* Column 2: Email */}
// // //             <span className="text-base font-medium flex items-center justify-center truncate">
// // //               {item?.email || "N/A"}
// // //             </span>

// // //             {/* Column 3: Joined Date */}
// // //             <span className="text-base font-medium flex items-center justify-center">
// // //               {formatDate(item?.createdAt)}
// // //             </span>

// // //             {/* Column 4: Status */}
// // //             <div className="flex items-center justify-center">
// // //               <span
// // //                 className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize
// // //                   ${status === "active"
// // //                     ? "bg-green-100 text-green-800"
// // //                     : status === "canceled" || status === "cancelled"
// // //                     ? "bg-red-100 text-red-800"
// // //                     : "bg-blue-100 text-blue-800"
// // //                   }`}
// // //               >
// // //                 {status}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };




// // import { formatDate } from "../../../utils/function";
// // import profile from "../../../assets/pngs/profile.jpg";

// // export const YearlyPremUsersTableRows = ({ data }) => {
// //   return (
// //     <div className="overflow-y-visible flex flex-col gap-y-[10px]">
// //       {data?.map((item, index) => {
// //         const subscription  = item?.Subscriptions?.[0];
// //         const subscribeDate = subscription?.startDate;
// //         const clearanceDate = subscription?.clearedDate ?? subscription?.canceledDate;
// //         const planType      = subscription?.planType ?? "N/A";
// //         const status        = subscription?.status   ?? "N/A";

// //         return (
// //           <div
// //             key={index}
// //             className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[10px] px-[15px] grid grid-cols-[minmax(180px,_3fr)_minmax(150px,_2fr)_minmax(150px,_2fr)_minmax(150px,_2fr)_minmax(120px,_2fr)_minmax(100px,_1fr)] items-center gap-x-4"
// //           >
// //             {/* Column 1: User Details — Name + Image */}
// //             <div className="flex items-center gap-x-[18px]">
// //               <img
// //                 src={item?.image || profile}
// //                 alt="profile"
// //                 className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover"
// //               />
// //               <span className="text-base font-medium truncate">
// //                 {item?.name ?? "N/A"}
// //               </span>
// //             </div>

// //             {/* Column 2: Installed Date */}
// //             <span className="text-base font-medium flex items-center justify-center">
// //               {item?.installedDate ? formatDate(item.installedDate) : "N/A"}
// //             </span>

// //             {/* Column 3: Subscribed Date (startDate from Subscriptions) */}
// //             <span className="text-base font-medium flex items-center justify-center">
// //               {subscribeDate ? formatDate(subscribeDate) : "N/A"}
// //             </span>

// //             {/* Column 4: Clearance Date (clearedDate or canceledDate) */}
// //             <span className="text-base font-medium flex items-center justify-center">
// //               {clearanceDate ? formatDate(clearanceDate) : "N/A"}
// //             </span>

// //             {/* Column 5: Plan Type */}
// //             <span className="text-base font-medium flex items-center justify-center capitalize">
// //               {planType}
// //             </span>

// //             {/* Column 6: Status */}
// //             <div className="flex items-center justify-center">
// //               <span
// //                 className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize
// //                   ${
// //                     status === "active"
// //                       ? "bg-green-100 text-green-800"
// //                       : status === "canceled" || status === "cancelled"
// //                       ? "bg-red-100 text-red-800"
// //                       : "bg-blue-100 text-blue-800"
// //                   }`}
// //               >
// //                 {status}
// //               </span>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };




import { formatDate } from "../../../utils/function";
import profile from "../../../assets/pngs/profile.jpg";

export const YearlyPremUsersTableRows = ({ data }) => {
  return (
    <div className="overflow-y-visible flex flex-col gap-y-[10px]">
      {data?.map((item, index) => {
        const subscription  = item?.Subscriptions?.[0];
        const subscribeDate = subscription?.startDate;
        const clearanceDate = subscription?.clearedDate ?? subscription?.canceledDate;
        const planType      = subscription?.planType ?? "N/A";
        const status        = subscription?.status   ?? "N/A";

        return (
          <div
            key={index}
            className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[10px] px-[15px] grid grid-cols-[minmax(180px,_3fr)_minmax(150px,_2fr)_minmax(150px,_2fr)_minmax(150px,_2fr)_minmax(120px,_2fr)_minmax(100px,_1fr)] items-center gap-x-4"
          >
            {/* Column 1: User Details — Name + Image */}
            <div className="flex items-center gap-x-[18px]">
              <img
                src={item?.image || profile}
                alt="profile"
                className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover"
              />
              <span className="text-base font-medium truncate">
                {item?.name ?? "N/A"}
              </span>
            </div>

            {/* Column 2: Installed Date */}
            <span className="text-base font-medium flex items-center justify-center ml-[-40px]">
              {item?.installedDate ? formatDate(item.installedDate) : "N/A"}
            </span>

            {/* Column 3: Subscribed Date */}
            <span className="text-base font-medium flex items-center justify-center whitespace-nowrap ml-[-20px]">
              {subscribeDate ? formatDate(subscribeDate) : "N/A"}
            </span>

            {/* Column 4: Clearance Date */}
            <span className="text-base font-medium flex items-center justify-center whitespace-nowrap">
              {clearanceDate ? formatDate(clearanceDate) : "N/A"}
            </span>

            {/* Column 5: Plan Type */}
            <span className="text-base font-medium flex items-center justify-center capitalize ml-[-5px]">
              {planType}
            </span>

            {/* Column 6: Status */}
            <div className="flex items-center justify-center">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ml-[-10px]
                  ${
                    status === "active"
                      ? "bg-green-100 text-green-800"
                      : status === "canceled" || status === "cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
              >
                {status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};



