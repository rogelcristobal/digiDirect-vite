import React from 'react';

const Navbar = () => {
  return (
     <div className="h-16 flex items-center justify-end thin-bottom-divider bg-[#ffffff] z-30 box-border sticky top-0 ">
        {/* items container */}
        <div className='h-fit container mx-auto items-center justify-end box-border flex thin-bottom-divider`'>
            <span className='text-sm font-medium capitalize mr-52 '>docs</span>
        </div>
     </div>
  );
}

export default Navbar;
