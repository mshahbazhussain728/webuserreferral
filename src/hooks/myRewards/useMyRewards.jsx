// import { ModalType } from "../../types/ui";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMyRewardsUtil } from "../../utils/utility";
// import { PointIcon } from "../../assets/svgs/components/point-icon";
// import { updateModalType } from "../../api/slices/globalSlice/global";
// import { GetCouponIcon } from "../../assets/svgs/components/get-coupon-icon";
// import { GetCouponFormFields } from "../../components/myRewards/get-coupon-fields";
// import { readMyRewardsDiscount } from "../../api/slices/myRewards/myRewardsSlice";
// import { generateGetCouponValidationSchema } from "../../validation/redeem-points-validation";

// export const useMyRewards = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [myRewards, setMyRewards] = useState(null);
//   const { loading } = useSelector((state) => state.myRewards);
//   const [myRewardsDiscount, setMyRewardsDiscount] = useState(null);
//   const { user, loading: authLoading } = useSelector((state) => state.auth);

//   const schema = generateGetCouponValidationSchema();

//   useEffect(() => {
//     fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });
//   }, [dispatch, authLoading, user]);

//   useEffect(() => {
//     const fetchMyRewardsDiscount = async () => {
//       try {
//         const response = await dispatch(readMyRewardsDiscount({}));
//         if (response?.payload?.data) {
//           setMyRewardsDiscount(response?.payload?.data);
//         }
//       } catch (err) {
//         console.error("Error fetching dashboard links:", err);
//       }
//     };

//     fetchMyRewardsDiscount();
//   }, [dispatch]);

//   const handleGetCouponModal = () => {
//     dispatch(updateModalType({ type: ModalType.GET_COUPON_MODAL }));
//   };

//   const handleRedeemPoints = (type, points, loading) => {
//     dispatch(
//       updateModalType({
//         type: ModalType.COUPON_POINTS,
//         data: { actionType: "REDEEM_SUCCESS", type, points, loading },
//       })
//     );
//   };

//   const rewardsActions = [
//     {
//       icon: PointIcon,
//       text: "Points History",
//       onClick: () => navigate("/point-history"),
//     },
//     {
//       icon: GetCouponIcon,
//       text: "Get a coupon",
//       onClick: handleGetCouponModal,
//     },
//     {
//       icon: PointIcon,
//       text: "Request Redeem",
//       onClick: () => navigate("/request-redeem"),
//     },
//   ];

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const fields = GetCouponFormFields(register, loading);

//   const onSubmit = async (data) => {
//     if (!myRewardsDiscount) {
//       return;
//     }

//     const type = data?.couponType;
//     let points;
//     if (type === "monthly") {
//       points = myRewardsDiscount?.referralPointsForMonthlySubscription;
//     } else {
//       points = myRewardsDiscount?.referralPointsForYearlySubscription;
//     }
//     handleRedeemPoints(type, points, loading);
//   };

//   return {
//     rewardsActions,
//     handleGetCouponModal,
//     fields: fields,
//     onSubmit,
//     control,
//     handleSubmit,
//     errors,
//     loading,
//     myRewards,
//   };
// };


import { ModalType } from "../../types/ui";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyRewardsUtil } from "../../utils/utility";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { GetCouponIcon } from "../../assets/svgs/components/get-coupon-icon";
import { GetCouponFormFields } from "../../components/myRewards/get-coupon-fields";
import { readMyRewardsDiscount } from "../../api/slices/myRewards/myRewardsSlice";
import { generateGetCouponValidationSchema } from "../../validation/redeem-points-validation";

export const useMyRewards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myRewards, setMyRewards] = useState(null);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const { loading } = useSelector((state) => state.myRewards);
  const [myRewardsDiscount, setMyRewardsDiscount] = useState(null);
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  const schema = generateGetCouponValidationSchema();

  useEffect(() => {
    fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });
  }, [dispatch, authLoading, user]);

  useEffect(() => {
    const fetchMyRewardsDiscount = async () => {
      try {
        const response = await dispatch(readMyRewardsDiscount({}));
        if (response?.payload?.data) {
          setMyRewardsDiscount(response?.payload?.data);
        }
      } catch (err) {
        console.error("Error fetching dashboard links:", err);
      }
    };

    fetchMyRewardsDiscount();
  }, [dispatch]);

  const handleGetCouponModal = () => {
    dispatch(updateModalType({ type: ModalType.GET_COUPON_MODAL }));
  };

  const rewardsActions = [
    {
      icon: PointIcon,
      text: "Points History",
      onClick: () => navigate("/point-history"),
    },
    {
      icon: GetCouponIcon,
      text: "Get a coupon",
      onClick: handleGetCouponModal,
    },
    {
      icon: PointIcon,
      text: "Request Redeem",
      onClick: () => navigate("/request-redeem"),
    },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = GetCouponFormFields(register, loading);

  const onSubmit = async (data) => {
    console.log("Form submitted with data:", data);

    if (!myRewardsDiscount) {
      console.error("Rewards discount data not available");
      dispatch(
        updateModalType({
          type: ModalType.ERROR_MODAL,
          data: {
            message: "Unable to load coupon information. Please try again.",
          },
        })
      );
      return;
    }

    if (!myRewards?.reward) {
      console.error("User rewards data not available");
      dispatch(
        updateModalType({
          type: ModalType.ERROR_MODAL,
          data: {
            message: "Unable to load your rewards. Please refresh the page.",
          },
        })
      );
      return;
    }

    const type = data?.couponType;
    let points;

    if (type === "monthly") {
      points = myRewardsDiscount?.referralPointsForMonthlySubscription;
    } else if (type === "yearly") {
      points = myRewardsDiscount?.referralPointsForYearlySubscription;
    } else {
      console.error("Invalid coupon type:", type);
      dispatch(
        updateModalType({
          type: ModalType.ERROR_MODAL,
          data: {
            message: "Please select a valid coupon type.",
          },
        })
      );
      return;
    }

    // Check if user has enough points
    const currentPoints = myRewards?.reward?.active || 0;
    if (currentPoints < points) {
      console.error(`Not enough points. Need: ${points}, Have: ${currentPoints}`);
      dispatch(
        updateModalType({
          type: ModalType.ERROR_MODAL,
          data: {
            message: `You need ${points} points but only have ${currentPoints} points.`,
          },
        })
      );
      return;
    }

    // Start redemption process
    setIsRedeeming(true);

    try {
      console.log("Calling redemption API...");
      
      // REPLACE THIS URL WITH YOUR ACTUAL REDEMPTION API ENDPOINT
      const response = await fetch("YOUR_REDEMPTION_API_ENDPOINT_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization if needed
          // "Authorization": `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          couponType: type,
          points: points,
          userId: user?.id,
          // Add any other fields your API needs
        }),
      });

      const apiResponse = await response.json();
      console.log("API Response:", apiResponse);

      if (response.ok && apiResponse.success) {
        // Success - show success modal with API response
        dispatch(
          updateModalType({
            type: ModalType.COUPON_POINTS,
            data: {
              actionType: "REDEEM_SUCCESS",
              couponType: type,
              points: points,
              apiResponse: apiResponse,
              message: apiResponse.message || "Coupon redeemed successfully!",
            },
          })
        );

        // Close the Get Coupon modal
        dispatch(updateModalType({ type: null }));

        // Reset form
        reset();

        // Refresh rewards data to show updated points
        await fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });
      } else {
        // API returned error
        throw new Error(apiResponse.message || "Failed to redeem coupon");
      }
    } catch (error) {
      console.error("Redemption error:", error);
      
      // Show error modal
      dispatch(
        updateModalType({
          type: ModalType.ERROR_MODAL,
          data: {
            message: error.message || "Failed to redeem coupon. Please try again.",
          },
        })
      );
    } finally {
      setIsRedeeming(false);
    }
  };

  return {
    rewardsActions,
    handleGetCouponModal,
    fields: fields,
    onSubmit,
    control,
    handleSubmit,
    errors,
    loading: loading || isRedeeming,
    myRewards,
    isRedeeming,
  };
};
