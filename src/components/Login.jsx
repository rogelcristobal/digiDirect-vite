import React, { useState, useEffect } from "react";
import {
  BiGridSmall,
  BiListUl,
  BiNote,
  BiBookOpen,
  BiLeftArrowAlt,
  BiCategory,
} from "react-icons/bi";
import { Routes, Route, useNavigate } from "react-router-dom";
import Content from "./Content";
import DocsContext from "../context/DocsContext";
import Searchbar from "./Searchbar";
import Item from "./Item";
import ItemContainer from "./ItemContainer";
const Login = () => {
  const navigate = useNavigate();
  const { state } = React.useContext(DocsContext);
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="font-inter thin-box-divider bg-[#131415] text-gray-100  h-screen relative flex items-start justify-start ">
            {/* sidebar */}
            <div className=" h-screen w-[16rem] flex-shrink-0  bg-[#1a1b1d] flex">
             
              <div className="pt-12 h-full  w-full px-3">
                <div className="text-[0.75rem] font-medium bg-[#1e1f21]  px-[1rem] py-2 rounded-md flex items-center justify-start gap-2 cursor-pointer"> 
                 {/* <BiNote className="text-lg"/> */}
                 <div className="rounded-full h-2 w-2 bg-blue-500"></div>
                <span>My Notes</span>
                </div>
              </div>
            </div>
            <div className=" w-full px-8  pt-16 h-full">
              {/* content here */}
              <div className="w-full  max-w-7xl h-full  ">
                <div
                  onClick={() => navigate("/")}
                  className="text-[1.3rem] text-[rgb(255,255,255)] font-medium w-fit cursor-pointer relative"
                >
                  My Notes
                </div>
                <div className="mt-4 flex items-center just-center gap-3">
                  <Searchbar></Searchbar>
                  <div className="text-2xl h-10 px-2.5 cursor-pointer  hover:bg-[#1b1c1d] text-[#7c8494]/50 hover:text-neutral-200 rounded-lg flex items-center justify-center ">
                    <BiGridSmall />
                  </div>
                  <div className="text-xl h-10 px-2.5 cursor-pointer  hover:bg-[#1b1c1d] text-[#7c8494]/50 hover:text-neutral-200 rounded-lg flex items-center justify-center ">
                    <BiListUl />
                  </div>
                </div>
                {/* content */}
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ItemContainer state={state}/>
                    }
                  ></Route>
                  <Route path="/digiDirect" element={<Content />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
};
// text-[#7c8494]

export default Login;

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
