// // // // // // import { setErrors } from "../../../utils/utility";
// // // // // // import apiServices from "../../../services/requestHandler";
// // // // // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // // // // const initialState = {
// // // // // //   premiumUser: undefined,
// // // // // //   loading: true,
// // // // // //   error: null,
// // // // // // };

// // // // // // export const readPremiumUsers = createAsyncThunk(
// // // // // //   "premium/user",
// // // // // //   async (args, thunkApi) => {
// // // // // //     const { data, setError } = args;

// // // // // //     try {
// // // // // //       const response = await apiServices.premiumUser(data);
// // // // // //       return response?.data;
// // // // // //     } catch (e) {
// // // // // //       const errorMessage = e?.response?.data?.message || "Network Error";
// // // // // //       thunkApi.dispatch(setErrorMessage(errorMessage));
// // // // // //       setErrors(setError, e?.response?.data || {});

// // // // // //       return thunkApi.rejectWithValue({
// // // // // //         message: errorMessage,
// // // // // //         status: e?.response?.status || 500,
// // // // // //       });
// // // // // //     }
// // // // // //   }
// // // // // // );

// // // // // // const premiumUsersSlice = createSlice({
// // // // // //   name: "premium-users",
// // // // // //   initialState,
// // // // // //   reducers: {
// // // // // //     setErrorMessage: (state, action) => {
// // // // // //       state.error = action.payload;
// // // // // //     },
// // // // // //   },
// // // // // //   extraReducers: (builder) => {
// // // // // //     builder.addCase(readPremiumUsers.pending, (state) => {
// // // // // //       state.loading = true;
// // // // // //     });
// // // // // //     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
// // // // // //       if (action?.payload) state.premiumUser = action.payload.data;
// // // // // //       state.loading = false;
// // // // // //     });
// // // // // //     builder.addCase(readPremiumUsers.rejected, (state) => {
// // // // // //       state.loading = false;
// // // // // //     });
// // // // // //   },
// // // // // // });

// // // // // // export default premiumUsersSlice.reducer;
// // // // // // export const { setErrorMessage } = premiumUsersSlice.actions;





// // // // // // import { setErrors } from "../../../utils/utility";
// // // // // // import apiServices from "../../../services/requestHandler";
// // // // // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // // // // const initialState = {
// // // // // //   premiumUser: undefined,
// // // // // //   loading: true,
// // // // // //   error: null,
// // // // // // };

// // // // // // export const readPremiumUsers = createAsyncThunk(
// // // // // //   "premium/user",
// // // // // //   async (args, thunkApi) => {
// // // // // //     const { data, setError } = args;

// // // // // //     try {
// // // // // //       const response = await apiServices.premiumUser(data);
// // // // // //       return response?.data;
// // // // // //     } catch (e) {
// // // // // //       const errorMessage = e?.response?.data?.message || "Network Error";
// // // // // //       thunkApi.dispatch(setErrorMessage(errorMessage));
// // // // // //       setErrors(setError, e?.response?.data || {});

// // // // // //       return thunkApi.rejectWithValue({
// // // // // //         message: errorMessage,
// // // // // //         status: e?.response?.status || 500,
// // // // // //       });
// // // // // //     }
// // // // // //   }
// // // // // // );

// // // // // // const premiumUsersSlice = createSlice({
// // // // // //   name: "premium-users",
// // // // // //   initialState,
// // // // // //   reducers: {
// // // // // //     setErrorMessage: (state, action) => {
// // // // // //       state.error = action.payload;
// // // // // //     },
// // // // // //   },
// // // // // //   extraReducers: (builder) => {
// // // // // //     builder.addCase(readPremiumUsers.pending, (state) => {
// // // // // //       state.loading = true;
// // // // // //     });
// // // // // //     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
// // // // // //       if (action?.payload) {
// // // // // //         // Structure the data to match what the hook expects
// // // // // //         state.premiumUser = {
// // // // // //           data: action.payload.data,
// // // // // //           metrics: {
// // // // // //             data: action.payload.data,
// // // // // //             total: action.payload.count || action.payload.data?.length || 0,
// // // // // //             thisMonth: action.payload.thisMonth || 0,
// // // // // //             thisWeek: action.payload.thisWeek || 0,
// // // // // //             totalrevenue: action.payload.totalRevenue || 0,
// // // // // //           },
// // // // // //           pagination: {
// // // // // //             total: action.payload.count || action.payload.data?.length || 0,
// // // // // //             page: action.payload.page || 1,
// // // // // //             size: action.payload.size || 10,
// // // // // //           }
// // // // // //         };
// // // // // //       }
// // // // // //       state.loading = false;
// // // // // //     });
// // // // // //     builder.addCase(readPremiumUsers.rejected, (state) => {
// // // // // //       state.loading = false;
// // // // // //     });
// // // // // //   },
// // // // // // });

// // // // // // export default premiumUsersSlice.reducer;
// // // // // // export const { setErrorMessage } = premiumUsersSlice.actions;



// // // // // import { setErrors } from "../../../utils/utility";
// // // // // import apiServices from "../../../services/requestHandler";
// // // // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // // // const initialState = {
// // // // //   premiumUser: undefined,
// // // // //   loading: true,
// // // // //   error: null,
// // // // // };

// // // // // export const readPremiumUsers = createAsyncThunk(
// // // // //   "premium/user",
// // // // //   async (args, thunkApi) => {
// // // // //     const { data, setError } = args;

// // // // //     try {
// // // // //       // GET /referrals/users/paid
// // // // //       // HttpProvider.get() returns raw axios response
// // // // //       // so response.data = full API response body:
// // // // //       // {
// // // // //       //   success: true,
// // // // //       //   message: "Subscribed users get successfully.",
// // // // //       //   data: [
// // // // //       //     { id, referredUid, points, name, image, type, phoneCode, balance,
// // // // //       //       phoneNo, installedDate, createdAt, updatedAt, deletedAt,
// // // // //       //       Subscriptions: [{ id, uid, startDate, endDate, clearedDate,
// // // // //       //                         canceledDate, status, planType, ... }] }
// // // // //       //   ]
// // // // //       // }
// // // // //       const response = await apiServices.premiumUser(data);
// // // // //       return response?.data;
// // // // //     } catch (e) {
// // // // //       const errorMessage = e?.response?.data?.message || "Network Error";
// // // // //       thunkApi.dispatch(setErrorMessage(errorMessage));
// // // // //       setErrors(setError, e?.response?.data || {});
// // // // //       return thunkApi.rejectWithValue({
// // // // //         message: errorMessage,
// // // // //         status: e?.response?.status || 500,
// // // // //       });
// // // // //     }
// // // // //   }
// // // // // );

// // // // // const premiumUsersSlice = createSlice({
// // // // //   name: "premium-users",
// // // // //   initialState,
// // // // //   reducers: {
// // // // //     setErrorMessage: (state, action) => {
// // // // //       state.error = action.payload;
// // // // //     },
// // // // //   },
// // // // //   extraReducers: (builder) => {
// // // // //     builder.addCase(readPremiumUsers.pending, (state) => {
// // // // //       state.loading = true;
// // // // //       state.error = null;
// // // // //     });

// // // // //     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
// // // // //       state.loading = false;

// // // // //       const payload = action.payload;
// // // // //       if (!payload) return;

// // // // //       // payload = { success, message, data: [...users with Subscriptions] }
// // // // //       const users = payload?.data ?? [];

// // // // //       state.premiumUser = {
// // // // //         // full users array with Subscriptions[] intact for table rows
// // // // //         data: users,
// // // // //         metrics: {
// // // // //           total:        users.length,
// // // // //           thisMonth:    0,
// // // // //           thisWeek:     0,
// // // // //           totalrevenue: 0,
// // // // //         },
// // // // //         pagination: {
// // // // //           total: users.length,
// // // // //           page:  1,
// // // // //           size:  users.length,
// // // // //         },
// // // // //       };
// // // // //     });

// // // // //     builder.addCase(readPremiumUsers.rejected, (state) => {
// // // // //       state.loading = false;
// // // // //       state.error = "Failed to fetch premium users";
// // // // //     });
// // // // //   },
// // // // // });

// // // // // export default premiumUsersSlice.reducer;
// // // // // export const { setErrorMessage } = premiumUsersSlice.actions;






// // // // // import { setErrors } from "../../../utils/utility";
// // // // // import apiServices from "../../../services/requestHandler";
// // // // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // // // const initialState = {
// // // // //   premiumUser: undefined,
// // // // //   referralCounts: undefined,
// // // // //   loading: false,
// // // // //   countsLoading: false,
// // // // //   error: null,
// // // // // };

// // // // // // POST /referrals/users/details
// // // // // // Response: { metrics: { total, thisWeek, thisMonth, thisYear, totalrevenue, data[] },
// // // // // //             pagination: { total, page, size, totalPages } }
// // // // // export const readPremiumUsers = createAsyncThunk(
// // // // //   "premium/user",
// // // // //   async (args, thunkApi) => {
// // // // //     const { data, setError } = args;
// // // // //     try {
// // // // //       const response = await apiServices.getReferredUserDetails(data);
// // // // //       return response?.data;
// // // // //     } catch (e) {
// // // // //       const errorMessage = e?.response?.data?.message || "Network Error";
// // // // //       thunkApi.dispatch(setErrorMessage(errorMessage));
// // // // //       setErrors(setError, e?.response?.data || {});
// // // // //       return thunkApi.rejectWithValue({
// // // // //         message: errorMessage,
// // // // //         status: e?.response?.status || 500,
// // // // //       });
// // // // //     }
// // // // //   }
// // // // // );

// // // // // // POST /referrals/details/get
// // // // // // Response: { data: { freeUsers, monthlyTrialUsers, monthlySubscribedUsers,
// // // // // //                     monthlyCanceledUsers, yearlyTrialUsers, yearlySubscribedUsers,
// // // // // //                     yearlyCanceledUsers, monthlyTotal, yearlyTotal } }
// // // // // export const readReferralCounts = createAsyncThunk(
// // // // //   "premium/referralCounts",
// // // // //   async (args, thunkApi) => {
// // // // //     const { data } = args;
// // // // //     try {
// // // // //       const response = await apiServices.getReferredUser(data);
// // // // //       return response?.data;
// // // // //     } catch (e) {
// // // // //       return thunkApi.rejectWithValue({
// // // // //         message: e?.response?.data?.message || "Network Error",
// // // // //       });
// // // // //     }
// // // // //   }
// // // // // );

// // // // // const premiumUsersSlice = createSlice({
// // // // //   name: "premium-users",
// // // // //   initialState,
// // // // //   reducers: {
// // // // //     setErrorMessage: (state, action) => {
// // // // //       state.error = action.payload;
// // // // //     },
// // // // //   },
// // // // //   extraReducers: (builder) => {

// // // // //     // ── readPremiumUsers ────────────────────────────────────────────────────
// // // // //     builder.addCase(readPremiumUsers.pending, (state) => {
// // // // //       state.loading = true;
// // // // //       state.error = null;
// // // // //     });
// // // // //     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
// // // // //       state.loading = false;
// // // // //       const payload = action.payload;
// // // // //       if (!payload) return;

// // // // //       state.premiumUser = {
// // // // //         data: payload?.metrics?.data ?? [],
// // // // //         metrics: {
// // // // //           total:        payload?.metrics?.total        ?? 0,
// // // // //           thisMonth:    payload?.metrics?.thisMonth    ?? 0,
// // // // //           thisWeek:     payload?.metrics?.thisWeek     ?? 0,
// // // // //           thisYear:     payload?.metrics?.thisYear     ?? 0,
// // // // //           totalrevenue: payload?.metrics?.totalrevenue ?? 0,
// // // // //         },
// // // // //         pagination: {
// // // // //           total:      payload?.pagination?.total      ?? 0,
// // // // //           page:       payload?.pagination?.page       ?? 1,
// // // // //           size:       payload?.pagination?.size       ?? 10,
// // // // //           totalPages: payload?.pagination?.totalPages ?? 1,
// // // // //         },
// // // // //       };
// // // // //     });
// // // // //     builder.addCase(readPremiumUsers.rejected, (state, action) => {
// // // // //       state.loading = false;
// // // // //       state.error = action.payload?.message || "Failed to fetch users";
// // // // //     });

// // // // //     // ── readReferralCounts ──────────────────────────────────────────────────
// // // // //     builder.addCase(readReferralCounts.pending, (state) => {
// // // // //       state.countsLoading = true;
// // // // //     });
// // // // //     builder.addCase(readReferralCounts.fulfilled, (state, action) => {
// // // // //       state.countsLoading = false;
// // // // //       const payload = action.payload;
// // // // //       if (!payload) return;

// // // // //       // payload = full API response body
// // // // //       // payload.data = { freeUsers, monthlyTrialUsers, monthlySubscribedUsers,
// // // // //       //                  monthlyCanceledUsers, yearlyTrialUsers, yearlySubscribedUsers,
// // // // //       //                  yearlyCanceledUsers, monthlyTotal, yearlyTotal }
// // // // //       state.referralCounts = payload?.data;
// // // // //     });
// // // // //     builder.addCase(readReferralCounts.rejected, (state) => {
// // // // //       state.countsLoading = false;
// // // // //     });
// // // // //   },
// // // // // });

// // // // // export default premiumUsersSlice.reducer;
// // // // // export const { setErrorMessage } = premiumUsersSlice.actions;






// // // // import { setErrors } from "../../../utils/utility";
// // // // import apiServices from "../../../services/requestHandler";
// // // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // // const initialState = {
// // // //   premiumUser: undefined,
// // // //   referralCounts: undefined,
// // // //   loading: false,
// // // //   countsLoading: false,
// // // //   error: null,
// // // // };

// // // // // POST /referrals/users/premium/all
// // // // // Response: { success, message, count, data: [{ id, name, email, createdAt, status }] }
// // // // export const readPremiumUsers = createAsyncThunk(
// // // //   "premium/user",
// // // //   async (args, thunkApi) => {
// // // //     const { data, setError } = args;
// // // //     try {
// // // //       const response = await apiServices.allPremiumUsers(data); // ← FIXED: was getReferredUserDetails
// // // //       return response?.data;
// // // //     } catch (e) {
// // // //       const errorMessage = e?.response?.data?.message || "Network Error";
// // // //       thunkApi.dispatch(setErrorMessage(errorMessage));
// // // //       setErrors(setError, e?.response?.data || {});
// // // //       return thunkApi.rejectWithValue({
// // // //         message: errorMessage,
// // // //         status: e?.response?.status || 500,
// // // //       });
// // // //     }
// // // //   }
// // // // );

// // // // // GET /referrals/users/paid
// // // // // Response: { success, message, data: [...users with Subscriptions[]] }
// // // // export const readReferralCounts = createAsyncThunk(
// // // //   "premium/referralCounts",
// // // //   async (args, thunkApi) => {
// // // //     const { data } = args;
// // // //     try {
// // // //       const response = await apiServices.premiumUser(data); // ← FIXED: was getReferredUser
// // // //       return response?.data;
// // // //     } catch (e) {
// // // //       return thunkApi.rejectWithValue({
// // // //         message: e?.response?.data?.message || "Network Error",
// // // //       });
// // // //     }
// // // //   }
// // // // );

// // // // const premiumUsersSlice = createSlice({
// // // //   name: "premium-users",
// // // //   initialState,
// // // //   reducers: {
// // // //     setErrorMessage: (state, action) => {
// // // //       state.error = action.payload;
// // // //     },
// // // //   },
// // // //   extraReducers: (builder) => {

// // // //     // ── readPremiumUsers ────────────────────────────────────────────────────
// // // //     // API response: { success, message, count, data: [...] }
// // // //     builder.addCase(readPremiumUsers.pending, (state) => {
// // // //       state.loading = true;
// // // //       state.error = null;
// // // //     });
// // // //     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
// // // //       state.loading = false;
// // // //       const payload = action.payload;
// // // //       if (!payload) return;

// // // //       state.premiumUser = {
// // // //         data: payload?.data ?? [],
// // // //         pagination: {
// // // //           total: payload?.count ?? 0,
// // // //         },
// // // //       };
// // // //     });
// // // //     builder.addCase(readPremiumUsers.rejected, (state, action) => {
// // // //       state.loading = false;
// // // //       state.error = action.payload?.message || "Failed to fetch users";
// // // //     });

// // // //     // ── readReferralCounts ──────────────────────────────────────────────────
// // // //     // API response: { success, message, data: [...users with Subscriptions[]] }
// // // //     // Counts are computed here since API returns raw users, not pre-computed totals
// // // //     builder.addCase(readReferralCounts.pending, (state) => {
// // // //       state.countsLoading = true;
// // // //     });
// // // //     builder.addCase(readReferralCounts.fulfilled, (state, action) => {
// // // //       state.countsLoading = false;
// // // //       const payload = action.payload;
// // // //       if (!payload) return;

// // // //       const users = payload?.data ?? [];

// // // //       const now      = new Date();
// // // //       const weekAgo  = new Date(now); weekAgo.setDate(now.getDate() - 7);
// // // //       const monthAgo = new Date(now); monthAgo.setMonth(now.getMonth() - 1);

// // // //       const filterUsers = (planType, fromDate) =>
// // // //         users.filter((u) => {
// // // //           const sub = u?.Subscriptions?.[0];
// // // //           if (!sub) return false;
// // // //           if (planType && sub.planType !== planType) return false;
// // // //           if (fromDate) return new Date(sub.createdAt) >= fromDate;
// // // //           return true;
// // // //         });

// // // //       const monthly = filterUsers("monthly");
// // // //       const yearly  = filterUsers("yearly");

// // // //       state.referralCounts = {
// // // //         monthlyTotal: {
// // // //           total:     monthly.length,
// // // //           thisMonth: filterUsers("monthly", monthAgo).length,
// // // //           thisWeek:  filterUsers("monthly", weekAgo).length,
// // // //           revenue:   0,
// // // //         },
// // // //         yearlyTotal: {
// // // //           total:     yearly.length,
// // // //           thisMonth: filterUsers("yearly", monthAgo).length,
// // // //           thisWeek:  filterUsers("yearly", weekAgo).length,
// // // //           revenue:   0,
// // // //         },
// // // //         monthlySubscribedUsers: {
// // // //           total:     monthly.filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // // //           thisMonth: filterUsers("monthly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // // //           thisWeek:  filterUsers("monthly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // // //           revenue:   0,
// // // //         },
// // // //         monthlyCanceledUsers: {
// // // //           total:     monthly.filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // // //           thisMonth: filterUsers("monthly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // // //           thisWeek:  filterUsers("monthly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // // //           revenue:   0,
// // // //         },
// // // //         yearlySubscribedUsers: {
// // // //           total:     yearly.filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // // //           thisMonth: filterUsers("yearly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // // //           thisWeek:  filterUsers("yearly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // // //           revenue:   0,
// // // //         },
// // // //         yearlyCanceledUsers: {
// // // //           total:     yearly.filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // // //           thisMonth: filterUsers("yearly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // // //           thisWeek:  filterUsers("yearly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // // //           revenue:   0,
// // // //         },
// // // //       };
// // // //     });
// // // //     builder.addCase(readReferralCounts.rejected, (state) => {
// // // //       state.countsLoading = false;
// // // //     });
// // // //   },
// // // // });

// // // // export default premiumUsersSlice.reducer;
// // // // export const { setErrorMessage } = premiumUsersSlice.actions;







// // // import { setErrors } from "../../../utils/utility";
// // // import apiServices from "../../../services/requestHandler";
// // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // const initialState = {
// // //   premiumUser: undefined,
// // //   referralCounts: undefined,
// // //   loading: false,
// // //   countsLoading: false,
// // //   error: null,
// // // };

// // // // POST /referrals/users/premium/all
// // // // Response: { success, message, count, data: [{ id, name, email, createdAt, status }] }
// // // export const readPremiumUsers = createAsyncThunk(
// // //   "premium/user",
// // //   async (args, thunkApi) => {
// // //     const { data, setError } = args;
// // //     try {
// // //       const response = await apiServices.allPremiumUsers(data);
// // //       return response?.data;
// // //     } catch (e) {
// // //       const errorMessage = e?.response?.data?.message || "Network Error";
// // //       thunkApi.dispatch(setErrorMessage(errorMessage));
// // //       setErrors(setError, e?.response?.data || {});
// // //       return thunkApi.rejectWithValue({
// // //         message: errorMessage,
// // //         status: e?.response?.status || 500,
// // //       });
// // //     }
// // //   }
// // // );

// // // // GET /referrals/users/paid
// // // // Response: { success, message, data: [...users with Subscriptions[]] }
// // // export const readReferralCounts = createAsyncThunk(
// // //   "premium/referralCounts",
// // //   async (args, thunkApi) => {
// // //     const { data } = args;
// // //     try {
// // //       const response = await apiServices.premiumUser(data);
// // //       return response?.data;
// // //     } catch (e) {
// // //       return thunkApi.rejectWithValue({
// // //         message: e?.response?.data?.message || "Network Error",
// // //       });
// // //     }
// // //   }
// // // );

// // // const premiumUsersSlice = createSlice({
// // //   name: "premium-users",
// // //   initialState,
// // //   reducers: {
// // //     setErrorMessage: (state, action) => {
// // //       state.error = action.payload;
// // //     },
// // //   },
// // //   extraReducers: (builder) => {

// // //     // ── readPremiumUsers ──────────────────────────────────────────────────
// // //     builder.addCase(readPremiumUsers.pending, (state) => {
// // //       state.loading = true;
// // //       state.error = null;
// // //     });
// // //     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
// // //       state.loading = false;
// // //       const payload = action.payload;
// // //       if (!payload) return;

// // //       state.premiumUser = {
// // //         data: payload?.data ?? [],
// // //         pagination: {
// // //           total: payload?.count ?? 0,
// // //         },
// // //       };
// // //     });
// // //     builder.addCase(readPremiumUsers.rejected, (state, action) => {
// // //       state.loading = false;
// // //       state.error = action.payload?.message || "Failed to fetch users";
// // //     });

// // //     // ── readReferralCounts ────────────────────────────────────────────────
// // //     builder.addCase(readReferralCounts.pending, (state) => {
// // //       state.countsLoading = true;
// // //     });
// // //     builder.addCase(readReferralCounts.fulfilled, (state, action) => {
// // //       state.countsLoading = false;
// // //       const payload = action.payload;
// // //       if (!payload) return;

// // //       const users = payload?.data ?? [];

// // //       const now      = new Date();
// // //       const weekAgo  = new Date(now); weekAgo.setDate(now.getDate() - 7);
// // //       const monthAgo = new Date(now); monthAgo.setMonth(now.getMonth() - 1);

// // //       // Filter users by planType and optional date range
// // //       const filterUsers = (planType, fromDate) =>
// // //         users.filter((u) => {
// // //           const sub = u?.Subscriptions?.[0];
// // //           if (!sub) return false;
// // //           if (planType && sub.planType !== planType) return false;
// // //           if (fromDate) return new Date(sub.createdAt) >= fromDate;
// // //           return true;
// // //         });

// // //       const monthly = filterUsers("monthly");
// // //       const yearly  = filterUsers("yearly");

// // //       state.referralCounts = {
// // //         // ── Monthly ────────────────────────────────────────────────────────
// // //         monthlyTotal: {
// // //           total:     monthly.length,
// // //           thisMonth: filterUsers("monthly", monthAgo).length,
// // //           thisWeek:  filterUsers("monthly", weekAgo).length,
// // //           revenue:   0,
// // //         },
// // //         monthlySubscribedUsers: {
// // //           total:     monthly.filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // //           thisMonth: filterUsers("monthly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // //           thisWeek:  filterUsers("monthly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // //           revenue:   0,
// // //         },
// // //         monthlyCanceledUsers: {
// // //           total:     monthly.filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // //           thisMonth: filterUsers("monthly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // //           thisWeek:  filterUsers("monthly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // //           revenue:   0,
// // //         },
// // //         // ── Yearly ─────────────────────────────────────────────────────────
// // //         yearlyTotal: {
// // //           total:     yearly.length,
// // //           thisMonth: filterUsers("yearly", monthAgo).length,
// // //           thisWeek:  filterUsers("yearly", weekAgo).length,
// // //           revenue:   0,
// // //         },
// // //         yearlySubscribedUsers: {
// // //           total:     yearly.filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // //           thisMonth: filterUsers("yearly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // //           thisWeek:  filterUsers("yearly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "active").length,
// // //           revenue:   0,
// // //         },
// // //         yearlyCanceledUsers: {
// // //           total:     yearly.filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // //           thisMonth: filterUsers("yearly", monthAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // //           thisWeek:  filterUsers("yearly", weekAgo).filter(u => u?.Subscriptions?.[0]?.status === "canceled").length,
// // //           revenue:   0,
// // //         },
// // //       };
// // //     });
// // //     builder.addCase(readReferralCounts.rejected, (state) => {
// // //       state.countsLoading = false;
// // //     });
// // //   },
// // // });

// // // export default premiumUsersSlice.reducer;
// // // export const { setErrorMessage } = premiumUsersSlice.actions;






// import { setErrors } from "../../../utils/utility";
// import apiServices from "../../../services/requestHandler";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   premiumUser:     undefined,
//   allPremiumUsers: undefined,
//   referralCounts:  undefined,
//   loading:         false,
//   countsLoading:   false,
//   error:           null,
// };

// // POST /referrals/users/details → full users with Subscriptions[] (trial/subscribed/cancelled)
// // Response: { metrics: { total, thisWeek, thisMonth, thisYear, totalrevenue, data[] }, pagination }
// export const readPremiumUsers = createAsyncThunk(
//   "premium/user",
//   async (args, thunkApi) => {
//     const { data, setError } = args;
//     try {
//       const response = await apiServices.getReferredUserDetails(data);
//       return response?.data;
//     } catch (e) {
//       const errorMessage = e?.response?.data?.message || "Network Error";
//       thunkApi.dispatch(setErrorMessage(errorMessage));
//       setErrors(setError, e?.response?.data || {});
//       return thunkApi.rejectWithValue({
//         message: errorMessage,
//         status: e?.response?.status || 500,
//       });
//     }
//   }
// );

// // POST /referrals/users/premium/all → simplified users (monthly/yearly main page)
// // Response: { success, message, count, data: [{ id, name, email, createdAt, status }] }
// export const readAllPremiumUsers = createAsyncThunk(
//   "premium/allUsers",
//   async (args, thunkApi) => {
//     const { data } = args;
//     try {
//       const response = await apiServices.allPremiumUsers(data);
//       return response?.data;
//     } catch (e) {
//       return thunkApi.rejectWithValue({
//         message: e?.response?.data?.message || "Network Error",
//       });
//     }
//   }
// );

// // GET /referrals/details/get → pre-computed counts per category
// // Response: { data: { monthlyTrialUsers, monthlySubscribedUsers, ... } }
// export const readReferralCounts = createAsyncThunk(
//   "premium/referralCounts",
//   async (args, thunkApi) => {
//     const { data } = args;
//     try {
//       const response = await apiServices.getReferredUser(data);
//       return response?.data;
//     } catch (e) {
//       return thunkApi.rejectWithValue({
//         message: e?.response?.data?.message || "Network Error",
//       });
//     }
//   }
// );

// const premiumUsersSlice = createSlice({
//   name: "premium-users",
//   initialState,
//   reducers: {
//     setErrorMessage: (state, action) => {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {

//     // ── readPremiumUsers (trial/subscribed/cancelled) ─────────────────────
//     builder.addCase(readPremiumUsers.pending, (state) => {
//       state.loading = true;
//       state.error   = null;
//     });
//     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       const payload = action.payload;
//       if (!payload) return;

//       state.premiumUser = {
//         data: payload?.metrics?.data ?? [],
//         metrics: {
//           total:        payload?.metrics?.total        ?? 0,
//           thisMonth:    payload?.metrics?.thisMonth    ?? 0,
//           thisWeek:     payload?.metrics?.thisWeek     ?? 0,
//           thisYear:     payload?.metrics?.thisYear     ?? 0,
//           totalrevenue: payload?.metrics?.totalrevenue ?? 0,
//         },
//         pagination: {
//           total:      payload?.pagination?.total      ?? 0,
//           page:       payload?.pagination?.page       ?? 1,
//           size:       payload?.pagination?.size       ?? 10,
//           totalPages: payload?.pagination?.totalPages ?? 1,
//         },
//       };
//     });
//     builder.addCase(readPremiumUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.error   = action.payload?.message || "Failed to fetch users";
//     });

//     // ── readAllPremiumUsers (monthly/yearly main page) ────────────────────
//     builder.addCase(readAllPremiumUsers.pending, (state) => {
//       state.loading = true;
//       state.error   = null;
//     });
//     builder.addCase(readAllPremiumUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       const payload = action.payload;
//       if (!payload) return;

//       state.allPremiumUsers = {
//         data:  payload?.data  ?? [],
//         count: payload?.count ?? 0,
//       };
//     });
//     builder.addCase(readAllPremiumUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.error   = action.payload?.message || "Failed to fetch users";
//     });

//     // ── readReferralCounts ────────────────────────────────────────────────
//     builder.addCase(readReferralCounts.pending, (state) => {
//       state.countsLoading = true;
//     });
//     builder.addCase(readReferralCounts.fulfilled, (state, action) => {
//       state.countsLoading = false;
//       const payload = action.payload;
//       if (!payload) return;
//       state.referralCounts = payload?.data;
//     });
//     builder.addCase(readReferralCounts.rejected, (state) => {
//       state.countsLoading = false;
//     });
//   },
// });

// export default premiumUsersSlice.reducer;
// export const { setErrorMessage } = premiumUsersSlice.actions;







//working fine







import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  premiumUser:     undefined,
  allPremiumUsers: undefined,
  referralCounts:  undefined,
  loading:         false,
  countsLoading:   false,
  error:           null,
};

// POST /referrals/users/details
// Body: { uid, type, status?, sort?, page, size }
// Response: { metrics: { total, thisWeek, thisMonth, thisYear, totalrevenue, data[] }, pagination }
// Each data item has a Subscriptions[] array with subscription details
export const readPremiumUsers = createAsyncThunk(
  "premium/user",
  async (args, thunkApi) => {
    const { data, setError } = args;
    try {
      const response = await apiServices.getReferredUserDetails(data);
      return response?.data;
    } catch (e) {
      const errorMessage = e?.response?.data?.message || "Network Error";
      thunkApi.dispatch(setErrorMessage(errorMessage));
      if (setError) setErrors(setError, e?.response?.data || {});
      return thunkApi.rejectWithValue({
        message: errorMessage,
        status: e?.response?.status || 500,
      });
    }
  }
);

// POST /referrals/users/premium/all → simplified users (monthly/yearly main page)
// Response: { success, message, count, data: [{ id, name, email, createdAt, status }] }
export const readAllPremiumUsers = createAsyncThunk(
  "premium/allUsers",
  async (args, thunkApi) => {
    const { data } = args;
    try {
      const response = await apiServices.allPremiumUsers(data);
      return response?.data;
    } catch (e) {
      return thunkApi.rejectWithValue({
        message: e?.response?.data?.message || "Network Error",
      });
    }
  }
);

// POST /referrals/details/get → pre-computed counts per category
// Response: { data: { monthlyTrialUsers, monthlySubscribedUsers, monthlyCanceledUsers,
//                     monthlyTotal, yearlyTrialUsers, yearlySubscribedUsers,
//                     yearlyCanceledUsers, yearlyTotal, freeUsers } }
export const readReferralCounts = createAsyncThunk(
  "premium/referralCounts",
  async (args, thunkApi) => {
    const { data } = args;
    try {
      const response = await apiServices.getReferredUser(data);
      return response?.data;
    } catch (e) {
      return thunkApi.rejectWithValue({
        message: e?.response?.data?.message || "Network Error",
      });
    }
  }
);

const premiumUsersSlice = createSlice({
  name: "premium-users",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {

    // ── readPremiumUsers ──────────────────────────────────────────────────
    builder.addCase(readPremiumUsers.pending, (state) => {
      state.loading = true;
      state.error   = null;
    });
    builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
      state.loading = false;
      const payload = action.payload;
      if (!payload) return;

      // Store raw data[] (with Subscriptions[] intact).
      // Flattening happens in the hook so each page can shape data its own way.
      state.premiumUser = {
        data: payload?.metrics?.data ?? [],
        metrics: {
          total:        payload?.metrics?.total        ?? 0,
          thisMonth:    payload?.metrics?.thisMonth    ?? 0,
          thisWeek:     payload?.metrics?.thisWeek     ?? 0,
          thisYear:     payload?.metrics?.thisYear     ?? 0,
          totalrevenue: payload?.metrics?.totalrevenue ?? 0,
        },
        pagination: {
          total:      payload?.pagination?.total      ?? 0,
          page:       payload?.pagination?.page       ?? 1,
          size:       payload?.pagination?.size       ?? 10,
          totalPages: payload?.pagination?.totalPages ?? 1,
        },
      };
    });
    builder.addCase(readPremiumUsers.rejected, (state, action) => {
      state.loading = false;
      state.error   = action.payload?.message || "Failed to fetch users";
    });

    // ── readAllPremiumUsers ───────────────────────────────────────────────
    builder.addCase(readAllPremiumUsers.pending, (state) => {
      state.loading = true;
      state.error   = null;
    });
    builder.addCase(readAllPremiumUsers.fulfilled, (state, action) => {
      state.loading = false;
      const payload = action.payload;
      if (!payload) return;

      state.allPremiumUsers = {
        data:  payload?.data  ?? [],
        count: payload?.count ?? 0,
      };
    });
    builder.addCase(readAllPremiumUsers.rejected, (state, action) => {
      state.loading = false;
      state.error   = action.payload?.message || "Failed to fetch users";
    });

    // ── readReferralCounts ────────────────────────────────────────────────
    builder.addCase(readReferralCounts.pending, (state) => {
      state.countsLoading = true;
    });
    builder.addCase(readReferralCounts.fulfilled, (state, action) => {
      state.countsLoading = false;
      const payload = action.payload;
      if (!payload) return;
      // Stores the full data object:
      // { freeUsers, monthlyTrialUsers, monthlySubscribedUsers, monthlyCanceledUsers,
      //   monthlyTotal, yearlyTrialUsers, yearlySubscribedUsers, yearlyCanceledUsers, yearlyTotal }
      state.referralCounts = payload?.data;
    });
    builder.addCase(readReferralCounts.rejected, (state) => {
      state.countsLoading = false;
    });
  },
});

export default premiumUsersSlice.reducer;
export const { setErrorMessage } = premiumUsersSlice.actions;