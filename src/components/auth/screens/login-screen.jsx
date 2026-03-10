// // // import logo from "../../../assets/svgs/logo.svg";
// // // import { Form } from "../../../base-component/form/form";
// // // import { useLogin } from "../../../hooks/auth/useLogin";

// // // export const Login = ({ onLoginSuccess, onSignUp }) => {
// // //   const { handleSubmit, errors, fields, onSubmit } = useLogin({
// // //     onLoginSuccess,
// // //     onSignUp,
// // //   });
// // //   return (
// // //     <div className="bg-white rounded-[12px] border border-[#CFD6E9] p-[22px] md:px-[140px] md:py-[60px]">
// // //       <div className="flex items-center flex-col">
// // //         <img
// // //           src={logo}
// // //           alt="logo"
// // //           className="min-w-[162px] min-h-[165px] max-w-[162px] max-h-[165px]"
// // //         />
// // //         <p className="font-medium text-[22px] text-[#808080] mt-5 mb-[30px] text-center">
// // //           Please enter your phone number so we can send you an authentication
// // //           code!
// // //         </p>
// // //       </div>

// // //       <Form
// // //         formFields={fields}
// // //         handleSubmit={handleSubmit}
// // //         onSubmit={onSubmit}
// // //         errors={errors}
// // //       />
// // //     </div>
// // //   );
// // // };






// // // // // // // // // import { useState } from "react";
// // // // // // // // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // // // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // // // // import axios from "axios";

// // // // // // // // // import Apple from "../../../assets/pngs/Apple.png";
// // // // // // // // // import Google from "../../../assets/pngs/Google.png";
// // // // // // // // // import Network from "../../../assets/pngs/Network.png";
// // // // // // // // // import FamocareLogo from "../../../assets/pngs/FamocareLogo.png";
// // // // // // // // // import ShieldCheck from "../../../assets/pngs/ShieldCheck.png";

// // // // // // // // // const SignUpContent = () => {
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // //     fullName: "",
// // // // // // // // //     email: "",
// // // // // // // // //     password: "",
// // // // // // // // //     confirmPassword: "",
// // // // // // // // //   });
// // // // // // // // //   const [errors, setErrors] = useState({});

// // // // // // // // //   const handleInputChange = (e) => {
// // // // // // // // //     const { name, value } = e.target;
// // // // // // // // //     setFormData((prev) => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [name]: value,
// // // // // // // // //     }));
// // // // // // // // //     // Clear error when user starts typing
// // // // // // // // //     if (errors[name]) {
// // // // // // // // //       setErrors((prev) => ({
// // // // // // // // //         ...prev,
// // // // // // // // //         [name]: "",
// // // // // // // // //       }));
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const validateForm = () => {
// // // // // // // // //     const newErrors = {};

// // // // // // // // //     if (!formData.fullName.trim()) {
// // // // // // // // //       newErrors.fullName = "Full name is required";
// // // // // // // // //     }

// // // // // // // // //     if (!formData.email.trim()) {
// // // // // // // // //       newErrors.email = "Email is required";
// // // // // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // // // // //       newErrors.email = "Email is invalid";
// // // // // // // // //     }

// // // // // // // // //     if (!formData.password) {
// // // // // // // // //       newErrors.password = "Password is required";
// // // // // // // // //     } else if (formData.password.length < 8) {
// // // // // // // // //       newErrors.password = "Password must be at least 8 characters";
// // // // // // // // //     }

// // // // // // // // //     if (!formData.confirmPassword) {
// // // // // // // // //       newErrors.confirmPassword = "Please confirm your password";
// // // // // // // // //     } else if (formData.password !== formData.confirmPassword) {
// // // // // // // // //       newErrors.confirmPassword = "Passwords do not match";
// // // // // // // // //     }

// // // // // // // // //     setErrors(newErrors);
// // // // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (validateForm()) {
// // // // // // // // //       // Navigate to profile setup with email
// // // // // // // // //       navigate(`/set-up-profile?email=${encodeURIComponent(formData.email)}`);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Google Login with useGoogleLogin hook
// // // // // // // // //   const googleSignUp = useGoogleLogin({
// // // // // // // // //     onSuccess: async (tokenResponse) => {
// // // // // // // // //       console.log("Google Sign Up Success:", tokenResponse);
// // // // // // // // //       try {
// // // // // // // // //         // Get user info using the access token
// // // // // // // // //         const userInfo = await axios.get(
// // // // // // // // //           "https://www.googleapis.com/oauth2/v3/userinfo",
// // // // // // // // //           {
// // // // // // // // //             headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
// // // // // // // // //           }
// // // // // // // // //         );

// // // // // // // // //         console.log("User Info:", userInfo.data);
// // // // // // // // //         setEmail(userInfo.data.email);
// // // // // // // // //         setSelectedProvider("google");

// // // // // // // // //         // Navigate to profile setup
// // // // // // // // //         navigate(`/set-up-profile?email=${encodeURIComponent(userInfo.data.email)}`);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error fetching user info:", error);
// // // // // // // // //       }
// // // // // // // // //     },
// // // // // // // // //     onError: () => {
// // // // // // // // //       console.log("Google Sign Up Failed");
// // // // // // // // //     },
// // // // // // // // //   });

// // // // // // // // //   // Apple redirect
// // // // // // // // //   const handleAppleSignUp = () => {
// // // // // // // // //     const clientId = "com.appistanltd.famocare";
// // // // // // // // //     const redirectUri = encodeURIComponent("referral.appistan.co/apple/callback");
// // // // // // // // //     const state = Math.random().toString(36).substring(7);
// // // // // // // // //     const scope = "email name";
// // // // // // // // //     const responseType = "code id_token";
// // // // // // // // //     const responseMode = "form_post";

// // // // // // // // //     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

// // // // // // // // //     window.location.href = appleAuthUrl;
// // // // // // // // //   };

// // // // // // // // //   return (

// // // // // // // // //         <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // // // // // // // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">
// // // // // // // // //         {/* LEFT SIDE */}
// // // // // // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // // // // // // // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // // // // // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // // // // // //             Join Our Network
// // // // // // // // //           </h2>
// // // // // // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // // // // // //             Create your account to start managing referrals and growing your
// // // // // // // // //             network effectively.
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* RIGHT SIDE */}
// // // // // // // // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // // // // // // // //           <img
// // // // // // // // //             src={FamocareLogo}
// // // // // // // // //             className="h-[100px] w-14"
// // // // // // // // //             alt="Famocare Logo"
// // // // // // // // //           />
// // // // // // // // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // // // // // // // //             Famo<span className="text-[#691188]">care</span>
// // // // // // // // //           </h1>
// // // // // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // // // // //             Create your account to get started
// // // // // // // // //           </p>

// // // // // // // // //           {/* SOCIAL SIGN UP BUTTONS */}
// // // // // // // // //           <div className="w-full max-w-xs space-y-3 mb-6">
// // // // // // // // //             {/* GOOGLE SIGN UP BUTTON */}
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => googleSignUp()}
// // // // // // // // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // // // // // // // //             >
// // // // // // // // //               <img src={Google} className="w-5" alt="Google" />
// // // // // // // // //               Continue with Google
// // // // // // // // //             </button>

// // // // // // // // //             {/* APPLE SIGN UP BUTTON */}
// // // // // // // // //             <button
// // // // // // // // //               onClick={handleAppleSignUp}
// // // // // // // // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // // // // // // // //             >
// // // // // // // // //               <img src={Apple} className="w-5" alt="Apple" />
// // // // // // // // //               Continue with Apple
// // // // // // // // //             </button>
// // // // // // // // //           </div>

     

// // // // // // // // //           {/* LOGIN LINK */}
// // // // // // // // //           <p className="text-sm text-gray-600 mt-6">
// // // // // // // // //             Already have an account?{" "}
// // // // // // // // //             <Link to="/" className="text-[#237D93] font-semibold hover:underline">
// // // // // // // // //               Sign in
// // // // // // // // //             </Link>
// // // // // // // // //           </p>

// // // // // // // // //           {/* SECURITY BADGE */}
// // // // // // // // //           <div className="mt-6 flex items-center gap-1">
// // // // // // // // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // // // // // // // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // // // // // //           </div>
// // // // // // // // //           <p className="text-[11px] text-gray-400 mt-1">
// // // // // // // // //             Your data is protected with industry-standard security
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export const SignUp = () => {
// // // // // // // // //   return (
// // // // // // // // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
// // // // // // // // //       <SignUpContent />
// // // // // // // // //     </GoogleOAuthProvider>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SignUp;




// // // // // // // // import { useState } from "react";
// // // // // // // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // // // import axios from "axios";

// // // // // // // // import Apple from "../../../assets/pngs/Apple.png";
// // // // // // // // import Google from "../../../assets/pngs/Google.png";
// // // // // // // // import Network from "../../../assets/pngs/Network.png";
// // // // // // // // import FamocareLogo from "../../../assets/pngs/FamocareLogo.png";
// // // // // // // // import ShieldCheck from "../../../assets/pngs/ShieldCheck.png";


// // // // // // // // const APPLE_AUTH_CONFIG = {
// // // // // // // //   clientId:    "com.appistanltd.famocare",                         // Service ID
// // // // // // // //   redirectUri: "https://referral.appistan.co/auth/apple/callback", // Backend callback
// // // // // // // //   teamId:      "XYQV46F93K",   // ← backend only, shown here for reference
// // // // // // // //   keyId:       "6752908773",   // ← backend only, shown here for reference
// // // // // // // // };
// // // // // // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // // // // // const SignUpContent = () => {
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     fullName: "",
// // // // // // // //     email: "",
// // // // // // // //     password: "",
// // // // // // // //     confirmPassword: "",
// // // // // // // //   });
// // // // // // // //   const [errors, setErrors] = useState({});

// // // // // // // //   const handleInputChange = (e) => {
// // // // // // // //     const { name, value } = e.target;
// // // // // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // // // // //     if (errors[name]) {
// // // // // // // //       setErrors((prev) => ({ ...prev, [name]: "" }));
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const validateForm = () => {
// // // // // // // //     const newErrors = {};

// // // // // // // //     if (!formData.fullName.trim()) {
// // // // // // // //       newErrors.fullName = "Full name is required";
// // // // // // // //     }
// // // // // // // //     if (!formData.email.trim()) {
// // // // // // // //       newErrors.email = "Email is required";
// // // // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // // // //       newErrors.email = "Email is invalid";
// // // // // // // //     }
// // // // // // // //     if (!formData.password) {
// // // // // // // //       newErrors.password = "Password is required";
// // // // // // // //     } else if (formData.password.length < 8) {
// // // // // // // //       newErrors.password = "Password must be at least 8 characters";
// // // // // // // //     }
// // // // // // // //     if (!formData.confirmPassword) {
// // // // // // // //       newErrors.confirmPassword = "Please confirm your password";
// // // // // // // //     } else if (formData.password !== formData.confirmPassword) {
// // // // // // // //       newErrors.confirmPassword = "Passwords do not match";
// // // // // // // //     }

// // // // // // // //     setErrors(newErrors);
// // // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // // //   };

// // // // // // // //   const handleSubmit = (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (validateForm()) {
// // // // // // // //       navigate(`/set-up-profile?email=${encodeURIComponent(formData.email)}`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // ── Google Sign-Up ──────────────────────────────────────────────────────────
// // // // // // // //   const googleSignUp = useGoogleLogin({
// // // // // // // //     onSuccess: async (tokenResponse) => {
// // // // // // // //       console.log("Google Sign Up Success:", tokenResponse);
// // // // // // // //       try {
// // // // // // // //         const userInfo = await axios.get(
// // // // // // // //           "https://www.googleapis.com/oauth2/v3/userinfo",
// // // // // // // //           {
// // // // // // // //             headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
// // // // // // // //           }
// // // // // // // //         );
// // // // // // // //         console.log("User Info:", userInfo.data);
// // // // // // // //         setEmail(userInfo.data.email);
// // // // // // // //         setSelectedProvider("google");
// // // // // // // //         navigate(
// // // // // // // //           `/set-up-profile?email=${encodeURIComponent(userInfo.data.email)}`
// // // // // // // //         );
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching Google user info:", error);
// // // // // // // //       }
// // // // // // // //     },
// // // // // // // //     onError: () => {
// // // // // // // //       console.log("Google Sign Up Failed");
// // // // // // // //     },
// // // // // // // //   });

// // // // // // // //   // ── Apple Sign-Up ───────────────────────────────────────────────────────────
// // // // // // // //   // The frontend only builds the Apple OAuth URL and redirects the browser.
// // // // // // // //   // Apple will POST { code, id_token, user?, state } to your backend callback.
// // // // // // // //   const handleAppleSignUp = () => {
// // // // // // // //     // Random state for CSRF protection — verify this on your backend
// // // // // // // //     const state = Math.random().toString(36).substring(2, 10);
// // // // // // // //     sessionStorage.setItem("apple_oauth_state", state);

// // // // // // // //     const params = new URLSearchParams({
// // // // // // // //       response_type: "code id_token",
// // // // // // // //       response_mode:  "form_post",
// // // // // // // //       client_id:      APPLE_AUTH_CONFIG.clientId,
// // // // // // // //       redirect_uri:   APPLE_AUTH_CONFIG.redirectUri,
// // // // // // // //       scope:          "name email",
// // // // // // // //       state:          state,
// // // // // // // //     });

// // // // // // // //     window.location.href =
// // // // // // // //       `https://appleid.apple.com/auth/authorize?${params.toString()}`;
// // // // // // // //   };
// // // // // // // //   // ───────────────────────────────────────────────────────────────────────────

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // // // // // // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">

// // // // // // // //         {/* LEFT SIDE */}
// // // // // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // // // // // // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // // // // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // // // // //             Join Our Network
// // // // // // // //           </h2>
// // // // // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // // // // //             Create your account to start managing referrals and growing your
// // // // // // // //             network effectively.
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* RIGHT SIDE */}
// // // // // // // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // // // // // // //           <img
// // // // // // // //             src={FamocareLogo}
// // // // // // // //             className="h-[100px] w-14"
// // // // // // // //             alt="Famocare Logo"
// // // // // // // //           />
// // // // // // // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // // // // // // //             Famo<span className="text-[#691188]">care</span>
// // // // // // // //           </h1>
// // // // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // // // //             Create your account to get started
// // // // // // // //           </p>

// // // // // // // //           {/* SOCIAL SIGN UP BUTTONS */}
// // // // // // // //           <div className="w-full max-w-xs space-y-3 mb-6">

// // // // // // // //             {/* GOOGLE SIGN UP BUTTON */}
// // // // // // // //             <button
// // // // // // // //               onClick={() => googleSignUp()}
// // // // // // // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // // // // // // //             >
// // // // // // // //               <img src={Google} className="w-5" alt="Google" />
// // // // // // // //               Continue with Google
// // // // // // // //             </button>

// // // // // // // //             {/* APPLE SIGN UP BUTTON */}
// // // // // // // //             <button
// // // // // // // //               onClick={handleAppleSignUp}
// // // // // // // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // // // // // // //             >
// // // // // // // //               <img src={Apple} className="w-5" alt="Apple" />
// // // // // // // //               Continue with Apple
// // // // // // // //             </button>

// // // // // // // //           </div>

// // // // // // // //           {/* LOGIN LINK */}
// // // // // // // //           <p className="text-sm text-gray-600 mt-6">
// // // // // // // //             Already have an account?{" "}
// // // // // // // //             <Link
// // // // // // // //               to="/login"
// // // // // // // //               className="text-[#237D93] font-semibold hover:underline"
// // // // // // // //             >
// // // // // // // //               Sign in
// // // // // // // //             </Link>
// // // // // // // //           </p>

// // // // // // // //           {/* SECURITY BADGE */}
// // // // // // // //           <div className="mt-6 flex items-center gap-1">
// // // // // // // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // // // // // // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // // // // //           </div>
// // // // // // // //           <p className="text-[11px] text-gray-400 mt-1">
// // // // // // // //             Your data is protected with industry-standard security
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export const SignUp = () => {
// // // // // // // //   return (
// // // // // // // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
// // // // // // // //       <SignUpContent />
// // // // // // // //     </GoogleOAuthProvider>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SignUp;




// // // // // // import { useState } from "react";
// // // // // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // // // // import axios from "axios";

// // // // // // import Apple from "../../../assets/pngs/Apple.png";
// // // // // // import Google from "../../../assets/pngs/Google.png";
// // // // // // import Network from "../../../assets/pngs/Network.png";
// // // // // // import FamocareLogo from "../../../assets/pngs/FamocareLogo.png";
// // // // // // import ShieldCheck from "../../../assets/pngs/ShieldCheck.png";

// // // // // // const AuthContent = () => {
// // // // // //   const [authMode, setAuthMode] = useState("signin"); // "signin" or "signup"
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     email: "",
// // // // // //     password: "",
// // // // // //     confirmPassword: "",
// // // // // //     firstName: "",
// // // // // //     lastName: "",
// // // // // //   });
// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// // // // // //   const handleInputChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       [name]: value,
// // // // // //     }));
// // // // // //     if (errors[name]) {
// // // // // //       setErrors((prev) => ({
// // // // // //         ...prev,
// // // // // //         [name]: "",
// // // // // //       }));
// // // // // //     }
// // // // // //   };

// // // // // //   const validateForm = () => {
// // // // // //     const newErrors = {};

// // // // // //     if (!formData.email.trim()) {
// // // // // //       newErrors.email = "Email is required";
// // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // //       newErrors.email = "Email is invalid";
// // // // // //     }

// // // // // //     if (!formData.password) {
// // // // // //       newErrors.password = "Password is required";
// // // // // //     } else if (formData.password.length < 8) {
// // // // // //       newErrors.password = "Password must be at least 8 characters";
// // // // // //     }

// // // // // //     if (authMode === "signup") {
// // // // // //       if (!formData.firstName.trim()) {
// // // // // //         newErrors.firstName = "First name is required";
// // // // // //       }
// // // // // //       if (!formData.lastName.trim()) {
// // // // // //         newErrors.lastName = "Last name is required";
// // // // // //       }
// // // // // //       if (!formData.confirmPassword) {
// // // // // //         newErrors.confirmPassword = "Please confirm your password";
// // // // // //       } else if (formData.password !== formData.confirmPassword) {
// // // // // //         newErrors.confirmPassword = "Passwords do not match";
// // // // // //       }
// // // // // //     }

// // // // // //     setErrors(newErrors);
// // // // // //     return Object.keys(newErrors).length === 0;
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (validateForm()) {
// // // // // //       if (authMode === "signin") {
// // // // // //         console.log("Sign In:", formData.email);
// // // // // //         // TODO: call your sign-in API here
// // // // // //       } else {
// // // // // //         console.log("Sign Up:", formData);
// // // // // //         // TODO: call your sign-up API here
// // // // // //       }
// // // // // //       // Reset form after successful submission
// // // // // //       setFormData({
// // // // // //         email: "",
// // // // // //         password: "",
// // // // // //         confirmPassword: "",
// // // // // //         firstName: "",
// // // // // //         lastName: "",
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   // Google Sign-In
// // // // // //   const googleSignIn = useGoogleLogin({
// // // // // //     onSuccess: async (tokenResponse) => {
// // // // // //       console.log("Google Sign In Success:", tokenResponse);
// // // // // //       try {
// // // // // //         const userInfo = await axios.get(
// // // // // //           "https://www.googleapis.com/oauth2/v3/userinfo",
// // // // // //           {
// // // // // //             headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
// // // // // //           }
// // // // // //         );
// // // // // //         console.log("User Info:", userInfo.data);
// // // // // //         // TODO: Handle Google sign in/sign up API call
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching user info:", error);
// // // // // //       }
// // // // // //     },
// // // // // //     onError: () => {
// // // // // //       console.log("Google Sign In Failed");
// // // // // //     },
// // // // // //   });

// // // // // //   // Apple Sign-In
// // // // // //   const handleAppleSignIn = () => {
// // // // // //     const clientId = "com.appistanltd.famocare";
// // // // // //     const redirectUri = encodeURIComponent("referral.appistan.co/apple/callback");
// // // // // //     const state = Math.random().toString(36).substring(7);
// // // // // //     const scope = "email name";
// // // // // //     const responseType = "code id_token";
// // // // // //     const responseMode = "form_post";

// // // // // //     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

// // // // // //     window.location.href = appleAuthUrl;
// // // // // //   };

// // // // // //   const toggleAuthMode = () => {
// // // // // //     setAuthMode(authMode === "signin" ? "signup" : "signin");
// // // // // //     setFormData({
// // // // // //       email: "",
// // // // // //       password: "",
// // // // // //       confirmPassword: "",
// // // // // //       firstName: "",
// // // // // //       lastName: "",
// // // // // //     });
// // // // // //     setErrors({});
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // // // // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">
        
// // // // // //         {/* LEFT SIDE */}
// // // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // // // // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // // //             {authMode === "signin" ? "Welcome Back" : "Join Us Today"}
// // // // // //           </h2>
// // // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // // //             {authMode === "signin"
// // // // // //               ? "Sign in to continue managing referrals and growing your network effectively."
// // // // // //               : "Create an account to start managing referrals and building your network."}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* RIGHT SIDE */}
// // // // // //         <div className="flex flex-col items-center justify-center py-8 px-8 overflow-y-auto">
// // // // // //           <img
// // // // // //             src={FamocareLogo}
// // // // // //             className="h-[100px] w-14"
// // // // // //             alt="Famocare Logo"
// // // // // //           />
// // // // // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // // // // //             Famo<span className="text-[#691188]">care</span>
// // // // // //           </h1>
// // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // //             {authMode === "signin" ? "Sign in to your account" : "Create your account"}
// // // // // //           </p>

// // // // // //           {/* FORM */}
// // // // // //           <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
            
// // // // // //             {/* SIGN UP ONLY FIELDS */}
// // // // // //             {authMode === "signup" && (
// // // // // //               <>
// // // // // //                 {/* FIRST NAME */}
// // // // // //                 <div>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     name="firstName"
// // // // // //                     placeholder="First Name"
// // // // // //                     value={formData.firstName}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#237D93] transition-all ${
// // // // // //                       errors.firstName
// // // // // //                         ? "border-red-500"
// // // // // //                         : "border-gray-300"
// // // // // //                     }`}
// // // // // //                   />
// // // // // //                   {errors.firstName && (
// // // // // //                     <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
// // // // // //                   )}
// // // // // //                 </div>

// // // // // //                 {/* LAST NAME */}
// // // // // //                 <div>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     name="lastName"
// // // // // //                     placeholder="Last Name"
// // // // // //                     value={formData.lastName}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#237D93] transition-all ${
// // // // // //                       errors.lastName
// // // // // //                         ? "border-red-500"
// // // // // //                         : "border-gray-300"
// // // // // //                     }`}
// // // // // //                   />
// // // // // //                   {errors.lastName && (
// // // // // //                     <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </>
// // // // // //             )}

// // // // // //             {/* EMAIL */}
// // // // // //             <div>
// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 name="email"
// // // // // //                 placeholder="Email Address"
// // // // // //                 value={formData.email}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#237D93] transition-all ${
// // // // // //                   errors.email
// // // // // //                     ? "border-red-500"
// // // // // //                     : "border-gray-300"
// // // // // //                 }`}
// // // // // //               />
// // // // // //               {errors.email && (
// // // // // //                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* PASSWORD */}
// // // // // //             <div>
// // // // // //               <div className="relative">
// // // // // //                 <input
// // // // // //                   type={showPassword ? "text" : "password"}
// // // // // //                   name="password"
// // // // // //                   placeholder="Password"
// // // // // //                   value={formData.password}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#237D93] transition-all pr-10 ${
// // // // // //                     errors.password
// // // // // //                       ? "border-red-500"
// // // // // //                       : "border-gray-300"
// // // // // //                   }`}
// // // // // //                 />
// // // // // //                 <button
// // // // // //                   type="button"
// // // // // //                   onClick={() => setShowPassword(!showPassword)}
// // // // // //                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// // // // // //                 >
// // // // // //                   {showPassword ? "Hide" : "Show"}
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //               {errors.password && (
// // // // // //                 <p className="text-red-500 text-xs mt-1">{errors.password}</p>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* CONFIRM PASSWORD - SIGN UP ONLY */}
// // // // // //             {authMode === "signup" && (
// // // // // //               <div>
// // // // // //                 <div className="relative">
// // // // // //                   <input
// // // // // //                     type={showConfirmPassword ? "text" : "password"}
// // // // // //                     name="confirmPassword"
// // // // // //                     placeholder="Confirm Password"
// // // // // //                     value={formData.confirmPassword}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#237D93] transition-all pr-10 ${
// // // // // //                       errors.confirmPassword
// // // // // //                         ? "border-red-500"
// // // // // //                         : "border-gray-300"
// // // // // //                     }`}
// // // // // //                   />
// // // // // //                   <button
// // // // // //                     type="button"
// // // // // //                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// // // // // //                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// // // // // //                   >
// // // // // //                     {showConfirmPassword ? "Hide" : "Show"}
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //                 {errors.confirmPassword && (
// // // // // //                   <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* SUBMIT BUTTON */}
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="w-full bg-[#237D93] text-white rounded-lg py-2.5 font-semibold text-sm hover:bg-[#1a5f70] transition-colors mt-6"
// // // // // //             >
// // // // // //               {authMode === "signin" ? "Sign In" : "Create Account"}
// // // // // //             </button>
// // // // // //           </form>

// // // // // //           {/* DIVIDER */}
// // // // // //           <div className="w-full max-w-xs flex items-center gap-3 my-5">
// // // // // //             <div className="flex-1 h-px bg-gray-300"></div>
// // // // // //             <span className="text-xs text-gray-500">Or continue with</span>
// // // // // //             <div className="flex-1 h-px bg-gray-300"></div>
// // // // // //           </div>

// // // // // //           {/* SOCIAL SIGN IN BUTTONS */}
// // // // // //           <div className="w-full max-w-xs space-y-3">
// // // // // //             {/* GOOGLE SIGN IN BUTTON */}
// // // // // //             <button
// // // // // //               onClick={() => googleSignIn()}
// // // // // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // // // // //             >
// // // // // //               <img src={Google} className="w-5" alt="Google" />
// // // // // //               {authMode === "signin" ? "Sign in with Google" : "Sign up with Google"}
// // // // // //             </button>

// // // // // //             {/* APPLE SIGN IN BUTTON */}
// // // // // //             <button
// // // // // //               onClick={handleAppleSignIn}
// // // // // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // // // // //             >
// // // // // //               <img src={Apple} className="w-5" alt="Apple" />
// // // // // //               {authMode === "signin" ? "Sign in with Apple" : "Sign up with Apple"}
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* TOGGLE AUTH MODE */}
// // // // // //           <p className="text-sm text-gray-600 mt-6 text-center">
// // // // // //             {authMode === "signin" ? (
// // // // // //               <>
// // // // // //                 Already have an account?{" "}
// // // // // //                 <button
// // // // // //                   onClick={toggleAuthMode}
// // // // // //                   className="text-[#237D93] font-semibold hover:underline cursor-pointer"
// // // // // //                 >
// // // // // //                   Sign up
// // // // // //                 </button>
// // // // // //               </>
// // // // // //             ) : (
// // // // // //               <>
// // // // // //                 Already have an account?{" "}
// // // // // //                 <button
// // // // // //                   onClick={toggleAuthMode}
// // // // // //                   className="text-[#237D93] font-semibold hover:underline cursor-pointer"
// // // // // //                 >
// // // // // //                   Sign in
// // // // // //                 </button>
// // // // // //               </>
// // // // // //             )}
// // // // // //           </p>

// // // // // //           {/* SECURITY BADGE */}
// // // // // //           <div className="mt-6 flex items-center gap-1">
// // // // // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // // // // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // // //           </div>
// // // // // //           <p className="text-[11px] text-gray-400 mt-1 text-center">
// // // // // //             Your data is protected with industry-standard security
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export const Auth = () => {
// // // // // //   return (
// // // // // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
// // // // // //       <AuthContent />
// // // // // //     </GoogleOAuthProvider>
// // // // // //   );
// // // // // // };

// // // // // // export default Auth;






// // // // // // import { useState, useEffect } from "react";
// // // // // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // // // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // // // // import axios from "axios";

// // // // // // import Apple from "../../../assets/pngs/Apple.png";
// // // // // // import Google from "../../../assets/pngs/Google.png";
// // // // // // import Network from "../../../assets/pngs/Network.png";
// // // // // // import FamocareLogo from "../../../assets/pngs/FamocareLogo.png";
// // // // // // import ShieldCheck from "../../../assets/pngs/ShieldCheck.png";

// // // // // // const SignInContent = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     email: "",
// // // // // //     password: "",
// // // // // //   });
// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // //   const [isProcessingApple, setIsProcessingApple] = useState(false);

// // // // // //   // Handle Apple Callback
// // // // // //   useEffect(() => {
// // // // // //     const handleAppleCallback = async () => {
// // // // // //       const urlParams = new URLSearchParams(location.search);
// // // // // //       const code = urlParams.get('code');
// // // // // //       const idToken = urlParams.get('id_token');
// // // // // //       const state = urlParams.get('state');
// // // // // //       const user = urlParams.get('user');

// // // // // //       if (idToken || code) {
// // // // // //         setIsProcessingApple(true);
        
// // // // // //         console.log("=== APPLE SIGN IN SUCCESS ===");
// // // // // //         console.log("🔑 Apple ID Token (JWT):", idToken);
// // // // // //         console.log("🔐 Apple Authorization Code:", code);

// // // // // //         try {
// // // // // //           const savedState = sessionStorage.getItem('appleAuthState');
// // // // // //           if (state && state !== savedState) {
// // // // // //             console.error("❌ State mismatch");
// // // // // //             navigate("/signin");
// // // // // //             return;
// // // // // //           }

// // // // // //           let userEmail = null;
// // // // // //           let userName = null;

// // // // // //           if (idToken) {
// // // // // //             try {
// // // // // //               const base64Url = idToken.split('.')[1];
// // // // // //               const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
// // // // // //               const jsonPayload = decodeURIComponent(
// // // // // //                 atob(base64)
// // // // // //                   .split('')
// // // // // //                   .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
// // // // // //                   .join('')
// // // // // //               );
// // // // // //               const userData = JSON.parse(jsonPayload);
// // // // // //               console.log("👤 Decoded Apple User Data:", userData);
// // // // // //               userEmail = userData.email;
// // // // // //             } catch (error) {
// // // // // //               console.error("Error decoding ID token:", error);
// // // // // //             }
// // // // // //           }

// // // // // //           if (user) {
// // // // // //             try {
// // // // // //               const userObj = JSON.parse(user);
// // // // // //               userName = userObj.name;
// // // // // //               if (!userEmail) userEmail = userObj.email;
// // // // // //             } catch (error) {
// // // // // //               console.error("Error parsing user data:", error);
// // // // // //             }
// // // // // //           }

// // // // // //           console.log("=== SEND TO BACKEND - SIGN IN ===");
// // // // // //           console.log("Provider: Apple");
// // // // // //           console.log("ID Token:", idToken);
// // // // // //           console.log("Authorization Code:", code);
// // // // // //           console.log("Email:", userEmail);
// // // // // //           console.log("Name:", userName);

// // // // // //           // TODO: Send to your backend
// // // // // //           // await axios.post("YOUR_BACKEND_URL/api/auth/apple/signin", {
// // // // // //           //   idToken: idToken,
// // // // // //           //   authorizationCode: code,
// // // // // //           //   email: userEmail,
// // // // // //           //   name: userName,
// // // // // //           // });

// // // // // //           sessionStorage.removeItem('appleAuthState');
// // // // // //           navigate("/dashboard");
// // // // // //         } catch (error) {
// // // // // //           console.error("❌ Error processing Apple callback:", error);
// // // // // //           navigate("/signin");
// // // // // //         } finally {
// // // // // //           setIsProcessingApple(false);
// // // // // //         }
// // // // // //       }
// // // // // //     };

// // // // // //     handleAppleCallback();
// // // // // //   }, [location, navigate]);

// // // // // //   const handleInputChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       [name]: value,
// // // // // //     }));
// // // // // //     if (errors[name]) {
// // // // // //       setErrors((prev) => ({
// // // // // //         ...prev,
// // // // // //         [name]: "",
// // // // // //       }));
// // // // // //     }
// // // // // //   };

// // // // // //   const validateForm = () => {
// // // // // //     const newErrors = {};

// // // // // //     if (!formData.email.trim()) {
// // // // // //       newErrors.email = "Email is required";
// // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // //       newErrors.email = "Email is invalid";
// // // // // //     }

// // // // // //     if (!formData.password) {
// // // // // //       newErrors.password = "Password is required";
// // // // // //     } else if (formData.password.length < 8) {
// // // // // //       newErrors.password = "Password must be at least 8 characters";
// // // // // //     }

// // // // // //     setErrors(newErrors);
// // // // // //     return Object.keys(newErrors).length === 0;
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (validateForm()) {
// // // // // //       console.log("Sign In:", formData.email);
// // // // // //       // TODO: call your sign-in API here
// // // // // //       // await axios.post("YOUR_BACKEND_URL/api/auth/signin", formData);
// // // // // //       navigate("/dashboard");
// // // // // //     }
// // // // // //   };

// // // // // //   // Google Sign-In
// // // // // //   const googleSignIn = useGoogleLogin({
// // // // // //     onSuccess: async (tokenResponse) => {
// // // // // //       console.log("=== GOOGLE SIGN IN SUCCESS ===");
// // // // // //       console.log("Token Response:", tokenResponse);
// // // // // //       try {
// // // // // //         const userInfo = await axios.get(
// // // // // //           "https://www.googleapis.com/oauth2/v3/userinfo",
// // // // // //           {
// // // // // //             headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
// // // // // //           }
// // // // // //         );
// // // // // //         console.log("User Info:", userInfo.data);
        
// // // // // //         const googleToken = tokenResponse.access_token;
// // // // // //         console.log("=== SEND TO BACKEND - SIGN IN ===");
// // // // // //         console.log("Provider: Google");
// // // // // //         console.log("🔑 Google Token:", googleToken);
// // // // // //         console.log("📧 Email:", userInfo.data.email);
// // // // // //         console.log("👨 Name:", userInfo.data.name);
// // // // // //         console.log("🖼️ Picture:", userInfo.data.picture);
        
// // // // // //         // TODO: Send to your backend
// // // // // //         // await axios.post("YOUR_BACKEND_URL/api/auth/google/signin", {
// // // // // //         //   token: googleToken,
// // // // // //         //   email: userInfo.data.email,
// // // // // //         //   name: userInfo.data.name,
// // // // // //         //   picture: userInfo.data.picture,
// // // // // //         // });

// // // // // //         navigate("/dashboard");
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching user info:", error);
// // // // // //       }
// // // // // //     },
// // // // // //     onError: () => {
// // // // // //       console.log("Google Sign In Failed");
// // // // // //     },
// // // // // //   });

// // // // // //   // Apple Sign-In
// // // // // //   const handleAppleSignIn = () => {
// // // // // //     const clientId = "com.appistanltd.famocare";
// // // // // //     const redirectUri = window.location.origin + "/signin";
// // // // // //     const state = Math.random().toString(36).substring(7);
// // // // // //     const scope = "email name";
// // // // // //     const responseType = "code id_token";
// // // // // //     const responseMode = "query";

// // // // // //     sessionStorage.setItem('appleAuthState', state);

// // // // // //     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=${encodeURIComponent(scope)}`;

// // // // // //     console.log("🍎 Redirecting to Apple Sign In...");
// // // // // //     window.location.href = appleAuthUrl;
// // // // // //   };

// // // // // //   if (isProcessingApple) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // // // // //         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
// // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
// // // // // //           <h2 className="text-xl font-semibold text-[#055860] mb-2">
// // // // // //             Processing Apple Sign In...
// // // // // //           </h2>
// // // // // //           <p className="text-gray-600">Please wait while we complete your authentication</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // // // // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">
        
// // // // // //         {/* LEFT SIDE */}
// // // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // // // // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // // //             Welcome Back
// // // // // //           </h2>
// // // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // // //             Sign in to continue managing referrals and growing your network effectively.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* RIGHT SIDE */}
// // // // // //         <div className="flex flex-col items-center justify-center py-8 px-8 overflow-y-auto">
// // // // // //           <img
// // // // // //             src={FamocareLogo}
// // // // // //             className="h-[100px] w-14"
// // // // // //             alt="Famocare Logo"
// // // // // //           />
// // // // // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // // // // //             Famo<span className="text-[#691188]">care</span>
// // // // // //           </h1>
// // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // //             Sign in to your account
// // // // // //           </p>

// // // // // //           {/* FORM */}
// // // // // //           <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
            
// // // // // //             {/* EMAIL */}
// // // // // //             <div>
// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 name="email"
// // // // // //                 placeholder="Email Address"
// // // // // //                 value={formData.email}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#237D93] transition-all ${
// // // // // //                   errors.email
// // // // // //                     ? "border-red-500"
// // // // // //                     : "border-gray-300"
// // // // // //                 }`}
// // // // // //               />
// // // // // //               {errors.email && (
// // // // // //                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* PASSWORD */}
// // // // // //             <div>
// // // // // //               <div className="relative">
// // // // // //                 <input
// // // // // //                   type={showPassword ? "text" : "password"}
// // // // // //                   name="password"
// // // // // //                   placeholder="Password"
// // // // // //                   value={formData.password}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#237D93] transition-all pr-10 ${
// // // // // //                     errors.password
// // // // // //                       ? "border-red-500"
// // // // // //                       : "border-gray-300"
// // // // // //                   }`}
// // // // // //                 />
// // // // // //                 <button
// // // // // //                   type="button"
// // // // // //                   onClick={() => setShowPassword(!showPassword)}
// // // // // //                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
// // // // // //                 >
// // // // // //                   {showPassword ? "Hide" : "Show"}
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //               {errors.password && (
// // // // // //                 <p className="text-red-500 text-xs mt-1">{errors.password}</p>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* SUBMIT BUTTON */}
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="w-full bg-[#237D93] text-white rounded-lg py-2.5 font-semibold text-sm hover:bg-[#1a5f70] transition-colors mt-6"
// // // // // //             >
// // // // // //               Sign In
// // // // // //             </button>
// // // // // //           </form>

// // // // // //           {/* DIVIDER */}
// // // // // //           <div className="w-full max-w-xs flex items-center gap-3 my-5">
// // // // // //             <div className="flex-1 h-px bg-gray-300"></div>
// // // // // //             <span className="text-xs text-gray-500">Or continue with</span>
// // // // // //             <div className="flex-1 h-px bg-gray-300"></div>
// // // // // //           </div>

// // // // // //           {/* SOCIAL SIGN IN BUTTONS */}
// // // // // //           <div className="w-full max-w-xs space-y-3">
// // // // // //             {/* GOOGLE SIGN IN BUTTON */}
// // // // // //             <button
// // // // // //               onClick={() => googleSignIn()}
// // // // // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // // // // //             >
// // // // // //               <img src={Google} className="w-5" alt="Google" />
// // // // // //               Sign in with Google
// // // // // //             </button>

// // // // // //             {/* APPLE SIGN IN BUTTON */}
// // // // // //             <button
// // // // // //               onClick={handleAppleSignIn}
// // // // // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // // // // //             >
// // // // // //               <img src={Apple} className="w-5" alt="Apple" />
// // // // // //               Sign in with Apple
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* SIGN UP LINK */}
// // // // // //           <p className="text-sm text-gray-600 mt-6 text-center">
// // // // // //             Don't have an account?{" "}
// // // // // //             <Link
// // // // // //               to="/login"
// // // // // //               className="text-[#237D93] font-semibold hover:underline"
// // // // // //             >
// // // // // //               Sign up
// // // // // //             </Link>
// // // // // //           </p>

// // // // // //           {/* SECURITY BADGE */}
// // // // // //           <div className="mt-6 flex items-center gap-1">
// // // // // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // // // // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // // //           </div>
// // // // // //           <p className="text-[11px] text-gray-400 mt-1 text-center">
// // // // // //             Your data is protected with industry-standard security
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export const SignIn = () => {
// // // // // //   return (
// // // // // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
// // // // // //       <SignInContent />
// // // // // //     </GoogleOAuthProvider>
// // // // // //   );
// // // // // // };

// // // // // // export default SignIn;






// // // // // import { useState, useEffect } from "react";
// // // // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // // // import axios from "axios";

// // // // // import Apple from "../../../assets/pngs/Apple.png";
// // // // // import Google from "../../../assets/pngs/Google.png";
// // // // // import Network from "../../../assets/pngs/Network.png";
// // // // // import FamocareLogo from "../../../assets/pngs/FamocareLogo.png";
// // // // // import ShieldCheck from "../../../assets/pngs/ShieldCheck.png";

// // // // // const SignInContent = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();
// // // // //   const [isProcessingApple, setIsProcessingApple] = useState(false);

// // // // //   // Handle Apple Callback
// // // // //   useEffect(() => {
// // // // //     const handleAppleCallback = async () => {
// // // // //       const urlParams = new URLSearchParams(location.search);
// // // // //       const code = urlParams.get('code');
// // // // //       const idToken = urlParams.get('id_token');
// // // // //       const state = urlParams.get('state');
// // // // //       const user = urlParams.get('user');

// // // // //       if (idToken || code) {
// // // // //         setIsProcessingApple(true);
        
// // // // //         console.log("=== APPLE SIGN IN SUCCESS ===");
// // // // //         console.log("🔑 Apple ID Token (JWT):", idToken);
// // // // //         console.log("🔐 Apple Authorization Code:", code);

// // // // //         try {
// // // // //           const savedState = sessionStorage.getItem('appleAuthState');
// // // // //           if (state && state !== savedState) {
// // // // //             console.error("❌ State mismatch");
// // // // //             navigate("/signin");
// // // // //             return;
// // // // //           }

// // // // //           let userEmail = null;
// // // // //           let userName = null;

// // // // //           if (idToken) {
// // // // //             try {
// // // // //               const base64Url = idToken.split('.')[1];
// // // // //               const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
// // // // //               const jsonPayload = decodeURIComponent(
// // // // //                 atob(base64)
// // // // //                   .split('')
// // // // //                   .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
// // // // //                   .join('')
// // // // //               );
// // // // //               const userData = JSON.parse(jsonPayload);
// // // // //               console.log("👤 Decoded Apple User Data:", userData);
// // // // //               userEmail = userData.email;
// // // // //             } catch (error) {
// // // // //               console.error("Error decoding ID token:", error);
// // // // //             }
// // // // //           }

// // // // //           if (user) {
// // // // //             try {
// // // // //               const userObj = JSON.parse(user);
// // // // //               userName = userObj.name;
// // // // //               if (!userEmail) userEmail = userObj.email;
// // // // //             } catch (error) {
// // // // //               console.error("Error parsing user data:", error);
// // // // //             }
// // // // //           }

// // // // //           console.log("=== SEND TO BACKEND - SIGN IN ===");
// // // // //           console.log("Provider: Apple");
// // // // //           console.log("ID Token:", idToken);
// // // // //           console.log("Authorization Code:", code);
// // // // //           console.log("Email:", userEmail);
// // // // //           console.log("Name:", userName);

// // // // //           // TODO: Send to your backend
// // // // //           // await axios.post("YOUR_BACKEND_URL/api/auth/apple/signin", {
// // // // //           //   idToken: idToken,
// // // // //           //   authorizationCode: code,
// // // // //           //   email: userEmail,
// // // // //           //   name: userName,
// // // // //           // });

// // // // //           sessionStorage.removeItem('appleAuthState');
// // // // //           navigate("/dashboard");
// // // // //         } catch (error) {
// // // // //           console.error("❌ Error processing Apple callback:", error);
// // // // //           navigate("/signin");
// // // // //         } finally {
// // // // //           setIsProcessingApple(false);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     handleAppleCallback();
// // // // //   }, [location, navigate]);

// // // // //   // Google Sign-In
// // // // //   const googleSignIn = useGoogleLogin({
// // // // //     onSuccess: async (tokenResponse) => {
// // // // //       console.log("=== GOOGLE SIGN IN SUCCESS ===");
// // // // //       console.log("Token Response:", tokenResponse);
// // // // //       try {
// // // // //         const userInfo = await axios.get(
// // // // //           "https://www.googleapis.com/oauth2/v3/userinfo",
// // // // //           {
// // // // //             headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
// // // // //           }
// // // // //         );
// // // // //         console.log("User Info:", userInfo.data);
        
// // // // //         const googleToken = tokenResponse.access_token;
// // // // //         console.log("=== SEND TO BACKEND - SIGN IN ===");
// // // // //         console.log("Provider: Google");
// // // // //         console.log("🔑 Google Token:", googleToken);
// // // // //         console.log("📧 Email:", userInfo.data.email);
// // // // //         console.log("👨 Name:", userInfo.data.name);
// // // // //         console.log("🖼️ Picture:", userInfo.data.picture);
        
// // // // //         // TODO: Send to your backend
// // // // //         // await axios.post("YOUR_BACKEND_URL/api/auth/google/signin", {
// // // // //         //   token: googleToken,
// // // // //         //   email: userInfo.data.email,
// // // // //         //   name: userInfo.data.name,
// // // // //         //   picture: userInfo.data.picture,
// // // // //         // });

// // // // //         navigate("/dashboard");
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching user info:", error);
// // // // //       }
// // // // //     },
// // // // //     onError: () => {
// // // // //       console.log("Google Sign In Failed");
// // // // //     },
// // // // //   });

// // // // //   // Apple Sign-In
// // // // //   const handleAppleSignIn = () => {
// // // // //     const clientId = "com.appistanltd.famocare";
// // // // //     const redirectUri = window.location.origin + "/signin";
// // // // //     const state = Math.random().toString(36).substring(7);
// // // // //     const scope = "email name";
// // // // //     const responseType = "code id_token";
// // // // //     const responseMode = "query";

// // // // //     sessionStorage.setItem('appleAuthState', state);

// // // // //     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=${encodeURIComponent(scope)}`;

// // // // //     console.log("🍎 Redirecting to Apple Sign In...");
// // // // //     window.location.href = appleAuthUrl;
// // // // //   };

// // // // //   if (isProcessingApple) {
// // // // //     return (
// // // // //       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // // // //         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
// // // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
// // // // //           <h2 className="text-xl font-semibold text-[#055860] mb-2">
// // // // //             Processing Apple Sign In...
// // // // //           </h2>
// // // // //           <p className="text-gray-600">Please wait while we complete your authentication</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // // // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">
        
// // // // //         {/* LEFT SIDE */}
// // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // // // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // //             Welcome Back
// // // // //           </h2>
// // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // //             Sign in to continue managing referrals and growing your network effectively.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* RIGHT SIDE */}
// // // // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // // // //           <img
// // // // //             src={FamocareLogo}
// // // // //             className="h-[100px] w-14"
// // // // //             alt="Famocare Logo"
// // // // //           />
// // // // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // // // //             Famo<span className="text-[#691188]">care</span>
// // // // //           </h1>
// // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // //             Sign in to your account
// // // // //           </p>

// // // // //           {/* SOCIAL SIGN IN BUTTONS */}
// // // // //           <div className="w-full max-w-xs space-y-3">
// // // // //             {/* GOOGLE SIGN IN BUTTON */}
// // // // //             <button
// // // // //               onClick={() => googleSignIn()}
// // // // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // // // //             >
// // // // //               <img src={Google} className="w-5" alt="Google" />
// // // // //               Sign in with Google
// // // // //             </button>

// // // // //             {/* APPLE SIGN IN BUTTON */}
// // // // //             <button
// // // // //               onClick={handleAppleSignIn}
// // // // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // // // //             >
// // // // //               <img src={Apple} className="w-5" alt="Apple" />
// // // // //               Sign in with Apple
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* DONT HAVE ACCOUNT LINK */}
// // // // //           <p className="text-sm text-gray-600 mt-6 text-center">
// // // // //             Don't have an account?{" "}
// // // // //             <Link
// // // // //               to="/login"
// // // // //               className="text-[#237D93] font-semibold hover:underline"
// // // // //             >
// // // // //               Sign up
// // // // //             </Link>
// // // // //           </p>

// // // // //           {/* SECURITY BADGE */}
// // // // //           <div className="mt-6 flex items-center gap-1">
// // // // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // // // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // //           </div>
// // // // //           <p className="text-[11px] text-gray-400 mt-1 text-center">
// // // // //             Your data is protected with industry-standard security
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export const SignIn = () => {
// // // // //   return (
// // // // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
// // // // //       <SignInContent />
// // // // //     </GoogleOAuthProvider>
// // // // //   );
// // // // // };

// // // // // export default SignIn;










// // import { useState, useEffect, useRef } from "react";
// // import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// // import { useNavigate, useLocation } from "react-router-dom";

// // import Apple from "../assets/pngs/Apple.png";
// // import Google from "../assets/pngs/Google.png";
// // import Network from "../assets/pngs/Network.png";
// // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // import ShieldCheck from "../assets/pngs/ShieldCheck.png";

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

// // // ─────────────────────────────────────────────
// // //  API HELPERS
// // // ─────────────────────────────────────────────

// // /**
// //  * Google SIGN UP → POST /api/auth/signup/google
// //  * Postman body fields: username, email, signupType, socialUid, socialToken, imageUrl
// //  */
// // const googleSignUpAPI = async ({ username, email, socialUid, socialToken, imageUrl }) => {
// //   const payload = {
// //     username,
// //     email,
// //     signupType: "google",
// //     socialUid,
// //     socialToken,
// //     imageUrl,
// //   };


// //   const response = await fetch(
// //     "https://referralapis.appistan.co/api/auth/signup/google",
// //     {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(payload),
// //     }
// //   );

// //   const data = await response.json().catch(() => ({}));

// //   if (!response.ok) {
// //     throw new Error(data.message || data.error || `Signup API error: ${response.status}`);
// //   }
// //   return data;
// // };

// // /**
// //  * Google SIGN IN → POST /api/auth/login/google
// //  * Required body fields: email, socialUid, socialToken (login likely needs fewer fields)
// //  */
// // const googleLoginAPI = async ({ email, socialUid, socialToken }) => {
// //   const payload = {
// //     email,
// //     socialUid,
// //     socialToken,
// //     signupType: "google",
// //   };


// //   const response = await fetch(
// //     "https://referralapis.appistan.co/api/auth/login/google",
// //     {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(payload),
// //     }
// //   );

// //   const data = await response.json().catch(() => ({}));

// //   if (!response.ok) {
// //     throw new Error(data.message || data.error || `Login API error: ${response.status}`);
// //   }
// //   return data;
// // };

// // /** Store tokens and user in localStorage */
// // const storeAuthData = (apiResponse) => {
// //   localStorage.setItem("accessToken", apiResponse.accessToken);
// //   localStorage.setItem("refreshToken", apiResponse.refreshToken);
// //   localStorage.setItem("user", JSON.stringify(apiResponse.user));
// // };

// // // ─────────────────────────────────────────────
// // //  COMPONENT
// // // ─────────────────────────────────────────────

// // const AuthContent = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");
// //   const [isProcessingApple, setIsProcessingApple] = useState(false);
// //   const [isProcessingGoogle, setIsProcessingGoogle] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");

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

// //   // Load Apple SDK
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
// //         }
// //       }
// //     };
// //     document.body.appendChild(script);
// //     return () => {
// //       if (document.body.contains(script)) document.body.removeChild(script);
// //     };
// //   }, []);

// //   // Apple Callback
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
// //           }
// //         }

// //         if (idToken && !userEmail) {
// //           try {
// //             const parts = idToken.split(".");
// //             const payload = JSON.parse(atob(parts[1]));
// //             userEmail = payload.email || "";
// //           } catch (e) {
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
// //           },
// //         });
// //       } catch (error) {
// //         setErrorMessage("Failed to process Apple Sign-In. Please try again.");
// //         setIsProcessingApple(false);
// //       }
// //     };

// //     handleAppleCallback();
// //   }, [location.search, navigate]);

// //   // Google success — calls signup OR login based on isSignUp
// //   const handleGoogleSignInSuccess = async (credentialResponse) => {
// //     setIsProcessingGoogle(true);
// //     setErrorMessage("");

// //     try {
// //       const decodedToken = decodeJWT(credentialResponse.credential);
// //       const {
// //         sub: socialUid,   // Google user ID  → socialUid
// //         email,
// //         name: username,   // Google name     → username
// //         picture: imageUrl // Google picture  → imageUrl
// //       } = decodedToken;

// //       // socialToken = the raw Google ID token (JWT)
// //       const socialToken = credentialResponse.credential;


// //       let apiResponse;

// //       if (isSignUp) {
// //         apiResponse = await googleSignUpAPI({
// //           username,
// //           email,
// //           socialUid,
// //           socialToken,
// //           imageUrl,
// //         });
// //       } else {
// //         apiResponse = await googleLoginAPI({
// //           email,
// //           socialUid,
// //           socialToken,
// //         });
// //       }

// //       if (apiResponse.success) {
// //         storeAuthData(apiResponse);

// //         setTimeout(() => {
// //           navigate("/dashboard?status=ref-guide", {
// //             state: {
// //               provider: "google",
// //               email: apiResponse.user.email,
// //               name: apiResponse.user.name,
// //               picture: apiResponse.user.imageUrl || imageUrl,
// //               googleUid: socialUid,
// //               accessToken: apiResponse.accessToken,
// //               refreshToken: apiResponse.refreshToken,
// //               user: apiResponse.user,
// //               isNewUser: isSignUp,
// //             },
// //           });
// //         }, 500);
// //       } else {
// //         throw new Error(apiResponse.message || "Authentication failed");
// //       }
// //     } catch (error) {
// //       setErrorMessage(
// //         error.message ||
// //           `Google ${isSignUp ? "Sign Up" : "Sign In"} failed. Please try again.`
// //       );
// //       setIsProcessingGoogle(false);
// //     }
// //   };

// //   const handleGoogleSignInError = () => {
// //     setErrorMessage("Google Sign-In failed. Please try again.");
// //     setIsProcessingGoogle(false);
// //   };

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

// //   if (isProcessingApple || isProcessingGoogle) {
// //     return (
// //       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// //         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
// //           <h2 className="text-xl font-semibold text-[#055860] mb-2">
// //             {isProcessingApple
// //               ? "Redirecting to Apple..."
// //               : isSignUp
// //               ? "Creating your account..."
// //               : "Signing you in..."}
// //           </h2>
// //           <p className="text-gray-600">Please wait while we complete your authentication</p>
// //         </div>
// //       </div>
// //     );
// //   }

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
// //           <img src={FamocareLogo} className="h-[100px] w-14" alt="Famocare Logo" />
// //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-25px]">
// //             Famo<span className="text-[#691188]">care</span>
// //           </h1>
// //           <h1 className="text-[15px] font-bold text-[#111827] mt-[-10px]">Referral Web App</h1>
// //           <p className="text-sm text-gray-500 mb-2 text-center">
// //             {isSignUp ? "Create your account" : "Welcome back! Please Sign in to your account"}
// //           </p>

// //           {/* ERROR MESSAGE */}
// //           {errorMessage && (
// //             <div className="w-full max-w-xs mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
// //               <p className="text-sm text-red-600">{errorMessage}</p>
// //             </div>
// //           )}

// //           {/* BUTTONS */}
// //           <div className="w-full max-w-xs space-y-3 mb-6">

// //             {/* Custom Google button */}
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

// //             {/* Hidden Google OAuth trigger */}
// //             <div ref={googleButtonRef} className="hidden">
// //               <GoogleLogin
// //                 onSuccess={handleGoogleSignInSuccess}
// //                 onError={handleGoogleSignInError}
// //                 theme="outline"
// //                 size="large"
// //                 text={isSignUp ? "signup_with" : "signin_with"}
// //               />
// //             </div>

// //             {/* Apple button */}
// //             <button
// //               onClick={handleAppleSignIn}
// //               disabled={isProcessingGoogle || isProcessingApple}
// //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               <img src={Apple} className="w-5" alt="Apple" />
// //               {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
// //             </button>

// //           </div>

// //           {/* TOGGLE */}
// //           <p className="text-sm text-gray-600 mt-6">
// //             {isSignUp ? "Already have an account? " : "Don't have an account? "}
// //             <button
// //               onClick={toggleAuthMode}
// //               className="text-[#237D93] font-semibold hover:underline bg-none border-none cursor-pointer"
// //             >
// //               {isSignUp ? "Sign in" : "Sign up"}
// //             </button>
// //           </p>

// //           {/* SECURITY BADGE */}
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

// import Apple from "../assets/pngs/Apple.png";
// import Google from "../assets/pngs/Google.png";
// import Network from "../assets/pngs/Network.png";
// import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// const GOOGLE_CLIENT_ID =
//   import.meta.env.VITE_GOOGLE_CLIENT_ID ||
//   "356026568517-62q9fhbdn6e1b632fnopj846gpuv0fj6.apps.googleusercontent.com";

// const APPLE_CONFIG = {
//   clientId: "com.appistanltd.famocare",
//   teamId: "XYQV46F93K",
//   keyId: "6752908773",
//   redirectURI: "http://localhost:5173/auth/apple/callback",
//   scope: "name email",
//   responseType: "code id_token",
//   responseMode: "form_post",
// };

// // ─────────────────────────────────────────────
// //  API HELPERS
// // ─────────────────────────────────────────────

// /**
//  * Google SIGN UP → POST /api/auth/signup/google
//  * Postman body fields: username, email, signupType, socialUid, socialToken, imageUrl
//  */
// const googleSignUpAPI = async ({ username, email, socialUid, socialToken, imageUrl }) => {
//   const payload = {
//     username,
//     email,
//     signupType: "google",
//     socialUid,
//     socialToken,
//     imageUrl,
//   };


//   const response = await fetch(
//     "https://referralapis.appistan.co/api/auth/signup/google",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     }
//   );

//   const data = await response.json().catch(() => ({}));

//   if (!response.ok) {
//     throw new Error(data.message || data.error || `Signup API error: ${response.status}`);
//   }
//   return data;
// };

// /**
//  * Google SIGN IN → POST /api/auth/login/google
//  * Required body fields: email, socialUid, socialToken (login likely needs fewer fields)
//  */
// const googleLoginAPI = async ({ email, socialUid, socialToken }) => {
//   const payload = {
//     email,
//     socialUid,
//     socialToken,
//     signupType: "google",
//   };


//   const response = await fetch(
//     "https://referralapis.appistan.co/api/auth/login/google",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     }
//   );

//   const data = await response.json().catch(() => ({}));

//   if (!response.ok) {
//     throw new Error(data.message || data.error || `Login API error: ${response.status}`);
//   }
//   return data;
// };

// /** Store tokens and user in localStorage */
// const storeAuthData = (apiResponse) => {
//   localStorage.setItem("accessToken", apiResponse.accessToken);
//   localStorage.setItem("refreshToken", apiResponse.refreshToken);
//   localStorage.setItem("user", JSON.stringify(apiResponse.user));
// };

// // ─────────────────────────────────────────────
// //  COMPONENT
// // ─────────────────────────────────────────────

// const AuthContent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");
//   const [isProcessingApple, setIsProcessingApple] = useState(false);
//   const [isProcessingGoogle, setIsProcessingGoogle] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

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

//   // Load Apple SDK
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
//         }
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) document.body.removeChild(script);
//     };
//   }, []);

//   // Apple Callback
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
//           }
//         }

//         if (idToken && !userEmail) {
//           try {
//             const parts = idToken.split(".");
//             const payload = JSON.parse(atob(parts[1]));
//             userEmail = payload.email || "";
//           } catch (e) {
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
//           },
//         });
//       } catch (error) {
//         setErrorMessage("Failed to process Apple Sign-In. Please try again.");
//         setIsProcessingApple(false);
//       }
//     };

//     handleAppleCallback();
//   }, [location.search, navigate]);

//   // Google success — calls signup OR login based on isSignUp
//   const handleGoogleSignInSuccess = async (credentialResponse) => {
//     setIsProcessingGoogle(true);
//     setErrorMessage("");

//     try {
//       const decodedToken = decodeJWT(credentialResponse.credential);
//       const {
//         sub: socialUid,   // Google user ID  → socialUid
//         email,
//         name: username,   // Google name     → username
//         picture: imageUrl // Google picture  → imageUrl
//       } = decodedToken;

//       // socialToken = the raw Google ID token (JWT)
//       const socialToken = credentialResponse.credential;


//       let apiResponse;

//       if (isSignUp) {
//         apiResponse = await googleSignUpAPI({
//           username,
//           email,
//           socialUid,
//           socialToken,
//           imageUrl,
//         });
//       } else {
//         apiResponse = await googleLoginAPI({
//           email,
//           socialUid,
//           socialToken,
//         });
//       }

//       if (apiResponse.success) {
//         storeAuthData(apiResponse);

//         setTimeout(() => {
//           navigate("/dashboard?status=ref-guide", {
//             state: {
//               provider: "google",
//               email: apiResponse.user.email,
//               name: apiResponse.user.name,
//               picture: apiResponse.user.imageUrl || imageUrl,
//               googleUid: socialUid,
//               accessToken: apiResponse.accessToken,
//               refreshToken: apiResponse.refreshToken,
//               user: apiResponse.user,
//               isNewUser: isSignUp,
//             },
//           });
//         }, 500);
//       } else {
//         throw new Error(apiResponse.message || "Authentication failed");
//       }
//     } catch (error) {
//       setErrorMessage(
//         error.message ||
//           `Google ${isSignUp ? "Sign Up" : "Sign In"} failed. Please try again.`
//       );
//       setIsProcessingGoogle(false);
//     }
//   };

//   const handleGoogleSignInError = () => {
//     setErrorMessage("Google Sign-In failed. Please try again.");
//     setIsProcessingGoogle(false);
//   };

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

//   if (isProcessingApple || isProcessingGoogle) {
//     return (
//       <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#237D93] mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-[#055860] mb-2">
//             {isProcessingApple
//               ? "Redirecting to Apple..."
//               : isSignUp
//               ? "Creating your account..."
//               : "Signing you in..."}
//           </h2>
//           <p className="text-gray-600">Please wait while we complete your authentication</p>
//         </div>
//       </div>
//     );
//   }

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
//           <img src={FamocareLogo} className="h-[100px] w-14" alt="Famocare Logo" />
//           <h1 className="text-[35px] font-bold text-[#055860] mt-[-25px]">
//             Famo<span className="text-[#691188]">care</span>
//           </h1>
//           <h1 className="text-[15px] font-bold text-[#111827] mt-[-10px]">Referral Web App</h1>
//           <p className="text-sm text-gray-500 mb-2 text-center">
//             {isSignUp ? "Create your account" : "Welcome back! Please Sign in to your account"}
//           </p>

//           {/* ERROR MESSAGE */}
//           {errorMessage && (
//             <div className="w-full max-w-xs mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-sm text-red-600">{errorMessage}</p>
//             </div>
//           )}

//           {/* BUTTONS */}
//           <div className="w-full max-w-xs space-y-3 mb-6">

//             {/* Custom Google button */}
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

//             {/* Hidden Google OAuth trigger */}
//             <div ref={googleButtonRef} className="hidden">
//               <GoogleLogin
//                 onSuccess={handleGoogleSignInSuccess}
//                 onError={handleGoogleSignInError}
//                 theme="outline"
//                 size="large"
//                 text={isSignUp ? "signup_with" : "signin_with"}
//               />
//             </div>

//             {/* Apple button */}
//             <button
//               onClick={handleAppleSignIn}
//               disabled={isProcessingGoogle || isProcessingApple}
//               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <img src={Apple} className="w-5" alt="Apple" />
//               {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
//             </button>

//           </div>

//           {/* TOGGLE */}
//           <p className="text-sm text-gray-600 mt-6">
//             {isSignUp ? "Already have an account? " : "Don't have an account? "}
//             <button
//               onClick={toggleAuthMode}
//               className="text-[#237D93] font-semibold hover:underline bg-none border-none cursor-pointer"
//             >
//               {isSignUp ? "Sign in" : "Sign up"}
//             </button>
//           </p>

//           {/* SECURITY BADGE */}
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


