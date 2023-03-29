import React, { useState, useEffect } from "react";
import {
  BiGridSmall,
  BiListUl,
  BiBookOpen,
  BiLeftArrowAlt,
  BiCategory,
} from "react-icons/bi";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Content from "./Content";
import DocsContext from "../context/DocsContext";
import Searchbar from "./Searchbar";
import Item from "./Item";
const Login = () => {
  const navigate = useNavigate();
  const { state } = React.useContext(DocsContext);
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="font-plus bg-[#ffffff] text-gray-900 racking-tight h-screen flex items-start justify-start">
            {/* <div className=" h-screen w-[25rem] thin-right-divider"></div> */}
            <div className="pt-20  container mx-auto h-full">
              {/* content here */}
              <div className="w-full mx-auto max-w-6xl">
                <div
                  onClick={() => navigate("/")}
                  className="text-[1.7rem] font-semibold cursor-pointer relative"
                >
                  My Notes
                </div>

                <div className="mt-12 flex items-center just-center gap-3">
                  <Searchbar></Searchbar>
                  <div className="text-2xl h-10 px-2.5 cursor-pointer  hover:bg-[#fbfbfb] rounded-lg flex items-center justify-center ">
                    <BiGridSmall />
                  </div>
                  <div className="text-xl h-10 px-2.5 cursor-pointer  hover:bg-[#fbfbfb] rounded-lg flex items-center justify-center ">
                    <BiListUl />
                  </div>
                </div>
                {/* content */}
                <Routes>
                  <Route
                    path="/"
                    element={
                      // <div className="flex-shrink-0 h-[29rem] mt-6 grid grid-flow-col w-fit gap-5 grid-cols-4">

                      //     <div
                      //     onClick={()=>navigate('/newstel')}
                      //       className={`flex flex-col items-start justify-around px-5 w-56 pb-5 h-40 rounded-xl cursor-pointer medium-box-divider  `}
                      //     >
                      //       <div className=" w-full h-full flex items-center justify-start">
                      //         <BiBookOpen className="text-[1.5rem]" />
                      //       </div>
                      //       <div className="  w-full h-full">
                      //         <p className=" font-semibold">Newstel</p>
                      //         <p className="mt-2 text-[#7c8494] text-xs">
                      //           High-quality contact center based in Hamburg,
                      //           Germany.
                      //         </p>
                      //       </div>
                      //     </div>

                      //     <div
                      //       onClick={()=>navigate('/digiDirect')}
                      //       className={`flex  flex-col items-start justify-around px-5 w-56 pb-5 h-40 rounded-xl cursor-pointer medium-box-divider`}
                      //     >
                      //       <div className=" w-full h-full flex items-center justify-start">
                      //         <BiBookOpen className="text-[1.5rem] " />
                      //       </div>
                      //       <div className="  w-full h-full">
                      //         <p className=" font-semibold">DigiDirect</p>
                      //         <p className="mt-2 text-[#7c8494] text-xs">
                      //           digiDirect Templates and tools for product
                      //           listings.
                      //         </p>
                      //       </div>
                      //     </div>

                      // </div>
                      <div className="flex flex-col font-plus h-screen overflow-y-scroll w-[28rem] mt-6 items-start justify-start  pt-2 space-y-3.5 ">
                        {state.sections.map((item, id) => (
                          <Item item={item}></Item>
                        ))}
                      </div>
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
