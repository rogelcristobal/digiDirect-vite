import SidebarLayoutPage from "./components/SidebarLayoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import { Outlet, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/product-listing/*"
        element={
          <div className="h-auto bg-[#ffffff]  text-slate-900 box-border  font-inter">
            {/* [#0a1120] */}
            {/* navbar */}
            <Navbar></Navbar>
            {/* body */}
            <div className=" md:px-4 lg:px-0  min-h-[150vh] h-auto pt-0  flex  items-start justify-center  box-border">
              <SidebarLayoutPage />

              {/* <Outlet /> */}
            </div>
            {/* footer */}
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
