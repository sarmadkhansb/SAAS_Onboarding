import LogingForm from '@/src/forms/loging-form';
import AppleIcon from '@/src/svg/apple-icon';
import GoogleIcon from '@/src/svg/google-icon';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// shap import here
import shape_1 from "../../../public/assets/img/login/login-shape-1.png";
import shape_2 from "../../../public/assets/img/login/login-2.png";
import shape_3 from "../../../public/assets/img/login/login-1.png";
import shape_4 from "../../../public/assets/img/login/login-3.png";
import shape_5 from "../../../public/assets/img/login/login-4.png";


const login_content = {
    bg_img: "/assets/img/login/login-bg-shape.png",
    banner_title: <>Welcome To <br /> Your Workspace Portal.</>,
    
}
const {bg_img, banner_title}  = login_content


const SingnInArea = () => {
    return (
        <>
                <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
                        <div className="signin-banner-left-box signin-banner-bg p-relative" 
                        style={{backgroundImage: `url(${bg_img})`}}>
                            <div className="signin-banner-bottom-shape">
                                <Image src={shape_1} alt="theme-pure"/>
                            </div>
                            <div className="signin-banner-left-wrap">
                                <div className="signin-banner-title-box mb-100">
                                    <h4 className="signin-banner-title tp-char-animation">{banner_title}</h4>
                                </div>
                                <div className="signin-banner-img-box position-relative">
                                    <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
                                    <Image src={shape_2} alt="theme-pure"/>
                                    </div>
                                    <div className="signin-banner-img signin-img-2 d-none d-md-block">
                                    <Image src={shape_3} alt="theme-pure"/>
                                    </div>
                                    <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
                                    <Image src={shape_4} alt="theme-pure"/>
                                    </div>
                                    <div className="signin-banner-img signin-img-4 d-none d-sm-block">
                                    <Image src={shape_5} alt="theme-pure"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="signin-banner-from d-flex justify-content-center align-items-center">
                            <div className="signin-banner-from-wrap">
                                <div className="signin-banner-title-box">
                                    <h4 className="signin-banner-from-title text-center">Sign In</h4>
                                </div>
                                {/* <div className="signin-banner-login-browser text-center">
                                    <Link href="#">
                                        <GoogleIcon />
                                    Continue with Google
                                    </Link>
                                    <Link href="#">
                                        <AppleIcon />
                                    </Link>
                                </div> */}
                                <div className="signin-banner-from-box">
                                    <h5 className="signin-banner-from-subtitle">WorkSpace URL</h5>
                                    <LogingForm /> 
                                </div>
                            </div>
                        </div>
                        </div>
                    </main> 
                </div>
            </div>
        </>
    );
};

export default SingnInArea;

// import axios from 'axios';
// import LogingForm from '@/src/forms/loging-form';
// import AppleIcon from '@/src/svg/apple-icon';
// import GoogleIcon from '@/src/svg/google-icon';
// import Link from 'next/link';
// import Image from 'next/image';
// import React from 'react';

// // Shape imports
// import shape_1 from "../../../public/assets/img/login/login-shape-1.png";
// import shape_2 from "../../../public/assets/img/login/login-2.png";
// import shape_3 from "../../../public/assets/img/login/login-1.png";
// import shape_4 from "../../../public/assets/img/login/login-3.png";
// import shape_5 from "../../../public/assets/img/login/login-4.png";

// const login_content = {
//     bg_img: "/assets/img/login/login-bg-shape.png",
//     banner_title: <>Welcome To <br /> Your Workspace Portal.</>,
// };
// const {bg_img, banner_title}  = login_content


// const SignInArea = () => {
//     const [workspaceUrl, setWorkspaceUrl] = React.useState('');
//     const [loading, setLoading] = React.useState(false);
//     const [error, setError] = React.useState('');

//     const handleWorkspaceUrlChange = (event) => {
//         setWorkspaceUrl(event.target.value);
//         setError('');
//     };

//     const handleContinue = async () => {
//         if (workspaceUrl.length < 4) {
//             setError('Enter a workspace URL with at least 4 characters.');
//             return;
//         }

//         // Add loading state
//         setLoading(true);

//         try {
//             // Send a request to the backend to check if the workspace URL exists
//             const response = await axios.post('http://localhost:8000/api/workspace/', {
//                 workspace_url: workspaceUrl,
//             });

//             // Workspace URL exists, redirect to the portal signin page
//             window.location.href = `https://${workspaceUrl}.spp.io/login`;
//         } catch (error) {
//             // Workspace not found or an error occurred, display error
//             setError('Workspace not found.');
//         } finally {
//             // Remove loading state
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <div id="smooth-wrapper">
//                 <div id="smooth-content">
//                     <main>
//                         <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
//                             <div className="signin-banner-left-box signin-banner-bg p-relative" style={{backgroundImage: `url(${bg_img})`}}>
//                                 <div className="signin-banner-bottom-shape">
//                                     <Image src={shape_1} alt="theme-pure"/>
//                                 </div>
//                                 <div className="signin-banner-left-wrap">
//                                     <div className="signin-banner-title-box mb-100">
//                                         <h4 className="signin-banner-title tp-char-animation">{banner_title}</h4>
//                                     </div>
//                                     <div className="signin-banner-img-box position-relative">
//                                         <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
//                                             <Image src={shape_2} alt="theme-pure"/>
//                                         </div>
//                                         <div className="signin-banner-img signin-img-2 d-none d-md-block">
//                                             <Image src={shape_3} alt="theme-pure"/>
//                                         </div>
//                                         <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
//                                             <Image src={shape_4} alt="theme-pure"/>
//                                         </div>
//                                         <div className="signin-banner-img signin-img-4 d-none d-sm-block">
//                                             <Image src={shape_5} alt="theme-pure"/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="signin-banner-from d-flex justify-content-center align-items-center">
//                                 <div className="signin-banner-from-wrap">
//                                     <div className="signin-banner-title-box">
//                                         <h4 className="signin-banner-from-title">Sign In to Softec</h4>
//                                     </div>
//                                     <div className="signin-banner-login-browser">
//                                         {/* <Link href="">
//                                             <GoogleIcon />
//                                             Continue with Google
//                                         </Link>
//                                         <Link href="">
//                                             <AppleIcon />
//                                             Continue with Apple
//                                         </Link> */}
//                                     </div>
//                                     <div className="signin-banner-from-box">
//                                         <h5 className="signin-banner-from-subtitle">Enter your workspace URL:</h5>
//                                         <div className="workspace-url-input">
//                                             <span>https://</span>
//                                             <input
//                                                 type="text"
//                                                 value={workspaceUrl}
//                                                 onChange={handleWorkspaceUrlChange}
//                                                 placeholder="YourWorkspace"
//                                                 readOnly
//                                                 style={{ color: 'green' }}
//                                             />
//                                             <span>.spp.io</span>
//                                         </div>
//                                         {error && <p className="error-message">{error}</p>}
//                                         <button className="continue-button" onClick={handleContinue} disabled={loading}>
//                                             {loading ? 'Loading...' : 'Continue'}
//                                         </button>
//                                         {/* <div className="additional-links">
//                                             <span><Link href="">Forgot your URL?</Link></span>
//                                             <span> | </span>
//                                             <span><Link href="">Don't have a workspace yet?</Link></span>
//                                         </div> */}
//                                         <div className="back-to-home">
//                                             {/* <p>
//                                                 <Link href="https://spp.co/">
//                                                     <a>
//                                                         <span>&lt;</span> Return to Home Page
//                                                     </a>
//                                                 </Link>
//                                             </p> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </main> 
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SignInArea;


