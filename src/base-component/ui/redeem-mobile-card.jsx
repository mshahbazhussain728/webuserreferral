// import { formatDate } from "../../utils/function";
// import { getRedeemStatusStyles } from "../../utils/utility";

// export const RedeemMobileCard = ({ data, onClick }) => {
//   return (
//     <div className="flex flex-col gap-y-3">
//       {data?.map((item, index) => {
//         const { bg, text } = getRedeemStatusStyles(item?.status);

//         return (
//           <div
//             key={index}
//             onClick={() =>
//               onClick(
//                 item?.createdAt,
//                 item?.points,
//                 item?.approvedDate,
//                 item?.paymentMethod,
//                 item?.paymentDate,
//                 item?.status
//               )
//             }
//             className="cursor-pointer p-[18px] rounded-[12px] bg-white shadow-md flex items-center justify-between"
//           >
//             <div className="flex flex-col gap-y-2">
//               <p className="text-base font-semibold">
//                 {formatDate(item?.createdAt)}
//               </p>
//               <div className="flex items-center gap-x-1">
//                 <span className="text-xs font-medium text-[#848484]">
//                   Redeemed Points
//                 </span>
//                 <span className="text-xs font-medium text-primary">
//                   {item?.points}
//                 </span>
//               </div>
//             </div>

//             <div
//               className={`px-[4.5px] py-[2.5px] min-w-[61px] max-w-[61px] rounded-[3px] text-center ${bg} ${text}`}
//             >
//               <span className={`text-[10px] font-medium`}>{item?.status}</span>
//             </div>
//           </div>
//         );
//       })}

//       {data?.length > 0 && (
//         <p className="text-center text-gray-500 text-sm mt-3">
//           No more data available
//         </p>
//       )}
//     </div>
//   );
// };



// import { formatDate } from "../../utils/function";
// import { getRedeemStatusStyles } from "../../utils/utility";

// export const RedeemMobileCard = ({ data, onClick }) => {
//   return (
//     <div className="flex flex-col gap-y-3">
//       {data?.map((item, index) => {
//         const { bg, text } = getRedeemStatusStyles(item?.status);

//         // ✅ Only fix: convert "inProgress" → "In Progress" for display
//         const statusLabel = item?.status === "inProgress" ? "In Progress" : item?.status;

//         return (
//           <div
//             key={index}
//             onClick={() =>
//               onClick(
//                 item?.createdAt,
//                 item?.points,
//                 item?.approvedDate,
//                 item?.paymentMethod,
//                 item?.paymentDate,
//                 item?.status
//               )
//             }
//             className="cursor-pointer p-[18px] rounded-[12px] bg-white shadow-md flex items-center justify-between"
//           >
//             <div className="flex flex-col gap-y-2">
//               <p className="text-base font-semibold">
//                 {formatDate(item?.createdAt)}
//               </p>
//               <div className="flex items-center gap-x-1">
//                 <span className="text-xs font-medium text-[#848484]">
//                   Redeemed Points
//                 </span>
//                 <span className="text-xs font-medium text-primary">
//                   {item?.points}
//                 </span>
//               </div>
//             </div>

//             <div
//               className={`px-[4.5px] py-[2.5px] min-w-[61px] max-w-[61px] rounded-[3px] text-center ${bg} ${text}`}
//             >
//               <span className={`text-[10px] font-medium`}>{statusLabel}</span>
//             </div>
//           </div>
//         );
//       })}

//       {data?.length > 0 && (
//         <p className="text-center text-gray-500 text-sm mt-3">
//           No more data available
//         </p>
//       )}
//     </div>
//   );
// };


//remove



import { formatDate } from "../../utils/function";
import { getRedeemStatusStyles } from "../../utils/utility";
import { Link } from "react-router-dom";

export const RedeemMobileCard = ({ data, onClick, onChat }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {data?.map((item, index) => {
        const { bg, text } = getRedeemStatusStyles(item?.status);
        const statusLabel = item?.status === "inProgress" ? "In Progress" : item?.status;
        return (
          <div
            key={index}
            onClick={() =>
              onClick(
                item?.createdAt,
                item?.points,
                item?.approvedDate,
                item?.paymentMethod,
                item?.paymentDate,
                item?.status
              )
            }
            className="cursor-pointer p-[18px] rounded-[12px] bg-white shadow-md flex items-center justify-between"
          >
            <div className="flex flex-col gap-y-2">
              <p className="text-base font-semibold">
                {formatDate(item?.createdAt)}
              </p>
              <div className="flex items-center gap-x-1">
                <span className="text-xs font-medium text-[#848484]">
                  Redeemed Points
                </span>
                <span className="text-xs font-medium text-primary">
                  {item?.points}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-2">
              <div
                className={`px-[4.5px] py-[2.5px] min-w-[61px] max-w-[61px] rounded-[3px] text-center ${bg} ${text}`}
              >
                <span className={`text-[10px] font-medium`}>{statusLabel}</span>
              </div>

              <Link
                to="/payment-request-chat"
                state={{ redeemItem: item }}
                onClick={(e) => {
                  e.stopPropagation();
                  onChat?.(item);
                }}
                className="px-4 py-1.5 bg-[#BABABA] hover:bg-[#009F44] text-white rounded-md text-xs font-medium transition-colors inline-block text-center min-w-[61px]"
              >
                Chat
              </Link>
            </div>
          </div>
        );
      })}
      {data?.length > 0 && (
        <p className="text-center text-gray-500 text-sm mt-3">
          No more data available
        </p>
      )}
    </div>
  );
};