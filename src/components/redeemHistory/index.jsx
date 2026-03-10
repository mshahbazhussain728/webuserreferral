// // import { useEmptyStates } from "../../utils/hooks";
// // import { RedeemHistoryTableRows } from "./table/table-rows";
// // import { ReedeemHistoryTableHeadings } from "./table/table-heading";
// // import { Pagination } from "../../base-component/ui/pagination/pagination";
// // import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
// // import SelectField from "../../base-component/ui/fields/select-fields";
// // import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";
// // import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
// // import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

// // export const RedeemHistory = () => {
// //   const {
// //     totalCount,
// //     totalItems,
// //     loading,
// //     itemsPerPage,
// //     currentPage,
// //     headings,
// //     redeemHistory,
// //     currentPageRows,
// //     handlePageChange,
// //     handlePaymentDetails,
// //     hanldeSortChange,
// //     sort,
// //   } = useRedeemHistory();

// //   const CurrentComponent = useEmptyStates(
// //     <RedeemHistoryTableRows
// //       data={currentPageRows?.data}
// //       onPaymentDetails={handlePaymentDetails}
// //     />,
// //     totalCount !== 0,
// //     loading
// //   );

// //   return (
// //     <>
// //       <div className="hidden md:block">
// //         <ReedeemHistoryTableHeadings
// //           headings={headings}
// //           handleSort={hanldeSortChange}
// //           sortValue={sort}
// //           isRedeem={true}
// //         />
// //         {CurrentComponent}
// //       </div>

// //       <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
// //         <p className="text-[20px] font-semibold">Redeemed Listing</p>
// //         <SelectField
// //           handleChange={(value) => hanldeSortChange(value)}
// //           value={sort || "None"}
// //           options={[
// //             {
// //               label: "Status",
// //               value: "status",
// //             },
// //             {
// //               label: "Redeemed Date",
// //               value: "approvedDate",
// //             },
// //             {
// //               label: "Redeemed Points",
// //               value: "points",
// //             },
// //           ]}
// //         />
// //       </div>

// //       {loading ? (
// //         <div className="flex justify-center items-center md:hidden">
// //           <CustomLoader />
// //         </div>
// //       ) : currentPageRows?.data?.length > 0 ? (
// //         <div className="md:hidden mb-10">
// //           <RedeemMobileCard
// //             data={redeemHistory}
// //             onClick={handlePaymentDetails}
// //           />
// //         </div>
// //       ) : (
// //         <div className="md:hidden mt-10">
// //           <NoDataEmptyState
// //             imgClassName="w-14 h-14"
// //             textClassName="text-lg"
// //             className="py-5 px-3 w-full"
// //           />
// //         </div>
// //       )}

// //       {!loading && (
// //         <div className="hidden md:block">
// //           <Pagination
// //             totalItems={totalItems}
// //             itemsPerPage={itemsPerPage}
// //             onPageChange={handlePageChange}
// //             currentPage={currentPage}
// //           />
// //         </div>
// //       )}
// //     </>
// //   );
// // };




// // import { useEmptyStates } from "../../utils/hooks";
// // import { RedeemHistoryTableRows } from "./table/table-rows";
// // import { ReedeemHistoryTableHeadings } from "./table/table-heading";
// // import { Pagination } from "../../base-component/ui/pagination/pagination";
// // import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
// // import SelectField from "../../base-component/ui/fields/select-fields";
// // import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";
// // import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
// // import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

// // export const RedeemHistory = () => {
// //   const {
// //     totalCount,
// //     totalItems,
// //     loading,
// //     itemsPerPage,
// //     currentPage,
// //     headings,
// //     redeemHistory,
// //     currentPageRows,
// //     handlePageChange,
// //     handlePaymentDetails,
// //     hanldeSortChange,
// //     sort,
// //   } = useRedeemHistory();

// //   const CurrentComponent = useEmptyStates(
// //     <RedeemHistoryTableRows
// //       data={currentPageRows?.data}
// //       onPaymentDetails={handlePaymentDetails}
// //     />,
// //     totalCount !== 0,
// //     loading
// //   );

// //   return (
// //     <>
// //       <div className="hidden md:block">
// //         <ReedeemHistoryTableHeadings
// //           headings={headings}
// //           handleSort={hanldeSortChange}
// //           sortValue={sort}
// //           isRedeem={true}
// //         />
// //         {CurrentComponent}
// //       </div>

// //       <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
// //         <p className="text-[20px] font-semibold">Redeemed Listing</p>
// //         <SelectField
// //           handleChange={(value) => hanldeSortChange(value)}
// //           value={sort || "None"}
// //           options={[
// //             {
// //               label: "Status",
// //               value: "status",
// //             },
// //             {
// //               label: "Redeemed Date",
// //               value: "approvedDate",
// //             },
// //             {
// //               label: "Redeemed Points",
// //               value: "points",
// //             },
// //           ]}
// //         />
// //       </div>

// //       {loading ? (
// //         <div className="flex justify-center items-center md:hidden">
// //           <CustomLoader />
// //         </div>
// //       ) : currentPageRows?.data?.length > 0 ? (
// //         <div className="md:hidden mb-10">
// //           <RedeemMobileCard
// //             data={currentPageRows?.data || []}
// //             onClick={handlePaymentDetails}
// //           />
// //         </div>
// //       ) : (
// //         <div className="md:hidden mt-10">
// //           <NoDataEmptyState
// //             imgClassName="w-14 h-14"
// //             textClassName="text-lg"
// //             className="py-5 px-3 w-full"
// //           />
// //         </div>
// //       )}

// //       {!loading && (
// //         <div className="hidden md:block">
// //           <Pagination
// //             totalItems={totalItems}
// //             itemsPerPage={itemsPerPage}
// //             onPageChange={handlePageChange}
// //             currentPage={currentPage}
// //           />
// //         </div>
// //       )}
// //     </>
// //   );
// // };



// import { useEmptyStates } from "../../utils/hooks";
// import { RedeemHistoryTableRows } from "./table/table-rows";
// import { ReedeemHistoryTableHeadings } from "./table/table-heading";
// import { Pagination } from "../../base-component/ui/pagination/pagination";
// import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
// import SelectField from "../../base-component/ui/fields/select-fields";
// import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";
// import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
// import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

// export const RedeemHistory = () => {
//   const {
//     totalCount,
//     totalItems,
//     loading,
//     itemsPerPage,
//     currentPage,
//     headings,
//     redeemHistory,
//     handlePageChange,
//     handlePaymentDetails,
//     handleSortChange,
//     sort,
//   } = useRedeemHistory();

//   const CurrentComponent = useEmptyStates(
//     <RedeemHistoryTableRows
//       data={redeemHistory}
//       onPaymentDetails={handlePaymentDetails}
//     />,
//     totalCount !== 0,
//     loading
//   );

//   return (
//     <>
//       <div className="hidden md:block">
//         <ReedeemHistoryTableHeadings
//           headings={headings}
//           handleSort={handleSortChange}
//           sortValue={sort}
//           isRedeem={true}
//         />
//         {CurrentComponent}
//       </div>

//       <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
//         <p className="text-[20px] font-semibold">Redeemed Listing</p>
//         <SelectField
//           handleChange={(value) => handleSortChange(value)}
//           value={sort || "createdAt"}
//           options={[
//             {
//               label: "Points",
//               value: "points",
//             },
//             {
//               label: "Status",
//               value: "status",
//             },
//             {
//               label: "Created Date",
//               value: "createdAt",
//             },
//             {
//               label: "Approved Date",
//               value: "approvedDate",
//             },
//           ]}
//         />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center md:hidden">
//           <CustomLoader />
//         </div>
//       ) : redeemHistory?.length > 0 ? (
//         <div className="md:hidden mb-10">
//           <RedeemMobileCard
//             data={redeemHistory}
//             onClick={handlePaymentDetails}
//           />
//         </div>
//       ) : (
//         <div className="md:hidden mt-10">
//           <NoDataEmptyState
//             imgClassName="w-14 h-14"
//             textClassName="text-lg"
//             className="py-5 px-3 w-full"
//           />
//         </div>
//       )}

//       {!loading && totalItems > 0 && (
//         <div className="hidden md:block">
//           <Pagination
//             totalItems={totalItems}
//             itemsPerPage={itemsPerPage}
//             onPageChange={handlePageChange}
//             currentPage={currentPage}
//           />
//         </div>
//       )}
//     </>
//   );
// };























// import { useEmptyStates } from "../../utils/hooks";
// import { RedeemHistoryTableRows } from "./table/table-rows";
// import { ReedeemHistoryTableHeadings } from "./table/table-heading";
// import { Pagination } from "../../base-component/ui/pagination/pagination";
// import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
// import SelectField from "../../base-component/ui/fields/select-fields";
// import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";
// import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
// import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

// export const RedeemHistory = () => {
//   const {
//     totalCount,
//     totalItems,
//     loading,
//     itemsPerPage,
//     currentPage,
//     headings,
//     redeemHistory,
//     handlePageChange,
//     handlePaymentDetails,
//     handleSortChange,
//     sort,
//     totalPages,
//     getVisiblePageNumbers,
//   } = useRedeemHistory();

//   const CurrentComponent = useEmptyStates(
//     <RedeemHistoryTableRows
//       data={redeemHistory}
//       onPaymentDetails={handlePaymentDetails}
//     />,
//     totalCount !== 0,
//     loading
//   );

//   return (
//     <>
//       {/* DESKTOP VIEW */}
//       <div className="hidden md:block">
//         <ReedeemHistoryTableHeadings
//           headings={headings}
//           handleSort={handleSortChange}
//           sortValue={sort}
//           isRedeem={true}
//         />
//         {CurrentComponent}
//       </div>

//       {/* MOBILE HEADER WITH SORT */}
//       <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
//         <p className="text-[20px] font-semibold">Redeemed Listing</p>
//         <SelectField
//           handleChange={(value) => handleSortChange(value)}
//           value={sort || "createdAt"}
//           options={[
//             {
//               label: "Points",
//               value: "points",
//             },
//             {
//               label: "Status",
//               value: "status",
//             },
//             {
//               label: "chat",
//               value: "chat",
//             },
//             {
//               label: "Created Date",
//               value: "createdAt",
//             },
//             {
//               label: "Approved Date",
//               value: "approvedDate",
//             },
//           ]}
//         />
//       </div>

//       {/* MOBILE CONTENT */}
//       {loading ? (
//         <div className="flex justify-center items-center md:hidden">
//           <CustomLoader />
//         </div>
//       ) : redeemHistory?.length > 0 ? (
//         <>
//           {/* MOBILE CARD VIEW */}
//           <div className="md:hidden mb-6">
//             <RedeemMobileCard
//               data={redeemHistory}
//               onClick={handlePaymentDetails}
//             />
//           </div>

//           {/* MOBILE PAGINATION - Only show if multiple pages */}
//           {totalPages > 1 && (
//             <div className="md:hidden flex justify-center items-center gap-1 flex-wrap pb-10 mt-6">
//               {/* Previous Button */}
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-2 border border-gray-300 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors disabled:hover:bg-white"
//               >
//                 ← Prev
//               </button>

//               {/* First Page */}
//               {currentPage > 2 && totalPages > 3 && (
//                 <>
//                   <button
//                     onClick={() => handlePageChange(1)}
//                     className="px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
//                   >
//                     1
//                   </button>
//                   {currentPage > 3 && (
//                     <span className="px-2 text-gray-400 text-sm">...</span>
//                   )}
//                 </>
//               )}

//               {/* Visible Page Numbers */}
//               {getVisiblePageNumbers().map((pageNum) => (
//                 <button
//                   key={pageNum}
//                   onClick={() => handlePageChange(pageNum)}
//                   className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
//                     currentPage === pageNum
//                       ? "bg-blue-600 text-white border border-blue-600"
//                       : "border border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   {pageNum}
//                 </button>
//               ))}

//               {/* Last Page */}
//               {currentPage < totalPages - 1 && totalPages > 3 && (
//                 <>
//                   {currentPage < totalPages - 2 && (
//                     <span className="px-2 text-gray-400 text-sm">...</span>
//                   )}
//                   <button
//                     onClick={() => handlePageChange(totalPages)}
//                     className="px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
//                   >
//                     {totalPages}
//                   </button>
//                 </>
//               )}

//               {/* Next Button */}
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-2 border border-gray-300 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors disabled:hover:bg-white"
//               >
//                 Next →
//               </button>

//               {/* Page Info */}
//               <div className="w-full text-center text-xs text-gray-600 mt-3 font-medium">
//                 Page <span className="font-bold">{currentPage}</span> of{" "}
//                 <span className="font-bold">{totalPages}</span>
//               </div>
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="md:hidden mt-10">
//           <NoDataEmptyState
//             imgClassName="w-14 h-14"
//             textClassName="text-lg"
//             className="py-5 px-3 w-full"
//           />
//         </div>
//       )}

//       {/* DESKTOP PAGINATION */}
//       {!loading && totalItems > 0 && (
//         <div className="hidden md:block">
//           <Pagination
//             totalItems={totalItems}
//             itemsPerPage={itemsPerPage}
//             onPageChange={handlePageChange}
//             currentPage={currentPage}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default RedeemHistory;






// import { useEmptyStates } from "../../utils/hooks";
// import { RedeemHistoryTableRows } from "./table/table-rows";
// import { ReedeemHistoryTableHeadings } from "./table/table-heading";
// import { Pagination } from "../../base-component/ui/pagination/pagination";
// import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
// import SelectField from "../../base-component/ui/fields/select-fields";
// import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";
// import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
// import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

// export const RedeemHistory = () => {
//   const {
//     totalCount,
//     totalItems,
//     loading,
//     itemsPerPage,
//     currentPage,
//     headings,
//     redeemHistory,
//     handlePageChange,
//     handlePaymentDetails,
//     handleSortChange,
//     sort,
//     totalPages,
//     getVisiblePageNumbers,
//   } = useRedeemHistory();

//   // Chat handler function
//   const handleChat = (item) => {
//     console.log("Chat clicked for item:", item);
//     // TODO: Implement your chat functionality here
//     // Example: navigate to chat page or open chat modal
//     // navigate(`/chat/${item.id}`);
//   };

//   const CurrentComponent = useEmptyStates(
//     <RedeemHistoryTableRows
//       data={redeemHistory}
//       onPaymentDetails={handlePaymentDetails}
//       onChat={handleChat}
//     />,
//     totalCount !== 0,
//     loading
//   );

//   return (
//     <>
//       {/* DESKTOP VIEW */}
//       <div className="hidden md:block">
//         <ReedeemHistoryTableHeadings
//           headings={headings}
//           handleSort={handleSortChange}
//           sortValue={sort}
//           isRedeem={true}
//         />
//         {CurrentComponent}
//       </div>

//       {/* MOBILE HEADER WITH SORT */}
//       <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
//         <p className="text-[20px] font-semibold">Redeemed Listing</p>
//         <SelectField
//           handleChange={(value) => handleSortChange(value)}
//           value={sort || "createdAt"}
//           options={[
//             {
//               label: "Points",
//               value: "points",
//             },
//             {
//               label: "Status",
//               value: "status",
//             },
//             {
//               label: "Chat",
//               value: "chat",
//             },
//             {
//               label: "Created Date",
//               value: "createdAt",
//             },
//             {
//               label: "Approved Date",
//               value: "approvedDate",
//             },
//           ]}
//         />
//       </div>

//       {/* MOBILE CONTENT */}
//       {loading ? (
//         <div className="flex justify-center items-center md:hidden">
//           <CustomLoader />
//         </div>
//       ) : redeemHistory?.length > 0 ? (
//         <>
//           {/* MOBILE CARD VIEW */}
//           <div className="md:hidden mb-6">
//             <RedeemMobileCard
//               data={redeemHistory}
//               onClick={handlePaymentDetails}
//             />
//           </div>

//           {/* MOBILE PAGINATION - Only show if multiple pages */}
//           {totalPages > 1 && (
//             <div className="md:hidden flex justify-center items-center gap-1 flex-wrap pb-10 mt-6">
//               {/* Previous Button */}
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-2 border border-gray-300 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors disabled:hover:bg-white"
//               >
//                 ← Prev
//               </button>

//               {/* First Page */}
//               {currentPage > 2 && totalPages > 3 && (
//                 <>
//                   <button
//                     onClick={() => handlePageChange(1)}
//                     className="px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
//                   >
//                     1
//                   </button>
//                   {currentPage > 3 && (
//                     <span className="px-2 text-gray-400 text-sm">...</span>
//                   )}
//                 </>
//               )}

//               {/* Visible Page Numbers */}
//               {getVisiblePageNumbers().map((pageNum) => (
//                 <button
//                   key={pageNum}
//                   onClick={() => handlePageChange(pageNum)}
//                   className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
//                     currentPage === pageNum
//                       ? "bg-blue-600 text-white border border-blue-600"
//                       : "border border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   {pageNum}
//                 </button>
//               ))}

//               {/* Last Page */}
//               {currentPage < totalPages - 1 && totalPages > 3 && (
//                 <>
//                   {currentPage < totalPages - 2 && (
//                     <span className="px-2 text-gray-400 text-sm">...</span>
//                   )}
//                   <button
//                     onClick={() => handlePageChange(totalPages)}
//                     className="px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
//                   >
//                     {totalPages}
//                   </button>
//                 </>
//               )}

//               {/* Next Button */}
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-2 border border-gray-300 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors disabled:hover:bg-white"
//               >
//                 Next →
//               </button>

//               {/* Page Info */}
//               <div className="w-full text-center text-xs text-gray-600 mt-3 font-medium">
//                 Page <span className="font-bold">{currentPage}</span> of{" "}
//                 <span className="font-bold">{totalPages}</span>
//               </div>
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="md:hidden mt-10">
//           <NoDataEmptyState
//             imgClassName="w-14 h-14"
//             textClassName="text-lg"
//             className="py-5 px-3 w-full"
//           />
//         </div>
//       )}

//       {/* DESKTOP PAGINATION */}
//       {!loading && totalItems > 0 && (
//         <div className="hidden md:block">
//           <Pagination
//             totalItems={totalItems}
//             itemsPerPage={itemsPerPage}
//             onPageChange={handlePageChange}
//             currentPage={currentPage}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default RedeemHistory;





import { useEmptyStates } from "../../utils/hooks";
import { RedeemHistoryTableRows } from "./table/table-rows";
import { ReedeemHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
import SelectField from "../../base-component/ui/fields/select-fields";
import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

export const RedeemHistory = () => {
  const {
    totalCount,
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    headings,
    redeemHistory,
    handlePageChange,
    handlePaymentDetails,
    handleSortChange,
    sort,
    totalPages,
    getVisiblePageNumbers,
  } = useRedeemHistory();

  const handleChat = (item) => {
    console.log("Chat clicked for item:", item);
  };

  const CurrentComponent = useEmptyStates(
    <RedeemHistoryTableRows
      data={redeemHistory}
      onPaymentDetails={handlePaymentDetails}
      onChat={handleChat}
    />,
    totalCount !== 0,
    loading
  );

  return (
    <>
      {/* ── Desktop Table ── */}
      <div className="hidden md:block">
        <ReedeemHistoryTableHeadings
          headings={headings}
          handleSort={handleSortChange}
          sortValue={sort}
          isRedeem={true}
        />
        {CurrentComponent}
      </div>

      {/* ── Mobile Header + Sort ── */}
      <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
        <p className="text-[20px] font-semibold">Redeemed Listing</p>
        <SelectField
          handleChange={(value) => handleSortChange(value)}
          value={sort || "createdAt"}
          options={[
            { label: "Points", value: "points" },
            { label: "Status", value: "status" },
            { label: "Chat", value: "chat" },
            { label: "Created Date", value: "createdAt" },
            { label: "Approved Date", value: "approvedDate" },
          ]}
        />
      </div>

      {/* ── Mobile Content ── */}
      {loading ? (
        <div className="flex justify-center items-center md:hidden">
          <CustomLoader />
        </div>
      ) : redeemHistory?.length > 0 ? (
        <>
          {/* Mobile Cards */}
          <div className="md:hidden mb-6">
            <RedeemMobileCard
              data={redeemHistory}
              onClick={handlePaymentDetails}
            />
          </div>

          {/* Mobile Pagination */}
          <div className="md:hidden">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </>
      ) : (
        <div className="md:hidden mt-10">
          <NoDataEmptyState
            imgClassName="w-14 h-14"
            textClassName="text-lg"
            className="py-5 px-3 w-full"
          />
        </div>
      )}

      {/* ── Desktop Pagination ── */}
      {!loading && totalItems > 0 && (
        <div className="hidden md:block">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};

export default RedeemHistory;