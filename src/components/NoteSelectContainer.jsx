import React from "react";
import Scrollbar from "smooth-scrollbar";

const NoteSelectContainer = ({ children,deps }) => {
  const ref = React.useRef(null);
  const option={
    damping:0.02,
    renderByPizels:true
  }
  React.useEffect(() => {
    if (ref.current && deps) {
      const scrollbar = Scrollbar.init(ref.current,option);
   
    }
  
  }, [ref.current,deps]);
  return (
    <div
      ref={ref}
      className=" py-2 h-screen w-[25rem] flex flex-col items-center justify-start  px-1 "
    >
      {children}
    </div>
  );
};

export default NoteSelectContainer;
