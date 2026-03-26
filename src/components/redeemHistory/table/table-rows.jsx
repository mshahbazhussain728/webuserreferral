// // // // // // import { formatDate } from "../../../utils/function";
// // // // // // import { getRedeemStatusStyles } from "../../../utils/utility";

// // // // // // export const RedeemHistoryTableRows = ({ data, onPaymentDetails }) => {
// // // // // //   return (
// // // // // //     <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
// // // // // //       {data?.map((item, index) => {
// // // // // //         const { bg, text } = getRedeemStatusStyles(item?.status);

// // // // // //         return (
// // // // // //           <div
// // // // // //             key={index}
// // // // // //             onClick={() =>
// // // // // //               onPaymentDetails(
// // // // // //                 item?.createdAt,
// // // // // //                 item?.points,
// // // // // //                 item?.approvedDate,
// // // // // //                 item?.paymentMethod,
// // // // // //                 item?.paymentDate,
// // // // // //                 item?.status
// // // // // //               )
// // // // // //             }
// // // // // //             className="bg-white cursor-pointer hover:bg-tableHoverColor rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
// // // // // //           >
// // // // // //             <span className="text-base font-medium">
// // // // // //               {formatDate(item?.createdAt)}
// // // // // //             </span>

// // // // // //             <span className="text-base font-medium flex items-center justify-center">
// // // // // //               {item?.points}
// // // // // //             </span>

// // // // // //             <div className="flex items-center justify-center">
// // // // // //               <div
// // // // // //                 className={`px-[7.2px] py-[5px] min-w-[77px] max-w-[77px] rounded-[3px] text-center ${bg} ${text}`}
// // // // // //               >
// // // // // //                 <span className={`text-xs font-medium ${bg} ${text}`}>
// // // // // //                   {item?.status}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         );
// // // // // //       })}
// // // // // //     </div>
// // // // // //   );
// // // // // // };




// // // // // import { formatDate } from "../../../utils/function";
// // // // // import { getRedeemStatusStyles } from "../../../utils/utility";

// // // // // export const RedeemHistoryTableRows = ({ data, onPaymentDetails, onChat }) => {
// // // // //   return (
// // // // //     <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
// // // // //       {data?.map((item, index) => {
// // // // //         const { bg, text } = getRedeemStatusStyles(item?.status);

// // // // //         return (
// // // // //           <div
// // // // //             key={index}
// // // // //             className="bg-white rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
// // // // //           >
// // // // //             <span 
// // // // //               className="text-base font-medium cursor-pointer hover:text-[#237D93]"
// // // // //               onClick={() =>
// // // // //                 onPaymentDetails(
// // // // //                   item?.createdAt,
// // // // //                   item?.points,
// // // // //                   item?.approvedDate,
// // // // //                   item?.paymentMethod,
// // // // //                   item?.paymentDate,
// // // // //                   item?.status
// // // // //                 )
// // // // //               }
// // // // //             >
// // // // //               {formatDate(item?.createdAt)}
// // // // //             </span>

// // // // //             <span 
// // // // //               className="text-base font-medium flex items-center justify-center cursor-pointer hover:text-[#237D93]"
// // // // //               onClick={() =>
// // // // //                 onPaymentDetails(
// // // // //                   item?.createdAt,
// // // // //                   item?.points,
// // // // //                   item?.approvedDate,
// // // // //                   item?.paymentMethod,
// // // // //                   item?.paymentDate,
// // // // //                   item?.status
// // // // //                 )
// // // // //               }
// // // // //             >
// // // // //               {item?.points}
// // // // //             </span>

// // // // //             <div className="flex items-center justify-center">
// // // // //               <button
// // // // //                 onClick={(e) => {
// // // // //                   e.stopPropagation();
// // // // //                   onChat?.(item);
// // // // //                 }}
// // // // //                 className="px-4 py-2 bg-[#237D93] text-white rounded-md text-sm font-medium hover:bg-[#1a5f6f] transition-colors"
// // // // //               >
// // // // //                 Chat
// // // // //               </button>
// // // // //             </div>

// // // // //             <div 
// // // // //               className="flex items-center justify-center cursor-pointer"
// // // // //               onClick={() =>
// // // // //                 onPaymentDetails(
// // // // //                   item?.createdAt,
// // // // //                   item?.points,
// // // // //                   item?.approvedDate,
// // // // //                   item?.paymentMethod,
// // // // //                   item?.paymentDate,
// // // // //                   item?.status
// // // // //                 )
// // // // //               }
// // // // //             >
// // // // //               <div
// // // // //                 className={`px-[7.2px] py-[5px] min-w-[77px] max-w-[77px] rounded-[3px] text-center ${bg} ${text}`}
// // // // //               >
// // // // //                 <span className={`text-xs font-medium ${bg} ${text}`}>
// // // // //                   {item?.status}
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         );
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // };




// // // // import { formatDate } from "../../../utils/function";
// // // // import { getRedeemStatusStyles } from "../../../utils/utility";

// // // // export const RedeemHistoryTableRows = ({ data, onPaymentDetails, onChat }) => {
// // // //   return (
// // // //     <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
// // // //       {data?.map((item, index) => {
// // // //         const { bg, text } = getRedeemStatusStyles(item?.status);

// // // //         return (
// // // //           <div
// // // //             key={index}
// // // //             className="bg-white rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
// // // //           >
// // // //             <span 
// // // //               className="text-base font-medium cursor-pointer hover:text-[#237D93]"
// // // //               onClick={() =>
// // // //                 onPaymentDetails(
// // // //                   item?.createdAt,
// // // //                   item?.points,
// // // //                   item?.approvedDate,
// // // //                   item?.paymentMethod,
// // // //                   item?.paymentDate,
// // // //                   item?.status
// // // //                 )
// // // //               }
// // // //             >
// // // //               {formatDate(item?.createdAt)}
// // // //             </span>

// // // //             <span 
// // // //               className="text-base font-medium flex items-center justify-center cursor-pointer hover:text-[#237D93]"
// // // //               onClick={() =>
// // // //                 onPaymentDetails(
// // // //                   item?.createdAt,
// // // //                   item?.points,
// // // //                   item?.approvedDate,
// // // //                   item?.paymentMethod,
// // // //                   item?.paymentDate,
// // // //                   item?.status
// // // //                 )
// // // //               }
// // // //             >
// // // //               {item?.points}
// // // //             </span>

// // // //             <div className="flex items-center justify-center">
// // // //               <button
// // // //                 onClick={(e) => {
// // // //                   e.stopPropagation();
// // // //                   onChat?.(item);
// // // //                 }}
// // // //                 className="px-4 py-2 bg-[#BABABA] hover:bg-[#009F44] text-white rounded-md text-sm font-medium hover:bg-[#1a5f6f] transition-colors"
// // // //               >
// // // //                 Chat
// // // //               </button>
// // // //             </div>

// // // //             <div 
// // // //               className="flex items-center justify-center cursor-pointer"
// // // //               onClick={() =>
// // // //                 onPaymentDetails(
// // // //                   item?.createdAt,
// // // //                   item?.points,
// // // //                   item?.approvedDate,
// // // //                   item?.paymentMethod,
// // // //                   item?.paymentDate,
// // // //                   item?.status
// // // //                 )
// // // //               }
// // // //             >
// // // //               <div
// // // //                 className={`px-[7.2px] py-[5px] min-w-[77px] max-w-[77px] rounded-[3px] text-center ${bg} ${text}`}
// // // //               >
// // // //                 <span className={`text-xs font-medium ${bg} ${text}`}>
// // // //                   {item?.status}
// // // //                 </span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         );
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };




// // // import { formatDate } from "../../../utils/function";
// // // import { getRedeemStatusStyles } from "../../../utils/utility";
// // // import { Link } from "react-router-dom";

// // // export const RedeemHistoryTableRows = ({ data, onPaymentDetails, onChat }) => {
// // //   return (
// // //     <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
// // //       {data?.map((item, index) => {
// // //         const { bg, text } = getRedeemStatusStyles(item?.status);

// // //         return (
// // //           <div
// // //             key={index}
// // //             className="bg-white rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
// // //           >
// // //             <span 
// // //               className="text-base font-medium cursor-pointer hover:text-[#237D93]"
// // //               onClick={() =>
// // //                 onPaymentDetails(
// // //                   item?.createdAt,
// // //                   item?.points,
// // //                   item?.approvedDate,
// // //                   item?.paymentMethod,
// // //                   item?.paymentDate,
// // //                   item?.status
// // //                 )
// // //               }
// // //             >
// // //               {formatDate(item?.createdAt)}
// // //             </span>

// // //             <span 
// // //               className="text-base font-medium flex items-center justify-center cursor-pointer hover:text-[#237D93]"
// // //               onClick={() =>
// // //                 onPaymentDetails(
// // //                   item?.createdAt,
// // //                   item?.points,
// // //                   item?.approvedDate,
// // //                   item?.paymentMethod,
// // //                   item?.paymentDate,
// // //                   item?.status
// // //                 )
// // //               }
// // //             >
// // //               {item?.points}
// // //             </span>

// // //             <div className="flex items-center justify-center">
// // //               <Link
// // //                 to="/payment-request-chat"
// // //                 state={{ redeemItem: item }}
// // //                 onClick={(e) => {
// // //                   e.stopPropagation();
// // //                   onChat?.(item);
// // //                 }}
// // //                 className="px-4 py-2 bg-[#BABABA] hover:bg-[#009F44] text-white rounded-md text-sm font-medium transition-colors inline-block"
// // //               >
// // //                 Chat
// // //               </Link>
// // //             </div>

// // //             <div 
// // //               className="flex items-center justify-center cursor-pointer"
// // //               onClick={() =>
// // //                 onPaymentDetails(
// // //                   item?.createdAt,
// // //                   item?.points,
// // //                   item?.approvedDate,
// // //                   item?.paymentMethod,
// // //                   item?.paymentDate,
// // //                   item?.status
// // //                 )
// // //               }
// // //             >
// // //               <div
// // //                 className={`px-[7.2px] py-[5px] min-w-[77px] max-w-[77px] rounded-[3px] text-center ${bg} ${text}`}
// // //               >
// // //                 <span className={`text-xs font-medium ${bg} ${text}`}>
// // //                   {item?.status}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };










// // // import { formatDate } from "../../../utils/function";
// // // import { Link } from "react-router-dom";

// // // // ✅ Local status styles covering all API-returned values including "inProgress"
// // // const getStatusStyle = (status) => {
// // //   const normalized = String(status || "").toLowerCase().trim();

// // //   const styles = {
// // //     pending:    { bg: "bg-[#FDF0E4]", text: "text-[#F2994A]", label: "Pending" },
// // //     approved:   { bg: "bg-[#D9F3E1]", text: "text-[#05B035]", label: "Approved" },
// // //     rejected:   { bg: "bg-[#FCD9D9]", text: "text-[#E80000]", label: "Rejected" },
// // //     completed:  { bg: "bg-[#E0ECFC]", text: "text-[#2F80ED]", label: "Completed" },
// // //     processing: { bg: "bg-[#EDE0FC]", text: "text-[#9B51E0]", label: "Processing" },
// // //     inprogress: { bg: "bg-[#FDF0E4]", text: "text-[#F2994A]", label: "In Progress" },
// // //     paid:       { bg: "bg-[#D9F3E1]", text: "text-[#05B035]", label: "Paid" },
// // //     failed:     { bg: "bg-[#FCD9D9]", text: "text-[#E80000]", label: "Failed" },
// // //     success:    { bg: "bg-[#D9F3E1]", text: "text-[#05B035]", label: "Success" },
// // //     successful: { bg: "bg-[#D9F3E1]", text: "text-[#05B035]", label: "Successful" },
// // //     cancelled:  { bg: "bg-[#FCD9D9]", text: "text-[#E80000]", label: "Cancelled" },
// // //   };

// // //   return (
// // //     styles[normalized] || {
// // //       bg: "bg-[#F0F0F0]",
// // //       text: "text-[#666666]",
// // //       label: String(status || "").charAt(0).toUpperCase() + String(status || "").slice(1),
// // //     }
// // //   );
// // // };

// // // export const RedeemHistoryTableRows = ({ data, onPaymentDetails, onChat }) => {
// // //   return (
// // //     <div className="overflow-y-visible flex flex-col gap-y-[10px]">
// // //       {data?.map((item, index) => {
// // //         const { bg, text, label } = getStatusStyle(item?.status);

// // //         return (
// // //           <div
// // //             key={item?.id ?? index}
// // //             className="bg-white rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
// // //           >
// // //             {/* Created Date */}
// // //             <span
// // //               className="text-base font-medium cursor-pointer hover:text-[#237D93]"
// // //               onClick={() =>
// // //                 onPaymentDetails(
// // //                   item?.createdAt,
// // //                   item?.points,
// // //                   item?.approvedDate,
// // //                   item?.paymentMethod,
// // //                   item?.paymentDate,
// // //                   item?.status
// // //                 )
// // //               }
// // //             >
// // //               {formatDate(item?.createdAt)}
// // //             </span>

// // //             {/* Points */}
// // //             <span
// // //               className="text-base font-medium flex items-center justify-center cursor-pointer hover:text-[#237D93]"
// // //               onClick={() =>
// // //                 onPaymentDetails(
// // //                   item?.createdAt,
// // //                   item?.points,
// // //                   item?.approvedDate,
// // //                   item?.paymentMethod,
// // //                   item?.paymentDate,
// // //                   item?.status
// // //                 )
// // //               }
// // //             >
// // //               {item?.points}
// // //             </span>

// // //             {/* Chat */}
// // //             <div className="flex items-center justify-center">
// // //               <Link
// // //                 to="/payment-request-chat"
// // //                 state={{ redeemItem: item }}
// // //                 onClick={(e) => {
// // //                   e.stopPropagation();
// // //                   onChat?.(item);
// // //                 }}
// // //                 className="px-4 py-2 bg-[#BABABA] hover:bg-[#009F44] text-white rounded-md text-sm font-medium transition-colors inline-block"
// // //               >
// // //                 Chat
// // //               </Link>
// // //             </div>

// // //             {/* Status */}
// // //             <div
// // //               className="flex items-center justify-center cursor-pointer"
// // //               onClick={() =>
// // //                 onPaymentDetails(
// // //                   item?.createdAt,
// // //                   item?.points,
// // //                   item?.approvedDate,
// // //                   item?.paymentMethod,
// // //                   item?.paymentDate,
// // //                   item?.status
// // //                 )
// // //               }
// // //             >
// // //               <div
// // //                 className={`px-[7.2px] py-[5px] min-w-[90px] max-w-[110px] rounded-[3px] text-center ${bg}`}
// // //               >
// // //                 <span className={`text-xs font-medium ${text}`}>
// // //                   {label}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };




import { formatDate } from "../../../utils/function";
import { getRedeemStatusStyles } from "../../../utils/utility";
import { Link } from "react-router-dom";

export const RedeemHistoryTableRows = ({ data, onPaymentDetails, onChat }) => {
  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
      {data?.map((item, index) => {
        const { text } = getRedeemStatusStyles(item?.status);

        return (
          <div
            key={index}
            className="bg-white rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
          >
            <span
              className="text-base font-medium cursor-pointer hover:text-[#237D93]"
              onClick={() =>
                onPaymentDetails(
                  item?.createdAt,
                  item?.points,
                  item?.approvedDate,
                  item?.paymentMethod,
                  item?.paymentDate,
                  item?.status
                )
              }
            >
              {formatDate(item?.createdAt)}
            </span>

            <span
              className="text-base font-medium flex items-center justify-center cursor-pointer hover:text-[#237D93]"
              onClick={() =>
                onPaymentDetails(
                  item?.createdAt,
                  item?.points,
                  item?.approvedDate,
                  item?.paymentMethod,
                  item?.paymentDate,
                  item?.status
                )
              }
            >
              {item?.points}
            </span>

            <div className="flex items-center justify-center">
              <Link
                to="/payment-request-chat"
                state={{ redeemItem: item }}
                onClick={(e) => {
                  e.stopPropagation();
                  onChat?.(item);
                }}
                className="px-4 py-2 bg-[#BABABA] hover:bg-[#009F44] text-white rounded-md text-sm font-medium transition-colors inline-block"
              >
                Chat
              </Link>
            </div>

            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() =>
                onPaymentDetails(
                  item?.createdAt,
                  item?.points,
                  item?.approvedDate,
                  item?.paymentMethod,
                  item?.paymentDate,
                  item?.status
                )
              }
            >
              <div className="px-[7.2px] py-[5px] min-w-[77px] max-w-[77px] rounded-[3px] text-center">
                <span className={`text-xs font-medium ${text}`}>
                  {item?.status}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};



