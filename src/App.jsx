import SidebarLayoutPage from "./components/SidebarLayoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 
function App() {
  return (
    <div className="h-auto bg-[#ffffff]  text-slate-900 box-border  font-inter">
      {/* [#0a1120] */}
      {/* navbar */}
        <Navbar></Navbar>
      {/* body */}
      <div className=" md:px-4 lg:px-0  min-h-[150vh] h-auto pt-0  flex  items-start justify-center  box-border">
       <SidebarLayoutPage></SidebarLayoutPage>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
