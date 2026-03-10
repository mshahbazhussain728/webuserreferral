// // // import { countries, Field } from "../../../utils/static";
// // // import { countries, Field } from "../utils/static.jsx";
// // import { countries, Field } from "../../../utils/static";

// // export const SignUpFormFields = (register, loading, control) => {
// //   let formField = [
// //     {
// //       containerClass: "flex justify-center items-center mb-[18px]",
// //       field: {
// //         type: Field.profileUploadField,
// //         className: "!h-[165px] !w-[165px] !rounded-full border border-primary",
// //         id: "imageUrl",
// //         name: "imageUrl",
// //         control,
// //       },
// //     },

// //     {
// //       field: {
// //         type: Field.span,
// //         text: `Upload Profile Image`,
// //         containerClassName:
// //           "text-sm md:text-[22px] text-dark font-medium text-center",
// //         id: "info",
// //       },
// //     },

// //     {
// //       containerClass: "my-[22px]",
// //       field: {
// //         type: Field.input,
// //         id: "name",
// //         name: "name",
// //         inputType: "text",
// //         placeholder: "Enter Your Name",
// //         className: "w-full pl-[18px]",
// //         register,
// //       },
// //     },

// //     {
// //       field: {
// //         className: "pl-4 !border-[#BFBFBF]",
// //         type: Field.select,
// //         id: `country`,
// //         name: `country`,
// //         options:
// //           countries?.map((item) => ({
// //             label: item?.label,
// //             value: item?.value,
// //           })) || [],

// //         control,
// //       },
// //     },

// //     {
// //       containerClass: "mb-0 mt-[50px]",
// //       field: {
// //         type: Field.button,
// //         id: "button",
// //         text: "Set up Profile",
// //         inputType: "submit",
// //         className: "rounded-xl w-full h-[50px] hover:bg-none",
// //         loading,
// //       },
// //     },
// //   ];

// //   return formField;
// // };



// // // // import React from "react";
// // // // import { useForm } from "react-hook-form";
// // // // import { Form } from "../base-component/form/form";
// // // // import { countries, Field } from "../utils/static.jsx";

// // // // // SignUpFormFields function
// // // // export const SignUpFormFields = (register, loading, control) => {
// // // //   let formField = [
// // // //     {
// // // //       containerClass: "flex justify-center items-center mb-[18px]",
// // // //       field: {
// // // //         type: Field.profileUploadField,
// // // //         className: "!h-[165px] !w-[165px] !rounded-full border border-primary",
// // // //         id: "imageUrl",
// // // //         name: "imageUrl",
// // // //         control,
// // // //       },
// // // //     },

// // // //     {
// // // //       field: {
// // // //         type: Field.span,
// // // //         text: `Upload Profile Image`,
// // // //         containerClassName:
// // // //           "text-sm md:text-[22px] text-dark font-medium text-center",
// // // //         id: "info",
// // // //       },
// // // //     },

// // // //     {
// // // //       containerClass: "my-[22px]",
// // // //       field: {
// // // //         type: Field.input,
// // // //         id: "name",
// // // //         name: "name",
// // // //         inputType: "text",
// // // //         placeholder: "Enter Your Name",
// // // //         className: "w-full pl-[18px]",
// // // //         register,
// // // //       },
// // // //     },

// // // //     {
// // // //       field: {
// // // //         className: "pl-4 !border-[#BFBFBF]",
// // // //         type: Field.select,
// // // //         id: `country`,
// // // //         name: `country`,
// // // //         options:
// // // //           countries?.map((item) => ({
// // // //             label: item?.label,
// // // //             value: item?.value,
// // // //           })) || [],

// // // //         control,
// // // //       },
// // // //     },

// // // //     {
// // // //       containerClass: "mb-0 mt-[50px]",
// // // //       field: {
// // // //         type: Field.button,
// // // //         id: "button",
// // // //         text: "Set up Profile",
// // // //         inputType: "submit",
// // // //         className: "rounded-xl w-full h-[50px] hover:bg-none",
// // // //         loading,
// // // //       },
// // // //     },
// // // //   ];

// // // //   return formField;
// // // // };

// // // // // SetUpProfile Component
// // // // const SetUpProfile = () => {
// // // //   const { register, handleSubmit, control, formState: { errors } } = useForm();
// // // //   const [loading, setLoading] = React.useState(false);

// // // //   const onSubmit = async (data) => {
// // // //     setLoading(true);
// // // //     try {
// // // //       console.log("Form data:", data);
// // // //       // Add your API call here
// // // //       // await api.updateProfile(data);
// // // //     } catch (error) {
// // // //       console.error("Error:", error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const formFields = SignUpFormFields(register, loading, control);

// // // //   return (
// // // //     <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-4 py-8">
// // // //       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
// // // //         <h1 className="text-2xl font-bold text-center mb-6 text-[#055860]">
// // // //           Set Up Your Profile
// // // //         </h1>
        
// // // //         <Form
// // // //           formFields={formFields}
// // // //           handleSubmit={handleSubmit}
// // // //           onSubmit={onSubmit}
// // // //           errors={errors}
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SetUpProfile;



// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { Form } from "../base-component/form/form";
// // import { countries, Field } from "../utils/static.jsx";
//  import { countries, Field } from "../../../utils/static";

// // SignUpFormFields function
// export const SignUpFormFields = (register, loading, control) => {
//   let formField = [
//     {
//       containerClass: "flex justify-center items-center mb-[18px]",
//       field: {
//         type: Field.profileUploadField,
//         className: "!h-[165px] !w-[165px] !rounded-full border border-primary",
//         id: "imageUrl",
//         name: "imageUrl",
//         control,
//       },
//     },

//     {
//       field: {
//         type: Field.span,
//         text: `Upload Profile Image`,
//         containerClassName:
//           "text-sm md:text-[22px] text-dark font-medium text-center",
//         id: "info",
//       },
//     },

//     {
//       containerClass: "my-[22px]",
//       field: {
//         type: Field.input,
//         id: "name",
//         name: "name",
//         inputType: "text",
//         placeholder: "Enter Your Name",
//         className: "w-full pl-[18px]",
//         register,
//       },
//     },

//     {
//       field: {
//         className: "pl-4 !border-[#BFBFBF]",
//         type: Field.select,
//         id: `country`,
//         name: `country`,
//         options:
//           countries?.map((item) => ({
//             label: item?.label,
//             value: item?.value,
//           })) || [],
//         control,
//       },
//     },

//     {
//       containerClass: "mb-0 mt-[50px]",
//       field: {
//         type: Field.button,
//         id: "button",
//         text: "Set up Profile",
//         inputType: "submit",
//         className: "rounded-xl w-full h-[50px] hover:bg-none",
//         loading,
//       },
//     },
//   ];

//   return formField;
// };

// // SetUpProfile Component
// const SetUpProfile = () => {
//   const { register, handleSubmit, control, formState: { errors } } = useForm();
//   const [loading, setLoading] = React.useState(false);
//   const navigate = useNavigate(); // Initialize navigate

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       console.log("Form data:", data);
//       // Add your API call here
//       // await api.updateProfile(data);
      
//       // After successful API call, navigate to dashboard
//       // Simulate API call with timeout
//             await new Promise(resolve => setTimeout(resolve, 1000));
//       // Redirect to dashboard
//             //  navigate("/dashboard");
//              navigate("/dashboard?status=ref-guide");
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error here (show error message, etc.)
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formFields = SignUpFormFields(register, loading, control);

//   return (
//     <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-4 py-8">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-2xl font-bold text-center mb-6 text-[#055860]">
//           Set Up Your Profile
//         </h1>
        
//         <Form
//           formFields={formFields}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//           errors={errors}
//         />
//       </div>
//     </div>
//   );
// };

// export default SetUpProfile;


import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form } from "../base-component/form/form";
// Adjust this import path based on your actual file structure
import { countries, Field } from "../utils/static";

// SignUpFormFields function
export const SignUpFormFields = (register, loading, control) => {
  const formField = [
    {
      containerClass: "flex justify-center items-center mb-[18px]",
      field: {
        type: Field.profileUploadField,
        className: "!h-[165px] !w-[165px] !rounded-full border border-primary",
        id: "imageUrl",
        name: "imageUrl",
        control,
      },
    },

    {
      field: {
        type: Field.span,
        text: `Upload Profile Image`,
        containerClassName:
          "text-sm md:text-[22px] text-dark font-medium text-center",
        id: "info",
      },
    },

    {
      containerClass: "my-[22px]",
      field: {
        type: Field.input,
        id: "name",
        name: "name",
        inputType: "text",
        placeholder: "Enter Your Name",
        className: "w-full pl-[18px]",
        register,
        rules: { required: "Name is required" },
      },
    },

    {
      field: {
        className: "pl-4 !border-[#BFBFBF]",
        type: Field.select,
        id: "country",
        name: "country",
        options:
          countries?.map((item) => ({
            label: item?.label,
            value: item?.value,
          })) || [],
        control,
        rules: { required: "Country is required" },
      },
    },

    {
      containerClass: "mb-0 mt-[50px]",
      field: {
        type: Field.button,
        id: "button",
        text: "Set up Profile",
        inputType: "submit",
        className: "rounded-xl w-full h-[50px] hover:bg-none",
        loading,
      },
    },
  ];

  return formField;
};

// SetUpProfile Component
const SetUpProfile = () => {
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors } 
  } = useForm({
    defaultValues: {
      name: "",
      country: "",
      imageUrl: null,
    },
  });
  
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Form data:", data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to dashboard
      navigate("/dashboard?status=ref-guide");
    } catch (error) {
      console.error("Error:", error);
      // Handle error here (show error message, etc.)
    } finally {
      setLoading(false);
    }
  };

  const formFields = SignUpFormFields(register, loading, control);

  return (
    <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#055860]">
          Set Up Your Profile
        </h1>
        
        <Form
          formFields={formFields}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
        
        {/* Display form errors */}
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>
    </div>
  );
};

export default SetUpProfile;


