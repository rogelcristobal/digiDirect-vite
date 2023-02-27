import Documentation from "./components/Documentation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import { useLocation, Routes, Route } from "react-router-dom";
import ListingHelperPage from "./components/ListingHelperPage";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Tools from "./components/Tools";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/product-listing/*"
        element={
          <div className="h-auto bg-[#ffffff]  text-slate-900 box-border  font-inter">
            {/* navbar */}
            <Navbar></Navbar>
            <div className="  min-h-[150vh] h-auto  flex  items-start justify-center  box-border">
              <div className="relative w-full px-0 mx-auto flex items-start   justify-start gap-2   box-border">
                {/* sidebar */}
                <Sidebar />
                {/* content */}
                <Routes>
                  <Route
                    path="documentation"
                    element={<Documentation />}
                  ></Route>
                  <Route path="tools" element={<Tools />}></Route>
                  <Route
                    path="listing-helper"
                    element={<ListingHelperPage />}
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
