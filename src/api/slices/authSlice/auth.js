// // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // // import apiServices from "../../../services/requestHandler";
// // // import { setErrors } from "../../../utils/utility";
// // // import { saveUser, setRefreshToken, setToken } from "../../../utils/auth";

// // // const initialState = {
// // //   user: undefined,
// // //   loading: false,
// // //   error: null,
// // //   errorData: null,
// // //   signedUser: null,
// // // };

// // // export const logIn = createAsyncThunk("login/user", async (args, thunkApi) => {
// // //   const { data, setError } = args;

// // //   try {
// // //     const response = await apiServices.login(data);

// // //     const accessToken =
// // //       response?.headers?.["access-token"] || response?.headers?.accessToken;

// // //     const refreshToken =
// // //       response?.headers?.["refresh-token"] || response?.headers?.refreshToken;
// // //     const userData = response?.data;

// // //     if (accessToken) {
// // //       setToken(accessToken);
// // //     }
// // //     if (refreshToken) {
// // //       setRefreshToken(refreshToken);
// // //     } else {
// // //       console.warn("No access token found in response headers");
// // //     }

// // //     if (userData) {
// // //       saveUser(userData?.data);
// // //       thunkApi.dispatch(setUser(userData));
// // //     } else {
// // //       console.warn("No user data found in response");
// // //     }

// // //     return userData;
// // //   } catch (e) {
// // //     thunkApi.dispatch(setErrorMessage(e?.data?.message || "Login failed"));
// // //     setErrors(setError, e?.data?.data || {});

// // //     return thunkApi.rejectWithValue({
// // //       error: e?.response?.data?.message || "Login failed",
// // //       data: e?.response?.data?.data,
// // //     });
// // //   }
// // // });

// // // export const signUp = createAsyncThunk(
// // //   "signup/user",
// // //   async (args, thunkApi) => {
// // //     const { data, setError } = args;
// // //     try {
// // //       const response = await apiServices.signUp(data);
// // //       thunkApi.dispatch(setErrorMessage(null));
// // //       return response.data;
// // //     } catch (e) {
// // //       setErrors(setError, e?.data.data);
// // //       thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
// // //       return e;
// // //     }
// // //   }
// // // );

// // // export const logoutUser = createAsyncThunk(
// // //   "user/logout",
// // //   async (data, thunkApi) => {
// // //     try {
// // //       await apiServices.logoutUser({ data });
// // //       Cookies.remove("accessToken");
// // //       Cookies.remove("refreshToken");
// // //       Cookies.remove("referralUser");
// // //       thunkApi.dispatch(setUser(undefined));
// // //       thunkApi.dispatch(setSignedUser(null));
// // //       thunkApi.dispatch(setErrorMessage(null));
// // //       return true;
// // //     } catch (e) {
// // //       return false;
// // //     }
// // //   }
// // // );

// // // const authSlice = createSlice({
// // //   name: "auth",
// // //   initialState,
// // //   reducers: {
// // //     setUser: (state, action) => {
// // //       state.user = action.payload;
// // //     },
// // //     setSignedUser: (state, action) => {
// // //       state.signedUser = action.payload;
// // //     },
// // //     setErrorMessage: (state, action) => {
// // //       state.error = action.payload;
// // //     },
// // //   },
// // //   extraReducers: (builder) => {
// // //     builder.addCase(signUp.pending, (state) => {
// // //       state.loading = true;
// // //     });
// // //     builder.addCase(signUp.fulfilled, (state, action) => {
// // //       state.loading = false;
// // //       if (action?.payload) state.signedUser = action.payload.data;
// // //     });
// // //     builder.addCase(signUp.rejected, (state) => {
// // //       state.loading = false;
// // //     });

// // //     builder.addCase(logIn.pending, (state) => {
// // //       state.loading = true;
// // //     });
// // //     builder.addCase(logIn.fulfilled, (state, action) => {
// // //       state.loading = false;
// // //       if (action?.payload) {
// // //         state.user = action.payload.data;
// // //         state.signedUser = action.payload.data;
// // //       }
// // //     });
// // //     builder.addCase(logIn.rejected, (state, action) => {
// // //       state.loading = false;

// // //       state.errorData = action.payload?.data || null;
// // //     });

// // //     builder.addCase(logoutUser.pending, (state) => {
// // //       state.loading = true;
// // //     });
// // //     builder.addCase(logoutUser.fulfilled, (state, action) => {
// // //       state.loading = false;
// // //     });
// // //     builder.addCase(logoutUser.rejected, (state) => {
// // //       state.loading = false;
// // //     });
// // //   },
// // // });
// // // export default authSlice.reducer;
// // // export const { setUser, setSignedUser, setErrorMessage } = authSlice.actions;





// // // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // // import apiServices from "../../../services/requestHandler";
// // // import { setErrors } from "../../../utils/utility";

// // // // ✅ Rehydrate user from localStorage on every page load/refresh
// // // const getUserFromStorage = () => {
// // //   try {
// // //     const user = localStorage.getItem("user");
// // //     return user ? JSON.parse(user) : undefined;
// // //   } catch {
// // //     return undefined;
// // //   }
// // // };

// // // const savedUser = getUserFromStorage();

// // // const initialState = {
// // //   user: savedUser || undefined, // ✅ populated on refresh
// // //   loading: false,
// // //   error: null,
// // //   errorData: null,
// // //   signedUser: savedUser || null,
// // // };

// // // export const logIn = createAsyncThunk("login/user", async (args, thunkApi) => {
// // //   const { data, setError } = args;
// // //   try {
// // //     const response = await apiServices.login(data);
// // //     const userData = response?.data;
// // //     if (userData) {
// // //       // Save to localStorage for persistence
// // //       localStorage.setItem("user", JSON.stringify(userData?.data));
// // //       thunkApi.dispatch(setUser(userData?.data));
// // //     }
// // //     return userData;
// // //   } catch (e) {
// // //     thunkApi.dispatch(setErrorMessage(e?.data?.message || "Login failed"));
// // //     setErrors(setError, e?.data?.data || {});
// // //     return thunkApi.rejectWithValue({
// // //       error: e?.response?.data?.message || "Login failed",
// // //       data: e?.response?.data?.data,
// // //     });
// // //   }
// // // });

// // // export const signUp = createAsyncThunk(
// // //   "signup/user",
// // //   async (args, thunkApi) => {
// // //     const { data, setError } = args;
// // //     try {
// // //       const response = await apiServices.signUp(data);
// // //       thunkApi.dispatch(setErrorMessage(null));
// // //       return response.data;
// // //     } catch (e) {
// // //       setErrors(setError, e?.data?.data);
// // //       thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
// // //       return e;
// // //     }
// // //   }
// // // );

// // // export const logoutUser = createAsyncThunk(
// // //   "user/logout",
// // //   async (data, thunkApi) => {
// // //     try {
// // //       await apiServices.logoutUser({ data });
// // //       // ✅ Clear localStorage on logout
// // //       localStorage.removeItem("user");
// // //       localStorage.removeItem("accessToken");
// // //       localStorage.removeItem("refreshToken");
// // //       thunkApi.dispatch(setUser(undefined));
// // //       thunkApi.dispatch(setSignedUser(null));
// // //       thunkApi.dispatch(setErrorMessage(null));
// // //       return true;
// // //     } catch (e) {
// // //       return false;
// // //     }
// // //   }
// // // );

// // // const authSlice = createSlice({
// // //   name: "auth",
// // //   initialState,
// // //   reducers: {
// // //     setUser: (state, action) => {
// // //       state.user = action.payload;
// // //     },
// // //     setSignedUser: (state, action) => {
// // //       state.signedUser = action.payload;
// // //     },
// // //     setErrorMessage: (state, action) => {
// // //       state.error = action.payload;
// // //     },
// // //   },
// // //   extraReducers: (builder) => {
// // //     builder.addCase(signUp.pending, (state) => {
// // //       state.loading = true;
// // //     });
// // //     builder.addCase(signUp.fulfilled, (state, action) => {
// // //       state.loading = false;
// // //       if (action?.payload) state.signedUser = action.payload.data;
// // //     });
// // //     builder.addCase(signUp.rejected, (state) => {
// // //       state.loading = false;
// // //     });

// // //     builder.addCase(logIn.pending, (state) => {
// // //       state.loading = true;
// // //     });
// // //     builder.addCase(logIn.fulfilled, (state, action) => {
// // //       state.loading = false;
// // //       if (action?.payload) {
// // //         state.user = action.payload.data;
// // //         state.signedUser = action.payload.data;
// // //       }
// // //     });
// // //     builder.addCase(logIn.rejected, (state, action) => {
// // //       state.loading = false;
// // //       state.errorData = action.payload?.data || null;
// // //     });

// // //     builder.addCase(logoutUser.pending, (state) => {
// // //       state.loading = true;
// // //     });
// // //     builder.addCase(logoutUser.fulfilled, (state) => {
// // //       state.loading = false;
// // //       state.user = undefined;
// // //       state.signedUser = null;
// // //     });
// // //     builder.addCase(logoutUser.rejected, (state) => {
// // //       state.loading = false;
// // //     });
// // //   },
// // // });

// // // export default authSlice.reducer;
// // // export const { setUser, setSignedUser, setErrorMessage } = authSlice.actions;



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import apiServices from "../../../services/requestHandler";
// import { setErrors } from "../../../utils/utility";
// import Cookies from "js-cookie";

// // ✅ Rehydrate user from localStorage on every page load/refresh
// const getUserFromStorage = () => {
//   try {
//     const user = localStorage.getItem("user");
//     return user ? JSON.parse(user) : undefined;
//   } catch {
//     return undefined;
//   }
// };

// const savedUser = getUserFromStorage();

// const initialState = {
//   user: savedUser || undefined,
//   loading: false,
//   error: null,
//   errorData: null,
//   signedUser: savedUser || null,
// };

// // ── Log In ────────────────────────────────────────────────────────────────────
// export const logIn = createAsyncThunk("login/user", async (args, thunkApi) => {
//   const { data, setError } = args;
//   try {
//     const response = await apiServices.login(data);
//     const userData = response?.data;

//     if (userData?.success) {
//       const { accessToken, refreshToken, user } = userData;

//       // ✅ Save tokens in Cookies (HttpProvider reads from Cookies)
//       if (accessToken) Cookies.set("accessToken", accessToken, { expires: 1 });
//       if (refreshToken) Cookies.set("refreshToken", refreshToken, { expires: 7 });

//       // ✅ Save user in localStorage for rehydration on refresh
//       localStorage.setItem("user", JSON.stringify(user));

//       thunkApi.dispatch(setUser(user));
//     }

//     return userData;
//   } catch (e) {
//     thunkApi.dispatch(setErrorMessage(e?.data?.message || "Login failed"));
//     setErrors(setError, e?.data?.data || {});
//     return thunkApi.rejectWithValue({
//       error: e?.response?.data?.message || "Login failed",
//       data: e?.response?.data?.data,
//     });
//   }
// });

// // ── Sign Up ───────────────────────────────────────────────────────────────────
// export const signUp = createAsyncThunk(
//   "signup/user",
//   async (args, thunkApi) => {
//     const { data, setError } = args;
//     try {
//       const response = await apiServices.signUp(data);
//       thunkApi.dispatch(setErrorMessage(null));
//       return response.data;
//     } catch (e) {
//       setErrors(setError, e?.data?.data);
//       thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
//       return e;
//     }
//   }
// );

// // ── Log Out ───────────────────────────────────────────────────────────────────
// export const logoutUser = createAsyncThunk(
//   "user/logout",
//   async (_, thunkApi) => {
//     try {
//       const refreshToken = Cookies.get("refreshToken");
//       // console.log("RefreshToken being sent:", refreshToken);

//       // ✅ Send refreshToken in request body (API requires it)
//       const response = await apiServices.logout({ refreshToken });
//       // console.log("Logout response:", response);

//       // ✅ Clear tokens from Cookies
//       Cookies.remove("accessToken");
//       Cookies.remove("refreshToken");

//       // ✅ Clear user from localStorage
//       localStorage.removeItem("user");

//       // ✅ Reset Redux state
//       thunkApi.dispatch(setUser(undefined));
//       thunkApi.dispatch(setSignedUser(null));
//       thunkApi.dispatch(setErrorMessage(null));

//       return true;
//     } catch (e) {
//       console.log("Logout error:", e?.response?.data);

//       // ✅ Always clear everything even if API fails
//       Cookies.remove("accessToken");
//       Cookies.remove("refreshToken");
//       localStorage.removeItem("user");

//       thunkApi.dispatch(setUser(undefined));
//       thunkApi.dispatch(setSignedUser(null));

//       return thunkApi.rejectWithValue(
//         e?.response?.data?.message || "Logout failed"
//       );
//     }
//   }
// );

// // ── Slice ─────────────────────────────────────────────────────────────────────
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     setSignedUser: (state, action) => {
//       state.signedUser = action.payload;
//     },
//     setErrorMessage: (state, action) => {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     // ─── Sign Up ───────────────────────────────────────────
//     builder.addCase(signUp.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(signUp.fulfilled, (state, action) => {
//       state.loading = false;
//       if (action?.payload) state.signedUser = action.payload.data;
//     });
//     builder.addCase(signUp.rejected, (state) => {
//       state.loading = false;
//     });

//     // ─── Log In ────────────────────────────────────────────
//     builder.addCase(logIn.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(logIn.fulfilled, (state, action) => {
//       state.loading = false;
//       if (action?.payload?.success) {
//         // ✅ Store user object from correct key
//         state.user = action.payload.user;
//         state.signedUser = action.payload.user;
//       }
//     });
//     builder.addCase(logIn.rejected, (state, action) => {
//       state.loading = false;
//       state.errorData = action.payload?.data || null;
//     });

//     // ─── Log Out ───────────────────────────────────────────
//     builder.addCase(logoutUser.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(logoutUser.fulfilled, (state) => {
//       state.loading = false;
//       state.user = undefined;
//       state.signedUser = null;
//       state.error = null;
//       state.errorData = null;
//     });
//     builder.addCase(logoutUser.rejected, (state) => {
//       state.loading = false;
//       // ✅ Clear state even if API rejected
//       state.user = undefined;
//       state.signedUser = null;
//       state.error = null;
//       state.errorData = null;
//     });
//   },
// });

// export default authSlice.reducer;
// export const { setUser, setSignedUser, setErrorMessage } = authSlice.actions;


// // The above code is working fine





// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import apiServices from "../../../services/requestHandler";
// import { setErrors } from "../../../utils/utility";
// import Cookies from "js-cookie";

// // ✅ Rehydrate user from localStorage on every page load/refresh
// const getUserFromStorage = () => {
//   try {
//     const user = localStorage.getItem("user");
//     return user ? JSON.parse(user) : undefined;
//   } catch {
//     return undefined;
//   }
// };

// const savedUser = getUserFromStorage();

// const initialState = {
//   user: savedUser || undefined,
//   loading: false,
//   error: null,
//   errorData: null,
//   signedUser: savedUser || null,
// };

// // ── Log In
// export const logIn = createAsyncThunk("login/user", async (args, thunkApi) => {
//   const { data, setError } = args;
//   try {
//     const response = await apiServices.login(data);
//     const userData = response?.data;

//     if (userData?.success) {
//       const { accessToken, refreshToken, user } = userData;

//       if (accessToken) Cookies.set("accessToken", accessToken, { expires: 1 });
//       if (refreshToken) Cookies.set("refreshToken", refreshToken, { expires: 7 });

//       localStorage.setItem("user", JSON.stringify(user));
//       thunkApi.dispatch(setUser(user));
//     }

//     return userData;
//   } catch (e) {
//     thunkApi.dispatch(setErrorMessage(e?.data?.message || "Login failed"));
//     setErrors(setError, e?.data?.data || {});
//     return thunkApi.rejectWithValue({
//       error: e?.response?.data?.message || "Login failed",
//       data: e?.response?.data?.data,
//     });
//   }
// });

// // ── Sign Up
// export const signUp = createAsyncThunk(
//   "signup/user",
//   async (args, thunkApi) => {
//     const { data, setError } = args;
//     try {
//       const response = await apiServices.signUp(data);
//       thunkApi.dispatch(setErrorMessage(null));
//       return response.data;
//     } catch (e) {
//       setErrors(setError, e?.data?.data);
//       thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
//       return e;
//     }
//   }
// );

// // ── Log Out
// export const logoutUser = createAsyncThunk(
//   "user/logout",
//   async (_, thunkApi) => {
//     try {
//       const refreshToken = Cookies.get("refreshToken");
//       const response = await apiServices.logout({ refreshToken });

//       Cookies.remove("accessToken");
//       Cookies.remove("refreshToken");
//       localStorage.removeItem("user");

//       thunkApi.dispatch(setUser(undefined));
//       thunkApi.dispatch(setSignedUser(null));
//       thunkApi.dispatch(setErrorMessage(null));

//       return true;
//     } catch (e) {
//       console.log("Logout error:", e?.response?.data);

//       Cookies.remove("accessToken");
//       Cookies.remove("refreshToken");
//       localStorage.removeItem("user");

//       thunkApi.dispatch(setUser(undefined));
//       thunkApi.dispatch(setSignedUser(null));

//       return thunkApi.rejectWithValue(
//         e?.response?.data?.message || "Logout failed"
//       );
//     }
//   }
// );

// // ── Slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//       // ✅ Keep localStorage in sync with Redux on every setUser call
//       // This ensures Google login image + any user updates reflect immediately
//       // without requiring a page refresh
//       if (action.payload) {
//         localStorage.setItem("user", JSON.stringify(action.payload));
//       }
//     },
//     setSignedUser: (state, action) => {
//       state.signedUser = action.payload;
//     },
//     setErrorMessage: (state, action) => {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     // ─── Sign Up
//     builder.addCase(signUp.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(signUp.fulfilled, (state, action) => {
//       state.loading = false;
//       if (action?.payload) state.signedUser = action.payload.data;
//     });
//     builder.addCase(signUp.rejected, (state) => {
//       state.loading = false;
//     });

//     // ─── Log In
//     builder.addCase(logIn.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(logIn.fulfilled, (state, action) => {
//       state.loading = false;
//       if (action?.payload?.success) {
//         state.user = action.payload.user;
//         state.signedUser = action.payload.user;
//       }
//     });
//     builder.addCase(logIn.rejected, (state, action) => {
//       state.loading = false;
//       state.errorData = action.payload?.data || null;
//     });

//     // ─── Log Out
//     builder.addCase(logoutUser.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(logoutUser.fulfilled, (state) => {
//       state.loading = false;
//       state.user = undefined;
//       state.signedUser = null;
//       state.error = null;
//       state.errorData = null;
//     });
//     builder.addCase(logoutUser.rejected, (state) => {
//       state.loading = false;
//       state.user = undefined;
//       state.signedUser = null;
//       state.error = null;
//       state.errorData = null;
//     });
//   },
// });

// export default authSlice.reducer;
// export const { setUser, setSignedUser, setErrorMessage } = authSlice.actions;





// working fine





import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiServices from "../../../services/requestHandler";
import { setErrors } from "../../../utils/utility";
import Cookies from "js-cookie";

// ── Storage Helpers ──────────────────────────────────────────────────────────

const USER_KEY = "user";

const saveUserToStorage = (user) => {
  try {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  } catch {
    // Silently fail
  }
};

const getUserFromStorage = () => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

// ── Rehydrate on Load ────────────────────────────────────────────────────────

const savedUser = getUserFromStorage();

const initialState = {
  user: savedUser || null,
  signedUser: savedUser || null,
  loading: false,
  authLoading: false,
  error: null,
  errorData: null,
};

// ── Thunks ───────────────────────────────────────────────────────────────────

// Regular Login
export const logIn = createAsyncThunk("login/user", async (args, thunkApi) => {
  const { data, setError } = args;
  try {
    const response = await apiServices.login(data);
    const userData = response?.data;

    if (userData?.success) {
      const { accessToken, refreshToken, user } = userData;

      if (accessToken) Cookies.set("accessToken", accessToken, { expires: 1 });
      if (refreshToken) Cookies.set("refreshToken", refreshToken, { expires: 7 });

      // ✅ Save immediately so Layout renders correct image on first paint
      saveUserToStorage(user);
      thunkApi.dispatch(setUser(user));
    }

    return userData;
  } catch (e) {
    thunkApi.dispatch(setErrorMessage(e?.data?.message || "Login failed"));
    setErrors(setError, e?.data?.data || {});
    return thunkApi.rejectWithValue({
      error: e?.response?.data?.message || "Login failed",
      data: e?.response?.data?.data,
    });
  }
});

// Sign Up
export const signUp = createAsyncThunk("signup/user", async (args, thunkApi) => {
  const { data, setError } = args;
  try {
    const response = await apiServices.signUp(data);
    thunkApi.dispatch(setErrorMessage(null));
    return response.data;
  } catch (e) {
    setErrors(setError, e?.data?.data);
    thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
    return e;
  }
});

// Log Out — always cleans up locally even if API fails
export const logoutUser = createAsyncThunk("user/logout", async (_, thunkApi) => {
  try {
    const refreshToken = Cookies.get("refreshToken");
    await apiServices.logout({ refreshToken });
  } catch (e) {
    console.error("Logout API error:", e?.response?.data);
  } finally {
    // ✅ Always clear regardless of API success/failure
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    saveUserToStorage(null);
    thunkApi.dispatch(setUser(null));
    thunkApi.dispatch(setSignedUser(null));
    thunkApi.dispatch(setErrorMessage(null));
  }
  return true;
});

// ── Slice ────────────────────────────────────────────────────────────────────

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ Central setter — always syncs Redux + localStorage together
    setUser: (state, action) => {
      state.user = action.payload;
      state.signedUser = action.payload;
      saveUserToStorage(action.payload);
    },
    setSignedUser: (state, action) => {
      state.signedUser = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
    // ✅ Call this from your Google/Apple OAuth callback with the full user object
    // It handles tokens + user persistence in one dispatch
    // Example: dispatch(setOAuthUser({ name, email, picture, accessToken, refreshToken }))
    setOAuthUser: (state, action) => {
      const { accessToken, refreshToken, ...user } = action.payload;

      if (accessToken) Cookies.set("accessToken", accessToken, { expires: 1 });
      if (refreshToken) Cookies.set("refreshToken", refreshToken, { expires: 7 });

      state.user = user;
      state.signedUser = user;
      // ✅ Persists image URL so no flicker on refresh
      saveUserToStorage(user);
    },
  },
  extraReducers: (builder) => {

    // ── Sign Up ──────────────────────────────────────────────────────
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      if (action?.payload) state.signedUser = action.payload.data;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loading = false;
    });

    // ── Log In ───────────────────────────────────────────────────────
    builder.addCase(logIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.loading = false;
      if (action?.payload?.success) {
        state.user = action.payload.user;
        state.signedUser = action.payload.user;
      }
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.loading = false;
      state.errorData = action.payload?.data || null;
    });

    // ── Log Out ──────────────────────────────────────────────────────
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
      state.signedUser = null;
      state.error = null;
      state.errorData = null;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      // ✅ Clear state even on API failure — user clicked logout
      state.loading = false;
      state.user = null;
      state.signedUser = null;
      state.error = null;
      state.errorData = null;
    });
  },
});

export default authSlice.reducer;
export const { setUser, setSignedUser, setErrorMessage, setOAuthUser } =
  authSlice.actions;


