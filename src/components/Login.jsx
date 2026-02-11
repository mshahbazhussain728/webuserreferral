
// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import Apple from "../assets/pngs/Apple.png";
// // // // // // // // // // // import Google from "../assets/pngs/Google.png";
// // // // // // // // // // // import Network from "../assets/pngs/Network.png";
// // // // // // // // // // // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // // // // // // // // // // import ShieldCheck from "../assets/pngs/ShieldCheck.png"
// // // // // // // // // // // import { Link }from "react-router-dom";

// // // // // // // // // // // export default function AgentSignin() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-4">
// // // // // // // // // // //       {/* Main Card */}
// // // // // // // // // // //       <div className="h-full w-full max-w-6xl bg-white shadow-lg overflow-hidden grid md:grid-cols-2">
// // // // // // // // // // //         {/* LEFT SIDE */}
// // // // // // // // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10 py-10 md:py-0">
// // // // // // // // // // //           <img src={Network} alt="network" className="w-32 mb-6" />

// // // // // // // // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // // // // // // // //             Grow Your Network
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // // // // // // // //             Sign in to your account to manage referrals and grow your network
// // // // // // // // // // //             effectively.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* RIGHT SIDE */}
// // // // // // // // // // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <img src={FamocareLogo} alt="logo" className="h-[100px] w-14 mt-[-15px]" />
// // // // // // // // // // //           <h1 className="text-[25px] font-bold text-[#055860] leading-none pb-5 mt-[-5px]">
// // // // // // // // // // //             Famo<span className="text-[#691188]">care</span>
// // // // // // // // // // //           </h1>
// // // // // // // // // // //           <p className="text-sm font-medium mb-2">Referral Web App</p>

// // // // // // // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // // // // // // //             Welcome back! Please sign in to your account.
// // // // // // // // // // //           </p>

// // // // // // // // // // //           {/* Google */}
// // // // // // // // // // //           <Link to="/set-up-profile" className="w-full max-w-xs border rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm mb-3 hover:bg-gray-50 active:bg-gray-100 active:scale-[0.98] transition">
// // // // // // // // // // //             <img src={Google} alt="google" className="w-5" />
// // // // // // // // // // //             Continue with Google
// // // // // // // // // // //           </Link>

// // // // // // // // // // //           {/* Apple */}
// // // // // // // // // // //           <Link to="/set-up-profile" className="w-full max-w-xs bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:opacity-90 active:opacity-80 active:scale-[0.98] transition">
// // // // // // // // // // //             <img src={Apple} alt="apple" className="w-5" />
// // // // // // // // // // //             Continue with Apple
// // // // // // // // // // //           </Link>

// // // // // // // // // // //           {/* Security */}
// // // // // // // // // // //           <div className="mt-6 text-center flex flex-col items-center">
// // // // // // // // // // //             <div className="flex items-center gap-1">
// // // // // // // // // // //               <img src={ShieldCheck} alt="ShieldCheck" className="w-4 h-4" />
// // // // // // // // // // //               <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <p className="text-[11px] text-gray-400 mt-1">
// // // // // // // // // // //               Your data is protected with industry-standard security
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }



// // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // import Apple from "../assets/pngs/Apple.png";
// // // // // // // // // // // import Google from "../assets/pngs/Google.png";
// // // // // // // // // // // import Network from "../assets/pngs/Network.png";
// // // // // // // // // // // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // // // // // // // // // // import ShieldCheck from "../assets/pngs/ShieldCheck.png";
// // // // // // // // // // // import { Link } from "react-router-dom";

// // // // // // // // // // // export default function AgentSignin() {
// // // // // // // // // // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // // // // // // // // // //   const [email, setEmail] = useState("");

// // // // // // // // // // //   const handleProviderSelect = (provider) => {
// // // // // // // // // // //     setSelectedProvider(provider);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleBackToOptions = () => {
// // // // // // // // // // //     setSelectedProvider(null);
// // // // // // // // // // //     setEmail("");
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleEmailSubmit = (e) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     if (email) {
// // // // // // // // // // //       if (selectedProvider === "google") {
// // // // // // // // // // //         window.location.href = `/set-up-profile?email=${encodeURIComponent(email)}`;
// // // // // // // // // // //       } else if (selectedProvider === "apple") {
// // // // // // // // // // //         window.location.href = `/set-up-profile?email=${encodeURIComponent(email)}`;
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-4">
// // // // // // // // // // //       {/* Main Card */}
// // // // // // // // // // //       <div className="h-full w-full max-w-6xl bg-white shadow-lg overflow-hidden grid md:grid-cols-2">
// // // // // // // // // // //         {/* LEFT SIDE */}
// // // // // // // // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10 py-10 md:py-0">
// // // // // // // // // // //           <img src={Network} alt="network" className="w-32 mb-6" />

// // // // // // // // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // // // // // // // //             Grow Your Network
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // // // // // // // //             Sign in to your account to manage referrals and grow your network
// // // // // // // // // // //             effectively.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* RIGHT SIDE */}
// // // // // // // // // // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <img src={FamocareLogo} alt="logo" className="h-[100px] w-14 mt-[-15px]" />
// // // // // // // // // // //           <h1 className="text-[25px] font-bold text-[#055860] leading-none pb-5 mt-[-5px]">
// // // // // // // // // // //             Famo<span className="text-[#691188]">care</span>
// // // // // // // // // // //           </h1>
// // // // // // // // // // //           <p className="text-sm font-medium mb-2">Referral Web App</p>

// // // // // // // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // // // // // // //             {selectedProvider === "google" || selectedProvider === "apple"
// // // // // // // // // // //               ? `Enter your email to continue with ${
// // // // // // // // // // //                   selectedProvider === "google" ? "Google" : "Apple"
// // // // // // // // // // //                 }`
// // // // // // // // // // //               : "Welcome back! Please sign in to your account."}
// // // // // // // // // // //           </p>

// // // // // // // // // // //           <div className="w-full max-w-xs">
// // // // // // // // // // //             {selectedProvider === "google" || selectedProvider === "apple" ? (
// // // // // // // // // // //               /* EMAIL INPUT FOR GOOGLE/APPLE */
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 {/* Back Button */}
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   type="button"
// // // // // // // // // // //                   onClick={handleBackToOptions}
// // // // // // // // // // //                   className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 mb-4"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <svg
// // // // // // // // // // //                     className="w-4 h-4"
// // // // // // // // // // //                     fill="none"
// // // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <path
// // // // // // // // // // //                       strokeLinecap="round"
// // // // // // // // // // //                       strokeLinejoin="round"
// // // // // // // // // // //                       strokeWidth={2}
// // // // // // // // // // //                       d="M15 19l-7-7 7-7"
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </svg>
// // // // // // // // // // //                   Back to options
// // // // // // // // // // //                 </button>

// // // // // // // // // // //                 <form onSubmit={handleEmailSubmit} className="space-y-4">
// // // // // // // // // // //                   {/* Provider Icon */}
// // // // // // // // // // //                   <div className="flex justify-center mb-4">
// // // // // // // // // // //                     <img
// // // // // // // // // // //                       src={selectedProvider === "google" ? Google : Apple}
// // // // // // // // // // //                       alt={selectedProvider}
// // // // // // // // // // //                       className="w-12 h-12"
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   {/* Email Input */}
// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <label
// // // // // // // // // // //                       htmlFor="email"
// // // // // // // // // // //                       className="block text-sm font-medium text-gray-700 mb-2"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       Email Address
// // // // // // // // // // //                     </label>
// // // // // // // // // // //                     <input
// // // // // // // // // // //                       type="email"
// // // // // // // // // // //                       id="email"
// // // // // // // // // // //                       value={email}
// // // // // // // // // // //                       onChange={(e) => setEmail(e.target.value)}
// // // // // // // // // // //                       className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#237D93] focus:border-transparent outline-none"
// // // // // // // // // // //                       placeholder="Enter your email"
// // // // // // // // // // //                       required
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   {/* Continue Button */}
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     type="submit"
// // // // // // // // // // //                     className="w-full bg-[#237D93] text-white py-2.5 rounded-lg hover:bg-[#1a6179] transition-colors font-medium"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Continue
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 </form>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ) : (
// // // // // // // // // // //               /* ORIGINAL BUTTONS */
// // // // // // // // // // //               <>
// // // // // // // // // // //                 {/* Google */}
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   type="button"
// // // // // // // // // // //                   onClick={() => handleProviderSelect("google")}
// // // // // // // // // // //                   className="w-full border rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm mb-3 hover:bg-gray-50 active:bg-gray-100 active:scale-[0.98] transition"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <img src={Google} alt="google" className="w-5" />
// // // // // // // // // // //                   Continue with Google
// // // // // // // // // // //                 </button>

// // // // // // // // // // //                 {/* Apple */}
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   type="button"
// // // // // // // // // // //                   onClick={() => handleProviderSelect("apple")}
// // // // // // // // // // //                   className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:opacity-90 active:opacity-80 active:scale-[0.98] transition"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <img src={Apple} alt="apple" className="w-5" />
// // // // // // // // // // //                   Continue with Apple
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </>
// // // // // // // // // // //             )}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Security */}
// // // // // // // // // // //           <div className="mt-6 text-center flex flex-col items-center">
// // // // // // // // // // //             <div className="flex items-center gap-1">
// // // // // // // // // // //               <img src={ShieldCheck} alt="ShieldCheck" className="w-4 h-4" />
// // // // // // // // // // //               <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <p className="text-[11px] text-gray-400 mt-1">
// // // // // // // // // // //               Your data is protected with industry-standard security
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }



// // // // // // // import React, { useState } from "react";
// // // // // // // import Apple from "../assets/pngs/Apple.png";
// // // // // // // import Google from "../assets/pngs/Google.png";
// // // // // // // import Network from "../assets/pngs/Network.png";
// // // // // // // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // // // // // // import ShieldCheck from "../assets/pngs/ShieldCheck.png";
// // // // // // // import { Link } from "react-router-dom";


// // // // // // // export default function AgentSignin() {
// // // // // // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // // // // // //   const [email, setEmail] = useState("");


// // // // // // //   const handleProviderSelect = (provider) => {
// // // // // // //     setSelectedProvider(provider);
// // // // // // //   };

// // // // // // //   const handleBackToOptions = () => {
// // // // // // //     setSelectedProvider(null);
// // // // // // //     setEmail("");
// // // // // // //   };

// // // // // // //   const handleEmailSubmit = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (email) {
// // // // // // //     window.location.href = `/set-up-profile?email=${encodeURIComponent(email)}`;

// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-4">
// // // // // // //       {/* Main Card */}
// // // // // // //       <div className="h-[640px] w-[1890px] bg-white shadow-lg overflow-hidden grid md:grid-cols-2">
// // // // // // //         {/* LEFT SIDE */}
// // // // // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10 py-10 md:py-0">
// // // // // // //           <img src={Network} alt="network" className="w-32 mb-6" />

// // // // // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // // // // //             Grow Your Network
// // // // // // //           </h2>

// // // // // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // // // // //             Sign in to your account to manage referrals and grow your network
// // // // // // //             effectively.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* RIGHT SIDE */}
// // // // // // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // // // // // //           {/* Logo */}
// // // // // // //           <img src={FamocareLogo} alt="logo" className="h-[100px] w-14 mt-[-15px]" />
// // // // // // //           <h1 className="text-[25px] font-bold text-[#055860] leading-none pb-5 mt-[-5px]">
// // // // // // //             Famo<span className="text-[#691188]">care</span>
// // // // // // //           </h1>
// // // // // // //           <p className="text-sm font-medium mb-2">Referral Web App</p>

// // // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // // //             {selectedProvider === "google" || selectedProvider === "apple"
// // // // // // //               ? `Enter your email to continue with ${
// // // // // // //                   selectedProvider === "google" ? "Google" : "Apple"
// // // // // // //                 }`
// // // // // // //               : "Welcome back! Please sign in to your account."}
// // // // // // //           </p>

// // // // // // //           <div className="w-full max-w-xs">
// // // // // // //             {selectedProvider === "google" || selectedProvider === "apple" ? (
// // // // // // //               /* EMAIL INPUT FOR GOOGLE/APPLE */
// // // // // // //               <div>
// // // // // // //                 {/* Back Button */}
// // // // // // //                 <button
// // // // // // //                   type="button"
// // // // // // //                   onClick={handleBackToOptions}
// // // // // // //                   className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 mb-4"
// // // // // // //                 >
// // // // // // //                   <svg
// // // // // // //                     className="w-4 h-4"
// // // // // // //                     fill="none"
// // // // // // //                     stroke="currentColor"
// // // // // // //                     viewBox="0 0 24 24"
// // // // // // //                   >
// // // // // // //                     <path
// // // // // // //                       strokeLinecap="round"
// // // // // // //                       strokeLinejoin="round"
// // // // // // //                       strokeWidth={2}
// // // // // // //                       d="M15 19l-7-7 7-7"
// // // // // // //                     />
// // // // // // //                   </svg>
// // // // // // //                   Back to options
// // // // // // //                 </button>

// // // // // // //                 <form onSubmit={handleEmailSubmit} className="space-y-4">
// // // // // // //                   {/* Provider Icon - IMPORTANT: Add filter for Apple icon */}
// // // // // // //                   <div className="flex justify-center mb-4">
// // // // // // //                     <img
// // // // // // //                       src={selectedProvider === "google" ? Google : Apple}
// // // // // // //                       alt={selectedProvider}
// // // // // // //                       className={`w-12 h-12 ${
// // // // // // //                         selectedProvider === "apple" ? "filter brightness-0" : ""
// // // // // // //                       }`}
// // // // // // //                     />
// // // // // // //                   </div>

// // // // // // //                   {/* Email Input */}
// // // // // // //                   <div>
// // // // // // //                     <label
// // // // // // //                       htmlFor="email"
// // // // // // //                       className="block text-sm font-medium text-gray-700 mb-2"
// // // // // // //                     >
// // // // // // //                       Email Address
// // // // // // //                     </label>
// // // // // // //                     <input
// // // // // // //                       type="email"
// // // // // // //                       id="email"
// // // // // // //                       value={email}
// // // // // // //                       onChange={(e) => setEmail(e.target.value)}
// // // // // // //                       className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#237D93] focus:border-transparent outline-none"
// // // // // // //                       placeholder="Enter your email"
// // // // // // //                       required
// // // // // // //                     />
// // // // // // //                   </div>

// // // // // // //                   {/* Continue Button */}
// // // // // // //                   <button
// // // // // // //                     type="submit"
// // // // // // //                     className="w-full bg-[#237D93] text-white py-2.5 rounded-lg hover:bg-[#1a6179] transition-colors font-medium"
// // // // // // //                   >
// // // // // // //                     Continue
// // // // // // //                   </button>
// // // // // // //                 </form>
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               /* ORIGINAL BUTTONS */
// // // // // // //               <>
// // // // // // //                 {/* Google */}
// // // // // // //                 <button
// // // // // // //                   type="button"
// // // // // // //                   onClick={() => handleProviderSelect("google")}
// // // // // // //                   className="w-full border rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm mb-3 hover:bg-gray-50 active:bg-gray-100 active:scale-[0.98] transition"
// // // // // // //                 >
// // // // // // //                   <img src={Google} alt="google" className="w-5" />
// // // // // // //                   Continue with Google
// // // // // // //                 </button>

// // // // // // //                 {/* Apple */}
// // // // // // //                 <button
// // // // // // //                   type="button"
// // // // // // //                   onClick={() => handleProviderSelect("apple")}
// // // // // // //                   className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:opacity-90 active:opacity-80 active:scale-[0.98] transition"
// // // // // // //                 >
// // // // // // //                   <img src={Apple} alt="apple" className="w-5" />
// // // // // // //                   Continue with Apple
// // // // // // //                 </button>
// // // // // // //               </>
// // // // // // //             )}
// // // // // // //           </div>

// // // // // // //           {/* Security */}
// // // // // // //           <div className="mt-6 text-center flex flex-col items-center">
// // // // // // //             <div className="flex items-center gap-1">
// // // // // // //               <img src={ShieldCheck} alt="ShieldCheck" className="w-4 h-4" />
// // // // // // //               <p className="text-xs text-gray-500">Secure Authentication</p>
// // // // // // //             </div>

// // // // // // //             <p className="text-[11px] text-gray-400 mt-1">
// // // // // // //               Your data is protected with industry-standard security
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // import { useState } from "react";
// // // // import Apple from "../assets/pngs/Apple.png";
// // // // import Google from "../assets/pngs/Google.png";
// // // // import Network from "../assets/pngs/Network.png";
// // // // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // // // import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// // // // export const Login = ({ onLoginSuccess, onSignUp }) => {
// // // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // // //   const [email, setEmail] = useState("");

// // // //   const handleProviderSelect = (provider) => {
// // // //     setSelectedProvider(provider);
// // // //   };

// // // //   const handleBackToOptions = () => {
// // // //     setSelectedProvider(null);
// // // //     setEmail("");
// // // //   };

// // // //   const handleEmailSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (email) {
// // // //       window.location.href = `/set-up-profile?email=${encodeURIComponent(email)}`;
// // // //             // window.location.href = `/set-up-profile?email=${encodeURIComponent(email)}`;

// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-4">
// // // //       {/* Main Card */}
// // // //       <div className="h-[640px] w-[1890px] bg-white shadow-lg overflow-hidden grid md:grid-cols-2">
// // // //         {/* LEFT SIDE */}
// // // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10 py-10 md:py-0">
// // // //           <img src={Network} alt="network" className="w-32 mb-6" />

// // // //           <h2 className="text-white text-xl font-bold mb-2">
// // // //             Grow Your Network
// // // //           </h2>

// // // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // // //             Sign in to your account to manage referrals and grow your network
// // // //             effectively.
// // // //           </p>
// // // //         </div>

// // // //         {/* RIGHT SIDE */}
// // // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // // //           {/* Logo */}
// // // //           <img src={FamocareLogo} alt="logo" className="h-[100px] w-14 mt-[-15px]" />
// // // //           <h1 className="text-[25px] font-bold text-[#055860] leading-none pb-5 mt-[-5px]">
// // // //             Famo<span className="text-[#691188]">care</span>
// // // //           </h1>
// // // //           <p className="text-sm font-medium mb-2">Referral Web App</p>

// // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // //             {selectedProvider === "google" || selectedProvider === "apple"
// // // //               ? `Enter your email to continue with ${
// // // //                   selectedProvider === "google" ? "Google" : "Apple"
// // // //                 }`
// // // //               : "Welcome back! Please sign in to your account."}
// // // //           </p>

// // // //           <div className="w-full max-w-xs">
// // // //             {selectedProvider === "google" || selectedProvider === "apple" ? (
// // // //               /* EMAIL INPUT FOR GOOGLE/APPLE */
// // // //               <div>
// // // //                 {/* Back Button */}
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={handleBackToOptions}
// // // //                   className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 mb-4"
// // // //                 >
// // // //                   <svg
// // // //                     className="w-4 h-4"
// // // //                     fill="none"
// // // //                     stroke="currentColor"
// // // //                     viewBox="0 0 24 24"
// // // //                   >
// // // //                     <path
// // // //                       strokeLinecap="round"
// // // //                       strokeLinejoin="round"
// // // //                       strokeWidth={2}
// // // //                       d="M15 19l-7-7 7-7"
// // // //                     />
// // // //                   </svg>
// // // //                   Back to options
// // // //                 </button>

// // // //                 <form onSubmit={handleEmailSubmit} className="space-y-4">
// // // //                   {/* Provider Icon - IMPORTANT: Add filter for Apple icon */}
// // // //                   <div className="flex justify-center mb-4">
// // // //                     <img
// // // //                       src={selectedProvider === "google" ? Google : Apple}
// // // //                       alt={selectedProvider}
// // // //                       className={`w-12 h-12 ${
// // // //                         selectedProvider === "apple" ? "filter brightness-0" : ""
// // // //                       }`}
// // // //                     />
// // // //                   </div>

// // // //                   {/* Email Input */}
// // // //                   <div>
// // // //                     <label
// // // //                       htmlFor="email"
// // // //                       className="block text-sm font-medium text-gray-700 mb-2"
// // // //                     >
// // // //                       Email Address
// // // //                     </label>
// // // //                     <input
// // // //                       type="email"
// // // //                       id="email"
// // // //                       value={email}
// // // //                       onChange={(e) => setEmail(e.target.value)}
// // // //                       className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#237D93] focus:border-transparent outline-none"
// // // //                       placeholder="Enter your email"
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   {/* Continue Button */}
// // // //                   <button
// // // //                     type="submit"
// // // //                     className="w-full bg-[#237D93] text-white py-2.5 rounded-lg hover:bg-[#1a6179] transition-colors font-medium"
// // // //                   >
// // // //                     Continue
// // // //                   </button>
// // // //                 </form>
// // // //               </div>
// // // //             ) : (
// // // //               /* ORIGINAL BUTTONS */
// // // //               <>
// // // //                 {/* Google */}
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => handleProviderSelect("google")}
// // // //                   className="w-full border rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm mb-3 hover:bg-gray-50 active:bg-gray-100 active:scale-[0.98] transition"
// // // //                 >
// // // //                   <img src={Google} alt="google" className="w-5" />
// // // //                   Continue with Google
// // // //                 </button>

// // // //                 {/* Apple */}
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => handleProviderSelect("apple")}
// // // //                   className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:opacity-90 active:opacity-80 active:scale-[0.98] transition"
// // // //                 >
// // // //                   <img src={Apple} alt="apple" className="w-5" />
// // // //                   Continue with Apple
// // // //                 </button>
// // // //               </>
// // // //             )}
// // // //           </div>

// // // //           {/* Security */}
// // // //           <div className="mt-6 text-center flex flex-col items-center">
// // // //             <div className="flex items-center gap-1">
// // // //               <img src={ShieldCheck} alt="ShieldCheck" className="w-4 h-4" />
// // // //               <p className="text-xs text-gray-500">Secure Authentication</p>
// // // //             </div>

// // // //             <p className="text-[11px] text-gray-400 mt-1">
// // // //               Your data is protected with industry-standard security
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import { useState, useRef } from "react";
// // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // import { jwtDecode } from "jwt-decode";
// // // import axios from "axios";
// // // import { Link } from "react-router-dom";

// // // import Apple from "../assets/pngs/Apple.png";
// // // import Google from "../assets/pngs/Google.png";
// // // import Network from "../assets/pngs/Network.png";
// // // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // // import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// // // const LoginContent = ({ onLoginSuccess, onSignUp }) => {
// // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // //   const [email, setEmail] = useState("");

// // //   const handleEmailSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (email) {
// // //       window.location.href = `/set-up-profile?email=${encodeURIComponent(email)}`;
// // //     }
// // //   };

// // //   // Google Login with useGoogleLogin hook
// // //   const googleLogin = useGoogleLogin({
// // //     onSuccess: async (tokenResponse) => {
// // //       console.log("Google Login Success:", tokenResponse);
// // //       try {
// // //         // Get user info using the access token
// // //         const userInfo = await axios.get(
// // //           'https://www.googleapis.com/oauth2/v3/userinfo',
// // //           { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
// // //         );
        
// // //         console.log("User Info:", userInfo.data);
// // //         setEmail(userInfo.data.email);
// // //         setSelectedProvider("google");
        
// // //         // Send token to your backend here if needed
// // //         // await yourBackendAPI.authenticate(tokenResponse.access_token);
// // //       } catch (error) {
// // //         console.error("Error fetching user info:", error);
// // //       }
// // //     },
// // //     onError: () => {
// // //       console.log("Google Login Failed");
// // //     },
// // //   });

// // //   // Apple redirect
// // //   const handleAppleLogin = () => {
// // //     const clientId = "com.appistanltd.famocare"; // Apple Services ID
// // //     //  const redirectUri = encodeURIComponent("appistanltd.famocare.com/apple/callback"); 
// // //      const redirectUri = encodeURIComponent("referral.appistan.co/apple/callback"); 

// // //     const state = Math.random().toString(36).substring(7); 
// // //     const scope = "email name";
// // //     const responseType = "code id_token";
// // //     const responseMode = "form_post";

// // //     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

// // //     window.location.href = appleAuthUrl;
// // //   };

// // //   return (
// // //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">
// // //         {/* LEFT SIDE */}
// // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // //           <h2 className="text-white text-xl font-bold mb-2">Grow Your Network</h2>
// // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // //             Sign in to your account to manage referrals and grow your network effectively.
// // //           </p>
// // //         </div>

// // //         {/* RIGHT SIDE */}
// // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // //           <img src={FamocareLogo} className="h-[100px] w-14" alt="Famocare Logo" />
// // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // //             Famo<span className="text-[#691188]">care</span>
// // //           </h1>
// // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // //             Welcome back! Please sign in.
// // //           </p>

// // //           <div className="w-[200px] max-w-xs space-y-3">

// // //             {/* GOOGLE LOGIN BUTTON - Custom Design */}
// // //             <button
// // //               onClick={() => googleLogin()}
// // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // //             >
// // //               <img src={Google} className="w-5" alt="Google" />
// // //               Continue with Google
// // //             </button>

// // //             {/* APPLE LOGIN BUTTON */}
// // //             <button
// // //               onClick={handleAppleLogin}
// // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // //             >
// // //               <img src={Apple} className="w-5" alt="Apple" />
// // //               Continue with Apple
// // //             </button>

// // //             {/* EMAIL FORM */}
// // //             {selectedProvider && email && (
// // //               <form onSubmit={handleEmailSubmit} className="mt-4 space-y-3">
// // //                 {/* <input
// // //                   type="email"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   placeholder="Email"
// // //                   className="w-full px-4 py-2 border rounded"
// // //                   required
// // //                 /> */}
// // //                 {/* <button className="w-full bg-[#237D93] text-white py-2 rounded-lg hover:bg-[#1a5f6f] transition-colors">
// // //                   Continue
// // //                 </button> */}
// // //                </form>
// // //             )}

// // //           </div>

// // //           <div className="mt-6 flex items-center gap-1">
// // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // //           </div>
// // //           <p className="text-[11px] text-gray-400 mt-1">
// // //             Your data is protected with industry-standard security
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export const Login = ({ onLoginSuccess, onSignUp }) => {
// // //   return (
// // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
     
// // //       <LoginContent onLoginSuccess={onLoginSuccess} onSignUp={onSignUp} />
// // //     </GoogleOAuthProvider>
// // //   );
// // // };


// // // import { useState, useRef } from "react";
// // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // import { jwtDecode } from "jwt-decode";
// // // import axios from "axios";
// // // import { Link } from "react-router-dom";

// // // import Apple from "../assets/pngs/Apple.png";
// // // import Google from "../assets/pngs/Google.png";
// // // import Network from "../assets/pngs/Network.png";
// // // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // // import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// // // const LoginContent = ({ onLoginSuccess, onSignUp }) => {
// // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // //   const [email, setEmail] = useState("");

// // //   const handleEmailSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (email) {
// // //       window.location.href = `/set-up-profile?email=${encodeURIComponent(email)}`;
// // //     }
// // //   };

// // //   // Google Login with useGoogleLogin hook
// // //   const googleLogin = useGoogleLogin({
// // //     onSuccess: async (tokenResponse) => {
// // //       console.log("Google Login Success:", tokenResponse);
// // //       try {
// // //         // Get user info using the access token
// // //         const userInfo = await axios.get(
// // //           'https://www.googleapis.com/oauth2/v3/userinfo',
// // //           { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
// // //         );
        
// // //         console.log("User Info:", userInfo.data);
// // //         setEmail(userInfo.data.email);
// // //         setSelectedProvider("google");
        
// // //         // Send token to your backend here if needed
// // //         // await yourBackendAPI.authenticate(tokenResponse.access_token);
// // //       } catch (error) {
// // //         console.error("Error fetching user info:", error);
// // //       }
// // //     },
// // //     onError: () => {
// // //       console.log("Google Login Failed");
// // //     },
// // //   });

// // //   // Apple redirect
// // //   const handleAppleLogin = () => {
// // //     const clientId = "com.appistanltd.famocare"; // Apple Services ID
// // //     //  const redirectUri = encodeURIComponent("appistanltd.famocare.com/apple/callback"); 
// // //      const redirectUri = encodeURIComponent("referral.appistan.co/apple/callback"); 

// // //     const state = Math.random().toString(36).substring(7); 
// // //     const scope = "email name";
// // //     const responseType = "code id_token";
// // //     const responseMode = "form_post";

// // //     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

// // //     window.location.href = appleAuthUrl;
// // //   };

// // //   return (
// // //     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">
// // //         {/* LEFT SIDE */}
// // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // //           <h2 className="text-white text-xl font-bold mb-2">Grow Your Network</h2>
// // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // //             Sign in to your account to manage referrals and grow your network effectively.
// // //           </p>
// // //         </div>

// // //         {/* RIGHT SIDE */}
// // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // //           <img src={FamocareLogo} className="h-[100px] w-14" alt="Famocare Logo" />
// // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // //             Famo<span className="text-[#691188]">care</span>
// // //           </h1>
// // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // //             Welcome back! Please sign in.
// // //           </p>

// // //           <div className="w-[200px] max-w-xs space-y-3">

// // //             {/* GOOGLE LOGIN BUTTON - Custom Design */}
// // //             <button
// // //               onClick={() => googleLogin()}
// // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // //             >
// // //               <img src={Google} className="w-5" alt="Google" />
// // //               Continue with Google
// // //             </button>

// // //             {/* APPLE LOGIN BUTTON */}
// // //             <button
// // //               onClick={handleAppleLogin}
// // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // //             >
// // //               <img src={Apple} className="w-5" alt="Apple" />
// // //               Continue with Apple
// // //             </button>

// // //             {/* EMAIL FORM */}
// // //             {selectedProvider && email && (
// // //               <form onSubmit={handleEmailSubmit} className="mt-4 space-y-3">
// // //                </form>
// // //             )}

// // //           </div>

// // //           <div className="mt-6 flex items-center gap-1">
// // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // //           </div>
// // //           <p className="text-[11px] text-gray-400 mt-1">
// // //             Your data is protected with industry-standard security
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export const Login = ({ onLoginSuccess, onSignUp }) => {
// // //   return (
// // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
// // //       <LoginContent onLoginSuccess={onLoginSuccess} onSignUp={onSignUp} />
// // //     </GoogleOAuthProvider>
// // //   );
// // // };

// // // export default Login;



// // // import { useState } from "react";
// // // import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // import Apple from "../assets/pngs/Apple.png";
// // // import Google from "../assets/pngs/Google.png";
// // // import Network from "../assets/pngs/Network.png";
// // // import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// // // import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// // // const SignUpContent = () => {
// // //   const navigate = useNavigate();
// // //   const [selectedProvider, setSelectedProvider] = useState(null);
// // //   const [email, setEmail] = useState("");
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     password: "",
// // //     confirmPassword: "",
// // //   });
// // //   const [errors, setErrors] = useState({});

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //     // Clear error when user starts typing
// // //     if (errors[name]) {
// // //       setErrors((prev) => ({
// // //         ...prev,
// // //         [name]: "",
// // //       }));
// // //     }
// // //   };

// // //   const validateForm = () => {
// // //     const newErrors = {};

// // //     if (!formData.fullName.trim()) {
// // //       newErrors.fullName = "Full name is required";
// // //     }

// // //     if (!formData.email.trim()) {
// // //       newErrors.email = "Email is required";
// // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // //       newErrors.email = "Email is invalid";
// // //     }

// // //     if (!formData.password) {
// // //       newErrors.password = "Password is required";
// // //     } else if (formData.password.length < 8) {
// // //       newErrors.password = "Password must be at least 8 characters";
// // //     }

// // //     if (!formData.confirmPassword) {
// // //       newErrors.confirmPassword = "Please confirm your password";
// // //     } else if (formData.password !== formData.confirmPassword) {
// // //       newErrors.confirmPassword = "Passwords do not match";
// // //     }

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (validateForm()) {
// // //       // Navigate to profile setup with email
// // //       navigate(`/set-up-profile?email=${encodeURIComponent(formData.email)}`);
// // //     }
// // //   };

// // //   // Google Login with useGoogleLogin hook
// // //   const googleSignUp = useGoogleLogin({
// // //     onSuccess: async (tokenResponse) => {
// // //       console.log("Google Sign Up Success:", tokenResponse);
// // //       try {
// // //         // Get user info using the access token
// // //         const userInfo = await axios.get(
// // //           "https://www.googleapis.com/oauth2/v3/userinfo",
// // //           {
// // //             headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
// // //           }
// // //         );

// // //         console.log("User Info:", userInfo.data);
// // //         setEmail(userInfo.data.email);
// // //         setSelectedProvider("google");

// // //         // Navigate to profile setup
// // //         navigate(`/set-up-profile?email=${encodeURIComponent(userInfo.data.email)}`);
// // //       } catch (error) {
// // //         console.error("Error fetching user info:", error);
// // //       }
// // //     },
// // //     onError: () => {
// // //       console.log("Google Sign Up Failed");
// // //     },
// // //   });

// // //   // Apple redirect
// // //   const handleAppleSignUp = () => {
// // //     const clientId = "com.appistanltd.famocare";
// // //     const redirectUri = encodeURIComponent("referral.appistan.co/apple/callback");
// // //     const state = Math.random().toString(36).substring(7);
// // //     const scope = "email name";
// // //     const responseType = "code id_token";
// // //     const responseMode = "form_post";

// // //     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

// // //     window.location.href = appleAuthUrl;
// // //   };

// // //   return (

// // //         <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
// // //       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">
// // //         {/* LEFT SIDE */}
// // //         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
// // //           <img src={Network} className="w-32 mb-6" alt="Network" />
// // //           <h2 className="text-white text-xl font-bold mb-2">
// // //             Join Our Network
// // //           </h2>
// // //           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
// // //             Create your account to start managing referrals and growing your
// // //             network effectively.
// // //           </p>
// // //         </div>

// // //         {/* RIGHT SIDE */}
// // //         <div className="flex flex-col items-center justify-center py-14 px-8">
// // //           <img
// // //             src={FamocareLogo}
// // //             className="h-[100px] w-14"
// // //             alt="Famocare Logo"
// // //           />
// // //           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
// // //             Famo<span className="text-[#691188]">care</span>
// // //           </h1>
// // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // //             Create your account to get started
// // //           </p>

// // //           {/* SOCIAL SIGN UP BUTTONS */}
// // //           <div className="w-full max-w-xs space-y-3 mb-6">
// // //             {/* GOOGLE SIGN UP BUTTON */}
// // //             <button
// // //               onClick={() => googleSignUp()}
// // //               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
// // //             >
// // //               <img src={Google} className="w-5" alt="Google" />
// // //               Continue with Google
// // //             </button>

// // //             {/* APPLE SIGN UP BUTTON */}
// // //             <button
// // //               onClick={handleAppleSignUp}
// // //               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
// // //             >
// // //               <img src={Apple} className="w-5" alt="Apple" />
// // //               Continue with Apple
// // //             </button>
// // //           </div>

     

// // //           {/* LOGIN LINK */}
// // //           <p className="text-sm text-gray-600 mt-6">
// // //             Already have an account?{" "}
// // //             <Link to="/" className="text-[#237D93] font-semibold hover:underline">
// // //               Sign in
// // //             </Link>
// // //           </p>

// // //           {/* SECURITY BADGE */}
// // //           <div className="mt-6 flex items-center gap-1">
// // //             <img src={ShieldCheck} className="w-4" alt="Shield" />
// // //             <p className="text-xs text-gray-500">Secure Authentication</p>
// // //           </div>
// // //           <p className="text-[11px] text-gray-400 mt-1">
// // //             Your data is protected with industry-standard security
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export const SignUp = () => {
// // //   return (
// // //     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
// // //       <SignUpContent />
// // //     </GoogleOAuthProvider>
// // //   );
// // // };

// // // export default SignUp;




// import { useState } from "react";
// import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// import Apple from "../assets/pngs/Apple.png";
// import Google from "../assets/pngs/Google.png";
// import Network from "../assets/pngs/Network.png";
// import FamocareLogo from "../assets/pngs/FamocareLogo.png";
// import ShieldCheck from "../assets/pngs/ShieldCheck.png";

// const SignInContent = () => {
//   const navigate = useNavigate();
//   const [selectedProvider, setSelectedProvider] = useState(null);
//   const [email, setEmail] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // TODO: call your sign-in API here
//       navigate("/dashboard");
//     }
//   };

//   // Google Sign-In
//   const googleSignIn = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       console.log("Google Sign In Success:", tokenResponse);
//       try {
//         const userInfo = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           {
//             headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
//           }
//         );
//         console.log("User Info:", userInfo.data);
//         setEmail(userInfo.data.email);
//         setSelectedProvider("google");
//         navigate("/dashboard");
//       } catch (error) {
//         console.error("Error fetching user info:", error);
//       }
//     },
//     onError: () => {
//       console.log("Google Sign In Failed");
//     },
//   });

//   // Apple Sign-In
//   const handleAppleSignIn = () => {
//     const clientId = "com.appistanltd.famocare";
//     const redirectUri = encodeURIComponent("referral.appistan.co/apple/callback");
//     const state = Math.random().toString(36).substring(7);
//     const scope = "email name";
//     const responseType = "code id_token";
//     const responseMode = "form_post";

//     const appleAuthUrl = `https://appleid.apple.com/auth/authorize?response_type=${responseType}&response_mode=${responseMode}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

//     window.location.href = appleAuthUrl;
//   };

//   return (
//     <div className="min-h-screen w-screen bg-[#ECECEC] flex items-center justify-center">
//       <div className="min-h-screen w-full max-w-[1366px] bg-white shadow-lg grid md:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="flex flex-col items-center justify-center bg-[#237D93] px-10">
//           <img src={Network} className="w-32 mb-6" alt="Network" />
//           <h2 className="text-white text-xl font-bold mb-2">
//             Welcome Back
//           </h2>
//           <p className="text-center text-sm text-[#D6EEF1] max-w-xs">
//             Sign in to continue managing referrals and growing your
//             network effectively.
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col items-center justify-center py-14 px-8">
//           <img
//             src={FamocareLogo}
//             className="h-[100px] w-14"
//             alt="Famocare Logo"
//           />
//           <h1 className="text-[35px] font-bold text-[#055860] mt-[-15px]">
//             Famo<span className="text-[#691188]">care</span>
//           </h1>
//           <p className="text-sm text-gray-500 mb-6 text-center">
//             Sign in to your account
//           </p>

//           {/* SOCIAL SIGN IN BUTTONS */}
//           <div className="w-full max-w-xs space-y-3 mb-6">

//             {/* GOOGLE SIGN IN BUTTON */}
//             <button
//               onClick={() => googleSignIn()}
//               className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-50 transition-colors"
//             >
//               <img src={Google} className="w-5" alt="Google" />
//               Sign in with Google
//             </button>

//             {/* APPLE SIGN IN BUTTON */}
//             <button
//               onClick={handleAppleSignIn}
//               className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-3 text-sm hover:bg-gray-900 transition-colors"
//             >
//               <img src={Apple} className="w-5" alt="Apple" />
//               Sign in with Apple
//             </button>

//           </div>

//           {/* SIGN UP LINK */}
//           <p className="text-sm text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link to="/login" className="text-[#237D93] font-semibold hover:underline">
//               Sign in
//             </Link>
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

// export const SignIn = () => {
//   return (
//     <GoogleOAuthProvider clientId="897875785611-3vft5g77tp61ajfkvp8gj2jre3ddcool.apps.googleusercontent.com">
//       <SignInContent />
//     </GoogleOAuthProvider>
//   );
// };

// export default SignIn;