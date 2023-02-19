import Documentation from "./components/Documentation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import { useLocation, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
function App() {
  const location = useLocation()
    useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/product-listing/*"
        element={
          <div className="h-auto bg-[#ffffff]  text-[rgba(60, 60, 67, .92)] box-border  font-inter">
            {/* navbar */}
            <Navbar></Navbar>
            <div className=" md:px-4 lg:px-0  min-h-[150vh] h-auto pt-0  flex  items-start justify-center  box-border">
              <div className="relative w-full px-8 mx-auto flex items-start   justify-start gap-2   box-border">
                {/* sidebar */}
                <Sidebar />
                {/* content */}
                <Routes>
                  <Route
                    path="documentation"
                    element={<Documentation />}
                  ></Route>
                  <Route
                    path="listing-helper"
                    element={<div> listing helper</div>}
                  ></Route>
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </div>
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
