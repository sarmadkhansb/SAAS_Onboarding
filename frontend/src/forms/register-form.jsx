import React, { useState } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import Link from "next/link";
import axios from "axios";

const schema = yup
  .object({
    full_name: yup.string().required().label("Full Name"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
    workspace_url: yup.string().required().label("Workspace URL"),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/api/signup/", data);
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <style>
  {`
    .workspace-url-input {
      display: flex;
      align-items: center;
    }
    
    .workspace-url-prefix {
      margin-right: 5px;
    }
    
    .workspace-url-prefix,
    .workspace-url-suffix {
      font-weight: bold;
      color: #555; /* Adjust color as needed */
    }
    
    .read-only {
      font-weight: bold;
      color: #555; /* Adjust color as needed */
    }
  `}
</style>


      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
                name="full_name"
                {...register("full_name")}
                className="inputText" 
              />

              <span className="floating-label">Full Name</span>
              <p className="form_error">{errors.full_name?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30"> 
              <input
                name="email"
                className="inputText"
                {...register("email")}
              />
              <span className="floating-label">Your Email</span>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-30">
              <div className="postbox__comment-input"> 
                <input
                  id="myInput"
                  className="inputText password"
                  type={passwordType}
                  name="password"
                  {...register("password")}
                />
                <span className="floating-label">Password</span>
                <span id="click" className="eye-btn" onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <span className="eye-off">
                      <EyeOff />
                    </span>
                  ) : (
                    <span className="eye-off">
                      <EyeOn />
                    </span>
                  )}
                </span>
              </div>
              <p className="form_error">{errors.password?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-30">
              <div className="workspace-url-input postbox__comment-input"> 
                <span className="workspace-url-prefix read-only text-primary">https://</span>
                <input
                  className="inputText"
                  name="workspace_url"
                  {...register("workspace_url")}
                  defaultValue=""
                />
                <span className="read-only text-primary">.spp.io</span>
              </div>
              <p className="form_error">{errors.workspace_url?.message}</p>
            </div>
          </div>

        </div>

        <div className="signin-banner-form-remember">
          <div className="row">
            <div className="col-12">
              <div className="postbox__comment-agree">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("terms", { required: true })}
                  />
                  <label
                    className="form-check-label"
                  >
                    I agree to Terms of Service and Privacy Policy
                  </label>
                  <p className="form_error">{errors.terms?.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signin-banner-from-btn mb-20 text-center">
          <button type="submit" className="signin-btn ">Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;




// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup"; 
// import Link from "next/link";


// const schema = yup
//   .object({
//     fullname: yup.string().required().label("FullName"),
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),

//   })
//   .required();


// const RegisterForm = () => {

//   const {
//     register,
//     handleSubmit, reset,
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
//               name="fullname"
//               {...register("fullname")}
//               className="inputText" 
//               />
//               <span className="floating-label">Full Name</span>
//               <p className="form_error">{errors.fullname?.message}</p>
//             </div>
//           </div>
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
//           <div className="col-12">
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
//           </div> 
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
//           <button type="submit" className="signin-btn ">Register</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default RegisterForm;
