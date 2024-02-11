import React, { useState } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import Link from "next/link";
import axios from "axios";

const LogingForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");

  const handleWorkspaceURLChange = (event) => {
    setWorkspaceURL(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Send a request to the Django backend to check if the workspace URL exists
      const response = await axios.get(`https://yourbackend.com/check-workspace/?url=${workspaceURL}`);
      
      // If the workspace URL exists, redirect to the signin page
      window.location.href = `https://${workspaceURL}.spp.io/login`;
    } catch (error) {
      // If the workspace URL does not exist, display an error message
      setError("Workspace not found.");
    }

    setLoading(false);
  };

  return (
    <>
      <style>
        {`
          .workspace-url-input {
            display: flex;
            align-items: center;
          }

          .workspace-url-prefix,
          .workspace-url-suffix {
            margin-right: 5px;
          }
        `}
      </style>
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <div className="workspace-url-input">
                <span className="workspace-url-prefix text-success">https://</span>
                <input
                  type="text"
                  value={workspaceURL}
                  onChange={handleWorkspaceURLChange}
                  className="inputText"
                  placeholder="Enter your workspace URL"
                />
                <span className="workspace-url-suffix">.spp.io</span>
              </div>
              <p className="form_error">{error}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 pb-3">
            <div className="postbox__forget text-end">
              <Link href="#">Forgot Your URL?</Link>
            </div>
          </div>
        </div>

        <div className="signin-banner-from-btn mb-20 text-center">
          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? "Loading..." : "Continue"}
          </button>
        </div>
        
        <div className="row">
        <div className="col-5 return-home pt-3 text-center">
            <Link href="https://spp.co/">
              <span>&#8592; Return to Home</span>
            </Link>
          </div>
          <div className="col-7 signin-banner-from-register text-center pt-3">
            <Link href="/signup">
              Don't have a workspace? <span>Register</span>
            </Link>
          </div>
          
        </div>

        {/* <div className="signin-banner-from-register text-center">
          <Link href="/signup">
            Don't have a workspace yet? <span>Register</span>
          </Link>
        </div>

        <div className="return-home pt-3">
          <Link href="https://spp.co/">
            <span>&#8592; Return to Home</span>
          </Link>
        </div> */}
      </form>
    </>
  );
};

export default LogingForm;









// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Link from "next/link";

// const schema = yup
//   .object({
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),

//   })
//   .required();

// const LogingForm = () => { 
//   const {
//     register,
//     handleSubmit, 
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data) =>{ 
//     console.log(data)
//     reset()
//   };

//   // password show & hide
//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text");
//     } else {
//       setPasswordType("password");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-12">
//             <div className="postbox__comment-input mb-30"> 
//               <input
//                 name="email"
//                 className="inputText"
//                 {...register("email")}
//               />
//               <span className="floating-label">Your Email</span>
//               <p className="form_error">{errors.email?.message}</p>
//             </div>
//           </div>
//           {/* <div className="col-12">
//             <div className="mb-30">
//             <div className="postbox__comment-input"> 
//               <input
//                 id="myInput"
//                 className="inputText password"
//                 type={passwordType}
//                 name="password"
//                 {...register("password")}
//               />
//               <span className="floating-label">Password</span>
//               <span id="click" className="eye-btn" onClick={togglePassword}>
//                 {passwordType === "password" ? (
//                   <span className="eye-off">
//                     <EyeOff />
//                   </span>
//                 ) : (
//                   <span className="eye-off">
//                     <EyeOn />
//                   </span>
//                 )}
//               </span>
//             </div>
//               <p className="form_error">{errors.password?.message}</p>
//             </div>
//           </div> */}
//         </div>


//         <div className="signin-banner-form-remember">
//           <div className="row">
//             <div className="col-6">
//               <div className="postbox__comment-agree">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="postbox__forget text-end">
//                 <Link href="#">Forgot password ?</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="signin-banner-from-btn mb-20">
//           <button type="submit" className="signin-btn ">
//             Sign In
//           </button>
//         </div>
//         <div className="signin-banner-from-register">
//           <Link href="/sign-in">
//             Don't have account ? <span>Register</span>
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// };

// export default LogingForm;
