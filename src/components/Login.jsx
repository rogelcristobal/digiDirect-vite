import React, { useState, useEffect } from "react";
import { BiSearch,BiGridSmall,BiListUl } from "react-icons/bi";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase/firebase";
import { TbBox } from "react-icons/tb";
import { motion } from "framer-motion";
const Login = () => {
  // const navigate = useNavigate();
  // const [focusState, setFocusState] = React.useState({
  //   email: false,
  //   password: false,
  // });
  // const [loginInput, setLoginInput] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleEmailChange = (e) => {
  //   setLoginInput((prev) => {
  //     return { ...prev, email: e.target.value };
  //   });
  // };
  // const handlePasswordChange = (e) => {
  //   setLoginInput((prev) => {
  //     return { ...prev, password: e.target.value };
  //   });
  // };
  // const [isChecked, setIsChecked] = useState(false);
  // const handleToggleCheckbox = () => {
  //   setIsChecked((prev) => (prev = !isChecked));
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginInput.email,
  //       loginInput.password
  //     );
  //     console.log(user);
  //     if (user) {
  //       navigate("product-listing/documentation");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleGoogleLogin = async (e) => {
  //   try {
  //     const user = signInWithPopup(auth, googleProvider);
  //     console.log(user);
  //     if (user) {
  //       navigate("product-listing/documentation");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleSignout = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleFocus = (e) => {
  //   if (e.target.type === "email" ) {
  //     setFocusState((prev) => ({
  //       ...prev,
  //       email: true,
  //     }));
  //     console.log(e.target.value)
  //   } else if (e.target.type === "password") {
  //     setFocusState((prev) => ({
  //       ...prev,
  //       password: true,
  //     }));
  //   }
  // };
  // const handleBlur = (e) => {
  //   if (e.target.type === "email" ) {
  //     setFocusState((prev) => ({
  //       ...prev,
  //       email: false,
  //     }));
  //   } else if (e.target.type === "password") {
  //     setFocusState((prev) => ({
  //       ...prev,
  //       password: false,
  //     }));
  //   }
  // };
  // const placeholderVariants = {
  //   initial: {
  //     color: "rgb(148, 163, 184)",
  //     translateY: "0.6rem",
  //     fontSize: "0.875rem",
  //     backgroundColor:'transparent',
  //     transition: {
  //       duration: 0.25,
  //     },
  //   },
  //   animate: {
  //     color: "rgb(53, 107, 229)",
  //     translateY: "-0.6rem",
  //     fontSize: "0.775rem",
  //     backgroundColor:'white',
  //     transition: {
  //       duration: 0.25,
  //     },
  //   },
  // };

  return (
    <div className="font-inter bg-[#ffffff] text-gray-900 racking-tight h-screen">
      <div className="container box-border mx-auto h-full">
        <div className="pt-24 max-w-6xl mx-auto h-full">
          {/* content here */}
          <div className="w-full">
            <p className="text-3xl font-semibold">Lorem, ipsum.</p>
            <p className="prose text-[#7c8494] mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="mt-6 flex items-center just-center gap-3">
              <div className="text-lg h-10 w-10 cursor-pointer hover:bg-[#f5f5f5] w-fit rounded-full flex items-center justify-center ">
                <BiSearch />
              </div>
               <div className="text-2xl h-10 w-10 cursor-pointer  w-fit hover:bg-[#f5f5f5] rounded-full flex items-center justify-center ">
                <BiGridSmall />
              </div>
               <div className="text-xl h-10 w-10 cursor-pointer  w-fit hover:bg-[#f5f5f5] rounded-full flex items-center justify-center ">
                <BiListUl />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
