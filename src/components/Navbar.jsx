import React from 'react';

const Navbar = () => {
  return (
     <div className="h-16 flex items-center justify-end thin-bottom-divider bg-inherit z-50 box-border sticky top-0 ">
        {/* items container */}
        <div className='h-fit container mx-auto items-center justify-end box-border flex thin-bottom-divider`'>
           <nav className='thin-box-divider'>
             <span className='text-sm font-semibold capitalize mr-52 '>docs</span>

           </nav>
        </div>
     </div>
  );
}

export default Navbar;
