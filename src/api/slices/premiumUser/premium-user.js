// import { setErrors } from "../../../utils/utility";
// import apiServices from "../../../services/requestHandler";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   premiumUser: undefined,
//   loading: true,
//   error: null,
// };

// export const readPremiumUsers = createAsyncThunk(
//   "premium/user",
//   async (args, thunkApi) => {
//     const { data, setError } = args;

//     try {
//       const response = await apiServices.premiumUser(data);
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

// const premiumUsersSlice = createSlice({
//   name: "premium-users",
//   initialState,
//   reducers: {
//     setErrorMessage: (state, action) => {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(readPremiumUsers.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
//       if (action?.payload) state.premiumUser = action.payload.data;
//       state.loading = false;
//     });
//     builder.addCase(readPremiumUsers.rejected, (state) => {
//       state.loading = false;
//     });
//   },
// });

// export default premiumUsersSlice.reducer;
// export const { setErrorMessage } = premiumUsersSlice.actions;





import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  premiumUser: undefined,
  loading: true,
  error: null,
};

export const readPremiumUsers = createAsyncThunk(
  "premium/user",
  async (args, thunkApi) => {
    const { data, setError } = args;

    try {
      const response = await apiServices.premiumUser(data);
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

const premiumUsersSlice = createSlice({
  name: "premium-users",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readPremiumUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
      if (action?.payload) {
        // Structure the data to match what the hook expects
        state.premiumUser = {
          data: action.payload.data,
          metrics: {
            data: action.payload.data,
            total: action.payload.count || action.payload.data?.length || 0,
            thisMonth: action.payload.thisMonth || 0,
            thisWeek: action.payload.thisWeek || 0,
            totalrevenue: action.payload.totalRevenue || 0,
          },
          pagination: {
            total: action.payload.count || action.payload.data?.length || 0,
            page: action.payload.page || 1,
            size: action.payload.size || 10,
          }
        };
      }
      state.loading = false;
    });
    builder.addCase(readPremiumUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default premiumUsersSlice.reducer;
export const { setErrorMessage } = premiumUsersSlice.actions;