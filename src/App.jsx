function App() {
  return (
    <div className="w-full h-auto  block box-border space-y-2 font-inter">
      {/* [#0a1120] */}
      {/* navbar */}
      <div className="h-16 medium-box-divider box-border sticky top-0 "></div>
      {/* body */}
      <div className="thin-box-divider container px-12 py-6 min-h-screen h-[200rem] flex  gap-2 items-start justify-center mx-auto box-border">
        {/* sidebar */}
        <div className="h-[calc(100vh-5.5rem)] sticky top-24  w-80 medium-box-divider "></div>
        {/* content */}
        <div className="h-full medium-box-divider w-full"></div>
      </div>
      {/* footer */}
      <div className="h-80 w-full thin-box-divider"></div>
    </div>
  );
}

export default App;
