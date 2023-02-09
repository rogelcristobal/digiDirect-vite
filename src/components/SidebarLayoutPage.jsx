import React from "react";

const SidebarLayoutPage = () => {
  return (
    <>
      {/* sidebar */}
      <div className="h-[calc(100vh-5.5rem)] sticky top-24  w-80 medium-box-divider ">
        {/* content */}
        <h1 className="text-slate-900 tracking-tight text-right py-8 font-semibold capitalize">getting started</h1>
      </div>
      {/* body */}
      <div className="h-full medium-box-divider w-full p-8">
        {/* heading container */}
        <div className="thin-box-divider w-full h-fit block">
            <p className="text-[14px] leaing-[24px] font-semibold text-blue-500">Lorem, ipsum.</p>
            <h1 class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 font-plus">Lorem, ipsum.</h1>
        </div>
        {/* content */}
      </div>
    </>
  );
};

export default SidebarLayoutPage;
