// // // import { setErrors } from "../../../utils/utility";
// // // import apiServices from "../../../services/requestHandler";
// // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // const initialState = {
// // //   freeUser: [],
// // //   loading: true,
// // //   error: null,
// // // };

// // // export const readFreeUserListing = createAsyncThunk(
// // //   "free/user",
// // //   async (args, thunkApi) => {
// // //     const { params, setError } = args;

// // //     try {
// // //       const response = await apiServices.freeUsers(params);
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

// // // const freeUserSlice = createSlice({
// // //   name: "free-user",
// // //   initialState,
// // //   reducers: {
// // //     setErrorMessage: (state, action) => {
// // //       state.error = action.payload;
// // //     },
// // //   },
// // //   extraReducers: (builder) => {
// // //     builder.addCase(readFreeUserListing.pending, (state) => {
// // //       state.loading = true;
// // //     });
// // //     builder.addCase(readFreeUserListing.fulfilled, (state, action) => {
// // //       if (action?.payload) state.freeUser = action.payload.data;
// // //       state.loading = false;
// // //     });
// // //     builder.addCase(readFreeUserListing.rejected, (state) => {
// // //       state.loading = false;
// // //     });
// // //   },
// // // });

// // // export default freeUserSlice.reducer;
// // // export const { setErrorMessage } = freeUserSlice.actions;


// // import { setErrors } from "../../../utils/utility";
// // import apiServices from "../../../services/requestHandler";
// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   freeUser: {
// //     users: [],
// //     stats: {
// //       totalUsers: 0,
// //       thisMonthUsers: 0,
// //       thisWeekUsers: 0,
// //       revenue: 0,
// //     },
// //     pagination: {
// //       totalRecords: 0,
// //       currentPage: 1,
// //       totalPages: 1,
// //       pageSize: 10,
// //     },
// //   },
// //   loading: false,
// //   error: null,
// // };

// // export const readFreeUserListing = createAsyncThunk(
// //   "free/user",
// //   async (args, thunkApi) => {
// //     const { params, setError } = args;

// //     try {
// //       const response = await apiServices.freeUsers(params);
      
// //       // API Response structure:
// //       // {
// //       //   success: true,
// //       //   message: 'Free users fetched successfully.',
// //       //   pagination: { totalRecords, currentPage, totalPages, pageSize },
// //       //   data: {
// //       //     freeUsers: [...],
// //       //     stats: { totalUsers, thisMonthUsers, thisWeekUsers, revenue }
// //       //   }
// //       // }
      
// //       return response?.data;
// //     } catch (e) {
// //       const errorMessage = e?.response?.data?.message || "Network Error";
// //       thunkApi.dispatch(setErrorMessage(errorMessage));
// //       setErrors(setError, e?.response?.data || {});

// //       return thunkApi.rejectWithValue({
// //         message: errorMessage,
// //         status: e?.response?.status || 500,
// //       });
// //     }
// //   }
// // );

// // const freeUserSlice = createSlice({
// //   name: "free-user",
// //   initialState,
// //   reducers: {
// //     setErrorMessage: (state, action) => {
// //       state.error = action.payload;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder.addCase(readFreeUserListing.pending, (state) => {
// //       state.loading = true;
// //       state.error = null;
// //     });

// //     builder.addCase(readFreeUserListing.fulfilled, (state, action) => {
// //       state.loading = false;
      
// //       if (action?.payload) {
// //         const payload = action.payload;
        
// //         // Payload structure:
// //         // {
// //         //   success: true,
// //         //   message: 'Free users fetched successfully.',
// //         //   pagination: { totalRecords, currentPage, totalPages, pageSize },
// //         //   data: {
// //         //     freeUsers: [...],
// //         //     stats: { ... }
// //         //   }
// //         // }
        
// //         // Extract users from nested structure
// //         if (payload?.data?.freeUsers && Array.isArray(payload.data.freeUsers)) {
// //           // Users are in payload.data.freeUsers
// //           state.freeUser.users = payload.data.freeUsers;
// //         } else if (Array.isArray(payload?.freeUsers)) {
// //           // Fallback: users at root level
// //           state.freeUser.users = payload.freeUsers;
// //         } else if (Array.isArray(payload?.data)) {
// //           // Fallback: users in data as array
// //           state.freeUser.users = payload.data;
// //         } else if (Array.isArray(payload)) {
// //           // Fallback: payload itself is array
// //           state.freeUser.users = payload;
// //         } else {
// //           // No users found
// //           state.freeUser.users = [];
// //         }

// //         // Extract stats if available
// //         if (payload?.data?.stats) {
// //           state.freeUser.stats = {
// //             totalUsers: payload.data.stats.totalUsers || 0,
// //             thisMonthUsers: payload.data.stats.thisMonthUsers || 0,
// //             thisWeekUsers: payload.data.stats.thisWeekUsers || 0,
// //             revenue: payload.data.stats.revenue || 0,
// //           };
// //         }

// //         // Extract pagination info
// //         if (payload?.pagination) {
// //           state.freeUser.pagination = {
// //             totalRecords: payload.pagination.totalRecords || 0,
// //             currentPage: payload.pagination.currentPage || 1,
// //             totalPages: payload.pagination.totalPages || 1,
// //             pageSize: payload.pagination.pageSize || 10,
// //           };
// //         } else {
// //           // Fallback: use users count
// //           state.freeUser.pagination.totalRecords = state.freeUser.users.length;
// //           state.freeUser.pagination.totalPages = Math.ceil(
// //             state.freeUser.users.length / state.freeUser.pagination.pageSize
// //           );
// //         }
// //       }
// //     });

// //     builder.addCase(readFreeUserListing.rejected, (state, action) => {
// //       state.loading = false;
// //       state.error = action.payload?.message || "Failed to fetch users";
// //       state.freeUser.users = [];
// //     });
// //   },
// // });

// // export default freeUserSlice.reducer;
// // export const { setErrorMessage } = freeUserSlice.actions;



import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  freeUser: {
    users: [],
    stats: {
      totalUsers: 0,
      thisMonthUsers: 0,
      thisWeekUsers: 0,
      revenue: 0,
    },
    pagination: {
      totalRecords: 0,
      currentPage: 1,
      totalPages: 1,
      pageSize: 10,
    },
  },
  loading: false,
  error: null,
};

export const readFreeUserListing = createAsyncThunk(
  "free/user",
  async (args, thunkApi) => {
    const { params, setError } = args;

    try {
      const response = await apiServices.freeUsers(params);
      
      // API Response structure:
      // {
      //   success: true,
      //   message: 'Free users fetched successfully.',
      //   pagination: { totalRecords, currentPage, totalPages, pageSize },
      //   data: {
      //     freeUsers: [...],
      //     stats: { totalUsers, thisMonthUsers, thisWeekUsers, revenue }
      //   }
      // }
      
      return response?.data;
    } catch (e) {
      const errorMessage = e?.response?.data?.message || "Network Error";
      thunkApi.dispatch(setErrorMessage(errorMessage));
      setErrors(setError, e?.response?.data || {});

      return thunkApi.rejectWithValue({
        message: errorMessage,
        status: e?.response?.status || 500,
      });
    }
  }
);

const freeUserSlice = createSlice({
  name: "free-user",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readFreeUserListing.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(readFreeUserListing.fulfilled, (state, action) => {
      state.loading = false;
      
      if (action?.payload) {
        const payload = action.payload;
        
        // Payload structure:
        // {
        //   success: true,
        //   message: 'Free users fetched successfully.',
        //   pagination: { totalRecords, currentPage, totalPages, pageSize },
        //   data: {
        //     freeUsers: [...],
        //     stats: { ... }
        //   }
        // }
        
        // Extract users from nested structure
        if (payload?.data?.freeUsers && Array.isArray(payload.data.freeUsers)) {
          // Users are in payload.data.freeUsers
          state.freeUser.users = payload.data.freeUsers;
        } else if (Array.isArray(payload?.freeUsers)) {
          // Fallback: users at root level
          state.freeUser.users = payload.freeUsers;
        } else if (Array.isArray(payload?.data)) {
          // Fallback: users in data as array
          state.freeUser.users = payload.data;
        } else if (Array.isArray(payload)) {
          // Fallback: payload itself is array
          state.freeUser.users = payload;
        } else {
          // No users found
          state.freeUser.users = [];
        }

        // Extract stats if available
        if (payload?.data?.stats) {
          state.freeUser.stats = {
            totalUsers: payload.data.stats.totalUsers || 0,
            thisMonthUsers: payload.data.stats.thisMonthUsers || 0,
            thisWeekUsers: payload.data.stats.thisWeekUsers || 0,
            revenue: payload.data.stats.revenue || 0,
          };
        }

        // Extract pagination info
        if (payload?.pagination) {
          state.freeUser.pagination = {
            totalRecords: payload.pagination.totalRecords || 0,
            currentPage: payload.pagination.currentPage || 1,
            totalPages: payload.pagination.totalPages || 1,
            pageSize: payload.pagination.pageSize || 10,
          };
        } else {
          // Fallback: use users count
          state.freeUser.pagination.totalRecords = state.freeUser.users.length;
          state.freeUser.pagination.totalPages = Math.ceil(
            state.freeUser.users.length / state.freeUser.pagination.pageSize
          );
        }
      }
    });

    builder.addCase(readFreeUserListing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to fetch users";
      state.freeUser.users = [];
    });
  },
});

export default freeUserSlice.reducer;
export const { setErrorMessage } = freeUserSlice.actions;

