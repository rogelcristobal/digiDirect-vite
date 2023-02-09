import SidebarLayoutPage from "./components/SidebarLayoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full h-auto  block box-border space-y-2 font-inter">
      {/* [#0a1120] */}
      {/* navbar */}
        <Navbar></Navbar>
      {/* body */}
      <div className="thin-box-divider container px-12 py-6 min-h-screen h-[200rem] flex  gap-2 items-start justify-center mx-auto box-border">
       <SidebarLayoutPage></SidebarLayoutPage>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
