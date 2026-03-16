// // // // // // // // // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // // // // // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // // // // // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // // // // // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // // // // // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // // // // // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

// // // // // // // // // // // // export const Results = ({ data }) => {
// // // // // // // // // // // //   const cardData = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.points?.total ? data?.points?.total : 0,
// // // // // // // // // // // //       title: "Total Points Earned",
// // // // // // // // // // // //       icon: <PointIcon iconClassName="#1392A4" />,
// // // // // // // // // // // //       bgColor: "#17A2B7",
// // // // // // // // // // // //       link: "#",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.points?.redeemed ? data?.points?.redeemed : 0,
// // // // // // // // // // // //       title: "Total Points Redeemed",
// // // // // // // // // // // //       icon: <PointIcon iconClassName="#F3B700" />,
// // // // // // // // // // // //       bgColor: "#F3B700",
// // // // // // // // // // // //       link: "#",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.points?.active ? data?.points?.active : 0,
// // // // // // // // // // // //       title: "Balance",
// // // // // // // // // // // //       icon: <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // // // // // // // // //       bgColor: "#0F9D58",
// // // // // // // // // // // //       link: "#",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.freeUsers ? data?.freeUsers : 0,
// // // // // // // // // // // //       title: "Free Users",
// // // // // // // // // // // //       icon: <UsersIcon iconClassName="#055860" />,
// // // // // // // // // // // //       bgColor: "#055860",
// // // // // // // // // // // //       link: "#",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.monthlyPremium ? data?.monthlyPremium : 0,
// // // // // // // // // // // //       title: "Monthly Premium Users",
// // // // // // // // // // // //       icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // // // // // // // // //       bgColor: "#F31A1A",
// // // // // // // // // // // //       link: "#",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.yearlyPremium ? data?.yearlyPremium : 0,
// // // // // // // // // // // //       title: "Yearly Premium Users",
// // // // // // // // // // // //       icon: <YearlyPremIcon iconClassName="#9AA000" />,
// // // // // // // // // // // //       bgColor: "#9AA000",
// // // // // // // // // // // //       link: "#",
// // // // // // // // // // // //     },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // // // // // // // // //         {cardData?.map((item, index) => (
// // // // // // // // // // // //           <div key={index} className="h-full">
// // // // // // // // // // // //             <DashboardCard
// // // // // // // // // // // //               key={index}
// // // // // // // // // // // //               bgColor={item.bgColor}
// // // // // // // // // // // //               icon={item.icon}
// // // // // // // // // // // //               link={item.link}
// // // // // // // // // // // //               points={item.points}
// // // // // // // // // // // //               title={item.title}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };



// // // // // // // // // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // // // // // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // // // // // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // // // // // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // // // // // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // // // // // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

// // // // // // // // // // // // export const Results = ({ data }) => {
// // // // // // // // // // // //   const cardData = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.points?.total ? data?.points?.total : 0,
// // // // // // // // // // // //       title: "Total Points Earned",
// // // // // // // // // // // //       icon: <PointIcon iconClassName="#1392A4" />,
// // // // // // // // // // // //       bgColor: "#17A2B7",
// // // // // // // // // // // //       link: "/my-rewards",              // ✅ MyRewardsPage
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.points?.redeemed ? data?.points?.redeemed : 0,
// // // // // // // // // // // //       title: "Total Points Redeemed",
// // // // // // // // // // // //       icon: <PointIcon iconClassName="#F3B700" />,
// // // // // // // // // // // //       bgColor: "#F3B700",
// // // // // // // // // // // //       link: "/my-rewards",              // ✅ MyRewardsPage
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.points?.active ? data?.points?.active : 0,
// // // // // // // // // // // //       title: "Balance",
// // // // // // // // // // // //       icon: <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // // // // // // // // //       bgColor: "#0F9D58",
// // // // // // // // // // // //       link: "/my-rewards",              // ✅ MyRewardsPage
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.freeUsers ? data?.freeUsers : 0,
// // // // // // // // // // // //       title: "Free Users",
// // // // // // // // // // // //       icon: <UsersIcon iconClassName="#055860" />,
// // // // // // // // // // // //       bgColor: "#055860",
// // // // // // // // // // // //       link: "/free-users",             // ✅ FreeUserPage
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.monthlyPremium ? data?.monthlyPremium : 0,
// // // // // // // // // // // //       title: "Monthly Premium Users",
// // // // // // // // // // // //       icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // // // // // // // // //       bgColor: "#F31A1A",
// // // // // // // // // // // //       link: "/monthly-premium-users",  // ✅ MonthlyUserPage
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       points: data?.yearlyPremium ? data?.yearlyPremium : 0,
// // // // // // // // // // // //       title: "Yearly Premium Users",
// // // // // // // // // // // //       icon: <YearlyPremIcon iconClassName="#9AA000" />,
// // // // // // // // // // // //       bgColor: "#9AA000",
// // // // // // // // // // // //       link: "/yearly-premium-users",   // ✅ YearlyUserPage
// // // // // // // // // // // //     },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // // // // // // // // //         {cardData?.map((item, index) => (
// // // // // // // // // // // //           <div key={index} className="h-full">
// // // // // // // // // // // //             <DashboardCard
// // // // // // // // // // // //               key={index}
// // // // // // // // // // // //               bgColor={item.bgColor}
// // // // // // // // // // // //               icon={item.icon}
// // // // // // // // // // // //               link={item.link}
// // // // // // // // // // // //               points={item.points}
// // // // // // // // // // // //               title={item.title}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };






// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // // // // // // import { useLocation } from "react-router-dom";
// // // // // // // // // // // import { readPremiumUsers } from "../../api/slices/premiumUser/premium-user";
// // // // // // // // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // // // // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // // // // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // // // // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // // // // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // // // // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

// // // // // // // // // // // export const Results = ({ data }) => {
// // // // // // // // // // //   const dispatch = useDispatch();
// // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // //   const { user } = useSelector((state) => state.auth);

// // // // // // // // // // //   const [counts, setCounts] = useState({
// // // // // // // // // // //     monthly: 0,
// // // // // // // // // // //     yearly: 0,
// // // // // // // // // // //   });

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchCounts = async () => {
// // // // // // // // // // //       const uid = user?.user?.id;
// // // // // // // // // // //       if (!uid) return;

// // // // // // // // // // //       try {
// // // // // // // // // // //         // ✅ Same API as monthly table - gives REAL count
// // // // // // // // // // //         const monthlyRes = await dispatch(
// // // // // // // // // // //           readPremiumUsers({
// // // // // // // // // // //             data: { uid, type: "monthly", page: 1, size: 10 },
// // // // // // // // // // //           })
// // // // // // // // // // //         );

// // // // // // // // // // //         // ✅ Same API as yearly table - gives REAL count
// // // // // // // // // // //         const yearlyRes = await dispatch(
// // // // // // // // // // //           readPremiumUsers({
// // // // // // // // // // //             data: { uid, type: "yearly", page: 1, size: 10 },
// // // // // // // // // // //           })
// // // // // // // // // // //         );

// // // // // // // // // // //         setCounts({
// // // // // // // // // // //           monthly: monthlyRes?.payload?.pagination?.total || 0, // ✅ Real count e.g. 6
// // // // // // // // // // //           yearly: yearlyRes?.payload?.pagination?.total || 0,
// // // // // // // // // // //         });

// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error("❌ Error fetching counts:", error);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchCounts();
// // // // // // // // // // //   }, [user?.user?.id, dispatch, location.pathname]); // ✅ Auto-refresh on navigation

// // // // // // // // // // //   const cardData = [
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.points?.total ? data?.points?.total : 0,
// // // // // // // // // // //       title: "Total Points Earned",
// // // // // // // // // // //       icon: <PointIcon iconClassName="#1392A4" />,
// // // // // // // // // // //       bgColor: "#17A2B7",
// // // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.points?.redeemed ? data?.points?.redeemed : 0,
// // // // // // // // // // //       title: "Total Points Redeemed",
// // // // // // // // // // //       icon: <PointIcon iconClassName="#F3B700" />,
// // // // // // // // // // //       bgColor: "#F3B700",
// // // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.points?.active ? data?.points?.active : 0,
// // // // // // // // // // //       title: "Balance",
// // // // // // // // // // //       icon: <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // // // // // // // //       bgColor: "#0F9D58",
// // // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.freeUsers ? data?.freeUsers : 0,
// // // // // // // // // // //       title: "Free Users",
// // // // // // // // // // //       icon: <UsersIcon iconClassName="#055860" />,
// // // // // // // // // // //       bgColor: "#055860",
// // // // // // // // // // //       link: "/free-users",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       // ✅ Now uses REAL count from pagination (matches table)
// // // // // // // // // // //       points: counts.monthly,
// // // // // // // // // // //       title: "Monthly Premium Users",
// // // // // // // // // // //       icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // // // // // // // //       bgColor: "#F31A1A",
// // // // // // // // // // //       link: "/monthly-premium-users",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       // ✅ Now uses REAL count from pagination (matches table)
// // // // // // // // // // //       points: counts.yearly,
// // // // // // // // // // //       title: "Yearly Premium Users",
// // // // // // // // // // //       icon: <YearlyPremIcon iconClassName="#9AA000" />,
// // // // // // // // // // //       bgColor: "#9AA000",
// // // // // // // // // // //       link: "/yearly-premium-users",
// // // // // // // // // // //     },
// // // // // // // // // // //   ];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // // // // // // // //         {cardData?.map((item, index) => (
// // // // // // // // // // //           <div key={index} className="h-full">
// // // // // // // // // // //             <DashboardCard
// // // // // // // // // // //               key={index}
// // // // // // // // // // //               bgColor={item.bgColor}
// // // // // // // // // // //               icon={item.icon}
// // // // // // // // // // //               link={item.link}
// // // // // // // // // // //               points={item.points}
// // // // // // // // // // //               title={item.title}
// // // // // // // // // // //             />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };




// // // // // // // // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // // // // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // // // // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // // // // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // // // // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // // // // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

// // // // // // // // // // // export const Results = ({ data }) => {
// // // // // // // // // // //   const cardData = [
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.points?.total ? data?.points?.total : 0,
// // // // // // // // // // //       title: "Total Points Earned",
// // // // // // // // // // //       icon: <PointIcon iconClassName="#1392A4" />,
// // // // // // // // // // //       bgColor: "#17A2B7",
// // // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.points?.redeemed ? data?.points?.redeemed : 0,
// // // // // // // // // // //       title: "Total Points Redeemed",
// // // // // // // // // // //       icon: <PointIcon iconClassName="#F3B700" />,
// // // // // // // // // // //       bgColor: "#F3B700",
// // // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.points?.active ? data?.points?.active : 0,
// // // // // // // // // // //       title: "Balance",
// // // // // // // // // // //       icon: <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // // // // // // // //       bgColor: "#0F9D58",
// // // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       points: data?.freeUsers ? data?.freeUsers : 0,
// // // // // // // // // // //       title: "Free Users",
// // // // // // // // // // //       icon: <UsersIcon iconClassName="#055860" />,
// // // // // // // // // // //       bgColor: "#055860",
// // // // // // // // // // //       link: "/free-users",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       // ✅ Now comes from useDashboard with REAL count (matches table)
// // // // // // // // // // //       points: data?.monthlyPremium ? data?.monthlyPremium : 0,
// // // // // // // // // // //       title: "Monthly Premium Users",
// // // // // // // // // // //       icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // // // // // // // //       bgColor: "#F31A1A",
// // // // // // // // // // //       link: "/monthly-premium-users",
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       // ✅ Now comes from useDashboard with REAL count (matches table)
// // // // // // // // // // //       points: data?.yearlyPremium ? data?.yearlyPremium : 0,
// // // // // // // // // // //       title: "Yearly Premium Users",
// // // // // // // // // // //       icon: <YearlyPremIcon iconClassName="#9AA000" />,
// // // // // // // // // // //       bgColor: "#9AA000",
// // // // // // // // // // //       link: "/yearly-premium-users",
// // // // // // // // // // //     },
// // // // // // // // // // //   ];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // // // // // // // //         {cardData?.map((item, index) => (
// // // // // // // // // // //           <div key={index} className="h-full">
// // // // // // // // // // //             <DashboardCard
// // // // // // // // // // //               key={index}
// // // // // // // // // // //               bgColor={item.bgColor}
// // // // // // // // // // //               icon={item.icon}
// // // // // // // // // // //               link={item.link}
// // // // // // // // // // //               points={item.points}
// // // // // // // // // // //               title={item.title}
// // // // // // // // // // //             />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };



// // // // // // // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // // // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // // // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // // // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // // // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // // // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";
// // // // // // // // // // import { useMyRewards } from "../../hooks/myRewards/useMyRewards";

// // // // // // // // // // export const Results = ({ data }) => {
// // // // // // // // // //   // Pull live calculated totals from useMyRewards
// // // // // // // // // //   const { myRewards } = useMyRewards();

// // // // // // // // // //   const cardData = [
// // // // // // // // // //     {
// // // // // // // // // //       // ✅ Total Points Earned: live from useMyRewards (reward.total)
// // // // // // // // // //       points: myRewards?.reward?.total ?? data?.points?.total ?? 0,
// // // // // // // // // //       title: "Total Points Earned",
// // // // // // // // // //       icon: <PointIcon iconClassName="#1392A4" />,
// // // // // // // // // //       bgColor: "#17A2B7",
// // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       // ✅ Total Points Redeemed: live from useMyRewards (calculated totalRedeemedPoints → reward.redeemed)
// // // // // // // // // //       points: myRewards?.reward?.redeemed ?? data?.points?.redeemed ?? 0,
// // // // // // // // // //       title: "Total Points Redeemed",
// // // // // // // // // //       icon: <PointIcon iconClassName="#F3B700" />,
// // // // // // // // // //       bgColor: "#F3B700",
// // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       // ✅ Balance: live from useMyRewards (reward.active)
// // // // // // // // // //       points: myRewards?.reward?.active ?? data?.points?.active ?? 0,
// // // // // // // // // //       title: "Balance",
// // // // // // // // // //       icon: <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // // // // // // //       bgColor: "#0F9D58",
// // // // // // // // // //       link: "/my-rewards",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       points: data?.freeUsers ? data?.freeUsers : 0,
// // // // // // // // // //       title: "Free Users",
// // // // // // // // // //       icon: <UsersIcon iconClassName="#055860" />,
// // // // // // // // // //       bgColor: "#055860",
// // // // // // // // // //       link: "/free-users",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       points: data?.monthlyPremium ? data?.monthlyPremium : 0,
// // // // // // // // // //       title: "Monthly Premium Users",
// // // // // // // // // //       icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // // // // // // //       bgColor: "#F31A1A",
// // // // // // // // // //       link: "/monthly-premium-users",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       points: data?.yearlyPremium ? data?.yearlyPremium : 0,
// // // // // // // // // //       title: "Yearly Premium Users",
// // // // // // // // // //       icon: <YearlyPremIcon iconClassName="#9AA000" />,
// // // // // // // // // //       bgColor: "#9AA000",
// // // // // // // // // //       link: "/yearly-premium-users",
// // // // // // // // // //     },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // // // // // // //         {cardData?.map((item, index) => (
// // // // // // // // // //           <div key={index} className="h-full">
// // // // // // // // // //             <DashboardCard
// // // // // // // // // //               key={index}
// // // // // // // // // //               bgColor={item.bgColor}
// // // // // // // // // //               icon={item.icon}
// // // // // // // // // //               link={item.link}
// // // // // // // // // //               points={item.points}
// // // // // // // // // //               title={item.title}
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };



// // // // // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";
// // // // // // // // import { useMyRewards } from "../../hooks/myRewards/useMyRewards";

// // // // // // // // export const Results = ({ data }) => {
// // // // // // // //   // Pull live calculated totals from useMyRewards
// // // // // // // //   const { myRewards } = useMyRewards();

// // // // // // // //   const cardData = [
// // // // // // // //     {
// // // // // // // //       // ✅ Total Points Earned: same active value shown on RewardsCard
// // // // // // // //       points: myRewards?.reward?.active ?? data?.points?.active ?? 0,
// // // // // // // //       title: "Total Points Earned",
// // // // // // // //       icon: <PointIcon iconClassName="#1392A4" />,
// // // // // // // //       bgColor: "#17A2B7",
// // // // // // // //       link: "/my-rewards",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       // ✅ Total Points Redeemed: live from useMyRewards (calculated totalRedeemedPoints → reward.redeemed)
// // // // // // // //       points: myRewards?.reward?.redeemed ?? data?.points?.redeemed ?? 0,
// // // // // // // //       title: "Total Points Redeemed",
// // // // // // // //       icon: <PointIcon iconClassName="#F3B700" />,
// // // // // // // //       bgColor: "#F3B700",
// // // // // // // //       link: "/my-rewards",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       // ✅ Balance: live from useMyRewards (reward.active)
// // // // // // // //       points: myRewards?.reward?.active ?? data?.points?.active ?? 0,
// // // // // // // //       title: "Balance",
// // // // // // // //       icon: <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // // // // //       bgColor: "#0F9D58",
// // // // // // // //       link: "/my-rewards",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       points: data?.freeUsers ? data?.freeUsers : 0,
// // // // // // // //       title: "Free Users",
// // // // // // // //       icon: <UsersIcon iconClassName="#055860" />,
// // // // // // // //       bgColor: "#055860",
// // // // // // // //       link: "/free-users",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       points: data?.monthlyPremium ? data?.monthlyPremium : 0,
// // // // // // // //       title: "Monthly Premium Users",
// // // // // // // //       icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // // // // //       bgColor: "#F31A1A",
// // // // // // // //       link: "/monthly-premium-users",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       points: data?.yearlyPremium ? data?.yearlyPremium : 0,
// // // // // // // //       title: "Yearly Premium Users",
// // // // // // // //       icon: <YearlyPremIcon iconClassName="#9AA000" />,
// // // // // // // //       bgColor: "#9AA000",
// // // // // // // //       link: "/yearly-premium-users",
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // // // // //         {cardData?.map((item, index) => (
// // // // // // // //           <div key={index} className="h-full">
// // // // // // // //             <DashboardCard
// // // // // // // //               key={index}
// // // // // // // //               bgColor={item.bgColor}
// // // // // // // //               icon={item.icon}
// // // // // // // //               link={item.link}
// // // // // // // //               points={item.points}
// // // // // // // //               title={item.title}
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };


// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";
// // // // // // // // import { fetchMyRewardsUtil } from "../../utils/utility";
// // // // // // // // import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";

// // // // // // // // export const Results = ({ data }) => {
// // // // // // // //   const dispatch = useDispatch();
// // // // // // // //   const { user, loading: authLoading } = useSelector((state) => state.auth);

// // // // // // // //   const [myRewards, setMyRewards] = useState(null);
// // // // // // // //   const [totalRedeemedPoints, setTotalRedeemedPoints] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     // if (authLoading || !user? user?.id) return;
// // // // // // // //     if (authLoading || !user?.id) return;

// // // // // // // //     // Fetch rewards balance on mount
// // // // // // // //     fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });

// // // // // // // //     // Calculate total redeemed points on mount
// // // // // // // //     const calculateTotalRedeemedPoints = async () => {
// // // // // // // //       try {
// // // // // // // //         let allRedeems = [];
// // // // // // // //         let currentPage = 1;
// // // // // // // //         let hasMore = true;

// // // // // // // //         while (hasMore) {
// // // // // // // //           const response = await dispatch(
// // // // // // // //             readRedeemHistory({
// // // // // // // //               params: {
// // // // // // // //                 uid: user.user.id,
// // // // // // // //                 page: currentPage,
// // // // // // // //                 size: 100,
// // // // // // // //                 sort: "createdAt",
// // // // // // // //                 order: "desc",
// // // // // // // //               },
// // // // // // // //             })
// // // // // // // //           );

// // // // // // // //           if (response?.payload?.data && Array.isArray(response.payload.data)) {
// // // // // // // //             allRedeems = [...allRedeems, ...response.payload.data];
// // // // // // // //             const pagination = response.payload.pagination;
// // // // // // // //             const totalPages = Math.ceil(pagination.total / 100);
// // // // // // // //             if (currentPage >= totalPages) {
// // // // // // // //               hasMore = false;
// // // // // // // //             } else {
// // // // // // // //               currentPage++;
// // // // // // // //             }
// // // // // // // //           } else {
// // // // // // // //             hasMore = false;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         const total = allRedeems.reduce((sum, redeem) => {
// // // // // // // //           return sum + (parseInt(redeem.points, 10) || 0);
// // // // // // // //         }, 0);

// // // // // // // //         setTotalRedeemedPoints(total);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Error calculating total redeemed points:", err);
// // // // // // // //         setTotalRedeemedPoints(0);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     calculateTotalRedeemedPoints();
// // // // // // // //   }, [dispatch, user, authLoading]);

// // // // // // // //   const activePoints = myRewards?.reward?.active ?? data?.points?.active ?? 0;
// // // // // // // //   const redeemedPoints = totalRedeemedPoints ?? data?.points?.redeemed ?? 0;

// // // // // // // //   const cardData = [
// // // // // // // //     {
// // // // // // // //       // ✅ Total Points Earned = same as RewardsCard active balance
// // // // // // // //       points: activePoints,
// // // // // // // //       title: "Total Points Earned",
// // // // // // // //       icon: <PointIcon iconClassName="#1392A4" />,
// // // // // // // //       bgColor: "#17A2B7",
// // // // // // // //       link: "/my-rewards",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       // ✅ Total Points Redeemed = calculated from readRedeemHistory
// // // // // // // //       points: redeemedPoints,
// // // // // // // //       title: "Total Points Redeemed",
// // // // // // // //       icon: <PointIcon iconClassName="#F3B700" />,
// // // // // // // //       bgColor: "#F3B700",
// // // // // // // //       link: "/my-rewards",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       // ✅ Balance = active points
// // // // // // // //       points: activePoints,
// // // // // // // //       title: "Balance",
// // // // // // // //       icon: <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // // // // //       bgColor: "#0F9D58",
// // // // // // // //       link: "/my-rewards",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       points: data?.freeUsers ? data?.freeUsers : 0,
// // // // // // // //       title: "Free Users",
// // // // // // // //       icon: <UsersIcon iconClassName="#055860" />,
// // // // // // // //       bgColor: "#055860",
// // // // // // // //       link: "/free-users",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       points: data?.monthlyPremium ? data?.monthlyPremium : 0,
// // // // // // // //       title: "Monthly Premium Users",
// // // // // // // //       icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // // // // //       bgColor: "#F31A1A",
// // // // // // // //       link: "/monthly-premium-users",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       points: data?.yearlyPremium ? data?.yearlyPremium : 0,
// // // // // // // //       title: "Yearly Premium Users",
// // // // // // // //       icon: <YearlyPremIcon iconClassName="#9AA000" />,
// // // // // // // //       bgColor: "#9AA000",
// // // // // // // //       link: "/yearly-premium-users",
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // // // // //         {cardData?.map((item, index) => (
// // // // // // // //           <div key={index} className="h-full">
// // // // // // // //             <DashboardCard
// // // // // // // //               key={index}
// // // // // // // //               bgColor={item.bgColor}
// // // // // // // //               icon={item.icon}
// // // // // // // //               link={item.link}
// // // // // // // //               points={item.points}
// // // // // // // //               title={item.title}
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };



// // // // // import { UsersIcon } from "../../assets/svgs/components/users-icon";
// // // // // import { DashboardCard } from "../../base-component/ui/dashboard-card";
// // // // // import { PointIcon } from "../../assets/svgs/components/point-icon";
// // // // // import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// // // // // import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// // // // // import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

// // // // // export const Results = ({ data }) => {
// // // // //   // data = { points: {...}, freeUsers, monthlyPremium, yearlyPremium }
// // // // //   // (counts are spread at root level in useDashboard hook)
// // // // //   const points         = data?.points        ?? {};
// // // // //   const freeUsers      = data?.freeUsers     ?? 0;
// // // // //   const monthlyPremium = data?.monthlyPremium ?? 0;
// // // // //   const yearlyPremium  = data?.yearlyPremium  ?? 0;
// // // // //   const activePoints   = points?.active      ?? 0;
// // // // //   const redeemedPoints = points?.redeemed    ?? 0;
// // // // //   const totalPoints   = points?.total      ?? 0;

// // // // //   const cardData = [
// // // // //     {
// // // // //       points:  totalPoints,
// // // // //       title:   "Total Points Earned",
// // // // //       icon:    <PointIcon iconClassName="#1392A4" />,
// // // // //       bgColor: "#17A2B7",
// // // // //       link:    "/my-rewards",
// // // // //     },
// // // // //     {
// // // // //       points:  redeemedPoints,
// // // // //       title:   "Total Points Redeemed",
// // // // //       icon:    <PointIcon iconClassName="#F3B700" />,
// // // // //       bgColor: "#F3B700",
// // // // //       link:    "/my-rewards",
// // // // //     },
// // // // //     {
// // // // //       points:  activePoints,
// // // // //       title:   "Balance",
// // // // //       icon:    <RedeeemHistoryIcon iconClassName="#048345" />,
// // // // //       bgColor: "#0F9D58",
// // // // //       link:    "/my-rewards",
// // // // //     },
// // // // //     {
// // // // //       points:  freeUsers,
// // // // //       title:   "Free Users",
// // // // //       icon:    <UsersIcon iconClassName="#055860" />,
// // // // //       bgColor: "#055860",
// // // // //       link:    "/free-users",
// // // // //     },
// // // // //     {
// // // // //       points:  monthlyPremium,
// // // // //       title:   "Monthly Premium Users",
// // // // //       icon:    <MonthlyPremIcon iconClassName="#F31A1A" />,
// // // // //       bgColor: "#F31A1A",
// // // // //       // link:    "/monthly-premium-users",
// // // // //     },
// // // // //     {
// // // // //       points:  yearlyPremium,
// // // // //       title:   "Yearly Premium Users",
// // // // //       icon:    <YearlyPremIcon iconClassName="#9AA000" />,
// // // // //       bgColor: "#9AA000",
// // // // //       // link:    "/yearly-premium-users",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
// // // // //         {cardData?.map((item, index) => (
// // // // //           <div key={index} className="h-full">
// // // // //             <DashboardCard
// // // // //               bgColor={item.bgColor}
// // // // //               icon={item.icon}
// // // // //               link={item.link}
// // // // //               points={item.points}
// // // // //               title={item.title}
// // // // //             />
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };


// import { UsersIcon } from "../../assets/svgs/components/users-icon";
// import { DashboardCard } from "../../base-component/ui/dashboard-card";
// import { PointIcon } from "../../assets/svgs/components/point-icon";
// import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
// import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
// import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

// export const Results = ({ data }) => {
//   const points         = data?.points        ?? {};
//    const freeUsers      = data?.freeUsers     ?? 0;
//   const monthlyPremium = data?.monthlyPremium ?? 0;
//   const yearlyPremium  = data?.yearlyPremium  ?? 0;

//   const activePoints   = points?.active      ?? 0;
//   const redeemedPoints = points?.redeemed    ?? 0;
//   const totalPoints    = points?.total       ?? 0;

//   const cardData = [
//     {
//       points:  totalPoints,
//       title:   "Total Points Earned",
//       icon:    <PointIcon iconClassName="#1392A4" />,
//       bgColor: "#17A2B7",
//       link:    "/my-rewards",
//     },
//     {
//       points:  redeemedPoints,
//       title:   "Total Points Redeemed",
//       icon:    <PointIcon iconClassName="#F3B700" />,
//       bgColor: "#F3B700",
//       link:    "/my-rewards",
//     },
//     {
//       points:  activePoints,
//       title:   "Balance",
//       icon:    <RedeeemHistoryIcon iconClassName="#048345" />,
//       bgColor: "#0F9D58",
//       link:    "/my-rewards",
//     },
//     {
//       points:  freeUsers,
//       title:   "Free Users",
//       icon:    <UsersIcon iconClassName="#055860" />,
//       bgColor: "#055860",
//       link:    "/free-users",
//     },
//     {
//       points:  monthlyPremium,
//       title:   "Monthly Premium Users",
//       icon:    <MonthlyPremIcon iconClassName="#F31A1A" />,
//       bgColor: "#F31A1A",
//       link:    "/monthly-premium-users?status=subscribed",

//     },
//     {
//       points:  yearlyPremium,
//       title:   "Yearly Premium Users",
//       icon:    <YearlyPremIcon iconClassName="#9AA000" />,
//       bgColor: "#9AA000",
//       link:    "/yearly-premium-users?status=subscribed",

//     },
//   ];

//   return (
//     <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px] items-stretch">
//         {cardData?.map((item, index) => (
//           <div key={index} className="h-full">
//             <DashboardCard
//               bgColor={item.bgColor}
//               icon={item.icon}
//               link={item.link}
//               points={item.points}
//               title={item.title}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// // //free users 




import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
import { UsersIcon } from "../../assets/svgs/components/users-icon";
import { DashboardCard } from "../../base-component/ui/dashboard-card";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

export const Results = ({ data }) => {
  const dispatch     = useDispatch();
  const user         = useSelector((state) => state?.auth?.user);
  const authLoading  = useSelector((state) => state?.auth?.loading);
  const freeUserStats = useSelector((state) => state?.freeUser?.freeUser?.stats);

  // ✅ Fetch free user stats on mount if not already loaded
  useEffect(() => {
    if (authLoading || !user?.id) return;
    if (freeUserStats?.totalUsers !== undefined && freeUserStats?.totalUsers !== 0) return; // already loaded

    dispatch(readFreeUserListing({
      params: { uid: user.id, page: 1, size: 10 },
    }));
  }, [user, authLoading]);

  const points         = data?.points        ?? {};
  const freeUsers      = freeUserStats?.totalUsers ?? data?.freeUsers ?? 0;
  const monthlyPremium = data?.monthlyPremium ?? 0;
  const yearlyPremium  = data?.yearlyPremium  ?? 0;

  const activePoints   = points?.active      ?? 0;
  const redeemedPoints = points?.redeemed    ?? 0;
  const totalPoints    = points?.total       ?? 0;

  const cardData = [
    {
      points:  totalPoints,
      title:   "Total Points Earned",
      icon:    <PointIcon iconClassName="#1392A4" />,
      bgColor: "#17A2B7",
      link:    "/my-rewards",
    },
    {
      points:  redeemedPoints,
      title:   "Total Points Redeemed",
      icon:    <PointIcon iconClassName="#F3B700" />,
      bgColor: "#F3B700",
      link:    "/my-rewards",
    },
    {
      points:  activePoints,
      title:   "Balance",
      icon:    <RedeeemHistoryIcon iconClassName="#048345" />,
      bgColor: "#0F9D58",
      link:    "/my-rewards",
    },
    {
      points:  freeUsers,
      title:   "Free Users",
      icon:    <UsersIcon iconClassName="#055860" />,
      bgColor: "#055860",
      link:    "/free-users",
    },
    {
      points:  monthlyPremium,
      title:   "Monthly Premium Users",
      icon:    <MonthlyPremIcon iconClassName="#F31A1A" />,
      bgColor: "#F31A1A",
      link:    "/monthly-premium-users?status=subscribed",
    },
    {
      points:  yearlyPremium,
      title:   "Yearly Premium Users",
      icon:    <YearlyPremIcon iconClassName="#9AA000" />,
      bgColor: "#9AA000",
      link:    "/yearly-premium-users?status=subscribed",
    },
  ];

  return (
    <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px] items-stretch">
        {cardData?.map((item, index) => (
          <div key={index} className="h-full">
            <DashboardCard
              bgColor={item.bgColor}
              icon={item.icon}
              link={item.link}
              points={item.points}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};