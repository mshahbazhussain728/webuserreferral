// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { ModalType } from "../../types/ui";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMyRewardsUtil } from "../../utils/utility";
// import { updateModalType } from "../../api/slices/globalSlice/global";
// import { redeemRequest } from "../../api/slices/redeemRequest/redeem-request";
// import { RedeemRequestFormFields } from "../../components/requestRedeem/redeem-request-fields";
// import { generateRedeemPointsValidationSchema } from "../../validation/redeem-points-validation";

// export const useRedeemRequest = () => {
//   const dispatch = useDispatch();
//   const { user, loading: authLoading } = useSelector((state) => state.auth);
//   const [myRewards, setMyRewards] = useState(null);
//   const { loading } = useSelector((state) => state.redeemRequest);
//   const { loading: myRewardsLoading } = useSelector((state) => state.myRewards);

//   useEffect(() => {
//     fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });
//   }, [dispatch, authLoading, user]);

//   const handleRedeemRequest = () => {
//     dispatch(updateModalType({ type: ModalType.REDEEM_REQUEST_SUCCESS }));
//   };

//   const schema = generateRedeemPointsValidationSchema();

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     setError,
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const fields = RedeemRequestFormFields(register, loading, control);

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     const uid = user?.user?.id;
//     if (!uid) return;

//     formData.append("points", data?.points);
//     formData.append("uid", uid);

//     try {
//       const res = await dispatch(redeemRequest({ data: formData, setError }));
//       if (res?.payload) {
//         handleRedeemRequest();
//         reset();
//       }
//     } catch (error) {
//       toast.error(errors);
//       throw error;
//     }
//   };

//   return {
//     handleSubmit,
//     errors,
//     fields,
//     onSubmit,
//     myRewards,
//     myRewardsLoading,
//   };
// };





import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalType } from "../../types/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyRewardsUtil } from "../../utils/utility";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { redeemRequest } from "../../api/slices/redeemRequest/redeem-request";
import { RedeemRequestFormFields } from "../../components/requestRedeem/redeem-request-fields";
import { generateRedeemPointsValidationSchema } from "../../validation/redeem-points-validation";

export const useRedeemRequest = () => {
  const dispatch = useDispatch();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [myRewards, setMyRewards] = useState(null);
  const { loading } = useSelector((state) => state.redeemRequest);
  const { loading: myRewardsLoading } = useSelector((state) => state.myRewards);

  useEffect(() => {
    fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });
  }, [dispatch, authLoading, user]);

  const handleRedeemRequest = () => {
    dispatch(updateModalType({ type: ModalType.REDEEM_REQUEST_SUCCESS }));
  };

  // Generate schema with minimum 100 points validation
  const schema = generateRedeemPointsValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = RedeemRequestFormFields(register, loading, control);

  const onSubmit = async (data) => {
    const uid = user?.user?.id;
    if (!uid) {
      toast.error("User not authenticated");
      return;
    }

    // Validate minimum points
    const points = parseInt(data?.points, 10);
    if (isNaN(points)) {
      setError("points", {
        type: "manual",
        message: "Please enter a valid number",
      });
      toast.error("Please enter a valid number");
      return;
    }

    if (points < 100) {
      setError("points", {
        type: "manual",
        message: "Minimum withdrawal is 100 points",
      });
      toast.error("Minimum withdrawal is 100 points");
      return;
    }

    // Check if user has enough points
    const userPoints = myRewards?.points || 0;
    if (points > userPoints) {
      setError("points", {
        type: "manual",
        message: `Insufficient points. You have ${userPoints} points`,
      });
      toast.error(`Insufficient points. You have ${userPoints} points`);
      return;
    }

    const formData = new FormData();
    formData.append("points", points);
    formData.append("uid", uid);

    try {
      console.log("📤 Submitting redeem request with points:", points);
      const res = await dispatch(redeemRequest({ data: formData, setError }));
      
      if (res?.payload) {
        console.log("✅ Redeem request successful");
        toast.success("Redeem request submitted successfully");
        handleRedeemRequest();
        reset();
      }
    } catch (error) {
      console.error("❌ Error submitting redeem request:", error);
      toast.error(error?.message || "Failed to submit redeem request");
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
    myRewards,
    myRewardsLoading,
  };
};