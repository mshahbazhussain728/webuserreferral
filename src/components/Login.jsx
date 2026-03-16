
// // import { useState, useEffect, useRef } from "react";
// // import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import Cookies from "js-cookie";

// // import Apple from "../assets/pngs/Apple.png";
// // import Google from "../assets/pngs/Google.png";
// // import Network from "../assets/pngs/Network.png";
// // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// // import { setUser } from "../api/slices/authSlice/auth";

// // const GOOGLE_CLIENT_ID =
// //   import.meta.env.VITE_GOOGLE_CLIENT_ID ||
// //   "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// // const APPLE_CONFIG = {
// //   clientId: "com.appistanltd.famocare",
// //   teamId: "XYQV46F93K",
// //   keyId: "6752908773",
// //   redirectURI: "http://localhost:5173/auth/apple/callback",
// //   scope: "name email",
// //   responseType: "code id_token",
// //   responseMode: "form_post",
// // };

// // const DEFAULT_AVATAR =
// //   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23237D93'/%3E%3Ccircle cx='50' cy='38' r='18' fill='white'/%3E%3Cellipse cx='50' cy='85' rx='28' ry='20' fill='white'/%3E%3C/svg%3E";

// // // ✅ FIX 1: Improved resolveImageUrl — always prefers googlePicture (JWT picture)
// // // over DB image, because on new devices the DB image might be stale or missing.
// // const resolveImageUrl = (...candidates) => {
// //   for (const url of candidates) {
// //     if (url && typeof url === "string" && url.trim() !== "" && url.trim() !== "null" && url.trim() !== "undefined") {
// //       return url.trim();
// //     }
// //   }
// //   return DEFAULT_AVATAR;
// // };

// // // ─── API helpers ───────────────────────────────────────────────────────────────

// // const googleSignUpAPI = async ({ username, email, socialUid, socialToken, imageUrl }) => {
// //   try {
// //     const response = await fetch(
// //       "https://referralapis.appistan.co/api/auth/signup/google",
// //       {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ username, email, signupType: "google", socialUid, socialToken, imageUrl }),
// //       }
// //     );
// //     const data = await response.json().catch(() => ({}));
// //     return { data, status: response.status, ok: response.ok };
// //   } catch (err) {
// //     console.error("Signup API network error:", err);
// //     return { data: {}, status: 0, ok: false };
// //   }
// // };

// // const googleLoginAPI = async ({ email, socialUid, socialToken }) => {
// //   try {
// //     const response = await fetch(
// //       "https://referralapis.appistan.co/api/auth/login/google",
// //       {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, socialUid, socialToken, signupType: "google" }),
// //       }
// //     );
// //     const data = await response.json().catch(() => ({}));
// //     return { data, status: response.status, ok: response.ok };
// //   } catch (err) {
// //     console.error("Login API network error:", err);
// //     return { data: {}, status: 0, ok: false };
// //   }
// // };

// // // ─── Helpers ───────────────────────────────────────────────────────────────────

// // const isUserAlreadyExists = (status, data) =>
// //   status === 409 ||
// //   status === 400 ||
// //   (data?.message && (
// //     data.message.toLowerCase().includes("already") ||
// //     data.message.toLowerCase().includes("exists") ||
// //     data.message.toLowerCase().includes("duplicate")
// //   ));

// // // ✅ FIX 2: Broadened isUserNotFound to catch ALL non-success login responses.
// // // Previously, some failure responses (e.g. 400 with a generic message) were
// // // not caught, so the code fell through without attempting signup.
// // const isUserNotFound = (status, data) => {
// //   // If the response is not 2xx and not a "user already exists" conflict,
// //   // treat it as "user not found" and attempt signup instead.
// //   if (status === 404 || status === 401 || status === 403) return true;
// //   if (data?.message && (
// //     data.message.toLowerCase().includes("not found") ||
// //     data.message.toLowerCase().includes("no account") ||
// //     data.message.toLowerCase().includes("invalid") ||
// //     data.message.toLowerCase().includes("does not exist") ||
// //     data.message.toLowerCase().includes("no user") ||
// //     data.message.toLowerCase().includes("not registered") ||
// //     data.message.toLowerCase().includes("incorrect") ||
// //     data.message.toLowerCase().includes("unregistered")
// //   )) return true;
// //   // ✅ KEY FIX: If login failed (not ok, not a conflict), assume user doesn't exist
// //   if (!data?.success && !isUserAlreadyExists(status, data)) return true;
// //   return false;
// // };

// // // ─── Main component ────────────────────────────────────────────────────────────

// // const AuthContent = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const dispatch = useDispatch();

// //   const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");
// //   const [isProcessingApple, setIsProcessingApple] = useState(false);
// //   const [isProcessingGoogle, setIsProcessingGoogle] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [authStatus, setAuthStatus] = useState(""); // "signing_in" | "creating_account"

// //   const googleButtonRef = useRef(null);

// //   const decodeJWT = (token) => {
// //     try {
// //       const base64Url = token.split(".")[1];
// //       const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
// //       const jsonPayload = decodeURIComponent(
// //         atob(base64)
// //           .split("")
// //           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
// //           .join("")
// //       );
// //       return JSON.parse(jsonPayload);
// //     } catch (error) {
// //       throw error;
// //     }
// //   };

// //   // ── Load Apple SDK ──────────────────────────────────────────────────────────
// //   useEffect(() => {
// //     const script = document.createElement("script");
// //     script.src =
// //       "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
// //     script.async = true;
// //     script.onload = () => {
// //       if (window.AppleID) {
// //         try {
// //           window.AppleID.auth.init({
// //             clientId: APPLE_CONFIG.clientId,
// //             teamId: APPLE_CONFIG.teamId,
// //             keyId: APPLE_CONFIG.keyId,
// //             redirectURI: APPLE_CONFIG.redirectURI,
// //             scope: APPLE_CONFIG.scope,
// //             responseType: APPLE_CONFIG.responseType,
// //             responseMode: APPLE_CONFIG.responseMode,
// //             state: "origin:web",
// //             nonce: Math.random().toString(36).substring(2, 15),
// //           });
// //         } catch (error) {
// //           console.error("Apple SDK init error:", error);
// //         }
// //       }
// //     };
// //     document.body.appendChild(script);
// //     return () => {
// //       if (document.body.contains(script)) document.body.removeChild(script);
// //     };
// //   }, []);

// //   // ── Apple callback ──────────────────────────────────────────────────────────
// //   useEffect(() => {
// //     const handleAppleCallback = async () => {
// //       const urlParams = new URLSearchParams(location.search);
// //       const code = urlParams.get("code");
// //       const idToken = urlParams.get("id_token");
// //       const userParam = urlParams.get("user");

// //       if (!code && !idToken) return;

// //       setIsProcessingApple(true);

// //       try {
// //         let appleUserID = localStorage.getItem("FamoCareAppleUserID");
// //         if (!appleUserID) {
// //           appleUserID = crypto.randomUUID();
// //           localStorage.setItem("FamoCareAppleUserID", appleUserID);
// //         }

// //         let userName = "";
// //         let userEmail = "";

// //         if (userParam) {
// //           try {
// //             const userData = JSON.parse(userParam);
// //             if (userData.name) {
// //               userName = `${userData.name.firstName || ""} ${userData.name.lastName || ""}`.trim();
// //             }
// //             userEmail = userData.email || "";
// //           } catch (e) {
// //             console.error("Apple user param parse error:", e);
// //           }
// //         }

// //         if (idToken && !userEmail) {
// //           try {
// //             const parts = idToken.split(".");
// //             const payload = JSON.parse(atob(parts[1]));
// //             userEmail = payload.email || "";
// //           } catch (e) {
// //             console.error("Apple idToken parse error:", e);
// //           }
// //         }

// //         navigate("/setupprofile", {
// //           state: {
// //             provider: "apple",
// //             email: userEmail,
// //             name: userName,
// //             appleUid: appleUserID,
// //             idToken,
// //             authorizationCode: code,
// //             imageUrl: DEFAULT_AVATAR,
// //           },
// //         });
// //       } catch (error) {
// //         setErrorMessage("Failed to process Apple Sign-In. Please try again.");
// //         setIsProcessingApple(false);
// //       }
// //     };

// //     handleAppleCallback();
// //   }, [location.search, navigate]);

// //   // ── Store auth data ─────────────────────────────────────────────────────────
// //   // ✅ FIX 3: googlePicture is now passed separately and used as the FIRST
// //   // priority for imageUrl, because the DB might return null/empty on first login
// //   // from a new device. The Google JWT picture is always fresh and device-independent.
// //   const storeAuthData = (apiResponse, googlePicture = DEFAULT_AVATAR) => {
// //     Cookies.set("accessToken", apiResponse.accessToken, { expires: 1 });
// //     Cookies.set("refreshToken", apiResponse.refreshToken, { expires: 7 });

// //     // ✅ Priority order: Google JWT picture → DB image → default avatar
// //     // This ensures the real Google profile photo always shows, even on new devices
// //     const userToStore = {
// //       ...apiResponse.user,
// //       imageUrl: resolveImageUrl(googlePicture, apiResponse.user?.imageUrl),
// //     };

// //     dispatch(setUser(userToStore));
// //   };

// //   // ── Navigate to dashboard ───────────────────────────────────────────────────
// //   const navigateToDashboard = (apiResponse, googlePicture, socialUid, isNewUser) => {
// //     // ✅ FIX 4: Resolve image BEFORE storing — always prefer fresh Google picture
// //     const resolvedImage = resolveImageUrl(googlePicture, apiResponse.user?.imageUrl);
// //     apiResponse.user.imageUrl = resolvedImage;

// //     storeAuthData(apiResponse, googlePicture);

// //     setTimeout(() => {
// //       navigate("/dashboard?status=ref-guide", {
// //         state: {
// //           provider: "google",
// //           email: apiResponse.user.email,
// //           name: apiResponse.user.name,
// //           picture: resolvedImage,
// //           googleUid: socialUid,
// //           accessToken: apiResponse.accessToken,
// //           refreshToken: apiResponse.refreshToken,
// //           user: apiResponse.user,
// //           isNewUser,
// //         },
// //       });
// //     }, 500);
// //   };

// //   // ── Google success handler ──────────────────────────────────────────────────
// //   const handleGoogleSignInSuccess = async (credentialResponse) => {
// //     setIsProcessingGoogle(true);
// //     setErrorMessage("");

// //     try {
// //       const decodedToken = decodeJWT(credentialResponse.credential);
// //       const {
// //         sub: socialUid,
// //         email,
// //         name: username,
// //         picture: googlePicture, // ✅ This is always the live Google profile photo
// //       } = decodedToken;

// //       const socialToken = credentialResponse.credential;

// //       // ── Step 1: Try login first ─────────────────────────────────────────────
// //       // ✅ FIX 5: Set "signing_in" status BEFORE the API call so it shows immediately
// //       setAuthStatus("signing_in");

// //       const { data: loginData, status: loginStatus, ok: loginOk } =
// //         await googleLoginAPI({ email, socialUid, socialToken });

// //       if (loginOk && loginData?.success) {
// //         // ✅ Pass googlePicture so the real image is always used
// //         navigateToDashboard(loginData, googlePicture, socialUid, false);
// //         return;
// //       }

// //       // ── Step 2: User not found → signup ────────────────────────────────────
// //       if (isUserNotFound(loginStatus, loginData)) {
// //         // ✅ FIX 6: Update status to "creating_account" — this was the missing piece
// //         // on other devices. The status change now happens correctly before signup API call.
// //         setAuthStatus("creating_account");

// //         // Small delay so React re-renders the "Creating your account..." screen
// //         await new Promise((r) => setTimeout(r, 100));

// //         const { data: signupData, status: signupStatus, ok: signupOk } =
// //           await googleSignUpAPI({
// //             username,
// //             email,
// //             socialUid,
// //             socialToken,
// //             imageUrl: googlePicture, // ✅ Send Google picture to DB during signup
// //           });

// //         if (signupOk && signupData?.success) {
// //           navigateToDashboard(signupData, googlePicture, socialUid, true);
// //           return;
// //         }

// //         if (isUserAlreadyExists(signupStatus, signupData)) {
// //           setAuthStatus("signing_in");
// //           const { data: retryLogin, ok: retryOk } =
// //             await googleLoginAPI({ email, socialUid, socialToken });

// //           if (retryOk && retryLogin?.success) {
// //             navigateToDashboard(retryLogin, googlePicture, socialUid, false);
// //             return;
// //           }
// //         }

// //         throw new Error(signupData?.message || "Unable to create your account. Please try again.");
// //       }

// //       // ── Step 3: Already exists on login failure → retry signup ──────────────
// //       if (isUserAlreadyExists(loginStatus, loginData)) {
// //         setAuthStatus("creating_account");

// //         const { data: signupData, ok: signupOk } =
// //           await googleSignUpAPI({
// //             username,
// //             email,
// //             socialUid,
// //             socialToken,
// //             imageUrl: googlePicture,
// //           });

// //         if (signupOk && signupData?.success) {
// //           navigateToDashboard(signupData, googlePicture, socialUid, true);
// //           return;
// //         }
// //       }

// //       throw new Error("Authentication failed. Please try again.");

// //     } catch (error) {
// //       console.error("Google auth error:", error);
// //       setErrorMessage(error.message || "Authentication failed. Please try again.");
// //       setIsProcessingGoogle(false);
// //       setAuthStatus("");
// //     }
// //   };

// //   const handleGoogleSignInError = () => {
// //     setErrorMessage("Google Sign-In failed. Please try again.");
// //     setIsProcessingGoogle(false);
// //     setAuthStatus("");
// //   };

// //   // ── Apple sign-in trigger ───────────────────────────────────────────────────
// //   const handleAppleSignIn = async () => {
// //     setIsProcessingApple(true);
// //     setErrorMessage("");

// //     try {
// //       if (!window.AppleID?.auth) {
// //         setErrorMessage("Apple Sign-In is not ready. Please try again in a moment.");
// //         setIsProcessingApple(false);
// //         return;
// //       }
// //       await window.AppleID.auth.signIn();
// //     } catch (error) {
// //       if (error.error === "popup_closed_by_user") {
// //         setErrorMessage("Sign-In was cancelled. Please try again.");
// //       } else {
// //         setErrorMessage(`Apple Sign-In failed: ${error.error || error.message || "Unknown error"}`);
// //       }
// //       setIsProcessingApple(false);
// //     }
// //   };

// //   const toggleAuthMode = () => {
// //     const next = !isSignUp;
// //     setIsSignUp(next);
// //     navigate(next ? "/signup" : "/signin");
// //     setErrorMessage("");
// //   };

// //   // ── Loading screen ──────────────────────────────────────────────────────────
// //   if (isProcessingApple || isProcessingGoogle) {
// //     return (
// //       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// //         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
// //           <h2 className="text-xl font-semibold text-[#055860] mb-2">
// //             {isProcessingApple
// //               ? "Redirecting to Apple..."
// //               : authStatus === "creating_account"
// //               ? "Creating your account..."
// //               : "Signing you in..."}
// //           </h2>
// //           <p className="text-gray-600">
// //             {isProcessingApple
// //               ? "Please wait while we complete your authentication"
// //               : authStatus === "creating_account"
// //               ? "Setting up your Famocare account, please wait"
// //               : "Please wait while we sign you in"}
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ── Main UI ─────────────────────────────────────────────────────────────────
// //   return (
// //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">

// //         {/* LEFT SIDE */}
// //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// //           <img src={Network} className="w-32 mb-6" alt="Network" />
// //           <h2 className="text-white text-xl font-bold mb-5">Grow Your Network</h2>
// //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs mt-[-22px]">
// //             {isSignUp
// //               ? "Create an account to start managing referrals and growing your network effectively."
// //               : "Sign in to continue managing referrals and growing your network effectively."}
// //           </p>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="flex flex-col items-center justify-center py-14 px-8">
// //           <img
// //             src={FamocareLogo}
// //             className="h-[100px] w-14"
// //             alt="Famocare Logo"
// //             onError={(e) => { e.target.style.display = "none"; }}
// //           />
// //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-25px]">
// //             Famo<span className="text-[#691188]">care</span>
// //           </h1>
// //           <h1 className="text-[15px] font-bold text-[#111827] mt-[-10px]">Referral Web App</h1>
// //           <p className="text-sm text-gray-500 mb-2 text-center">
// //             {isSignUp ? "Create your account" : "Welcome back! Please Sign in to your account"}
// //           </p>

// //           {errorMessage && (
// //             <div className="w-full max-w-xs mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
// //               <p className="text-sm text-red-600">{errorMessage}</p>
// //             </div>
// //           )}

// //           <div className="w-full max-w-xs space-y-3 mb-6">
// //             <button
// //               onClick={() => {
// //                 googleButtonRef.current?.querySelector('div[role="button"]')?.click();
// //               }}
// //               disabled={isProcessingGoogle || isProcessingApple}
// //               className="w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               <img src={Google} className="w-5" alt="Google" />
// //               {isSignUp ? "Sign up with Google" : "Sign in with Google"}
// //             </button>

// //             <div ref={googleButtonRef} className="hidden">
// //               <GoogleLogin
// //                 onSuccess={handleGoogleSignInSuccess}
// //                 onError={handleGoogleSignInError}
// //                 theme="outline"
// //                 size="large"
// //                 text={isSignUp ? "signup_with" : "signin_with"}
// //               />
// //             </div>

// //             <button
// //               onClick={handleAppleSignIn}
// //               disabled={isProcessingGoogle || isProcessingApple}
// //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               <img src={Apple} className="w-5" alt="Apple" />
// //               {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
// //             </button>
// //           </div>

// //           <p className="text-sm text-gray-600 mt-6">
// //             {isSignUp ? "Already have an account? " : "Don't have an account? "}
// //             <button
// //               onClick={toggleAuthMode}
// //               className="text-[#237D93] font-semibold hover:underline bg-none border-none cursor-pointer"
// //             >
// //               {isSignUp ? "Sign in" : "Sign up"}
// //             </button>
// //           </p>

// //           <div className="mt-6 flex items-center gap-1">
// //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// //             <p className="text-xs text-gray-500">Secure Authentication</p>
// //           </div>
// //           <p className="text-[11px] text-gray-400 mt-1">
// //             Your data is protected with industry-standard security
// //           </p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export const Auth = () => {
// //   return (
// //     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
// //       <AuthContent />
// //     </GoogleOAuthProvider>
// //   );
// // };

// // export default Auth;












// // import { useState, useEffect, useRef } from "react";
// // import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import Cookies from "js-cookie";

// // import Apple from "../assets/pngs/Apple.png";
// // import Google from "../assets/pngs/Google.png";
// // import Network from "../assets/pngs/Network.png";
// // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// // import { setUser } from "../api/slices/authSlice/auth";

// // const GOOGLE_CLIENT_ID =
// //   import.meta.env.VITE_GOOGLE_CLIENT_ID ||
// //   // "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";
// // "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// // const APPLE_CONFIG = {
// //   clientId: "com.appistanltd.famocare",
// //   teamId: "XYQV46F93K",
// //   keyId: "6752908773",
// //    redirectURI: "http://localhost:5173/auth/apple/callback",

// //   scope: "name email",
// //   responseType: "code id_token",
// //   responseMode: "form_post",
// // };

// // const DEFAULT_AVATAR =
// //   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23237D93'/%3E%3Ccircle cx='50' cy='38' r='18' fill='white'/%3E%3Cellipse cx='50' cy='85' rx='28' ry='20' fill='white'/%3E%3C/svg%3E";

// // // ✅ FIX 1: Improved resolveImageUrl — always prefers googlePicture (JWT picture)
// // // over DB image, because on new devices the DB image might be stale or missing.
// // const resolveImageUrl = (...candidates) => {
// //   for (const url of candidates) {
// //     if (url && typeof url === "string" && url.trim() !== "" && url.trim() !== "null" && url.trim() !== "undefined") {
// //       return url.trim();
// //     }
// //   }
// //   return DEFAULT_AVATAR;
// // };

// // // ─── API helpers ───────────────────────────────────────────────────────────────

// // const googleSignUpAPI = async ({ username, email, socialUid, socialToken, imageUrl }) => {
// //   try {
// //     const response = await fetch(
// //       "https://referralapis.appistan.co/api/auth/signup/google",
// //       {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ username, email, signupType: "google", socialUid, socialToken, imageUrl }),
// //       }
// //     );
// //     const data = await response.json().catch(() => ({}));
// //     return { data, status: response.status, ok: response.ok };
// //   } catch (err) {
// //     console.error("Signup API network error:", err);
// //     return { data: {}, status: 0, ok: false };
// //   }
// // };

// // const googleLoginAPI = async ({ email, socialUid, socialToken, imageUrl }) => {
// //   try {
// //     const response = await fetch(
// //       "https://referralapis.appistan.co/api/auth/login/google",
// //       {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, socialUid, socialToken, signupType: "google", imageUrl }),
// //       }
// //     );
// //     const data = await response.json().catch(() => ({}));
// //     return { data, status: response.status, ok: response.ok };
// //   } catch (err) {
// //     console.error("Login API network error:", err);
// //     return { data: {}, status: 0, ok: false };
// //   }
// // };

// // // ─── Helpers ───────────────────────────────────────────────────────────────────

// // const isUserAlreadyExists = (status, data) =>
// //   status === 409 ||
// //   status === 400 ||
// //   (data?.message && (
// //     data.message.toLowerCase().includes("already") ||
// //     data.message.toLowerCase().includes("exists") ||
// //     data.message.toLowerCase().includes("duplicate")
// //   ));

// // // ✅ FIX 2: Broadened isUserNotFound to catch ALL non-success login responses.
// // // Previously, some failure responses (e.g. 400 with a generic message) were
// // // not caught, so the code fell through without attempting signup.
// // const isUserNotFound = (status, data) => {
// //   // If the response is not 2xx and not a "user already exists" conflict,
// //   // treat it as "user not found" and attempt signup instead.
// //   if (status === 404 || status === 401 || status === 403) return true;
// //   if (data?.message && (
// //     data.message.toLowerCase().includes("not found") ||
// //     data.message.toLowerCase().includes("no account") ||
// //     data.message.toLowerCase().includes("invalid") ||
// //     data.message.toLowerCase().includes("does not exist") ||
// //     data.message.toLowerCase().includes("no user") ||
// //     data.message.toLowerCase().includes("not registered") ||
// //     data.message.toLowerCase().includes("incorrect") ||
// //     data.message.toLowerCase().includes("unregistered")
// //   )) return true;
// //   // ✅ KEY FIX: If login failed (not ok, not a conflict), assume user doesn't exist
// //   if (!data?.success && !isUserAlreadyExists(status, data)) return true;
// //   return false;
// // };

// // // ─── Main component ────────────────────────────────────────────────────────────

// // const AuthContent = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const dispatch = useDispatch();

// //   const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");
// //   const [isProcessingApple, setIsProcessingApple] = useState(false);
// //   const [isProcessingGoogle, setIsProcessingGoogle] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [authStatus, setAuthStatus] = useState(""); // "signing_in" | "creating_account"

// //   const googleButtonRef = useRef(null);

// //   const decodeJWT = (token) => {
// //     try {
// //       const base64Url = token.split(".")[1];
// //       const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
// //       const jsonPayload = decodeURIComponent(
// //         atob(base64)
// //           .split("")
// //           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
// //           .join("")
// //       );
// //       return JSON.parse(jsonPayload);
// //     } catch (error) {
// //       throw error;
// //     }
// //   };

// //   // ── Load Apple SDK ──────────────────────────────────────────────────────────
// //   useEffect(() => {
// //     const script = document.createElement("script");
// //     script.src =
// //       "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
// //     script.async = true;
// //     script.onload = () => {
// //       if (window.AppleID) {
// //         try {
// //           window.AppleID.auth.init({
// //             clientId: APPLE_CONFIG.clientId,
// //             teamId: APPLE_CONFIG.teamId,
// //             keyId: APPLE_CONFIG.keyId,
// //             redirectURI: APPLE_CONFIG.redirectURI,
// //             scope: APPLE_CONFIG.scope,
// //             responseType: APPLE_CONFIG.responseType,
// //             responseMode: APPLE_CONFIG.responseMode,
// //             state: "origin:web",
// //             nonce: Math.random().toString(36).substring(2, 15),
// //           });
// //         } catch (error) {
// //           console.error("Apple SDK init error:", error);
// //         }
// //       }
// //     };
// //     document.body.appendChild(script);
// //     return () => {
// //       if (document.body.contains(script)) document.body.removeChild(script);
// //     };
// //   }, []);

// //   // ── Apple callback ──────────────────────────────────────────────────────────
// //   useEffect(() => {
// //     const handleAppleCallback = async () => {
// //       const urlParams = new URLSearchParams(location.search);
// //       const code = urlParams.get("code");
// //       const idToken = urlParams.get("id_token");
// //       const userParam = urlParams.get("user");

// //       if (!code && !idToken) return;

// //       setIsProcessingApple(true);

// //       try {
// //         let appleUserID = localStorage.getItem("FamoCareAppleUserID");
// //         if (!appleUserID) {
// //           appleUserID = crypto.randomUUID();
// //           localStorage.setItem("FamoCareAppleUserID", appleUserID);
// //         }

// //         let userName = "";
// //         let userEmail = "";

// //         if (userParam) {
// //           try {
// //             const userData = JSON.parse(userParam);
// //             if (userData.name) {
// //               userName = `${userData.name.firstName || ""} ${userData.name.lastName || ""}`.trim();
// //             }
// //             userEmail = userData.email || "";
// //           } catch (e) {
// //             console.error("Apple user param parse error:", e);
// //           }
// //         }

// //         if (idToken && !userEmail) {
// //           try {
// //             const parts = idToken.split(".");
// //             const payload = JSON.parse(atob(parts[1]));
// //             userEmail = payload.email || "";
// //           } catch (e) {
// //             console.error("Apple idToken parse error:", e);
// //           }
// //         }

// //         navigate("/setupprofile", {
// //           state: {
// //             provider: "apple",
// //             email: userEmail,
// //             name: userName,
// //             appleUid: appleUserID,
// //             idToken,
// //             authorizationCode: code,
// //             imageUrl: DEFAULT_AVATAR,
// //           },
// //         });
// //       } catch (error) {
// //         setErrorMessage("Failed to process Apple Sign-In. Please try again.");
// //         setIsProcessingApple(false);
// //       }
// //     };

// //     handleAppleCallback();
// //   }, [location.search, navigate]);

// //   // ── Store auth data ─────────────────────────────────────────────────────────
// //   // ✅ FIX 3: googlePicture is now passed separately and used as the FIRST
// //   // priority for imageUrl, because the DB might return null/empty on first login
// //   // from a new device. The Google JWT picture is always fresh and device-independent.
// //   const storeAuthData = (apiResponse, googlePicture = DEFAULT_AVATAR) => {
// //     Cookies.set("accessToken", apiResponse.accessToken, { expires: 1 });
// //     Cookies.set("refreshToken", apiResponse.refreshToken, { expires: 7 });

// //     // ✅ Priority order: Google JWT picture → DB image → default avatar
// //     // This ensures the real Google profile photo always shows, even on new devices
// //     const userToStore = {
// //       ...apiResponse.user,
// //       imageUrl: resolveImageUrl(googlePicture, apiResponse.user?.imageUrl),
// //     };

// //     dispatch(setUser(userToStore));
// //   };

// //   // ── Navigate to dashboard ───────────────────────────────────────────────────
// //   const navigateToDashboard = (apiResponse, googlePicture, socialUid, isNewUser) => {
// //     // ✅ FIX 4: Resolve image BEFORE storing — always prefer fresh Google picture
// //     const resolvedImage = resolveImageUrl(googlePicture, apiResponse.user?.imageUrl);
// //     apiResponse.user.imageUrl = resolvedImage;

// //     storeAuthData(apiResponse, googlePicture);

// //     setTimeout(() => {
// //       navigate("/dashboard?status=ref-guide", {
// //         state: {
// //           provider: "google",
// //           email: apiResponse.user.email,
// //           name: apiResponse.user.name,
// //           picture: resolvedImage,
// //           googleUid: socialUid,
// //           accessToken: apiResponse.accessToken,
// //           refreshToken: apiResponse.refreshToken,
// //           user: apiResponse.user,
// //           isNewUser,
// //         },
// //       });
// //     }, 500);
// //   };

// //   // ── Google success handler ──────────────────────────────────────────────────
// //   const handleGoogleSignInSuccess = async (credentialResponse) => {
// //     setIsProcessingGoogle(true);
// //     setErrorMessage("");

// //     try {
// //       const decodedToken = decodeJWT(credentialResponse.credential);
// //       const {
// //         sub: socialUid,
// //         email,
// //         name: username,
// //         picture: googlePicture, // ✅ This is always the live Google profile photo
// //       } = decodedToken;

// //       const socialToken = credentialResponse.credential;

// //       // ── Step 1: Try login first ─────────────────────────────────────────────
// //       // ✅ FIX 5: Set "signing_in" status BEFORE the API call so it shows immediately
// //       setAuthStatus("signing_in");

// //       const { data: loginData, status: loginStatus, ok: loginOk } =
// //         await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

// //       if (loginOk && loginData?.success) {
// //         // ✅ Pass googlePicture so the real image is always used
// //         navigateToDashboard(loginData, googlePicture, socialUid, false);
// //         return;
// //       }

// //       // ── Step 2: User not found → signup ────────────────────────────────────
// //       if (isUserNotFound(loginStatus, loginData)) {
// //         // ✅ FIX 6: Update status to "creating_account" — this was the missing piece
// //         // on other devices. The status change now happens correctly before signup API call.
// //         setAuthStatus("creating_account");

// //         // Small delay so React re-renders the "Creating your account..." screen
// //         await new Promise((r) => setTimeout(r, 100));

// //         const { data: signupData, status: signupStatus, ok: signupOk } =
// //           await googleSignUpAPI({
// //             username,
// //             email,
// //             socialUid,
// //             socialToken,
// //             imageUrl: googlePicture, // ✅ Send Google picture to DB during signup
// //           });

// //         if (signupOk && signupData?.success) {
// //           navigateToDashboard(signupData, googlePicture, socialUid, true);
// //           return;
// //         }

// //         if (isUserAlreadyExists(signupStatus, signupData)) {
// //           setAuthStatus("signing_in");
// //           const { data: retryLogin, ok: retryOk } =
// //             await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

// //           if (retryOk && retryLogin?.success) {
// //             navigateToDashboard(retryLogin, googlePicture, socialUid, false);
// //             return;
// //           }
// //         }

// //         throw new Error(signupData?.message || "Unable to create your account. Please try again.");
// //       }

// //       // ── Step 3: Already exists on login failure → retry signup ──────────────
// //       if (isUserAlreadyExists(loginStatus, loginData)) {
// //         setAuthStatus("creating_account");

// //         const { data: signupData, ok: signupOk } =
// //           await googleSignUpAPI({
// //             username,
// //             email,
// //             socialUid,
// //             socialToken,
// //             imageUrl: googlePicture,
// //           });

// //         if (signupOk && signupData?.success) {
// //           navigateToDashboard(signupData, googlePicture, socialUid, true);
// //           return;
// //         }
// //       }

// //       throw new Error("Authentication failed. Please try again.");

// //     } catch (error) {
// //       console.error("Google auth error:", error);
// //       setErrorMessage(error.message || "Authentication failed. Please try again.");
// //       setIsProcessingGoogle(false);
// //       setAuthStatus("");
// //     }
// //   };

// //   const handleGoogleSignInError = () => {
// //     setErrorMessage("Google Sign-In failed. Please try again.");
// //     setIsProcessingGoogle(false);
// //     setAuthStatus("");
// //   };

// //   // ── Apple sign-in trigger ───────────────────────────────────────────────────
// //   const handleAppleSignIn = async () => {
// //     setIsProcessingApple(true);
// //     setErrorMessage("");

// //     try {
// //       if (!window.AppleID?.auth) {
// //         setErrorMessage("Apple Sign-In is not ready. Please try again in a moment.");
// //         setIsProcessingApple(false);
// //         return;
// //       }
// //       await window.AppleID.auth.signIn();
// //     } catch (error) {
// //       if (error.error === "popup_closed_by_user") {
// //         setErrorMessage("Sign-In was cancelled. Please try again.");
// //       } else {
// //         setErrorMessage(`Apple Sign-In failed: ${error.error || error.message || "Unknown error"}`);
// //       }
// //       setIsProcessingApple(false);
// //     }
// //   };

// //   const toggleAuthMode = () => {
// //     const next = !isSignUp;
// //     setIsSignUp(next);
// //     navigate(next ? "/signup" : "/signin");
// //     setErrorMessage("");
// //   };

// //   // ── Loading screen ──────────────────────────────────────────────────────────
// //   if (isProcessingApple || isProcessingGoogle) {
// //     return (
// //       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// //         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
// //           <h2 className="text-xl font-semibold text-[#055860] mb-2">
// //             {isProcessingApple
// //               ? "Redirecting to Apple..."
// //               : authStatus === "creating_account"
// //               ? "Creating your account..."
// //               : "Signing you in..."}
// //           </h2>
// //           <p className="text-gray-600">
// //             {isProcessingApple
// //               ? "Please wait while we complete your authentication"
// //               : authStatus === "creating_account"
// //               ? "Setting up your Famocare account, please wait"
// //               : "Please wait while we sign you in"}
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ── Main UI ─────────────────────────────────────────────────────────────────
// //   return (
// //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">

// //         {/* LEFT SIDE */}
// //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// //           <img src={Network} className="w-32 mb-6" alt="Network" />
// //           <h2 className="text-white text-xl font-bold mb-5">Grow Your Network</h2>
// //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs mt-[-22px]">
// //             {isSignUp
// //               ? "Create an account to start managing referrals and growing your network effectively."
// //               : "Sign in to continue managing referrals and growing your network effectively."}
// //           </p>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="flex flex-col items-center justify-center py-14 px-8">
// //           <img
// //             src={FamocareLogo}
// //             className="h-[100px] w-14"
// //             alt="Famocare Logo"
// //             onError={(e) => { e.target.style.display = "none"; }}
// //           />
// //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-25px]">
// //             Famo<span className="text-[#691188]">care</span>
// //           </h1>
// //           <h1 className="text-[15px] font-bold text-[#111827] mt-[-10px]">Referral Web App</h1>
// //           <p className="text-sm text-gray-500 mb-2 text-center">
// //             {isSignUp ? "Create your account" : "Welcome back! Please Sign in to your account"}
// //           </p>

// //           {errorMessage && (
// //             <div className="w-full max-w-xs mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
// //               <p className="text-sm text-red-600">{errorMessage}</p>
// //             </div>
// //           )}

// //           <div className="w-full max-w-xs space-y-3 mb-6">
// //             <button
// //               onClick={() => {
// //                 googleButtonRef.current?.querySelector('div[role="button"]')?.click();
// //               }}
// //               disabled={isProcessingGoogle || isProcessingApple}
// //               className="w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               <img src={Google} className="w-5" alt="Google" />
// //               {isSignUp ? "Sign up with Google" : "Sign in with Google"}
// //             </button>

// //             <div ref={googleButtonRef} className="hidden">
// //               <GoogleLogin
// //                 onSuccess={handleGoogleSignInSuccess}
// //                 onError={handleGoogleSignInError}
// //                 theme="outline"
// //                 size="large"
// //                 text={isSignUp ? "signup_with" : "signin_with"}
// //               />
// //             </div>

// //             <button
// //               onClick={handleAppleSignIn}
// //               disabled={isProcessingGoogle || isProcessingApple}
// //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               <img src={Apple} className="w-5" alt="Apple" />
// //               {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
// //             </button>
// //           </div>

// //           <p className="text-sm text-gray-600 mt-6">
// //             {isSignUp ? "Already have an account? " : "Don't have an account? "}
// //             <button
// //               onClick={toggleAuthMode}
// //               className="text-[#237D93] font-semibold hover:underline bg-none border-none cursor-pointer"
// //             >
// //               {isSignUp ? "Sign in" : "Sign up"}
// //             </button>
// //           </p>

// //           <div className="mt-6 flex items-center gap-1">
// //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// //             <p className="text-xs text-gray-500">Secure Authentication</p>
// //           </div>
// //           <p className="text-[11px] text-gray-400 mt-1">
// //             Your data is protected with industry-standard security
// //           </p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export const Auth = () => {
// //   return (
// //     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
// //       <AuthContent />
// //     </GoogleOAuthProvider>
// //   );
// // };

// // export default Auth;







// import { useState, useEffect, useRef } from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Cookies from "js-cookie";

// import Apple from "../assets/pngs/Apple.png";
// import Google from "../assets/pngs/Google.png";
// import Network from "../assets/pngs/Network.png";
// import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// import { setUser } from "../api/slices/authSlice/auth";

// // ✅ Read client ID strictly from env — never fall back to a hardcoded string.
// // If VITE_GOOGLE_CLIENT_ID is missing the app will show a clear error instead
// // of silently using an ID that may not have the current origin whitelisted.
// const GOOGLE_CLIENT_ID =
//   import.meta.env.VITE_GOOGLE_CLIENT_ID ||
//   "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// const APPLE_CONFIG = {
//   clientId: "com.appistanltd.famocare",
//   teamId: "XYQV46F93K",
//   keyId: "6752908773",
//   redirectURI: `${window.location.origin}/auth/apple/callback`, // ✅ Always matches current origin
//   scope: "name email",
//   responseType: "code id_token",
//   responseMode: "form_post",
// };

// const DEFAULT_AVATAR =
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23237D93'/%3E%3Ccircle cx='50' cy='38' r='18' fill='white'/%3E%3Cellipse cx='50' cy='85' rx='28' ry='20' fill='white'/%3E%3C/svg%3E";

// const resolveImageUrl = (...candidates) => {
//   for (const url of candidates) {
//     if (url && typeof url === "string" && url.trim() !== "" && url.trim() !== "null" && url.trim() !== "undefined") {
//       return url.trim();
//     }
//   }
//   return DEFAULT_AVATAR;
// };

// // ─── API helpers ───────────────────────────────────────────────────────────────

// const googleSignUpAPI = async ({ username, email, socialUid, socialToken, imageUrl }) => {
//   try {
//     const response = await fetch(
//       "https://referralapis.appistan.co/api/auth/signup/google",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, email, signupType: "google", socialUid, socialToken, imageUrl }),
//       }
//     );
//     const data = await response.json().catch(() => ({}));
//     return { data, status: response.status, ok: response.ok };
//   } catch (err) {
//     console.error("Signup API network error:", err);
//     return { data: {}, status: 0, ok: false };
//   }
// };

// const googleLoginAPI = async ({ email, socialUid, socialToken, imageUrl }) => {
//   try {
//     const response = await fetch(
//       "https://referralapis.appistan.co/api/auth/login/google",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, socialUid, socialToken, signupType: "google", imageUrl }),
//       }
//     );
//     const data = await response.json().catch(() => ({}));
//     return { data, status: response.status, ok: response.ok };
//   } catch (err) {
//     console.error("Login API network error:", err);
//     return { data: {}, status: 0, ok: false };
//   }
// };

// // ─── Helpers ───────────────────────────────────────────────────────────────────

// const isUserAlreadyExists = (status, data) =>
//   status === 409 ||
//   status === 400 ||
//   (data?.message && (
//     data.message.toLowerCase().includes("already") ||
//     data.message.toLowerCase().includes("exists") ||
//     data.message.toLowerCase().includes("duplicate")
//   ));

// const isUserNotFound = (status, data) => {
//   if (status === 404 || status === 401 || status === 403) return true;
//   if (data?.message && (
//     data.message.toLowerCase().includes("not found") ||
//     data.message.toLowerCase().includes("no account") ||
//     data.message.toLowerCase().includes("invalid") ||
//     data.message.toLowerCase().includes("does not exist") ||
//     data.message.toLowerCase().includes("no user") ||
//     data.message.toLowerCase().includes("not registered") ||
//     data.message.toLowerCase().includes("incorrect") ||
//     data.message.toLowerCase().includes("unregistered")
//   )) return true;
//   if (!data?.success && !isUserAlreadyExists(status, data)) return true;
//   return false;
// };

// // ─── Main component ────────────────────────────────────────────────────────────

// const AuthContent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");
//   const [isProcessingApple, setIsProcessingApple] = useState(false);
//   const [isProcessingGoogle, setIsProcessingGoogle] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [authStatus, setAuthStatus] = useState("");

//   const googleButtonRef = useRef(null);

//   const decodeJWT = (token) => {
//     try {
//       const base64Url = token.split(".")[1];
//       const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//       const jsonPayload = decodeURIComponent(
//         atob(base64)
//           .split("")
//           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//           .join("")
//       );
//       return JSON.parse(jsonPayload);
//     } catch (error) {
//       throw error;
//     }
//   };

//   // ── Load Apple SDK ──────────────────────────────────────────────────────────
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.AppleID) {
//         try {
//           window.AppleID.auth.init({
//             clientId: APPLE_CONFIG.clientId,
//             teamId: APPLE_CONFIG.teamId,
//             keyId: APPLE_CONFIG.keyId,
//             redirectURI: APPLE_CONFIG.redirectURI,
//             scope: APPLE_CONFIG.scope,
//             responseType: APPLE_CONFIG.responseType,
//             responseMode: APPLE_CONFIG.responseMode,
//             state: "origin:web",
//             nonce: Math.random().toString(36).substring(2, 15),
//           });
//         } catch (error) {
//           console.error("Apple SDK init error:", error);
//         }
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) document.body.removeChild(script);
//     };
//   }, []);

//   // ── Apple callback ──────────────────────────────────────────────────────────
//   useEffect(() => {
//     const handleAppleCallback = async () => {
//       const urlParams = new URLSearchParams(location.search);
//       const code = urlParams.get("code");
//       const idToken = urlParams.get("id_token");
//       const userParam = urlParams.get("user");

//       if (!code && !idToken) return;

//       setIsProcessingApple(true);

//       try {
//         let appleUserID = localStorage.getItem("FamoCareAppleUserID");
//         if (!appleUserID) {
//           appleUserID = crypto.randomUUID();
//           localStorage.setItem("FamoCareAppleUserID", appleUserID);
//         }

//         let userName = "";
//         let userEmail = "";

//         if (userParam) {
//           try {
//             const userData = JSON.parse(userParam);
//             if (userData.name) {
//               userName = `${userData.name.firstName || ""} ${userData.name.lastName || ""}`.trim();
//             }
//             userEmail = userData.email || "";
//           } catch (e) {
//             console.error("Apple user param parse error:", e);
//           }
//         }

//         if (idToken && !userEmail) {
//           try {
//             const parts = idToken.split(".");
//             const payload = JSON.parse(atob(parts[1]));
//             userEmail = payload.email || "";
//           } catch (e) {
//             console.error("Apple idToken parse error:", e);
//           }
//         }

//         navigate("/setupprofile", {
//           state: {
//             provider: "apple",
//             email: userEmail,
//             name: userName,
//             appleUid: appleUserID,
//             idToken,
//             authorizationCode: code,
//             imageUrl: DEFAULT_AVATAR,
//           },
//         });
//       } catch (error) {
//         setErrorMessage("Failed to process Apple Sign-In. Please try again.");
//         setIsProcessingApple(false);
//       }
//     };

//     handleAppleCallback();
//   }, [location.search, navigate]);

//   // ── Store auth data ─────────────────────────────────────────────────────────
//   const storeAuthData = (apiResponse, googlePicture = DEFAULT_AVATAR) => {
//     Cookies.set("accessToken", apiResponse.accessToken, { expires: 1 });
//     Cookies.set("refreshToken", apiResponse.refreshToken, { expires: 7 });

//     const userToStore = {
//       ...apiResponse.user,
//       imageUrl: resolveImageUrl(googlePicture, apiResponse.user?.imageUrl),
//     };

//     dispatch(setUser(userToStore));
//   };

//   // ── Navigate to dashboard ───────────────────────────────────────────────────
//   const navigateToDashboard = (apiResponse, googlePicture, socialUid, isNewUser) => {
//     const resolvedImage = resolveImageUrl(googlePicture, apiResponse.user?.imageUrl);
//     apiResponse.user.imageUrl = resolvedImage;

//     storeAuthData(apiResponse, googlePicture);

//     setTimeout(() => {
//       navigate("/dashboard?status=ref-guide", {
//         state: {
//           provider: "google",
//           email: apiResponse.user.email,
//           name: apiResponse.user.name,
//           picture: resolvedImage,
//           googleUid: socialUid,
//           accessToken: apiResponse.accessToken,
//           refreshToken: apiResponse.refreshToken,
//           user: apiResponse.user,
//           isNewUser,
//         },
//       });
//     }, 500);
//   };

//   // ── Google success handler ──────────────────────────────────────────────────
//   const handleGoogleSignInSuccess = async (credentialResponse) => {
//     setIsProcessingGoogle(true);
//     setErrorMessage("");

//     try {
//       const decodedToken = decodeJWT(credentialResponse.credential);
//       const {
//         sub: socialUid,
//         email,
//         name: username,
//         picture: googlePicture,
//       } = decodedToken;

//       const socialToken = credentialResponse.credential;

//       setAuthStatus("signing_in");

//       const { data: loginData, status: loginStatus, ok: loginOk } =
//         await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

//       if (loginOk && loginData?.success) {
//         navigateToDashboard(loginData, googlePicture, socialUid, false);
//         return;
//       }

//       if (isUserNotFound(loginStatus, loginData)) {
//         setAuthStatus("creating_account");
//         await new Promise((r) => setTimeout(r, 100));

//         const { data: signupData, status: signupStatus, ok: signupOk } =
//           await googleSignUpAPI({ username, email, socialUid, socialToken, imageUrl: googlePicture });

//         if (signupOk && signupData?.success) {
//           navigateToDashboard(signupData, googlePicture, socialUid, true);
//           return;
//         }

//         if (isUserAlreadyExists(signupStatus, signupData)) {
//           setAuthStatus("signing_in");
//           const { data: retryLogin, ok: retryOk } =
//             await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

//           if (retryOk && retryLogin?.success) {
//             navigateToDashboard(retryLogin, googlePicture, socialUid, false);
//             return;
//           }
//         }

//         throw new Error(signupData?.message || "Unable to create your account. Please try again.");
//       }

//       if (isUserAlreadyExists(loginStatus, loginData)) {
//         setAuthStatus("creating_account");

//         const { data: signupData, ok: signupOk } =
//           await googleSignUpAPI({ username, email, socialUid, socialToken, imageUrl: googlePicture });

//         if (signupOk && signupData?.success) {
//           navigateToDashboard(signupData, googlePicture, socialUid, true);
//           return;
//         }
//       }

//       throw new Error("Authentication failed. Please try again.");

//     } catch (error) {
//       console.error("Google auth error:", error);
//       setErrorMessage(error.message || "Authentication failed. Please try again.");
//       setIsProcessingGoogle(false);
//       setAuthStatus("");
//     }
//   };

//   const handleGoogleSignInError = () => {
//     setErrorMessage("Google Sign-In failed. Please try again.");
//     setIsProcessingGoogle(false);
//     setAuthStatus("");
//   };

//   // ── Apple sign-in trigger ───────────────────────────────────────────────────
//   const handleAppleSignIn = async () => {
//     setIsProcessingApple(true);
//     setErrorMessage("");

//     try {
//       if (!window.AppleID?.auth) {
//         setErrorMessage("Apple Sign-In is not ready. Please try again in a moment.");
//         setIsProcessingApple(false);
//         return;
//       }
//       await window.AppleID.auth.signIn();
//     } catch (error) {
//       if (error.error === "popup_closed_by_user") {
//         setErrorMessage("Sign-In was cancelled. Please try again.");
//       } else {
//         setErrorMessage(`Apple Sign-In failed: ${error.error || error.message || "Unknown error"}`);
//       }
//       setIsProcessingApple(false);
//     }
//   };

//   const toggleAuthMode = () => {
//     const next = !isSignUp;
//     setIsSignUp(next);
//     navigate(next ? "/signup" : "/signin");
//     setErrorMessage("");
//   };

//   // ── Loading screen ──────────────────────────────────────────────────────────
//   if (isProcessingApple || isProcessingGoogle) {
//     return (
//       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-[#055860] mb-2">
//             {isProcessingApple
//               ? "Redirecting to Apple..."
//               : authStatus === "creating_account"
//               ? "Creating your account..."
//               : "Signing you in..."}
//           </h2>
//           <p className="text-gray-600">
//             {isProcessingApple
//               ? "Please wait while we complete your authentication"
//               : authStatus === "creating_account"
//               ? "Setting up your Famocare account, please wait"
//               : "Please wait while we sign you in"}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // ── Main UI ─────────────────────────────────────────────────────────────────
//   return (
//     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
//       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
//           <img src={Network} className="w-32 mb-6" alt="Network" />
//           <h2 className="text-white text-xl font-bold mb-5">Grow Your Network</h2>
//           <p className="text-center text-sm text-[#D6EEF1] max-w-xs mt-[-22px]">
//             {isSignUp
//               ? "Create an account to start managing referrals and growing your network effectively."
//               : "Sign in to continue managing referrals and growing your network effectively."}
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col items-center justify-center py-14 px-8">
//           <img
//             src={FamocareLogo}
//             className="h-[100px] w-14"
//             alt="Famocare Logo"
//             onError={(e) => { e.target.style.display = "none"; }}
//           />
//           <h1 className="text-[35px] font-bold text-[#055860] mt-[-25px]">
//             Famo<span className="text-[#691188]">care</span>
//           </h1>
//           <h1 className="text-[15px] font-bold text-[#111827] mt-[-10px]">Referral Web App</h1>
//           <p className="text-sm text-gray-500 mb-2 text-center">
//             {isSignUp ? "Create your account" : "Welcome back! Please Sign in to your account"}
//           </p>

//           {errorMessage && (
//             <div className="w-full max-w-xs mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-sm text-red-600">{errorMessage}</p>
//             </div>
//           )}

//           <div className="w-full max-w-xs space-y-3 mb-6">
//             <button
//               onClick={() => {
//                 googleButtonRef.current?.querySelector('div[role="button"]')?.click();
//               }}
//               disabled={isProcessingGoogle || isProcessingApple}
//               className="w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <img src={Google} className="w-5" alt="Google" />
//               {isSignUp ? "Sign up with Google" : "Sign in with Google"}
//             </button>

//             <div ref={googleButtonRef} className="hidden">
//               <GoogleLogin
//                 onSuccess={handleGoogleSignInSuccess}
//                 onError={handleGoogleSignInError}
//                 theme="outline"
//                 size="large"
//                 text={isSignUp ? "signup_with" : "signin_with"}
//               />
//             </div>

//             <button
//               onClick={handleAppleSignIn}
//               disabled={isProcessingGoogle || isProcessingApple}
//               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <img src={Apple} className="w-5" alt="Apple" />
//               {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
//             </button>
//           </div>

//           <p className="text-sm text-gray-600 mt-6">
//             {isSignUp ? "Already have an account? " : "Don't have an account? "}
//             <button
//               onClick={toggleAuthMode}
//               className="text-[#237D93] font-semibold hover:underline bg-none border-none cursor-pointer"
//             >
//               {isSignUp ? "Sign in" : "Sign up"}
//             </button>
//           </p>

//           <div className="mt-6 flex items-center gap-1">
//             <img src={ShieldCheck} className="w-4" alt="Shield" />
//             <p className="text-xs text-gray-500">Secure Authentication</p>
//           </div>
//           <p className="text-[11px] text-gray-400 mt-1">
//             Your data is protected with industry-standard security
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export const Auth = () => {
//   return (
//      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <AuthContent />
//     </GoogleOAuthProvider>
//   );
// };

// export default Auth;





///working fine




// import { useState, useEffect, useRef } from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Cookies from "js-cookie";

// import Apple        from "../assets/pngs/Apple.png";
// import Google       from "../assets/pngs/Google.png";
// import Network      from "../assets/pngs/Network.png";
// import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// import ShieldCheck  from "../assets/pngs/ShieldCheck.png";

// import { setUser } from "../api/slices/authSlice/auth";

// const GOOGLE_CLIENT_ID =
//   import.meta.env.VITE_GOOGLE_CLIENT_ID ||
//   "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// const APPLE_CONFIG = {
//   clientId:     "com.appistanltd.famocare",
//   teamId:       "XYQV46F93K",
//   keyId:        "6752908773",
//   redirectURI:  `${window.location.origin}/auth/apple/callback`,
//   scope:        "name email",
//   responseType: "code id_token",
//   responseMode: "form_post",
// };

// const DEFAULT_AVATAR =
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23237D93'/%3E%3Ccircle cx='50' cy='38' r='18' fill='white'/%3E%3Cellipse cx='50' cy='85' rx='28' ry='20' fill='white'/%3E%3C/svg%3E";

// const resolveImageUrl = (...candidates) => {
//   for (const url of candidates) {
//     if (url && typeof url === "string" && url.trim() !== "" && url.trim() !== "null" && url.trim() !== "undefined") {
//       return url.trim();
//     }
//   }
//   return DEFAULT_AVATAR;
// };

// // ── API helpers ───────────────────────────────────────────────────────────────
// const googleSignUpAPI = async ({ username, email, socialUid, socialToken, imageUrl }) => {
//   try {
//     const response = await fetch(
//       "https://referralapis.appistan.co/api/auth/signup/google",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, email, signupType: "google", socialUid, socialToken, imageUrl }),
//       }
//     );
//     const data = await response.json().catch(() => ({}));
//     return { data, status: response.status, ok: response.ok };
//   } catch (err) {
//     console.error("Signup API network error:", err);
//     return { data: {}, status: 0, ok: false };
//   }
// };

// const googleLoginAPI = async ({ email, socialUid, socialToken, imageUrl }) => {
//   try {
//     const response = await fetch(
//       "https://referralapis.appistan.co/api/auth/login/google",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, socialUid, socialToken, signupType: "google", imageUrl }),
//       }
//     );
//     const data = await response.json().catch(() => ({}));
//     return { data, status: response.status, ok: response.ok };
//   } catch (err) {
//     console.error("Login API network error:", err);
//     return { data: {}, status: 0, ok: false };
//   }
// };

// // ── Helpers ───────────────────────────────────────────────────────────────────
// const isUserAlreadyExists = (status, data) =>
//   status === 409 ||
//   status === 400 ||
//   (data?.message && (
//     data.message.toLowerCase().includes("already") ||
//     data.message.toLowerCase().includes("exists") ||
//     data.message.toLowerCase().includes("duplicate")
//   ));

// const isUserNotFound = (status, data) => {
//   if (status === 404 || status === 401 || status === 403) return true;
//   if (data?.message && (
//     data.message.toLowerCase().includes("not found") ||
//     data.message.toLowerCase().includes("no account") ||
//     data.message.toLowerCase().includes("invalid") ||
//     data.message.toLowerCase().includes("does not exist") ||
//     data.message.toLowerCase().includes("no user") ||
//     data.message.toLowerCase().includes("not registered") ||
//     data.message.toLowerCase().includes("incorrect") ||
//     data.message.toLowerCase().includes("unregistered")
//   )) return true;
//   if (!data?.success && !isUserAlreadyExists(status, data)) return true;
//   return false;
// };

// // ── Main component ────────────────────────────────────────────────────────────
// const AuthContent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const [isSignUp, setIsSignUp]                   = useState(location.pathname === "/signup");
//   const [isProcessingApple, setIsProcessingApple] = useState(false);
//   const [isProcessingGoogle, setIsProcessingGoogle] = useState(false);
//   const [errorMessage, setErrorMessage]           = useState("");
//   const [authStatus, setAuthStatus]               = useState("");

//   const googleButtonRef = useRef(null);

//   const decodeJWT = (token) => {
//     try {
//       const base64Url = token.split(".")[1];
//       const base64    = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//       const jsonPayload = decodeURIComponent(
//         atob(base64)
//           .split("")
//           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//           .join("")
//       );
//       return JSON.parse(jsonPayload);
//     } catch (error) {
//       throw error;
//     }
//   };

//   // ── Load Apple SDK ──────────────────────────────────────────────────────────
//   useEffect(() => {
//     const script    = document.createElement("script");
//     script.src      = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
//     script.async    = true;
//     script.onload   = () => {
//       if (window.AppleID) {
//         try {
//           window.AppleID.auth.init({
//             clientId:     APPLE_CONFIG.clientId,
//             teamId:       APPLE_CONFIG.teamId,
//             keyId:        APPLE_CONFIG.keyId,
//             redirectURI:  APPLE_CONFIG.redirectURI,
//             scope:        APPLE_CONFIG.scope,
//             responseType: APPLE_CONFIG.responseType,
//             responseMode: APPLE_CONFIG.responseMode,
//             state:        "origin:web",
//             nonce:        Math.random().toString(36).substring(2, 15),
//           });
//         } catch (error) {
//           console.error("Apple SDK init error:", error);
//         }
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) document.body.removeChild(script);
//     };
//   }, []);

//   // ── Apple callback ──────────────────────────────────────────────────────────
//   useEffect(() => {
//     const handleAppleCallback = async () => {
//       const urlParams = new URLSearchParams(location.search);
//       const code      = urlParams.get("code");
//       const idToken   = urlParams.get("id_token");
//       const userParam = urlParams.get("user");

//       if (!code && !idToken) return;

//       setIsProcessingApple(true);

//       try {
//         let appleUserID = localStorage.getItem("FamoCareAppleUserID");
//         if (!appleUserID) {
//           appleUserID = crypto.randomUUID();
//           localStorage.setItem("FamoCareAppleUserID", appleUserID);
//         }

//         let userName  = "";
//         let userEmail = "";

//         if (userParam) {
//           try {
//             const userData = JSON.parse(userParam);
//             if (userData.name) {
//               userName = `${userData.name.firstName || ""} ${userData.name.lastName || ""}`.trim();
//             }
//             userEmail = userData.email || "";
//           } catch (e) {
//             console.error("Apple user param parse error:", e);
//           }
//         }

//         if (idToken && !userEmail) {
//           try {
//             const parts   = idToken.split(".");
//             const payload = JSON.parse(atob(parts[1]));
//             userEmail     = payload.email || "";
//           } catch (e) {
//             console.error("Apple idToken parse error:", e);
//           }
//         }

//         navigate("/setupprofile", {
//           state: {
//             provider:          "apple",
//             email:             userEmail,
//             name:              userName,
//             appleUid:          appleUserID,
//             idToken,
//             authorizationCode: code,
//             imageUrl:          DEFAULT_AVATAR,
//           },
//         });
//       } catch (error) {
//         setErrorMessage("Failed to process Apple Sign-In. Please try again.");
//         setIsProcessingApple(false);
//       }
//     };

//     handleAppleCallback();
//   }, [location.search, navigate]);

//   // ── Store auth data ─────────────────────────────────────────────────────────
//   // ✅ Fixed — saves to both accessToken AND referralUser cookie
//   const storeAuthData = (apiResponse, googlePicture = DEFAULT_AVATAR) => {
//     Cookies.set("accessToken", apiResponse.accessToken, { expires: 1 });
//     Cookies.set("refreshToken", apiResponse.refreshToken, { expires: 7 });

//     const userToStore = {
//       ...apiResponse.user,
//       imageUrl: resolveImageUrl(googlePicture, apiResponse.user?.imageUrl),
//     };

//     // ✅ Save user to referralUser cookie so getUser() works everywhere
//     Cookies.set("referralUser", JSON.stringify(userToStore), {
//       expires:  1,
//       sameSite: true,
//       secure:   false,
//     });

//     dispatch(setUser(userToStore));
//   };

//   // ── Navigate to dashboard ───────────────────────────────────────────────────
//   const navigateToDashboard = (apiResponse, googlePicture, socialUid, isNewUser) => {
//     const resolvedImage       = resolveImageUrl(googlePicture, apiResponse.user?.imageUrl);
//     apiResponse.user.imageUrl = resolvedImage;

//     storeAuthData(apiResponse, googlePicture);

//     setTimeout(() => {
//       navigate("/dashboard?status=ref-guide", {
//         state: {
//           provider:     "google",
//           email:        apiResponse.user.email,
//           name:         apiResponse.user.name,
//           picture:      resolvedImage,
//           googleUid:    socialUid,
//           accessToken:  apiResponse.accessToken,
//           refreshToken: apiResponse.refreshToken,
//           user:         apiResponse.user,
//           isNewUser,
//         },
//       });
//     }, 500);
//   };

//   // ── Google success handler ──────────────────────────────────────────────────
//   const handleGoogleSignInSuccess = async (credentialResponse) => {
//     setIsProcessingGoogle(true);
//     setErrorMessage("");

//     try {
//       const decodedToken = decodeJWT(credentialResponse.credential);
//       const {
//         sub:     socialUid,
//         email,
//         name:    username,
//         picture: googlePicture,
//       } = decodedToken;

//       const socialToken = credentialResponse.credential;

//       setAuthStatus("signing_in");

//       const { data: loginData, status: loginStatus, ok: loginOk } =
//         await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

//       if (loginOk && loginData?.success) {
//         navigateToDashboard(loginData, googlePicture, socialUid, false);
//         return;
//       }

//       if (isUserNotFound(loginStatus, loginData)) {
//         setAuthStatus("creating_account");
//         await new Promise((r) => setTimeout(r, 100));

//         const { data: signupData, status: signupStatus, ok: signupOk } =
//           await googleSignUpAPI({ username, email, socialUid, socialToken, imageUrl: googlePicture });

//         if (signupOk && signupData?.success) {
//           navigateToDashboard(signupData, googlePicture, socialUid, true);
//           return;
//         }

//         if (isUserAlreadyExists(signupStatus, signupData)) {
//           setAuthStatus("signing_in");
//           const { data: retryLogin, ok: retryOk } =
//             await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

//           if (retryOk && retryLogin?.success) {
//             navigateToDashboard(retryLogin, googlePicture, socialUid, false);
//             return;
//           }
//         }

//         throw new Error(signupData?.message || "Unable to create your account. Please try again.");
//       }

//       if (isUserAlreadyExists(loginStatus, loginData)) {
//         setAuthStatus("creating_account");

//         const { data: signupData, ok: signupOk } =
//           await googleSignUpAPI({ username, email, socialUid, socialToken, imageUrl: googlePicture });

//         if (signupOk && signupData?.success) {
//           navigateToDashboard(signupData, googlePicture, socialUid, true);
//           return;
//         }
//       }

//       throw new Error("Authentication failed. Please try again.");

//     } catch (error) {
//       console.error("Google auth error:", error);
//       setErrorMessage(error.message || "Authentication failed. Please try again.");
//       setIsProcessingGoogle(false);
//       setAuthStatus("");
//     }
//   };

//   const handleGoogleSignInError = () => {
//     setErrorMessage("Google Sign-In failed. Please try again.");
//     setIsProcessingGoogle(false);
//     setAuthStatus("");
//   };

//   // ── Apple sign-in trigger ───────────────────────────────────────────────────
//   const handleAppleSignIn = async () => {
//     setIsProcessingApple(true);
//     setErrorMessage("");

//     try {
//       if (!window.AppleID?.auth) {
//         setErrorMessage("Apple Sign-In is not ready. Please try again in a moment.");
//         setIsProcessingApple(false);
//         return;
//       }
//       await window.AppleID.auth.signIn();
//     } catch (error) {
//       if (error.error === "popup_closed_by_user") {
//         setErrorMessage("Sign-In was cancelled. Please try again.");
//       } else {
//         setErrorMessage(`Apple Sign-In failed: ${error.error || error.message || "Unknown error"}`);
//       }
//       setIsProcessingApple(false);
//     }
//   };

//   const toggleAuthMode = () => {
//     const next = !isSignUp;
//     setIsSignUp(next);
//     navigate(next ? "/signup" : "/signin");
//     setErrorMessage("");
//   };

//   // ── Loading screen ──────────────────────────────────────────────────────────
//   if (isProcessingApple || isProcessingGoogle) {
//     return (
//       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-[#055860] mb-2">
//             {isProcessingApple
//               ? "Redirecting to Apple..."
//               : authStatus === "creating_account"
//               ? "Creating your account..."
//               : "Signing you in..."}
//           </h2>
//           <p className="text-gray-600">
//             {isProcessingApple
//               ? "Please wait while we complete your authentication"
//               : authStatus === "creating_account"
//               ? "Setting up your Famocare account, please wait"
//               : "Please wait while we sign you in"}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // ── Main UI ─────────────────────────────────────────────────────────────────
//   return (
//     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center overflow-hidden">
//       {/* <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2"> */}
//       <div className="min-h-screen w-full max-w-[4366px] bg-white shadow-lg grid md:grid-cols-2 overflow-hidden">
  
//         {/* LEFT SIDE */}
//         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">

//           <img src={Network} className="w-32 mb-6" alt="Network" />
//           <h2 className="text-white text-xl font-bold mb-5">Grow Your Network</h2>
//           <p className="text-center text-sm text-[#D6EEF1] max-w-xs mt-[-22px]">
//             {isSignUp
//               ? "Create an account to start managing referrals and growing your network effectively."
//               : "Sign in to continue managing referrals and growing your network effectively."}
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col items-center justify-center py-14 px-8">
//           <img
//             src={FamocareLogo}
//             className="h-[100px] w-14"
//             alt="Famocare Logo"
//             onError={(e) => { e.target.style.display = "none"; }}
//           />
//           <h1 className="text-[35px] font-bold text-[#055860] mt-[-25px]">
//             Famo<span className="text-[#691188]">care</span>
//           </h1>
//           <h1 className="text-[15px] font-bold text-[#111827] mt-[-10px]">Referral Web App</h1>
//           <p className="text-sm text-gray-500 mb-2 text-center">
//             {isSignUp ? "Create your account" : "Welcome back! Please Sign in to your account"}
//           </p>

//           {errorMessage && (
//             <div className="w-full max-w-xs mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-sm text-red-600">{errorMessage}</p>
//             </div>
//           )}

//           <div className="w-full max-w-xs space-y-3 mb-6">
//             <button
//               onClick={() => {
//                 googleButtonRef.current?.querySelector('div[role="button"]')?.click();
//               }}
//               disabled={isProcessingGoogle || isProcessingApple}
//               className="w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <img src={Google} className="w-5" alt="Google" />
//               {isSignUp ? "Sign up with Google" : "Sign in with Google"}
//             </button>

//             <div ref={googleButtonRef} className="hidden">
//               <GoogleLogin
//                 onSuccess={handleGoogleSignInSuccess}
//                 onError={handleGoogleSignInError}
//                 theme="outline"
//                 size="large"
//                 text={isSignUp ? "signup_with" : "signin_with"}
//               />
//             </div>

//             <button
//               onClick={handleAppleSignIn}
//               disabled={isProcessingGoogle || isProcessingApple}
//               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <img src={Apple} className="w-5" alt="Apple" />
//               {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
//             </button>
//           </div>

//           <p className="text-sm text-gray-600 mt-6">
//             {isSignUp ? "Already have an account? " : "Don't have an account? "}
//             <button
//               onClick={toggleAuthMode}
//               className="text-[#237D93] font-semibold hover:underline bg-none border-none cursor-pointer"
//             >
//               {isSignUp ? "Sign in" : "Sign up"}
//             </button>
//           </p>

//           <div className="mt-6 flex items-center gap-1">
//             <img src={ShieldCheck} className="w-4" alt="Shield" />
//             <p className="text-xs text-gray-500">Secure Authentication</p>
//           </div>
//           <p className="text-[11px] text-gray-400 mt-1">
//             Your data is protected with industry-standard security
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export const Auth = () => {
//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <AuthContent />
//     </GoogleOAuthProvider>
//   );
// };

// export default Auth;




////////



import { useState, useEffect, useRef } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import Apple        from "../assets/pngs/Apple.png";
import Google       from "../assets/pngs/Google.png";
import Network      from "../assets/pngs/Network.png";
import FamocareLogo from "../assets/pngs/FamocareLogo.png";
import ShieldCheck  from "../assets/pngs/ShieldCheck.png";

import { setUser } from "../api/slices/authSlice/auth";

const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

const APPLE_CONFIG = {
  clientId:     "com.appistanltd.famocare",
  teamId:       "XYQV46F93K",
  keyId:        "6752908773",
  redirectURI:  `${window.location.origin}/auth/apple/callback`,
  scope:        "name email",
  responseType: "code id_token",
  responseMode: "form_post",
};

const DEFAULT_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23237D93'/%3E%3Ccircle cx='50' cy='38' r='18' fill='white'/%3E%3Cellipse cx='50' cy='85' rx='28' ry='20' fill='white'/%3E%3C/svg%3E";

const resolveImageUrl = (...candidates) => {
  for (const url of candidates) {
    if (
      url &&
      typeof url === "string" &&
      url.trim() !== "" &&
      url.trim() !== "null" &&
      url.trim() !== "undefined"
    ) {
      return url.trim();
    }
  }
  return DEFAULT_AVATAR;
};

// ── API helpers ───────────────────────────────────────────────────────────────
const googleSignUpAPI = async ({ username, email, socialUid, socialToken, imageUrl }) => {
  try {
    const response = await fetch(
      "https://referralapis.appistan.co/api/auth/signup/google",
      {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          username,
          email,
          signupType:  "google",
          socialUid,
          socialToken,
          imageUrl,
        }),
      }
    );
    const data = await response.json().catch(() => ({}));
    return { data, status: response.status, ok: response.ok };
  } catch (err) {
    console.error("Signup API network error:", err);
    return { data: {}, status: 0, ok: false };
  }
};

const googleLoginAPI = async ({ email, socialUid, socialToken, imageUrl }) => {
  try {
    const response = await fetch(
      "https://referralapis.appistan.co/api/auth/login/google",
      {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          email,
          socialUid,
          socialToken,
          signupType: "google",
          imageUrl,
        }),
      }
    );
    const data = await response.json().catch(() => ({}));
    return { data, status: response.status, ok: response.ok };
  } catch (err) {
    console.error("Login API network error:", err);
    return { data: {}, status: 0, ok: false };
  }
};

// ── Helpers ───────────────────────────────────────────────────────────────────

// ✅ Only trust success:true from your API as a real success
const isLoginSuccess = (ok, data) => ok && data?.success === true;

// ✅ User not found = any non-success login response
const isUserNotFound = (ok, data) => !ok || data?.success !== true;

// ✅ User already exists on signup
const isUserAlreadyExists = (status, data) =>
  status === 409 ||
  status === 400 ||
  (data?.message &&
    (data.message.toLowerCase().includes("already") ||
      data.message.toLowerCase().includes("exists") ||
      data.message.toLowerCase().includes("duplicate")));

// ── Main component ────────────────────────────────────────────────────────────
const AuthContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp]                     = useState(location.pathname === "/signup");
  const [isProcessingApple, setIsProcessingApple]   = useState(false);
  const [isProcessingGoogle, setIsProcessingGoogle] = useState(false);
  const [errorMessage, setErrorMessage]             = useState("");
  const [authStatus, setAuthStatus]                 = useState("");

  const googleButtonRef = useRef(null);

  const decodeJWT = (token) => {
    try {
      const base64Url   = token.split(".")[1];
      const base64      = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      throw error;
    }
  };

  // ── Load Apple SDK ────────────────────────────────────────────────────────
  useEffect(() => {
    const script    = document.createElement("script");
    script.src      = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    script.async    = true;
    script.onload   = () => {
      if (window.AppleID) {
        try {
          window.AppleID.auth.init({
            clientId:     APPLE_CONFIG.clientId,
            teamId:       APPLE_CONFIG.teamId,
            keyId:        APPLE_CONFIG.keyId,
            redirectURI:  APPLE_CONFIG.redirectURI,
            scope:        APPLE_CONFIG.scope,
            responseType: APPLE_CONFIG.responseType,
            responseMode: APPLE_CONFIG.responseMode,
            state:        "origin:web",
            nonce:        Math.random().toString(36).substring(2, 15),
          });
        } catch (error) {
          console.error("Apple SDK init error:", error);
        }
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  // ── Apple callback ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleAppleCallback = async () => {
      const urlParams = new URLSearchParams(location.search);
      const code      = urlParams.get("code");
      const idToken   = urlParams.get("id_token");
      const userParam = urlParams.get("user");

      if (!code && !idToken) return;

      setIsProcessingApple(true);

      try {
        let appleUserID = localStorage.getItem("FamoCareAppleUserID");
        if (!appleUserID) {
          appleUserID = crypto.randomUUID();
          localStorage.setItem("FamoCareAppleUserID", appleUserID);
        }

        let userName  = "";
        let userEmail = "";

        if (userParam) {
          try {
            const userData = JSON.parse(userParam);
            if (userData.name) {
              userName = `${userData.name.firstName || ""} ${userData.name.lastName || ""}`.trim();
            }
            userEmail = userData.email || "";
          } catch (e) {
            console.error("Apple user param parse error:", e);
          }
        }

        if (idToken && !userEmail) {
          try {
            const parts   = idToken.split(".");
            const payload = JSON.parse(atob(parts[1]));
            userEmail     = payload.email || "";
          } catch (e) {
            console.error("Apple idToken parse error:", e);
          }
        }

        navigate("/setupprofile", {
          state: {
            provider:          "apple",
            email:             userEmail,
            name:              userName,
            appleUid:          appleUserID,
            idToken,
            authorizationCode: code,
            imageUrl:          DEFAULT_AVATAR,
          },
        });
      } catch (error) {
        setErrorMessage("Failed to process Apple Sign-In. Please try again.");
        setIsProcessingApple(false);
      }
    };

    handleAppleCallback();
  }, [location.search, navigate]);

  // ── Store auth data ───────────────────────────────────────────────────────
  const storeAuthData = (apiResponse, googlePicture = DEFAULT_AVATAR) => {
    Cookies.set("accessToken",  apiResponse.accessToken,  { expires: 1 });
    Cookies.set("refreshToken", apiResponse.refreshToken, { expires: 7 });

    const userToStore = {
      ...apiResponse.user,
      imageUrl: resolveImageUrl(googlePicture, apiResponse.user?.imageUrl),
    };

    Cookies.set("referralUser", JSON.stringify(userToStore), {
      expires:  1,
      sameSite: true,
      secure:   false,
    });

    dispatch(setUser(userToStore));
  };

  // ── Navigate to dashboard ─────────────────────────────────────────────────
  const navigateToDashboard = (apiResponse, googlePicture, socialUid, isNewUser) => {
    const resolvedImage       = resolveImageUrl(googlePicture, apiResponse.user?.imageUrl);
    apiResponse.user.imageUrl = resolvedImage;

    storeAuthData(apiResponse, googlePicture);

    setTimeout(() => {
      navigate("/dashboard?status=ref-guide", {
        state: {
          provider:     "google",
          email:        apiResponse.user.email,
          name:         apiResponse.user.name,
          picture:      resolvedImage,
          googleUid:    socialUid,
          accessToken:  apiResponse.accessToken,
          refreshToken: apiResponse.refreshToken,
          user:         apiResponse.user,
          isNewUser,
        },
      });
    }, 500);
  };

  // ── Google success handler ────────────────────────────────────────────────
  const handleGoogleSignInSuccess = async (credentialResponse) => {
    setIsProcessingGoogle(true);
    setErrorMessage("");

    try {
      const decodedToken = decodeJWT(credentialResponse.credential);
      const {
        sub:     socialUid,
        email,
        name:    username,
        picture: googlePicture,
      } = decodedToken;

      const socialToken = credentialResponse.credential;

      // ── SIGN IN flow ────────────────────────────────────────────────────
      if (!isSignUp) {
        setAuthStatus("signing_in");

        const { data: loginData, status: loginStatus, ok: loginOk } =
          await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

        // ✅ Login succeeded
        if (isLoginSuccess(loginOk, loginData)) {
          navigateToDashboard(loginData, googlePicture, socialUid, false);
          return;
        }

        // ✅ Login failed — show "no account" message, do NOT auto-register
        if (isUserNotFound(loginOk, loginData)) {
          setErrorMessage("No account found. Please sign up first.");
          setIsProcessingGoogle(false);
          setAuthStatus("");
          return;
        }

        throw new Error(loginData?.message || "Sign in failed. Please try again.");
      }

      // ── SIGN UP flow ────────────────────────────────────────────────────
      if (isSignUp) {
        setAuthStatus("creating_account");

        const { data: signupData, status: signupStatus, ok: signupOk } =
          await googleSignUpAPI({ username, email, socialUid, socialToken, imageUrl: googlePicture });

        // ✅ Signup succeeded
        if (signupOk && signupData?.success === true) {
          navigateToDashboard(signupData, googlePicture, socialUid, true);
          return;
        }

        // ✅ Account already exists — log them in instead
        if (isUserAlreadyExists(signupStatus, signupData)) {
          setAuthStatus("signing_in");

          const { data: loginData, ok: loginOk } =
            await googleLoginAPI({ email, socialUid, socialToken, imageUrl: googlePicture });

          if (isLoginSuccess(loginOk, loginData)) {
            navigateToDashboard(loginData, googlePicture, socialUid, false);
            return;
          }
        }

        throw new Error(signupData?.message || "Unable to create your account. Please try again.");
      }

    } catch (error) {
      console.error("Google auth error:", error);
      setErrorMessage(error.message || "Authentication failed. Please try again.");
      setIsProcessingGoogle(false);
      setAuthStatus("");
    }
  };

  const handleGoogleSignInError = () => {
    setErrorMessage("Google Sign-In failed. Please try again.");
    setIsProcessingGoogle(false);
    setAuthStatus("");
  };

  // ── Apple sign-in trigger ─────────────────────────────────────────────────
  const handleAppleSignIn = async () => {
    setIsProcessingApple(true);
    setErrorMessage("");

    try {
      if (!window.AppleID?.auth) {
        setErrorMessage("Apple Sign-In is not ready. Please try again in a moment.");
        setIsProcessingApple(false);
        return;
      }
      await window.AppleID.auth.signIn();
    } catch (error) {
      if (error.error === "popup_closed_by_user") {
        setErrorMessage("Sign-In was cancelled. Please try again.");
      } else {
        setErrorMessage(`Apple Sign-In failed: ${error.error || error.message || "Unknown error"}`);
      }
      setIsProcessingApple(false);
    }
  };

  const toggleAuthMode = () => {
    const next = !isSignUp;
    setIsSignUp(next);
    navigate(next ? "/signup" : "/signin");
    setErrorMessage("");
  };

  // ── Loading screen ────────────────────────────────────────────────────────
  if (isProcessingApple || isProcessingGoogle) {
    return (
      <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-[#055860] mb-2">
            {isProcessingApple
              ? "Redirecting to Apple..."
              : authStatus === "creating_account"
              ? "Creating your account..."
              : "Signing you in..."}
          </h2>
          <p className="text-gray-600">
            {isProcessingApple
              ? "Please wait while we complete your authentication"
              : authStatus === "creating_account"
              ? "Setting up your Famocare account, please wait"
              : "Please wait while we sign you in"}
          </p>
        </div>
      </div>
    );
  }

  // ── Main UI ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center overflow-hidden">
      <div className="min-h-screen w-full max-w-[4366px] bg-white shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
          <img src={Network} className="w-32 mb-6" alt="Network" />
          <h2 className="text-white text-xl font-bold mb-5">Grow Your Network</h2>
          <p className="text-center text-sm text-[#D6EEF1] max-w-xs mt-[-22px]">
            {isSignUp
              ? "Create an account to start managing referrals and growing your network effectively."
              : "Sign in to continue managing referrals and growing your network effectively."}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-center py-14 px-8">
          <img
            src={FamocareLogo}
            className="h-[100px] w-14"
            alt="Famocare Logo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <h1 className="text-[35px] font-bold text-[#055860] mt-[-25px]">
            Famo<span className="text-[#691188]">care</span>
          </h1>
          <h1 className="text-[15px] font-bold text-[#111827] mt-[-10px]">Referral Web App</h1>
          <p className="text-sm text-gray-500 mb-2 text-center">
            {isSignUp ? "Create your account" : "Welcome back! Please Sign in to your account"}
          </p>

          {/* ✅ Error message */}
          {errorMessage && (
            <div className="w-full max-w-xs mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <span className="text-red-500 mt-0.5">⚠️</span>
              <div>
                <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
                {/* ✅ Show "Sign up" nudge only when account not found during sign in */}
                {!isSignUp && errorMessage === "No account found. Please sign up first." && (
                  <button
                    onClick={toggleAuthMode}
                    className="text-xs text-[#237D93] font-semibold underline mt-1"
                  >
                    Create an account
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="w-full max-w-xs space-y-3 mb-6">
            <button
              onClick={() => {
                googleButtonRef.current?.querySelector('div[role="button"]')?.click();
              }}
              disabled={isProcessingGoogle || isProcessingApple}
              className="w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={Google} className="w-5" alt="Google" />
              {isSignUp ? "Sign up with Google" : "Sign in with Google"}
            </button>

            <div ref={googleButtonRef} className="hidden">
              <GoogleLogin
                onSuccess={handleGoogleSignInSuccess}
                onError={handleGoogleSignInError}
                theme="outline"
                size="large"
                text={isSignUp ? "signup_with" : "signin_with"}
              />
            </div>

            <button
              onClick={handleAppleSignIn}
              disabled={isProcessingGoogle || isProcessingApple}
              className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={Apple} className="w-5" alt="Apple" />
              {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              onClick={toggleAuthMode}
              className="text-[#237D93] font-semibold hover:underline bg-none border-none cursor-pointer"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>

          <div className="mt-6 flex items-center gap-1">
            <img src={ShieldCheck} className="w-4" alt="Shield" />
            <p className="text-xs text-gray-500">Secure Authentication</p>
          </div>
          <p className="text-[11px] text-gray-400 mt-1">
            Your data is protected with industry-standard security
          </p>
        </div>

      </div>
    </div>
  );
};

export const Auth = () => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContent />
    </GoogleOAuthProvider>
  );
};

export default Auth;