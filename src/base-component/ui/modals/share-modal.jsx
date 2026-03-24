// // import React, { useRef } from "react";
// // import { BaseModal } from "./base-modal";
// // import { CopyField } from "../copy-link-field";
// // import { shareLinks } from "../../../utils/static";
// // import { NextIcon } from "../../../assets/svgs/components/next-icon";

// // export const ShareModal = ({ onClose }) => {
// //   const scrollRef = useRef(null);

// //   const handleScrollRight = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({
// //         left: 200,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <BaseModal
// //       onClose={onClose}
// //       containerClassName="w-full max-w-[341px] md:max-w-[728px] min-h-fit"
// //     >
// //       <div className="p-5 md:px-[30px] md:pt-[28px] md:pb-[50px]">
// //         <p className="text-lg md:text-[36px] font-semibold mb-[22px]">
// //           Share Referral Link
// //         </p>

// //         <div className="relative">
// //           <div
// //             ref={scrollRef}
// //             className="flex gap-5 justify-between md:justify-center md:gap-x-6 flex-wrap md:flex-nowrap md:overflow-x-auto no-scrollbar my-5 md:mt-[22px] md:mb-[47px]"
// //           >
// //             {shareLinks?.map((link) => (
// //               <a
// //                 key={link.label}
// //                 href={link.url}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 title={link.label}
// //                 className="flex flex-col items-center gap-y-[6px] md:gap-y-3 text-center"
// //               >
// //                 {link.icon}
// //                 <span className="text-[10px] md:text-[20px] font-medium">
// //                   {link.label}
// //                 </span>
// //               </a>
// //             ))}

// //             <div className="absolute -right-4 top-5 hidden md:block">
// //               <NextIcon onClick={handleScrollRight} />
// //             </div>
// //           </div>

// //           <CopyField value="https://project-link-demo.web.app/xyz123" />
// //         </div>
// //       </div>
// //     </BaseModal>
// //   );
// // };



// // import React, { useRef } from "react";
// // import { BaseModal } from "./base-modal";
// // import { CopyField } from "../copy-link-field";
// // import { shareLinks } from "../../../utils/static";
// // import { NextIcon } from "../../../assets/svgs/components/next-icon";
// // import { useSelector } from "react-redux";

// // export const ShareModal = ({ onClose }) => {
// //   const scrollRef = useRef(null);

// //   const { links, deviceType } =
// //     useSelector((state) => state.global.modal.data) || {};

// //   const matchedLink = links?.find((item) => item?.deviceType === deviceType);
// //   const appStoreLink = matchedLink?.link || "";

// //   const referralLink = appStoreLink
// //     ? "https://famocare.com?redirect=" + encodeURIComponent(appStoreLink)
// //     : "https://famocare.com";

// //   const getShareUrl = (label) => {
// //     const encoded = encodeURIComponent(referralLink);
// //     const text = encodeURIComponent("Join Famocare using my referral link!");

// //     switch (label) {
// //       case "Facebook":
// //         return "https://www.facebook.com/sharer/sharer.php?u=" + encoded;
// //       case "Twitter":
// //         return "https://twitter.com/intent/tweet?url=" + encoded + "&text=" + text;
// //       case "WhatsApp":
// //         return "https://wa.me/?text=" + encodeURIComponent("Join Famocare: " + referralLink);
// //       case "Telegram":
// //         return "https://t.me/share/url?url=" + encoded + "&text=" + text;
// //       case "Reddit":
// //         return "https://www.reddit.com/submit?url=" + encoded + "&title=Join+Famocare";
// //       case "Tumblr":
// //         return "https://www.tumblr.com/share/link?url=" + encoded;
// //       case "Blogger":
// //         return "https://www.blogger.com/blog-this.g?u=" + encoded;
// //       case "Instagram":
// //         return "https://www.instagram.com/";
// //       default:
// //         return referralLink;
// //     }
// //   };

// //   const handleScrollRight = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({
// //         left: 200,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <BaseModal
// //       onClose={onClose}
// //       containerClassName="w-full max-w-[341px] md:max-w-[728px] min-h-fit"
// //     >
// //       <div className="p-5 md:px-[30px] md:pt-[28px] md:pb-[50px]">
// //         <p className="text-lg md:text-[36px] font-semibold mb-[22px]">
// //           Share Referral Link
// //         </p>

// //         <div className="relative">
// //           <div
// //             ref={scrollRef}
// //             className="flex gap-5 justify-between md:justify-center md:gap-x-6 flex-wrap md:flex-nowrap md:overflow-x-auto no-scrollbar my-5 md:mt-[22px] md:mb-[47px]"
// //           >
// //             {shareLinks?.map((link) => (
// //               <a
// //                 key={link.label}
// //                 href={getShareUrl(link.label)}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 title={link.label}
// //                 className="flex flex-col items-center gap-y-[6px] md:gap-y-3 text-center"
// //               >
// //                 {link.icon}
// //                 <span className="text-[10px] md:text-[20px] font-medium">
// //                   {link.label}
// //                 </span>
// //               </a>
// //             ))}

// //             <div className="absolute -right-4 top-5 hidden md:block">
// //               <NextIcon onClick={handleScrollRight} />
// //             </div>
// //           </div>

// //           <CopyField value={referralLink} />
// //         </div>
// //       </div>
// //     </BaseModal>
// //   );
// // };









// import React, { useRef } from "react";
// import { BaseModal } from "./base-modal";
// import { CopyField } from "../copy-link-field";
// import { shareLinks } from "../../../utils/static";
// import { NextIcon } from "../../../assets/svgs/components/next-icon";
// import { useSelector } from "react-redux";

// export const ShareModal = ({ onClose }) => {
//   const scrollRef = useRef(null);

//   // safer redux access
//   const modalData = useSelector((state) => state.global.modal?.data) || {};
//   const { links = [], deviceType } = modalData;

//   // find correct store link
//   const matchedLink = links.find((item) => item?.deviceType === deviceType);
//   const appStoreLink = matchedLink?.link || "";

//   // build referral link
//   const referralLink = appStoreLink
//     ? "https://famocare.com?redirect=" + encodeURIComponent(appStoreLink)
//     : "https://famocare.com";

//   // generate share urls
//   const getShareUrl = (label) => {
//     const encoded = encodeURIComponent(referralLink);
//     const text = encodeURIComponent("Join Famocare using my referral link!");

//     switch (label) {
//       case "Facebook":
//         return "https://www.facebook.com/sharer/sharer.php?u=" + encoded;

//       case "Twitter":
//         return "https://twitter.com/intent/tweet?url=" + encoded + "&text=" + text;

//       case "WhatsApp":
//         return "https://wa.me/?text=" + encodeURIComponent("Join Famocare: " + referralLink);

//       case "Telegram":
//         return "https://t.me/share/url?url=" + encoded + "&text=" + text;

//       case "Reddit":
//         return "https://www.reddit.com/submit?url=" + encoded + "&title=Join+Famocare";

//       case "Tumblr":
//         return "https://www.tumblr.com/share/link?url=" + encoded;

//       case "Blogger":
//         return "https://www.blogger.com/blog-this.g?u=" + encoded;

//       case "Instagram":
//         return "https://www.instagram.com/";

//       default:
//         return referralLink;
//     }
//   };

//   const handleScrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: 200,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <BaseModal
//       onClose={onClose}
//       containerClassName="w-full max-w-[341px] md:max-w-[728px] min-h-fit"
//     >
//       <div className="p-5 md:px-[30px] md:pt-[28px] md:pb-[50px]">
//         <p className="text-lg md:text-[36px] font-semibold mb-[22px]">
//           Share Referral Link
//         </p>

//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex gap-5 justify-between md:justify-center md:gap-x-6 flex-wrap md:flex-nowrap md:overflow-x-auto no-scrollbar my-5 md:mt-[22px] md:mb-[47px]"
//           >
//             {shareLinks?.map((link) => (
//               <a
//                 key={link.label}
//                 href={getShareUrl(link.label)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={link.label}
//                 className="flex flex-col items-center gap-y-[6px] md:gap-y-3 text-center"
//               >
//                 {link.icon}

//                 <span className="text-[10px] md:text-[20px] font-medium">
//                   {link.label}
//                 </span>
//               </a>
//             ))}

//             {/* scroll button */}
//             <div className="absolute -right-4 top-5 hidden md:block">
//               <NextIcon onClick={handleScrollRight} />
//             </div>
//           </div>

//           {/* copy referral link */}
//           <CopyField value={referralLink} />
//         </div>
//       </div>
//     </BaseModal>
//   );
// };



//remove below


// import React, { useRef } from "react";
// import { BaseModal } from "./base-modal";
// import { CopyField } from "../copy-link-field";
// import { shareLinks } from "../../../utils/static";
// import { NextIcon } from "../../../assets/svgs/components/next-icon";
// import { useSelector } from "react-redux";

// export const ShareModal = ({ onClose }) => {
//   const scrollRef = useRef(null);

//   // Get modal data from Redux
//   const modalData = useSelector((state) => state.global.modal?.data) || {};
//   const { links = [], deviceType } = modalData;

//   // ORIGINAL APP STORE AND PLAY STORE LINKS
//   // Apple App Store link (provided)
//   const appleStoreLink = "https://apps.apple.com/us/app/famocare-family-organizer-ai/id6752908773";
  
//   // Google Play Store link (provided)
//   const googlePlayLink = "https://play.google.com/store/apps/details?id=com.appistan.famocare&pcampaignid=web_share";
  
//   // Find the correct store link based on device type from the links array
//   const matchedLink = links.find((item) => item?.deviceType === deviceType);
  
//   // Determine which link to show in the input field based on device type
//   let referralLink = "";
  
//   if (deviceType === "ios") {
//     // For iOS devices, show the App Store link
//     referralLink = appleStoreLink;
//     console.log("iOS device - showing App Store link:", appleStoreLink);
//   } else if (deviceType === "android") {
//     // For Android devices, show the Google Play link
//     referralLink = googlePlayLink;
//     console.log("Android device - showing Google Play link:", googlePlayLink);
//   } else {
//     // For unknown device type, use matched link or default to App Store
//     referralLink = matchedLink?.link || appleStoreLink;
//     console.log("Unknown device - showing default link:", referralLink);
//   }

//   // generate share urls for social media
//   const getShareUrl = (label) => {
//     const encoded = encodeURIComponent(referralLink);
//     const text = encodeURIComponent("Join Famocare using my referral link!");

//     switch (label) {
//       case "Facebook":
//         return `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;

//       case "Twitter":
//         return `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`;

//       case "WhatsApp":
//         return `https://wa.me/?text=${encodeURIComponent("Join Famocare: " + referralLink)}`;

//       case "Telegram":
//         return `https://t.me/share/url?url=${encoded}&text=${text}`;

//       case "Reddit":
//         return `https://www.reddit.com/submit?url=${encoded}&title=Join+Famocare`;

//       case "Tumblr":
//         return `https://www.tumblr.com/share/link?url=${encoded}`;

//       case "Blogger":
//         return `https://www.blogger.com/blog-this.g?u=${encoded}`;

//       case "Instagram":
//         return "https://www.instagram.com/";

//       default:
//         return referralLink;
//     }
//   };

//   const handleScrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: 200,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <BaseModal
//       onClose={onClose}
//       containerClassName="w-full max-w-[341px] md:max-w-[728px] min-h-fit"
//     >
//       <div className="p-5 md:px-[30px] md:pt-[28px] md:pb-[50px]">
//         <p className="text-lg md:text-[36px] font-semibold mb-[22px]">
//           Share Referral Link
//         </p>

//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex gap-5 justify-between md:justify-center md:gap-x-6 flex-wrap md:flex-nowrap md:overflow-x-auto no-scrollbar my-5 md:mt-[22px] md:mb-[47px]"
//           >
//             {shareLinks?.map((link) => (
//               <a
//                 key={link.label}
//                 href={getShareUrl(link.label)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={link.label}
//                 className="flex flex-col items-center gap-y-[6px] md:gap-y-3 text-center hover:opacity-80 transition-opacity"
//               >
//                 {link.icon}

//                 <span className="text-[10px] md:text-[20px] font-medium">
//                   {link.label}
//                 </span>
//               </a>
//             ))}

//             {/* scroll button */}
//             <div className="absolute -right-4 top-5 hidden md:block">
//               <NextIcon onClick={handleScrollRight} />
//             </div>
//           </div>

//           {/* copy referral link - shows device-specific store link */}
//           <CopyField value={referralLink} />
          
//           {/* Store buttons section */}
//           <div className="mt-6 text-sm text-gray-600 text-center">
//             <p className="mb-3 font-medium">Download from official stores:</p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <a 
//                 href={appleStoreLink} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className={`inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
//                   deviceType === "ios" 
//                     ? "bg-black text-white ring-2 ring-offset-2 ring-black" 
//                     : "bg-gray-800 text-white hover:bg-gray-900"
//                 }`}
//               >
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.49.87 3.27.87.78 0 2.25-1.07 3.79-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
//                 </svg>
//                 App Store
//                 {deviceType === "ios" && <span className="ml-2 text-xs text-black px-2 py-0.5 rounded"></span>}
//               </a>
//               <a 
//                 href={googlePlayLink} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className={`inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
//                   deviceType === "android" 
//                     ? "bg-green-600 text-white ring-2 ring-offset-2 ring-green-600" 
//                     : "bg-green-700 text-white hover:bg-green-800"
//                 }`}
//               >
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M3.61 1.73L12.84 12 3.61 22.27c-.34-.16-.61-.5-.61-.96V2.69c0-.46.27-.8.61-.96M16.86 9.44l3.35 2.03c.48.28.79.8.79 1.38 0 .58-.31 1.1-.79 1.38l-3.35 2.03-4.63-4.64v-.71l4.63-4.47M13.1 12.1L9.15 16.2 16.86 21l-4.63-4.64.87-.87 3.35 2.03L13.1 12.1M4.22 2.69L13.1 11.6l-.87.87-8.01-7.96v-.91c0-.34.08-.61.22-.79"/>
//                 </svg>
//                 Google Play
//                 {deviceType === "android" && <span className="ml-2 text-xs text-green-600 px-2 py-0.5 rounded"></span>}
//               </a>
//             </div>
            
//             {/* Platform indicator */}
//             <p className="mt-4 text-sm text-gray-600">
//               {deviceType === "ios" && ""}
//               {deviceType === "android" && ""}
//               {(!deviceType || (deviceType !== "ios" && deviceType !== "android")) && "Select your platform above"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </BaseModal>
//   );
// };


import React, { useRef } from "react";
import { BaseModal } from "./base-modal";
import { CopyField } from "../copy-link-field";
import { shareLinks } from "../../../utils/static";
import { NextIcon } from "../../../assets/svgs/components/next-icon";
import { useSelector } from "react-redux";
import PlayStore from "../../../assets/pngs/PlayStore.png";

export const ShareModal = ({ onClose }) => {
  const scrollRef = useRef(null);

  const modalData = useSelector((state) => state.global.modal?.data) || {};
  const { links = [], deviceType } = modalData;

  const appleStoreLink = "https://apps.apple.com/us/app/famocare-family-organizer-ai/id6752908773";
  const googlePlayLink = "https://play.google.com/store/apps/details?id=com.appistan.famocare&pcampaignid=web_share";

  const matchedLink = links.find((item) => item?.deviceType === deviceType);

  let referralLink = "";
  if (deviceType === "ios") {
    referralLink = appleStoreLink;
  } else if (deviceType === "android") {
    referralLink = googlePlayLink;
  } else {
    referralLink = matchedLink?.link || appleStoreLink;
  }

  const getShareUrl = (label) => {
    const encoded = encodeURIComponent(referralLink);
    const text = encodeURIComponent("Join Famocare using my referral link!");

    switch (label) {
      case "Facebook":
        return "https://www.facebook.com/sharer/sharer.php?u=" + encoded;
      case "Twitter":
        return "https://twitter.com/intent/tweet?url=" + encoded + "&text=" + text;
      case "WhatsApp":
        return "https://wa.me/?text=" + encodeURIComponent("Join Famocare: " + referralLink);
      case "Telegram":
        return "https://t.me/share/url?url=" + encoded + "&text=" + text;
      case "Reddit":
        return "https://www.reddit.com/submit?url=" + encoded + "&title=Join+Famocare";
      case "Tumblr":
        return "https://www.tumblr.com/share/link?url=" + encoded;
      case "Blogger":
        return "https://www.blogger.com/blog-this.g?u=" + encoded;
      case "Instagram":
        return "https://www.instagram.com/";
      default:
        return referralLink;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const appleClassName = "inline-flex items-center justify-center w-[160px] h-[48px] px-6 py-3 rounded-lg transition-colors " + (deviceType === "ios" ? "bg-black text-white ring-2 ring-offset-2 ring-black" : "bg-gray-800 text-white hover:bg-gray-900");
  const googleClassName = "inline-flex items-center justify-center w-[160px] h-[48px] px-6 py-3 rounded-lg transition-colors " + (deviceType === "android" ? "bg-green-600 text-white ring-2 ring-offset-2 ring-green-600" : "bg-green-700 text-white hover:bg-green-800");

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[728px] min-h-fit"
    >
      <div className="p-5 md:px-[30px] md:pt-[28px] md:pb-[50px]">
        <p className="text-lg md:text-[36px] font-semibold mb-[22px]">
          Share Referral Link
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 justify-between md:justify-center md:gap-x-6 flex-wrap md:flex-nowrap md:overflow-x-auto no-scrollbar my-5 md:mt-[22px] md:mb-[47px]"
          >
            {shareLinks?.map((link) => (
              <a
                key={link.label}
                href={getShareUrl(link.label)}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="flex flex-col items-center gap-y-[6px] md:gap-y-3 text-center hover:opacity-80 transition-opacity"
              >
                {link.icon}
                <span className="text-[10px] md:text-[20px] font-medium">
                  {link.label}
                </span>
              </a>
            ))}

            <div className="absolute -right-4 top-5 hidden md:block">
              <NextIcon onClick={handleScrollRight} />
            </div>
          </div>

          <CopyField value={referralLink} />

          <div className="mt-6 text-sm text-gray-600 text-center">
            <p className="mb-3 font-medium">Download from official stores:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center whitespace-nowrap">
              <a
                href={appleStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className={appleClassName}
              >
                <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.49.87 3.27.87.78 0 2.25-1.07 3.79-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href={googlePlayLink}
                target="_blank"
                rel="noopener noreferrer"
                className={googleClassName}
              >
                <img src={PlayStore} alt="Play Store" width="17" height="15" style={{ marginLeft: "10px" }}
/>
                Google Play
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              {(!deviceType || (deviceType !== "ios" && deviceType !== "android")) && "Select your platform above"}
            </p>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};



//

