import SidebarLayoutPage from "./components/SidebarLayoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 
function App() {
  return (
    <div className="h-auto bg-[#ffffff] text-slate-900 box-border space-y-2 font-inter">
      {/* [#0a1120] */}
      {/* navbar */}
        <Navbar></Navbar>
      {/* body */}
      <div className=" md:px-4 lg:px-14 py-4 min-h-[150vh] h-auto  flex  gap-2 items-start justify-center mx-auto box-border">
       <SidebarLayoutPage></SidebarLayoutPage>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
