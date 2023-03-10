import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase/firebase";
import {TbBox} from 'react-icons/tb'
const Login = () => {
  const navigate = useNavigate();
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
  useEffect(() => {}, []);
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
            onSubmit={(e) => handleLogin(e)}
            className="w-full mb-20  h-fit px-2  py-6 flex flex-col items-center  justify-start box-border "
          >
            <div className="mb-6 flex flex-col items-start justify-center w-full">
              <span className="text-[1.75rem] w-full font-[700] tracking-tight font-plus  text-slate-800 mb-2">
                Sign in.
              </span>
              <p className="text-[14px] font-[500]  prose text-slate-500/90 font-plus">
                
                New at digiCreate?
                <a className="text-[#356be5] cursor-pointer hover:underline underline-offset-2 no-underline ml-1">
                  Sign up here.
                </a>
              </p>
            </div>
            <input
              type="email"
              onChange={(e) => handleEmailChange(e)}
              className="outline-slate-900 border-[1.5px] mb-4 w-full border-solid border-slate-300 focus:outline-[#356be5] rounded-md h-10 px-3 placeholder:font-plus text-sm placeholder:font-[400] placeholder:text-[0.85rem] "
              placeholder="Email"
              autocomplete="off"
            />
            <input
              type="password"
              onChange={(e) => handlePasswordChange(e)}
              className="outline-slate-900 border-[1.5px] mb-4 w-full border-solid border-slate-300 focus:outline-[#356be5] rounded-md h-10 px-3 placeholder:font-plus text-sm placeholder:font-[400] placeholder:text-[0.85rem]  "
              placeholder="Password"
              autocomplete="off"
            />
            <div className="h-8  w-full mb-6 flex items-center justify-between">
              <a
                href=""
                className="text-xs font-plus text-[#356be5] font-[600]"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="h-12 w-full bg-[#356be5] hover:bg-[#356be5]/90 transition-all duration-300 ease-in-out rounded-md text-white font-plus text-sm text-center"
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
      <div className="bg-slate-100 box-border  w-full h-full">
  
      </div>
    </div>
  );
};

export default Login;
