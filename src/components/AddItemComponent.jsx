import React from 'react';
import {TbPlus} from 'react-icons/tb'
const AddItemComponent = () => {
  return (
   <div
    className={` cursor-pointer  rounded-xl mb-3 w-[21.7rem] text-[#7c7c7c]/40 hover:text-[#dadada]/70 bg-[#101213] hover:bg-[#1a1c1e] h-fit py-6 flex-shrink-0 flex flex-col items-center justify-center gap-3`}
    >
        <TbPlus  className='text-2xl '/>
        Add new item
       
    </div>
  );
}

export default AddItemComponent;
