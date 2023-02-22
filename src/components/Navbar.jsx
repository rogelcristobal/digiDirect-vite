import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <div className="h-14 flex items-center justify-end thin-bottom-divider bg-inherit z-30 box-border sticky top-0 ">
        {/* items container */}
        <div className='h-fit container mx-auto items-center justify-end box-border flex `'>
           <nav className=''>
             <span className='text-sm font-semibold capitalize mr-52 '><Link to="documentation">Guides</Link></span>

           </nav>
        </div>
     </div>
  );
}

export default Navbar;
