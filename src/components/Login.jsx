import React, { useState, useEffect } from "react";
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
  const navigate = useNavigate();
  const [focusState, setFocusState] = React.useState({
    email: false,
    password: false,
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const handleEmailChange = (e) => {
    setLoginInput((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const handlePasswordChange = (e) => {
    setLoginInput((prev) => {
      return { ...prev, password: e.target.value };
    });
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleToggleCheckbox = () => {
    setIsChecked((prev) => (prev = !isChecked));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginInput.email,
        loginInput.password
      );
      console.log(user);
      if (user) {
        navigate("product-listing/documentation");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleLogin = async (e) => {
    try {
      const user = signInWithPopup(auth, googleProvider);
      console.log(user);
      if (user) {
        navigate("product-listing/documentation");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFocus = (e) => {
    if (e.target.type === "email" ) {
      setFocusState((prev) => ({
        ...prev,
        email: true,
      }));
      console.log(e.target.value)
    } else if (e.target.type === "password") {
      setFocusState((prev) => ({
        ...prev,
        password: true,
      }));
    }
  };
  const handleBlur = (e) => {
    if (e.target.type === "email" ) {
      setFocusState((prev) => ({
        ...prev,
        email: false,
      }));
    } else if (e.target.type === "password") {
      setFocusState((prev) => ({
        ...prev,
        password: false,
      }));
    }
  };
  const placeholderVariants = {
    initial: {
      color: "rgb(148, 163, 184)",
      translateY: "0.6rem",
      fontSize: "0.875rem",
      backgroundColor:'transparent',
      transition: {
        duration: 0.25,
      },
    },
    animate: {
      color: "rgb(53, 107, 229)",
      translateY: "-0.6rem",
      fontSize: "0.775rem",
      backgroundColor:'white',
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-start box-border">
      <div className="w-[33rem] box-border h-full   bg-white shadow-xl  px-[3rem]">
        <div className="  h-full w-full flex flex-col items-start pt-6 justify-between box-border">
          <div className="box-border font-plus text-[16px] tracking-tight  font-bold">
            <span className=" text-3xl">
              <TbBox />
            </span>
          </div>
          <form
            autoComplete="off"
            onSubmit={(e) => handleLogin(e)}
            className="w-full mb-12  h-fit px-2  py-6 flex flex-col items-center  justify-start box-border "
          >
            <div className="mb-6 flex flex-col items-start justify-center w-full">
              <span className="text-[1.75rem] w-full font-[700] tracking-tight font-plus  text-slate-800 mb-2">
                Sign in.
              </span>
              <p className="text-[14px] font-[500]  prose text-slate-500/90 font-plus">
                New at digiCreate?
                <a className="text-[#2a38d8] cursor-pointer hover:underline underline-offset-2 no-underline ml-1">
                  Sign up here.
                </a>
              </p>
            </div>
            <div className="relative w-full h-fit  mb-4">
              <input
                type="email"
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleEmailChange(e)}
                className="outline-slate-900 border-[1.5px]  w-full border-solid border-slate-300 focus:outline-[#2a38d8] rounded-md h-10 px-3 placeholder:font-plus text-sm placeholder:font-[400] placeholder:text-[0.85rem] "
                autoComplete="off"
              />
              <motion.label
                variants={placeholderVariants}
                animate={focusState.email ? "animate" : "initial"}
                className="absolute text-sm pointer-events-none  font-inter bg-white px-2 py-0 m-0 left-2 font-[500] top-0"
              >
                Email
              </motion.label>
            </div>
            <div className="relative w-full h-fit  mb-4">
              <input
                type="password"
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handlePasswordChange(e)}
                className="outline-slate-900 border-[1.5px]  w-full border-solid border-slate-300 focus:outline-[#2a38d8] rounded-md h-10 px-3 placeholder:font-plus text-sm placeholder:font-[400] placeholder:text-[0.85rem]  "
                autoComplete="off"
              />
              <motion.label
                variants={placeholderVariants}
                animate={focusState.password ? "animate" : "initial"}
                className="absolute text-sm  font-inter bg-white px-2  left-2 font-[500] top-0"
              >
                Password
              </motion.label>
            </div>
            <div className="h-8  w-full mb-6 flex items-center justify-between">
              <a
                href=""
                className="text-xs font-plus text-[#2a38d8] font-[600]"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="h-12 w-full bg-[#2a38d8] hover:bg-[#2a38d8]/90 transition-all duration-300 ease-in-out rounded-md text-white font-plus text-sm text-center"
            >
              Login
            </button>

            {/* login options */}
            <div className="medium-top-divider mt-6 relative h-fit py-6 w-full ">
              <span className="absolute left-1/2 -translate-x-1/2 text-center -top-[0.8rem] text-[0.7rem] font-plus font-semibold py-1 px-3 text-slate-500/60 bg-white ">
                Or , Log in with
              </span>
              <button
                onClick={(e) => handleGoogleLogin(e)}
                type="button"
                className="h-12 w-full border-[1.5px] border-solid border-slate-300 rounded-md font-plus font-[600] text-xs flex items-center justify-center gap-3"
              >
                <div className=" w-fit h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="23"
                    viewBox="0 0 24 24"
                    width="23"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                </div>
                <span>Sign up with google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* image */}
      <div className="bg-slate-100 box-border  w-full h-full"></div>
    </div>
  );
};

export default Login;
