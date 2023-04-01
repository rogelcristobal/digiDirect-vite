import React from "react";
import { Routes, Route } from "react-router-dom";
import { BiFolder, BiNote, BiChevronRight, BiCog } from "react-icons/bi";
import Searchbar from "./Searchbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { key } from "localforage";

const Login = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {}, [ref]);

  const userCollectionRef = collection(db, "notes");
 
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  if(users){console.log(users[0]?.categories[0].data)}


  

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="font-plus tracking-tight bg-[#ffffff] text-[#122132]/90  h-screen relative flex  items-start justify-start ">
            
            {/* sidebar */}
            <div className="h-screen bg-gray-50 w-fit flex-shrink-0  dark:bg-[#1a1b1d] flex items-start justify-start">
              {/* category */}
              <div className="flex-shrink-0 h-full w-[4.5rem] flex flex-col items-center justify-start py-8 thin-right-divider">
                <div className="flex flex-col items-start justify-start h-full">
                  <div className="h-11 w-[3rem] text-gray-100 rounded-lg bg-blue-500 p-1.5 flex flex-col items-end justify-end">
                    <span className="text-sm font-medium">Ne</span>
                  </div>
                </div>
                <div>
                  <BiCog className="text-2xl text-[#a8a7a7]" />
                </div>
              </div>
              {/* links */}
              <div className="h-full w-[20rem] flex-shrink-0">
                <div className=" mt-28 min-h-[4rem] px-6  w-full">
                  <div className="px-0 text-[0.875rem] mb-6 font-semibold flex items-center justify-start gap-3">
                    <BiFolder className="text-xl" />
                    <span>Collections</span>
                  </div>
                  {/* items */}
                  {users[0]?.categories.map((item,id) => (
                    <div key={id} className=" cursor-pointer  bg-[#f4f4f4] py-3 rounded-lg px-4 text-[0.85rem] my-2 flex items-center justify-start gap-3 font-semibold">
                      <div className="flex items-center justify-start gap-3 w-full">
                        <BiNote className="text-lg " />
                        <span>{item.category}</span>
                      </div>
                      <BiChevronRight className="text-xl" />
                    </div>
                  ))}
                  {/* <p>

                    {sample.split('\n').map((item,id)=>(
                      <React.Fragment key={id}>
                        {item}
                        <br />
                      </React.Fragment>
                      ))}
                      </p> */}
                </div>
              </div>
            </div>

            {/* content */}
            <div className="w-fit h-full ">
              <div className="flex items-start pt-20 justify-start px-10 w-full flex-col">
                <span className="text-[1.6rem] font-semibold">My Notes</span>
                <div className="mt-8">
                  <Searchbar />
                </div>
                <div className=" mt-2 rounded-lg py-3 h-[75vh] w-full flex flex-col items-center justify-start overflow-y-scroll pr-4">
                  {users[0]?.categories[0].data.map((item, id) => (
                    <div
                      key={id}
                      className="h-fit px-4 py-5 bg-[#f6f6f6]/70 w-96 rounded-lg  cursor-pointer my-1.5"
                    >
                      <p className="font-semibold capitalize mb-5 text-[0.9rem]  text-[#122132]/90">
                        {item.title}
                      </p>
                      {/* <p className="text-[0.9rem] font-medium overflow-hidden truncate font-libreationRegular tracking-tight text-[#122132]/40">{item.detail.split(/<br\s*\/?>/).map((item,id)=>(
                        <React.Fragment key={id}>
                        {item}
                        <br />
                      </React.Fragment>
                      ))}</p> */}
                    </div>
                  ))}
                 
                </div>
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
